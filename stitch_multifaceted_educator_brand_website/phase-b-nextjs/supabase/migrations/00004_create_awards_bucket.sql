-- Create the awards bucket if it does not exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('awards', 'awards', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the awards bucket
CREATE POLICY "Public Read Access for Awards" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'awards');

CREATE POLICY "Admin/Editor Insert Access for Awards" 
ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'awards' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Update Access for Awards" 
ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'awards' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Delete Access for Awards" 
ON storage.objects FOR DELETE 
USING (
  bucket_id = 'awards' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);
