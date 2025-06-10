export interface Project {
  id?: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  status?: 'draft' | 'published' | 'archived';
}