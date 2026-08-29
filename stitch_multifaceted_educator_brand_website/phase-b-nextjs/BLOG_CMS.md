# Blog CMS Architecture

## Routes
- \/admin/blog\ - List view of all posts with filtering (Title search, Status dropdown).
- \/admin/blog/new\ - Form to create a new post.
- \/admin/blog/[id]/edit\ - Form to edit an existing post.

## Database Interaction (Supabase)
- **Tables**: Reads/Writes to \log_posts\, reads from \log_categories\.
- **Joins**: List view joins \log_categories(name)\ to display category labels.
- **RLS**: Creation and updating require \dmin\, \super_admin\, or \editor\ role. Public users can only read published posts.

## Validation (Zod)
- Slug formatting is enforced via RegEx (lowercase, numbers, hyphens).
- Title, content, and slug length minimums are enforced.

## Storage (Media Handling)
- **Bucket**: \log\ (Public access allowed for reading, restricted for uploading).
- **Upload Flow**: 
  1. User selects image in \BlogForm\.
  2. File is uploaded immediately to Supabase Storage via \uploadBlogImage\ server action.
  3. Public URL is returned and previewed in the form.
  4. URL is saved to the \eatured_image\ column upon submission.
- **Cleanup**: When a post is deleted, its associated featured image is purged from the \log\ bucket to prevent orphaned files.

## Authorization & Security
- Operations are protected by Server Actions that independently verify user sessions via \supabase.auth.getUser()\.
- Errors such as \23505\ (Unique constraint on slug) are caught and gracefully presented to the UI.
