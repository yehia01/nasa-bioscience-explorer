import React, { useMemo, useRef, useCallback, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';
import type { Publication } from '../types';
import { createGraphData, type GraphNode } from '../services/graphService';

interface KnowledgeGraphProps {
  publications: Publication[];
  onSelectPublication: (publication: Publication) => void;
}

const NODE_COLORS = {
  publication: '#8b5cf6', // purple
  organism: '#10b981', // green
  environmentFactor: '#ef4444', // red
  process: '#f59e0b', // yellow
  gene: '#3b82f6', // blue
};

const GraphLegend: React.FC = () => (
  <div className="absolute top-4 left-4 z-10 p-3 bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs space-y-2">
    <h4 className="font-bold text-sm text-white">Legend</h4>
    {Object.entries(NODE_COLORS).map(([type, color]) => (
      <div key={type} className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
        <span className="capitalize text-gray-300">{type.replace(/([A-Z])/g, ' $1')}</span>
      </div>
    ))}
  </div>
);

const GapFinderInfo: React.FC = () => (
  <div className="absolute bottom-4 right-4 z-10 p-4 max-w-xs bg-gray-800/80 backdrop-blur-sm border border-white/10 rounded-lg text-xs">
    <h4 className="font-bold text-sm text-white mb-2">How to Find Knowledge Gaps</h4>
    <p className="text-gray-400">
      Use this graph to see connections in the research landscape. Concepts with a <strong className="text-purple-300">pulsing highlight</strong> are only linked to one publication in this view, representing potential niche topics or areas for future investigation.
    </p>
  </div>
);

export const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ publications, onSelectPublication }) => {
  const graphData = useMemo(() => createGraphData(publications), [publications]);
  const fgRef = useRef<any>(null);

  // Configure D3 force simulation
  useEffect(() => {
    const fg = fgRef.current;
    if (fg) {
      fg.d3Force('charge', forceManyBody().strength(-150));
      fg.d3Force('center', forceCenter());
      fg.d3Force('collide', forceCollide().radius((node: GraphNode) => (node.type === 'publication' ? 8 : 4) + 2));

      const linkForce = fg.d3Force('link');
      if (linkForce) {
        linkForce.distance(60);
      }
    }
  }, []);

  const handleNodeClick = useCallback((node: GraphNode) => {
    if (node.type === 'publication' && node.publication) {
      onSelectPublication(node.publication);
    } else {
      const fg = fgRef.current as any;
      if (fg && node.x !== undefined && node.y !== undefined) {
        fg.centerAt(node.x, node.y, 1000);
        fg.zoom(2.5, 1000);
      }
    }
  }, [onSelectPublication]);

  const handleNodeCanvasObject = (node: GraphNode, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const baseRadius = node.type === 'publication' ? 8 : 4;

    // Pulsing effect for isolated concept nodes
    if (node.degree === 1 && node.type !== 'publication') {
      const pulseSpeed = 1500;
      const pulseMaxRadius = baseRadius + 7;
      const time = Date.now();
      const cycle = (time % pulseSpeed) / pulseSpeed;
      const pulseFactor = Math.sin(cycle * Math.PI) ** 2;

      const pulseRadius = baseRadius + (pulseMaxRadius - baseRadius) * pulseFactor;
      const pulseAlpha = pulseFactor * 0.4;

      ctx.beginPath();
      ctx.arc(node.x!, node.y!, pulseRadius, 0, 2 * Math.PI, false);

      const color = NODE_COLORS[node.type] || '#ffffff';
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${pulseAlpha})`;
      ctx.fill();
    }

    // Node circle
    ctx.beginPath();
    ctx.arc(node.x!, node.y!, baseRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = NODE_COLORS[node.type] || 'grey';
    ctx.fill();

    if (node.type === 'publication') {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5 / globalScale;
      ctx.stroke();
    }

    // Label
    if (globalScale > 1.5) {
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      const text = node.type === 'publication' && node.name.length > 30
        ? node.name.substring(0, 30) + '...'
        : node.name;
      ctx.fillText(text, node.x!, node.y! + baseRadius + 6);
    }
  };

  if (graphData.nodes.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-semibold text-gray-300">Graph Not Available</h3>
        <p className="text-gray-500 mt-2">Not enough data to display a knowledge graph for the current selection.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] bg-gray-900/50 rounded-xl border border-white/10 overflow-hidden">
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        forceEngine="d3"
        nodeCanvasObject={handleNodeCanvasObject}
        linkDirectionalParticles={1}
        linkDirectionalParticleWidth={1.5}
        linkDirectionalParticleColor={() => 'rgba(255, 255, 255, 0.6)'}
        linkColor={() => 'rgba(255, 255, 255, 0.2)'}
        onNodeClick={handleNodeClick}
        cooldownTicks={200}
        onEngineStop={() => fgRef.current?.zoomToFit(400, 60)}
      />
      <GraphLegend />
      <GapFinderInfo />
    </div>
  );
};
