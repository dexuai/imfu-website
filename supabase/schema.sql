-- Supabase SQL Schema for imfu.ai
-- Run this in the Supabase SQL Editor

-- Articles Table (for blogs, logs, study content)
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT DEFAULT 'log', -- 'log', 'study', 'blog'
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Tools Table (for nav.imfu.ai)
CREATE TABLE IF NOT EXISTS tools (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  url TEXT NOT NULL,
  category TEXT DEFAULT 'other', -- 'text', 'image', 'video', 'code', 'other'
  icon_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

-- Public read policy for published articles
CREATE POLICY "Public can view published articles" ON articles
  FOR SELECT USING (published = true);

-- Public read policy for tools
CREATE POLICY "Public can view all tools" ON tools
  FOR SELECT USING (true);

-- Admin write policies (requires authenticated user with admin role)
-- For now, allow all authenticated users to write (you can restrict later)
CREATE POLICY "Authenticated users can manage articles" ON articles
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage tools" ON tools
  FOR ALL USING (auth.role() = 'authenticated');

-- Function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for articles
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
