-- Create the blog bucket if it does not exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog', 'blog', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the blog bucket
CREATE POLICY "Public Read Access for Blog" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'blog');

CREATE POLICY "Admin/Editor Insert Access for Blog" 
ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'blog' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Update Access for Blog" 
ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'blog' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Delete Access for Blog" 
ON storage.objects FOR DELETE 
USING (
  bucket_id = 'blog' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);
