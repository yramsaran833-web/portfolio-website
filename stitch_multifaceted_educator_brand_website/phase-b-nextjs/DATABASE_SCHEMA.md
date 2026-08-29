# Database Schema

## Tables Overview

### 1. profiles
Extends Supabase uth.users with user roles and public profile data.
- id (uuid, pk, references auth.users)
- ole (enum: super_admin, admin, editor)
- irst_name (text)
- last_name (text)
- vatar_url (text)
- created_at (timestamptz)
- updated_at (timestamptz)

### 2. site_settings
Global configuration for the website.
- id (uuid, pk)
- site_name (text)
- logo_url (text)
- profile_photo_url (text)
- iography (text)
- mission (text)
- ision (text)
- contact_email (text)
- contact_phone (text)
- whatsapp_number (text)
- ddress (text)
- seo_defaults (jsonb)
- updated_at (timestamptz)

### 3. social_links
- id (uuid, pk)
- platform (text)
- url (text)
- icon (text)
- is_active (boolean)
- sort_order (integer)

### 4. log_categories
- id (uuid, pk)
- 
ame (text)
- slug (text, unique)
- created_at (timestamptz)

### 5. log_posts
- id (uuid, pk)
- 	itle (text)
- slug (text, unique)
- content (text)
- excerpt (text)
- eatured_image (text)
- uthor_id (uuid, fk -> profiles.id)
- category_id (uuid, fk -> blog_categories.id)
- status (enum: draft, published, scheduled)
- seo_title (text)
- seo_description (text)
- published_at (timestamptz)
- created_at (timestamptz)
- updated_at (timestamptz)

### 6. gallery_albums
- id (uuid, pk)
- 	itle (text)
- slug (text, unique)
- description (text)
- sort_order (integer)

### 7. gallery_items
- id (uuid, pk)
- lbum_id (uuid, fk -> gallery_albums.id)
- 	itle (text)
- description (text)
- image_url (text)
- lt_text (text)
- is_featured (boolean)
- sort_order (integer)
- status (enum: published, unpublished)
- created_at (timestamptz)

### 8. wards
- id (uuid, pk)
- 	itle (text)
- issuer (text)
- issue_date (date)
- image_url (text)
- description (text)
- sort_order (integer)
- created_at (timestamptz)

### 9. 	estimonials
- id (uuid, pk)
- uthor_name (text)
- uthor_role (text)
- content (text)
- vatar_url (text)
- is_featured (boolean)
- sort_order (integer)
- status (enum: published, unpublished)
- created_at (timestamptz)

### 10. esource_categories
- id (uuid, pk)
- 
ame (text)
- slug (text, unique)

### 11. esources
- id (uuid, pk)
- 	itle (text)
- subject (text)
- category_id (uuid, fk -> resource_categories.id)
- description (text)
- ile_url (text)
- 	humbnail_url (text)
- status (enum: published, unpublished)
- created_at (timestamptz)
- updated_at (timestamptz)

### 12. contact_messages
- id (uuid, pk)
- 
ame (text)
- email (text)
- phone (text)
- subject (text)
- message (text)
- status (enum: new, read, replied, archived)
- created_at (timestamptz)

### 13. ppointments
- id (uuid, pk)
- 
ame (text)
- email (text)
- phone (text)
- date (date)
- 	ime (time)
- eason (text)
- status (enum: new, confirmed, completed, cancelled)
- created_at (timestamptz)

### 14. pages
Dynamic content blocks for pages (About, Teaching, etc.)
- id (uuid, pk)
- slug (text, unique)
- 	itle (text)
- content (jsonb)
- updated_at (timestamptz)

### 15. media (Optional global tracker)
- id (uuid, pk)
- ile_name (text)
- ile_url (text)
- ucket_name (text)
- uploaded_by (uuid, fk -> profiles.id)
- created_at (timestamptz)
