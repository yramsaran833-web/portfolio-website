export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_categories: {
        Row: {
          id: string
          name: string
          slug: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          excerpt: string | null
          featured_image: string | null
          author_id: string | null
          category_id: string | null
          status: 'draft' | 'published' | 'scheduled'
          seo_title: string | null
          seo_description: string | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          category_id?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          seo_title?: string | null
          seo_description?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          category_id?: string | null
          status?: 'draft' | 'published' | 'scheduled'
          seo_title?: string | null
          seo_description?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      gallery_albums: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      gallery_items: {
        Row: {
          id: string
          album_id: string | null
          title: string | null
          description: string | null
          image_url: string
          alt_text: string | null
          is_featured: boolean
          sort_order: number
          status: 'published' | 'unpublished'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          album_id?: string | null
          title?: string | null
          description?: string | null
          image_url: string
          alt_text?: string | null
          is_featured?: boolean
          sort_order?: number
          status?: 'published' | 'unpublished'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          album_id?: string | null
          title?: string | null
          description?: string | null
          image_url?: string
          alt_text?: string | null
          is_featured?: boolean
          sort_order?: number
          status?: 'published' | 'unpublished'
          created_at?: string
          updated_at?: string
        }
      }
      awards: {
        Row: {
          id: string
          title: string
          issuer: string | null
          issue_date: string | null
          image_url: string | null
          description: string | null
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          issuer?: string | null
          issue_date?: string | null
          image_url?: string | null
          description?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          issuer?: string | null
          issue_date?: string | null
          image_url?: string | null
          description?: string | null
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          client_name: string
          client_role: string | null
          content: string
          avatar_url: string | null
          rating: number
          is_featured: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_name: string
          client_role?: string | null
          content: string
          avatar_url?: string | null
          rating?: number
          is_featured?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          client_role?: string | null
          content?: string
          avatar_url?: string | null
          rating?: number
          is_featured?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }

      resource_categories: {
        Row: { id: string; name: string; slug: string; created_at: string; updated_at: string; }
        Insert: { id?: string; name: string; slug: string; created_at?: string; updated_at?: string; }
        Update: { id?: string; name?: string; slug?: string; created_at?: string; updated_at?: string; }
      }
      resources: {
        Row: { id: string; category_id: string | null; title: string; slug: string; description: string | null; file_url: string; file_type: string | null; file_size: number | null; is_public: boolean; created_at: string; updated_at: string; }
        Insert: { id?: string; category_id?: string | null; title: string; slug: string; description?: string | null; file_url: string; file_type?: string | null; file_size?: number | null; is_public?: boolean; created_at?: string; updated_at?: string; }
        Update: { id?: string; category_id?: string | null; title?: string; slug?: string; description?: string | null; file_url?: string; file_type?: string | null; file_size?: number | null; is_public?: boolean; created_at?: string; updated_at?: string; }
      }
      contact_messages: {
        Row: { id: string; name: string; email: string; phone: string | null; subject: string | null; message: string; status: 'new' | 'read' | 'replied' | 'archived'; created_at: string; updated_at: string; }
        Insert: { id?: string; name: string; email: string; phone?: string | null; subject?: string | null; message: string; status?: 'new' | 'read' | 'replied' | 'archived'; created_at?: string; updated_at?: string; }
        Update: { id?: string; name?: string; email?: string; phone?: string | null; subject?: string | null; message?: string; status?: 'new' | 'read' | 'replied' | 'archived'; created_at?: string; updated_at?: string; }
      }
      appointments: {
        Row: { id: string; name: string; email: string; phone: string | null; requested_date: string; requested_time: string | null; reason: string; status: 'new' | 'confirmed' | 'completed' | 'cancelled'; admin_notes: string | null; created_at: string; updated_at: string; }
        Insert: { id?: string; name: string; email: string; phone?: string | null; requested_date: string; requested_time?: string | null; reason: string; status?: 'new' | 'confirmed' | 'completed' | 'cancelled'; admin_notes?: string | null; created_at?: string; updated_at?: string; }
        Update: { id?: string; name?: string; email?: string; phone?: string | null; requested_date?: string; requested_time?: string | null; reason?: string; status?: 'new' | 'confirmed' | 'completed' | 'cancelled'; admin_notes?: string | null; created_at?: string; updated_at?: string; }
      }
      site_settings: {
        Row: { id: string; site_name: string | null; logo_url: string | null; profile_photo_url: string | null; biography: string | null; mission: string | null; vision: string | null; contact_email: string | null; contact_phone: string | null; whatsapp_number: string | null; created_at: string; updated_at: string; }
        Insert: { id?: string; site_name?: string | null; logo_url?: string | null; profile_photo_url?: string | null; biography?: string | null; mission?: string | null; vision?: string | null; contact_email?: string | null; contact_phone?: string | null; whatsapp_number?: string | null; created_at?: string; updated_at?: string; }
        Update: { id?: string; site_name?: string | null; logo_url?: string | null; profile_photo_url?: string | null; biography?: string | null; mission?: string | null; vision?: string | null; contact_email?: string | null; contact_phone?: string | null; whatsapp_number?: string | null; created_at?: string; updated_at?: string; }
      }
      social_links: {
        Row: { id: string; platform: string; url: string; icon: string | null; is_active: boolean; sort_order: number; created_at: string; updated_at: string; }
        Insert: { id?: string; platform: string; url: string; icon?: string | null; is_active?: boolean; sort_order?: number; created_at?: string; updated_at?: string; }
        Update: { id?: string; platform?: string; url?: string; icon?: string | null; is_active?: boolean; sort_order?: number; created_at?: string; updated_at?: string; }
      }
    }
  }
}

