# Authentication & Row Level Security (RLS)

## Roles
1. **super_admin**: Full access to all settings, users, and content.
2. **admin**: Can manage all content modules (Blog, Gallery, etc.) and view messages, but cannot change global site settings or roles.
3. **editor**: Can manage blog posts and gallery items, but cannot delete items, only create/update. Cannot view messages or settings.

## RLS Policies

**Public Content Tables (log_posts, gallery_items, 	estimonials, esources, wards)**
- SELECT: Allowed for everyone (anon) IF status = 'published'.
- INSERT/UPDATE/DELETE: Blocked for anon.

**Secure Tables (contact_messages, ppointments)**
- SELECT/UPDATE: Allowed only for ole IN ('admin', 'super_admin').
- INSERT: Allowed for anon (public users submitting forms).

**Settings Table (site_settings)**
- SELECT: Allowed for anon.
- UPDATE: Allowed only for ole = 'super_admin'.

**Profiles Table (profiles)**
- SELECT: Allowed for authenticated users.
- UPDATE: Allowed for self OR super_admin.

## Next.js Integration
- We use @supabase/ssr createServerClient inside middleware.ts.
- middleware.ts intercepts routes starting with /admin.
- It verifies the active session and user role from the profiles table.
- If unauthenticated, redirect to /login.
- If unauthorized (e.g. editor accessing settings), redirect to /admin/dashboard with a toast error.
