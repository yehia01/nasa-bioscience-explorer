export interface VisualizationDataPoint {
  label: string;
  value: number;
  unit: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  publicationDate: string;
  journal: string;
  summary: {
    snapshot: string;
    keyFindings: string[];
    objectives: string[];
  };
  analysis: {
    limitations: string[];
    futureWork: string[];
  };
  keyConcepts: {
    organisms: string[];
    genes: string[];
    processes: string[];
    environmentFactors: string[];
  };
  fullText: {
    abstract: string;
    introduction: string;
    methods: string;
    results: string;
    conclusion: string;
  };
  pdfUrl: string;
  osdrDataUrl?: string;
  visualizationData?: VisualizationDataPoint[];
}

export interface AiSearchResult {
  summary: string;
  relevantPublicationIds: string[];
}

// New type to support Gap Analysis
export interface ResearchGap {
  question: string;
  justification: string;
  relatedConcepts: string[];
}