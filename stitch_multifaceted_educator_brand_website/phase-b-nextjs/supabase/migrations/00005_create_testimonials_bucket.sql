-- Create the testimonials bucket if it does not exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('testimonials', 'testimonials', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies for the testimonials bucket
CREATE POLICY "Public Read Access for Testimonials" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'testimonials');

CREATE POLICY "Admin/Editor Insert Access for Testimonials" 
ON storage.objects FOR INSERT 
WITH CHECK (
  bucket_id = 'testimonials' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Update Access for Testimonials" 
ON storage.objects FOR UPDATE 
USING (
  bucket_id = 'testimonials' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);

CREATE POLICY "Admin/Editor Delete Access for Testimonials" 
ON storage.objects FOR DELETE 
USING (
  bucket_id = 'testimonials' 
  AND auth.role() IN ('admin', 'super_admin', 'editor')
);
