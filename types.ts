
export type CategoryId = 'video' | 'audio' | 'pdf' | 'converters' | 'utilities' | 'creative';

export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  instructions?: string[];
  icon: string;
  category: CategoryId;
  href: string;
  externalLink?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  color: string;
  icon: string;
}

export interface AISuggestion {
  toolId: string;
  reasoning: string;
}
