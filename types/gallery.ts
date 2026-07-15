export type Gallery = {
  id: string;
  title: string;
  description: string | null;

  image_url: string;
  storage_path: string;

  display_order: number;

  is_favorite: boolean;

  is_published: boolean;

  created_at: string;
  updated_at: string;
};