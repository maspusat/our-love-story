import { z } from "zod";

export const gallerySchema = z.object({
  title: z
    .string()
    .min(3, "Minimal 3 karakter")
    .max(100),

  description: z
    .string()
    .max(500)
    .optional(),
});

export type GallerySchema = z.infer<typeof gallerySchema>;