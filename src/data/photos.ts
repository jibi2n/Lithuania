import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

export function photo(slug: string): ImageMetadata {
  const file = files[`../assets/photos/${slug}.jpg`];
  if (!file) throw new Error(`Missing photo: src/assets/photos/${slug}.jpg`);
  return file.default;
}

/** Small WebP URL for photos swapped in by client-side scripts (games, map cards). */
export async function photoUrl(slug: string, width = 640): Promise<string> {
  return (await getImage({ src: photo(slug), width, format: 'webp', quality: 70 })).src;
}
