-- Enums
CREATE TYPE user_role AS ENUM ('super_admin', 'admin', 'editor');
CREATE TYPE content_status AS ENUM ('draft', 'published', 'scheduled');
CREATE TYPE simple_status AS ENUM ('published', 'unpublished');
CREATE TYPE message_status AS ENUM ('new', 'read', 'replied', 'archived');
CREATE TYPE appointment_status AS ENUM ('new', 'confirmed', 'completed', 'cancelled');

-- 1. profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role DEFAULT 'editor' NOT NULL,
    first_name TEXT,
    last_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. site_settings
CREATE TABLE site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_name TEXT DEFAULT 'Ram Saran Yadav',
    logo_url TEXT,
    profile_photo_url TEXT,
    biography TEXT,
    mission TEXT,
    vision TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    whatsapp_number TEXT,
    address TEXT,
    seo_defaults JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. social_links
CREATE TABLE social_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    platform TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. blog_categories
CREATE TABLE blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. blog_posts
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
    category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
    status content_status DEFAULT 'draft',
    seo_title TEXT,
    seo_description TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. gallery_albums
CREATE TABLE gallery_albums (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. gallery_items
CREATE TABLE gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    album_id UUID REFERENCES gallery_albums(id) ON DELETE CASCADE,
    title TEXT,
    description TEXT,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    status simple_status DEFAULT 'unpublished',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. awards
CREATE TABLE awards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    issuer TEXT,
    issue_date DATE,
    image_url TEXT,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. testimonials
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_name TEXT NOT NULL,
    author_role TEXT,
    content TEXT NOT NULL,
    avatar_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    status simple_status DEFAULT 'unpublished',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. resource_categories
CREATE TABLE resource_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. resources
CREATE TABLE resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    subject TEXT,
    category_id UUID REFERENCES resource_categories(id) ON DELETE SET NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    thumbnail_url TEXT,
    status simple_status DEFAULT 'unpublished',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. contact_messages
CREATE TABLE contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status message_status DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. appointments
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    reason TEXT,
    status appointment_status DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. pages
CREATE TABLE pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    content JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. media
CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    bucket_name TEXT NOT NULL,
    uploaded_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Enable
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_albums ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE resource_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Basic Public Read Policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public links" ON social_links FOR SELECT USING (is_active = true);
CREATE POLICY "Public categories" ON blog_categories FOR SELECT USING (true);
CREATE POLICY "Public posts" ON blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public albums" ON gallery_albums FOR SELECT USING (true);
CREATE POLICY "Public gallery" ON gallery_items FOR SELECT USING (status = 'published');
CREATE POLICY "Public awards" ON awards FOR SELECT USING (true);
CREATE POLICY "Public testimonials" ON testimonials FOR SELECT USING (status = 'published');
CREATE POLICY "Public resource categories" ON resource_categories FOR SELECT USING (true);
CREATE POLICY "Public resources" ON resources FOR SELECT USING (status = 'published');
CREATE POLICY "Public pages" ON pages FOR SELECT USING (true);
CREATE POLICY "Public media" ON media FOR SELECT USING (true);

-- Contact & Appointment Insert Policies (Public can submit)
CREATE POLICY "Anyone can submit contact message" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can submit appointment" ON appointments FOR INSERT WITH CHECK (true);

-- Admin Policies (Simplified for scaffolding - checks role using auth.jwt() or profile lookup)
-- To securely check roles in RLS without recursion:
CREATE OR REPLACE FUNCTION auth.role() RETURNS text AS \$\$
  SELECT role::text FROM public.profiles WHERE id = auth.uid();
\$\$ LANGUAGE sql SECURITY DEFINER;

-- Super Admin can do everything on site_settings
CREATE POLICY "Super Admins can update settings" ON site_settings FOR ALL USING (auth.role() = 'super_admin');

-- Admins and Editors can manage content (abstracted for brevity in scaffolding)
-- E.g. Blog posts: Admin and Editor can ALL
CREATE POLICY "Admin/Editor manage posts" ON blog_posts FOR ALL USING (auth.role() IN ('admin', 'super_admin', 'editor'));

