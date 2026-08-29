# Phase A - Project Audit

## 1. Existing Pages
- index.html: Main landing page introducing Ram Saran Yadav.
- bout.html: Detailed biography and life journey.
- 	eaching.html: Focuses on his career as an educator (Apple-style scroll animations).
- creator.html: Focuses on content creation and social media presence (Apple-style scroll animations).
- printing.html: Information regarding his printing business.
- esources.html: Student resources (PDF notes, downloads).
- log.html: Articles and written content list.
- rticle.html: Single article view template.
- gallery.html: Photo gallery and event showcases.
- wards.html: Certifications and achievements.
- 	estimonials.html: Student reviews and endorsements.
- contact.html: Contact form and social links.
- privacy.html, 	erms.html, 404.html: Legal and error pages.

## 2. Existing Components
- components/Navbar.html: Responsive top navigation bar.
- components/Footer.html: Site-wide footer with links.

## 3. Existing Content Modules
- Text blocks (hardcoded paragraphs, headings).
- Scroll-jacking image sequences (hundreds of .jpg frames for 3D effect).

## 4. Existing Assets
- **Fonts**: Azurio-Bold, Emilio-ThinItalic, Goga-Regular, Remixa-Regular.
- **Images**: High-resolution JPG sequences (Final_Teacher/, Final_Crator/), RAm.jpg, Logo.png, gallery/, printing/, eels/.
- **Documents**: ssets/resources/ (PDF files for students).
- **Styles**: ssets/css/style.css (Tailwind overrides and custom fonts).
- **Scripts**: ssets/js/app.js (Canvas animation logic, mobile menu toggles).

## 5. Existing Forms
- Contact Form (contact.html) - currently static/mailto. No backend processing yet.

## 6. Existing Functionality
- 3D Scroll Sequence Animation (Canvas based).
- Responsive mobile menu.
- Static file downloads.

## 7. Migration Requirements (Phase B)
- **Framework**: Migrate raw HTML to React (Next.js 16/15) components.
- **Styling**: Maintain the exact same Tailwind utility classes and visual identity (Midnight Ink + Gold).
- **Assets**: Move images to public/ directory or Supabase Storage for dynamic serving.
- **Content**: Extract hardcoded text into Supabase database (Pages, Bio, Blog, Testimonials).
- **Animations**: Re-implement Canvas scroll sequences using React hooks (useRef, useEffect) and equestAnimationFrame.
- **Forms**: Connect Contact Form to Supabase contact_messages table with Zod validation.
