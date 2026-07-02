export interface Passion {
  id: string;
  title: string;
  iconName: string;
  description: string;
  detail: string;
  accentColor: string;
}

export interface JourneyItem {
  id: string;
  title: string;
  category: 'education' | 'coding' | 'bikes' | 'travel';
  image: string;
  description: string;
  date: string;
  location?: string;
  tag?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  comments: number;
  excerpt: string;
  readTime: string;
  content: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  description: string;
  iconName: string;
}
