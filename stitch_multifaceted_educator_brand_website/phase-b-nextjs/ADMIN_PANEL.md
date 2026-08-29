# Admin Panel Architecture

## Framework
- **Route**: App runs entirely under the /admin route group.
- **Components**: UI is built with Tailwind CSS + shadcn/ui.
- **State Management**: React 19 hooks (useActionState, useFormStatus) and Server Actions for data mutations.

## Layout Structure
\\\
/admin
├── Dashboard (Overview stats)
├── Blog (Completed)
├── Gallery (Completed)
├── Awards (Completed)
├── Testimonials (Completed)
│   ├── List & Filter
│   ├── Create Testimonial
│   └── Edit Testimonial
├── Resources
├── Messages
├── Appointments
└── Settings (Super Admin only)
\\\

## Visual Identity
The Admin Panel follows the "Midnight Ink + Gold" design system of Phase A to maintain brand consistency internally.
- Primary Background: Midnight Ink (#0a0f1d).
- Accents: Gold (#d4af37).

## Implementation Details
- **Forms**: Managed by eact-hook-form.
- **Validation**: Strict schema validation using zod.
- **Data Fetching**: Next.js Server Components with Supabase.
