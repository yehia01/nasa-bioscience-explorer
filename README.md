# NASA Bioscience Explorer

A modern web application for exploring NASA space bioscience publications with AI-assisted insights, powerful filtering, an interactive knowledge graph, and an AI-driven research gap analysis. Designed for seamless deployment on Vercel and a clean developer experience.

## Why this project
Space bioscience research generates large, complex datasets across organisms, environmental factors, genes, and biological processes. This app helps researchers and enthusiasts:
- Quickly search and filter publications
- Visualize relationships between concepts
- Generate AI summaries and identify potential research gaps

## Key Features
- Smart AI search (Gemini) that synthesizes an answer and highlights relevant publications
- AI-powered Research Gap Analysis to propose novel research questions
- Card view with pagination for efficient browsing
- Interactive Knowledge Graph connecting publications, organisms, processes, genes, and environmental factors
- Lightweight, dependency-minimized UI, optimized for clarity and speed
- Large dataset loader from static JSON with automatic fallback to mock data

## Tech Stack
- React 19 + TypeScript
- Vite (dev/build)
- Tailwind-style utility classes (no extra runtime)
- Recharts (optional future: charts view)
- Google Gemini via `@google/genai`

## Architecture
- `components/` UI components
- `services/` data loading, graph utilities, and AI services
- `public/data/` static publications dataset (fetched at runtime)
- `data/mockData.ts` fallback dataset if network fetch fails

### Data Loading Flow
1. On app boot, the app fetches `public/data/publications.json`.
2. Data is mapped safely to the `Publication` type.
3. On failure, it falls back to `data/mockData.ts`.

### AI Integration
- `services/geminiService.ts` uses `VITE_GEMINI_API_KEY` from Vite env.
- Functions:
  - `performSmartSearch(query, publications)`
  - `getAbstractSummary(abstract)`
  - `findResearchGaps(publications)`

## Getting Started
### Prerequisites
- Node.js 18+
- PNPM (recommended) or NPM/Yarn

### Setup
1. Install dependencies:
```bash
pnpm install
# or: npm install / yarn
```
2. Create `.env` (or set on Vercel) with your Gemini API key:
```bash
# .env
VITE_GEMINI_API_KEY=YOUR_KEY
```
3. Run locally:
```bash
pnpm dev
```
4. Build and preview:
```bash
pnpm build && pnpm preview
```

## Environment Variables
- `VITE_GEMINI_API_KEY` (required for AI features)
  - Without it, AI features are disabled gracefully, and the app still runs.

## Deployment (Vercel)
1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Set Environment Variable in Vercel Project Settings:
   - Name: `VITE_GEMINI_API_KEY`
   - Value: YOUR_KEY
   - Scope: Production + Preview (and Development if needed)
4. Build settings:
   - Framework Preset: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
5. Deploy.

## Project Structure (trimmed < 100 files)
```
.
├─ components/
│  ├─ AiSummary.tsx
│  ├─ Dashboard.tsx
│  ├─ FilterControls.tsx
│  ├─ GapAnalysis.tsx
│  ├─ Header.tsx
│  ├─ KnowledgeGraph.tsx
│  ├─ LoadingSpinner.tsx
│  ├─ Pagination.tsx
│  ├─ PublicationCard.tsx
│  ├─ PublicationDetailModal.tsx
│  ├─ SearchBar.tsx
│  └─ icons/ (only used icons kept)
├─ data/
│  └─ mockData.ts (fallback data)
├─ public/
│  └─ data/
│     └─ publications.json (primary dataset)
├─ services/
│  ├─ dataLoader.ts (fetch + map dataset)
│  ├─ geminiService.ts (AI)
│  └─ graphService.ts (graph helpers)
├─ App.tsx
├─ index.html
├─ index.tsx
├─ types.ts
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

## Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Usage Tips
- Use Smart Search for AI-assisted answers and prioritized results
- Switch views: Card, Graph, Gap Analysis
- In the detail modal, click “Get Abstract” for a one-sentence AI summary (requires API key)

## Notes
- Dataset size: large JSON is static-served; fetch is client-side
- The app is structured for clarity and minimal dependencies
- Icons/components are pruned to keep repository size and file count small

## License
MIT (or your preferred license)

## Acknowledgements
- NASA OSDR and community datasets
- Google Gemini model APIs
