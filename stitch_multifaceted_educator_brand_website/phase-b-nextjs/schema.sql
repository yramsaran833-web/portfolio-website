-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles (Linked to auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  role TEXT DEFAULT 'admin' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, 'admin');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 2. Blog Categories & Posts
CREATE TABLE public.blog_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  cover_image TEXT,
  category_id UUID REFERENCES public.blog_categories(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Resources & Categories
CREATE TABLE public.resource_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.resources (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  category_id UUID REFERENCES public.resource_categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Gallery & Albums
CREATE TABLE public.gallery_albums (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.gallery_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  album_id UUID REFERENCES public.gallery_albums(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Contact Messages
CREATE TABLE public.contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Testimonials
CREATE TABLE public.testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT,
  company TEXT,
  content TEXT NOT NULL,
  avatar_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Site Settings
CREATE TABLE public.site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  site_name TEXT NOT NULL,
  site_description TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  address TEXT,
  hero_title TEXT,
  hero_subtitle TEXT,
  facebook_url TEXT,
  youtube_url TEXT,
  tiktok_url TEXT,
  whatsapp_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Awards & Appointments (For About Page)
CREATE TABLE public.awards (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  year TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.appointments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  start_year TEXT NOT NULL,
  end_year TEXT,
  current BOOLEAN DEFAULT false,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and setup basic policies (Public read, Authenticated write)
DO $$
DECLARE
  table_name TEXT;
BEGIN
  FOR table_name IN 
    SELECT tablename FROM pg_tables WHERE schemaname = 'public'
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', table_name);
    
    -- Authenticated users (Admin) can do everything
    EXECUTE format('
      CREATE POLICY "Enable ALL for authenticated users" ON public.%I 
      FOR ALL USING (auth.role() = ''authenticated'');
    ', table_name);
    
    -- Public users can SELECT (read) everything except profiles and messages
    IF table_name NOT IN ('profiles', 'contact_messages') THEN
      EXECUTE format('
        CREATE POLICY "Enable SELECT for public users" ON public.%I 
        FOR SELECT USING (true);
      ', table_name);
    END IF;
  END LOOP;
END
$$;

-- Allow public to INSERT into contact_messages
CREATE POLICY "Enable INSERT for public" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Create Storage Buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('blog', 'blog', true),
('resources', 'resources', true),
('gallery', 'gallery', true),
('testimonials', 'testimonials', true),
('site_settings', 'site_settings', true),
('awards', 'awards', true)
ON CONFLICT (id) DO NOTHING;

-- Enable Storage Policies (Public read, Authenticated write)
CREATE POLICY "Public Read" ON storage.objects FOR SELECT USING (bucket_id IN ('blog', 'resources', 'gallery', 'testimonials', 'site_settings', 'awards'));
CREATE POLICY "Auth Write" ON storage.objects FOR ALL USING (auth.role() = 'authenticated');
