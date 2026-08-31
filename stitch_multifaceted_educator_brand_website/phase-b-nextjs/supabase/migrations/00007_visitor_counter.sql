CREATE TABLE IF NOT EXISTS site_stats (
    id int PRIMARY KEY, 
    total_views int DEFAULT 0
);

INSERT INTO site_stats (id, total_views) 
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION increment_views() 
RETURNS void AS $$
BEGIN
  UPDATE site_stats SET total_views = total_views + 1 WHERE id = 1;
END;
$$ LANGUAGE plpgsql;

-- Set up RLS so it's readable by everyone (since we fetch stats publicly or just authenticated admins)
ALTER TABLE site_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to anyone" 
ON site_stats FOR SELECT 
USING (true);

-- No insert/update/delete policies needed since we use the security definer function or just internal RPC
