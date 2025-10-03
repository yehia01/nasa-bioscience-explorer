import type { Publication } from '../types';

function toPublication(raw: any): Publication | null {
  try {
    const id = String(raw.id ?? raw.pmcid ?? crypto.randomUUID());
    const title = String(raw.title ?? 'Untitled');
    const authors = Array.isArray(raw.authors) ? raw.authors.map(String) : [];
    const publicationDate = String(raw.publicationDate ?? raw.date ?? '2000-01-01');
    const journal = String(raw.journal ?? raw.source ?? 'Unknown');
    const summary = {
      snapshot: String(raw.summary?.snapshot ?? raw.abstract ?? ''),
      keyFindings: Array.isArray(raw.summary?.keyFindings) ? raw.summary.keyFindings.map(String) : [],
      objectives: Array.isArray(raw.summary?.objectives) ? raw.summary.objectives.map(String) : [],
    };
    const analysis = {
      limitations: Array.isArray(raw.analysis?.limitations) ? raw.analysis.limitations.map(String) : [],
      futureWork: Array.isArray(raw.analysis?.futureWork) ? raw.analysis.futureWork.map(String) : [],
    };
    const keyConcepts = {
      organisms: Array.isArray(raw.keyConcepts?.organisms) ? raw.keyConcepts.organisms.map(String) : [],
      genes: Array.isArray(raw.keyConcepts?.genes) ? raw.keyConcepts.genes.map(String) : [],
      processes: Array.isArray(raw.keyConcepts?.processes) ? raw.keyConcepts.processes.map(String) : [],
      environmentFactors: Array.isArray(raw.keyConcepts?.environmentFactors) ? raw.keyConcepts.environmentFactors.map(String) : [],
    };

    const fullText = {
      abstract: String(raw.fullText?.abstract ?? ''),
      introduction: String(raw.fullText?.introduction ?? ''),
      methods: String(raw.fullText?.methods ?? ''),
      results: String(raw.fullText?.results ?? ''),
      conclusion: String(raw.fullText?.conclusion ?? ''),
    };

    const pdfUrl = String(raw.pdfUrl ?? raw.url ?? '');
    const osdrDataUrl = raw.osdrDataUrl ? String(raw.osdrDataUrl) : undefined;

    return {
      id,
      title,
      authors,
      publicationDate,
      journal,
      summary,
      analysis,
      keyConcepts,
      fullText,
      pdfUrl,
      osdrDataUrl,
    };
  } catch {
    return null;
  }
}

export async function loadPublications(): Promise<Publication[]> {
  try {
    const response = await fetch('/data/publications.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to load publications.json: ${response.status}`);
    }
    const json = await response.json();
    if (!Array.isArray(json)) return [];
    return json.map(toPublication).filter((p): p is Publication => Boolean(p));
  } catch (err) {
    console.error('Error loading publications.json, falling back to mock data:', err);
    const { publications } = await import('../data/mockData');
    return publications;
  }
} 