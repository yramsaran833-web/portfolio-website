# Environment Variables Configuration

Create a \.env.local\ file in the root directory with the following variables:

\\\env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Never expose this to the client
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: For image optimization domains
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\\\

> **Note**: Service role keys must only be used in secure Server Actions or API routes for administrative tasks that bypass RLS (e.g., initial user creation).
