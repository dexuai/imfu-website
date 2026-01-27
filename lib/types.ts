export interface Article {
    id: string;
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    category: 'log' | 'study' | 'blog';
    tags: string[] | null;
    published: boolean;
    featured: boolean;
    created_at: string;
    updated_at: string;
}

export interface Tool {
    id: string;
    name: string;
    description: string | null;
    url: string;
    category: 'text' | 'image' | 'video' | 'code' | 'other';
    icon_url: string | null;
    is_featured: boolean;
    created_at: string;
}
