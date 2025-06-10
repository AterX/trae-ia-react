export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  image_url?: string; // For API compatibility
  technologies: string[];
  tags?: string[];
  author: {
    id: string;
    name?: string;
    username?: string;
    full_name?: string;
    avatar?: string;
    avatar_url?: string;
  };
  likes: number;
  likes_count?: number; // For API compatibility
  comments_count: number;
  views_count: number;
  createdAt: string;
  created_at?: string; // For API compatibility
  is_liked_by_current_user?: boolean;
  is_liked?: boolean; // For API compatibility
  githubUrl?: string;
  github_url?: string; // For API compatibility
  demoUrl?: string;
  demo_url?: string; // For API compatibility
  category?: string;
  difficulty_level?: string;
  status?: 'draft' | 'published' | 'archived';
  userId?: string;
  user_id?: string; // For API compatibility
  updatedAt?: string;
  updated_at?: string; // For API compatibility
}

// Database-specific project interface for hooks
export interface DBProject {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  user_id: string;
}