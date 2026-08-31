-- Fix Storage Policies to allow authenticated users to upload
DROP POLICY IF EXISTS "Admin Insert Access for Media" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update Access for Media" ON storage.objects;
DROP POLICY IF EXISTS "Admin Delete Access for Media" ON storage.objects;

CREATE POLICY "Admin Insert Access for Media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Admin Update Access for Media" ON storage.objects FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Admin Delete Access for Media" ON storage.objects FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin/Editor Insert Access for Gallery" ON storage.objects;
DROP POLICY IF EXISTS "Admin/Editor Update Access for Gallery" ON storage.objects;
DROP POLICY IF EXISTS "Admin/Editor Delete Access for Gallery" ON storage.objects;

CREATE POLICY "Admin/Editor Insert Access for Gallery" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery' AND auth.role() = 'authenticated');
CREATE POLICY "Admin/Editor Update Access for Gallery" ON storage.objects FOR UPDATE USING (bucket_id = 'gallery' AND auth.role() = 'authenticated');
CREATE POLICY "Admin/Editor Delete Access for Gallery" ON storage.objects FOR DELETE USING (bucket_id = 'gallery' AND auth.role() = 'authenticated');

-- Fix Table Policies
DROP POLICY IF EXISTS "Public gallery" ON gallery_items;
CREATE POLICY "Public gallery" ON gallery_items FOR SELECT USING (true);
CREATE POLICY "Admin manage gallery" ON gallery_items FOR ALL USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public albums" ON gallery_albums;
CREATE POLICY "Public albums" ON gallery_albums FOR SELECT USING (true);
CREATE POLICY "Admin manage albums" ON gallery_albums FOR ALL USING (auth.role() = 'authenticated');
