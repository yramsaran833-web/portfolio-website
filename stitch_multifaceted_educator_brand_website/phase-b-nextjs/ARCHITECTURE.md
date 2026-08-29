# Next.js Architecture

## Stack
- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend/DB**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth (SSR)
- **Validation**: Zod + React Hook Form

## Directory Structure
\\\
src/
├── app/
│   ├── (public)/          # Public-facing routes (Phase C later)
│   ├── admin/             # Admin dashboard routes
│   ├── login/             # Secure login for admin
│   ├── api/               # API routes (if needed)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Temporary landing page
│
├── components/
│   ├── ui/                # shadcn/ui primitives
│   ├── layout/            # Sidebar, Header, Footers
│   ├── public/            # Public site components (Future)
│   └── admin/             # Admin specific components (Forms, Tables)
│
├── lib/
│   ├── supabase/          # Supabase clients (server.ts, client.ts)
│   ├── auth/              # Role verification utilities
│   ├── utils/             # Helper functions (cn, formatters)
│   └── validations/       # Zod schemas for forms
│
├── types/                 # Global TypeScript definitions (Database types)
│
├── data/                  # Static constants or mock data
│
└── config/                # Site configurations (siteMetadata)

supabase/
├── migrations/            # SQL migration files
├── seed/                  # Seed data
└── functions/             # Edge functions

public/
├── images/                # Static local images
├── icons/                 # SVG icons
└── documents/             # Static documents
\\\

## Key Architectural Decisions
1. **Separation of Concerns**: Admin components are strictly isolated from Public components.
2. **Server-first Auth**: We use @supabase/ssr to verify user sessions and roles in middleware.ts before rendering admin pages.
3. **Hybrid UI**: shadcn/ui provides accessible structural components (Tables, Dialogs), while bespoke Tailwind components maintain the Midnight Ink + Gold luxury brand for custom dashboard cards.
