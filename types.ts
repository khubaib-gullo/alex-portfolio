export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'Code' | 'Design' | 'Language';
}

export interface Project {
  id: string;
  title: string;
  category: 'Design' | 'Development' | 'Marketing';
  image: string;
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}