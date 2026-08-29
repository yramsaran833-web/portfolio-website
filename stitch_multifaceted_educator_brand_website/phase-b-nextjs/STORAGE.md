# Storage Architecture

## Buckets
We utilize Supabase Storage with the following buckets:

1. **media**: General purpose images and icons.
2. **gallery**: High-resolution gallery images (optimized).
3. **log**: Featured images and inline blog imagery.
4. **wards**: Scans/photos of certificates and awards.
5. **esources**: PDF notes and study materials.
6. **documents**: Private admin documents (if any).

## Security Policies
- **Public Buckets** (media, gallery, blog, awards, resources):
  - SELECT: Allowed for anon.
  - INSERT/UPDATE/DELETE: Allowed only for authenticated admin/editor users.
- **Private Buckets** (documents):
  - SELECT/INSERT/UPDATE/DELETE: Allowed only for dmin and super_admin.

## Optimization
- Images uploaded to gallery and log should be passed through Next.js 
ext/image component for WebP conversion and responsive sizing.
