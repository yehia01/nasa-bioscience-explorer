
import { GoogleGenAI, Type } from "@google/genai";
import type { Publication, AiSearchResult, ResearchGap } from '../types';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

if (!GEMINI_API_KEY) {
  console.warn("VITE_GEMINI_API_KEY is not set. AI features will be disabled.");
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

const schema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "A concise, one-paragraph summary answering the user's question based on the provided publications."
    },
    relevantPublicationIds: {
      type: Type.ARRAY,
      description: "An array of IDs for the publications most relevant to the question. Should be a subset of the provided IDs.",
      items: {
        type: Type.STRING
      }
    }
  },
  required: ['summary', 'relevantPublicationIds']
};


export const performSmartSearch = async (
  userQuery: string,
  publications: Publication[]
): Promise<AiSearchResult> => {
  if (!ai) throw new Error('AI not configured');
  const publicationsForPrompt = publications.map(p => ({
    id: p.id,
    title: p.title,
    summary: p.summary.snapshot,
    keyFindings: p.summary.keyFindings,
    keyConcepts: p.keyConcepts,
  }));

  const prompt = `
    You are an expert NASA bioscience research assistant. Your task is to analyze the user's question and a list of research publications to provide a synthesized answer and identify the most relevant papers.

    User Question: "${userQuery}"

    Publications List (JSON format):
    ${JSON.stringify(publicationsForPrompt, null, 2)}

    Based on the user's question and the provided publication data, generate a response that adheres to the following JSON schema. The summary should directly answer the question, synthesizing information from multiple papers if necessary. The list of IDs should only include publications that are directly relevant to the user's specific question.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const responseText = response.text.trim();
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
    const jsonString = jsonMatch ? jsonMatch[1] : responseText;

    const parsedResult = JSON.parse(jsonString) as AiSearchResult;
    const validIds = publications.map(p => p.id);
    parsedResult.relevantPublicationIds = parsedResult.relevantPublicationIds.filter(id => validIds.includes(id));

    return parsedResult;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to process the smart search query with the AI model.");
  }
};

export const getAbstractSummary = async (abstract: string): Promise<string> => {
  if (!ai) throw new Error('AI not configured');
  const prompt = `
    You are a scientific research assistant. Please read the following abstract and provide a very concise, one-sentence summary of its core finding. Act as if you have just read the paper at the provided link.

    Abstract:
    """
    ${abstract}
    """

    One-sentence summary:
  `;
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API for abstract summary:", error);
    throw new Error("Failed to generate AI summary for the abstract.");
  }
};

export const findResearchGaps = async (publications: Publication[]): Promise<ResearchGap[]> => {
  if (!ai) throw new Error('AI not configured');
  const publicationsForPrompt = publications.map(p => ({
    id: p.id,
    title: p.title,
    summary: p.summary.snapshot,
    keyFindings: p.summary.keyFindings,
    keyConcepts: p.keyConcepts,
    year: p.publicationDate
  }));

  const prompt = `
    You are an expert NASA bioscience analyst. Review the following corpus of publications and propose 3-6 specific, high-impact research questions (gaps) that are under-explored. For each gap, include:
    - question: a concise, actionable research question
    - justification: why this gap matters, grounded in the trends and omissions you see
    - relatedConcepts: a short list of organisms, environment factors, genes, or processes that relate

    Publications (JSON):
    ${JSON.stringify(publicationsForPrompt, null, 2)}

    Respond with strict JSON array only, shaped as [{"question":"...","justification":"...","relatedConcepts":["..."]}].
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text.trim();
    const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
    const jsonString = jsonMatch ? jsonMatch[1] : text;

    const parsed = JSON.parse(jsonString);
    if (!Array.isArray(parsed)) {
      return [];
    }

    const gaps: ResearchGap[] = parsed
      .filter((g: any) => g && typeof g.question === 'string')
      .map((g: any) => ({
        question: String(g.question),
        justification: typeof g.justification === 'string' ? g.justification : '',
        relatedConcepts: Array.isArray(g.relatedConcepts) ? g.relatedConcepts.map(String) : []
      }));

    return gaps;
  } catch (error) {
    console.error('Error calling Gemini API for gap analysis:', error);
    throw new Error('Failed to perform research gap analysis.');
  }
};
