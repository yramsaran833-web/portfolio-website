-- Create the gallery bucket if it does not exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('gallery', 'gallery', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the gallery bucket
CREATE POLICY "Public Read Access for Gallery" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'gallery');

CREATE POLICY "Admin/Editor Insert Access for Gallery" 
ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'gallery' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Update Access for Gallery" 
ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'gallery' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Delete Access for Gallery" 
ON storage.objects FOR DELETE 
USING (
  bucket_id = 'gallery' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);
