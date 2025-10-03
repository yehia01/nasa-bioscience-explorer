import type { Publication } from '../types';

export interface GraphNode {
    id: string;
    name: string;
    type: 'publication' | 'organism' | 'environmentFactor' | 'process' | 'gene';
    val?: number; // for sizing
    publication?: Publication;
    degree: number;
    // Coordinates added by the graph simulation engine
    x?: number;
    y?: number;
}

export interface GraphLink {
    source: string;
    target: string;
}

export const createGraphData = (publications: Publication[]): { nodes: GraphNode[], links: GraphLink[] } => {
    const nodesMap = new Map<string, GraphNode>();
    const links: GraphLink[] = [];

    const addNode = (node: Omit<GraphNode, 'degree'>) => {
        if (!nodesMap.has(node.id)) {
            nodesMap.set(node.id, { ...node, degree: 0 });
        }
    };

    const addConceptNode = (id: string, name: string, type: GraphNode['type']) => {
        const nodeId = `${type}_${id}`;
        if (!nodesMap.has(nodeId)) {
            addNode({ id: nodeId, name, type });
        }
        return nodeId;
    };

    publications.forEach(pub => {
        addNode({ id: pub.id, name: pub.title, type: 'publication', val: 10, publication: pub });

        pub.keyConcepts.organisms.forEach(org => {
            const nodeId = addConceptNode(org, org, 'organism');
            links.push({ source: pub.id, target: nodeId });
        });
        pub.keyConcepts.environmentFactors.forEach(factor => {
            const nodeId = addConceptNode(factor, factor, 'environmentFactor');
            links.push({ source: pub.id, target: nodeId });
        });
        pub.keyConcepts.processes.forEach(proc => {
            const nodeId = addConceptNode(proc, proc, 'process');
            links.push({ source: pub.id, target: nodeId });
        });
        pub.keyConcepts.genes.forEach(gene => {
            const nodeId = addConceptNode(gene, gene, 'gene');
            links.push({ source: pub.id, target: nodeId });
        });
    });

    // Calculate degrees for each node based on links
    const degreeMap = new Map<string, number>();
    links.forEach(link => {
        degreeMap.set(link.source, (degreeMap.get(link.source) || 0) + 1);
        degreeMap.set(link.target, (degreeMap.get(link.target) || 0) + 1);
    });

    // Assign degrees to the final nodes
    nodesMap.forEach((node, id) => {
        node.degree = degreeMap.get(id) || 0;
    });

    return { nodes: Array.from(nodesMap.values()), links };
};