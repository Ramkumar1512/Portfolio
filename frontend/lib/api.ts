export interface FormattedProject {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    external?: string;
  };
}

const PROJECTS: FormattedProject[] = [
  {
    title: "Satellite Image Land Classification System",
    description:
      "Developed a machine learning system to classify satellite imagery into land categories such as vegetation, water, and urban areas using CNNs and image preprocessing techniques. Processed and analyzed satellite datasets to enable automated land-use detection for geospatial analysis.",
    tags: ["Python", "CNN", "OpenCV"],
    links: {
      github: "https://github.com",
    },
  },
  {
    title: "AI Document Chat System (RAG-based Knowledge Assistant)",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) system enabling semantic search over large unstructured datasets. Built backend services with vector similarity search using FAISS and integrated transformer-based LLMs for context-aware responses.",
    tags: ["Python", "FAISS", "HuggingFace"],
    links: {
      github: "https://github.com",
    },
  },
  {
    title: "College Review Web App",
    description:
      "Built a web application to classify user reviews as positive or negative using NLP-based sentiment analysis. Implemented machine learning models for text classification and integrated them with a React frontend.",
    tags: ["Python", "React", "NLP"],
    links: {
      github: "https://github.com",
    },
  },
];

export async function fetchProjects(): Promise<FormattedProject[]> {
  // Return static data directly
  return PROJECTS;
}