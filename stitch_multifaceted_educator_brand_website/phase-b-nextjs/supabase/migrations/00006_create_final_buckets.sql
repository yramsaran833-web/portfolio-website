-- Create buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('resources', 'resources', true),
('site_settings', 'site_settings', true),
('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Policies for resources
CREATE POLICY "Public Read Access for Resources" ON storage.objects FOR SELECT USING (bucket_id = 'resources');
CREATE POLICY "Admin Insert Access for Resources" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resources' AND auth.role() IN ('admin', 'super_admin', 'editor'));
CREATE POLICY "Admin Update Access for Resources" ON storage.objects FOR UPDATE USING (bucket_id = 'resources' AND auth.role() IN ('admin', 'super_admin', 'editor'));
CREATE POLICY "Admin Delete Access for Resources" ON storage.objects FOR DELETE USING (bucket_id = 'resources' AND auth.role() IN ('admin', 'super_admin', 'editor'));

-- Policies for site_settings
CREATE POLICY "Public Read Access for Site Settings" ON storage.objects FOR SELECT USING (bucket_id = 'site_settings');
CREATE POLICY "Super Admin Insert Access for Site Settings" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'site_settings' AND auth.role() = 'super_admin');
CREATE POLICY "Super Admin Update Access for Site Settings" ON storage.objects FOR UPDATE USING (bucket_id = 'site_settings' AND auth.role() = 'super_admin');
CREATE POLICY "Super Admin Delete Access for Site Settings" ON storage.objects FOR DELETE USING (bucket_id = 'site_settings' AND auth.role() = 'super_admin');

-- Policies for media
CREATE POLICY "Public Read Access for Media" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Admin Insert Access for Media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() IN ('admin', 'super_admin', 'editor'));
CREATE POLICY "Admin Update Access for Media" ON storage.objects FOR UPDATE USING (bucket_id = 'media' AND auth.role() IN ('admin', 'super_admin', 'editor'));
CREATE POLICY "Admin Delete Access for Media" ON storage.objects FOR DELETE USING (bucket_id = 'media' AND auth.role() IN ('admin', 'super_admin', 'editor'));
