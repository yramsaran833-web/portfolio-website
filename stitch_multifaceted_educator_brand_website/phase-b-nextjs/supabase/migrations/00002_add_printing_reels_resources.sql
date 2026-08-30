-- Migration to add Printing Projects, Facebook Reels, and update Resources

-- 1. Printing Projects Table
CREATE TABLE printing_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    status simple_status DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for printing_projects
ALTER TABLE printing_projects ENABLE ROW LEVEL SECURITY;

-- Policies for printing_projects
CREATE POLICY "Public can view published printing projects" ON printing_projects
    FOR SELECT USING (status = 'published');

CREATE POLICY "Admin can manage printing projects" ON printing_projects
    FOR ALL USING (auth.role() = 'authenticated');

-- 2. Facebook Reels Table
CREATE TABLE facebook_reels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    status simple_status DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for facebook_reels
ALTER TABLE facebook_reels ENABLE ROW LEVEL SECURITY;

-- Policies for facebook_reels
CREATE POLICY "Public can view published reels" ON facebook_reels
    FOR SELECT USING (status = 'published');

CREATE POLICY "Admin can manage reels" ON facebook_reels
    FOR ALL USING (auth.role() = 'authenticated');

-- 3. Update Resources Table
-- Add resource_type column to differentiate between PDF and YouTube
ALTER TABLE resources 
ADD COLUMN resource_type TEXT DEFAULT 'pdf' CHECK (resource_type IN ('pdf', 'youtube'));

-- Seed default resource categories so they exist in the DB for the user
INSERT INTO resource_categories (name, slug) VALUES
    ('Syllabus', 'syllabus'),
    ('Past Exam Paper', 'past-exam-paper'),
    ('Practice PDF', 'practice-pdf'),
    ('Notes', 'notes'),
    ('Important Questions', 'important-questions'),
    ('Video Lectures', 'video-lectures')
ON CONFLICT (slug) DO NOTHING;
