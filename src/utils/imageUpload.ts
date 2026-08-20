import { APP_IMAGES } from '../data/assets';

export interface PresetGalleryImage {
  id: string;
  name: string;
  url: string;
  category: 'DRONE' | 'PHOTOGRAPHY' | 'VIDEOGRAPHY' | 'CINEMATIC' | 'EVENTS' | 'PRODUCT' | 'SOCIAL MEDIA';
  description: string;
}

export const PRESET_STUDIO_GALLERY: PresetGalleryImage[] = [
  {
    id: 'preset-1',
    name: '8K Aerial Cinema Rig',
    url: APP_IMAGES.heroCinematic,
    category: 'DRONE',
    description: 'High-altitude aerial capture at twilight with custom anamorphic flare.',
  },
  {
    id: 'preset-2',
    name: 'SIRIN SKY 3D Drone Swarm',
    url: APP_IMAGES.skyDroneShow,
    category: 'DRONE',
    description: 'Synchronized 3D light swarm formation illuminating the night sky.',
  },
  {
    id: 'preset-3',
    name: 'Certified Cinema & Drone Crew',
    url: APP_IMAGES.filmCrew,
    category: 'CINEMATIC',
    description: 'Professional cinema camera rig and certified drone pilots on set.',
  },
  {
    id: 'preset-4',
    name: '360° Infinite Orbit Video Booth',
    url: APP_IMAGES.photoBooth,
    category: 'EVENTS',
    description: 'High-speed 120fps slow-motion interactive video platform for luxury events.',
  },
  {
    id: 'preset-5',
    name: 'Official SIRIN VISUALS Master Poster',
    url: APP_IMAGES.officialPoster,
    category: 'CINEMATIC',
    description: 'Signature brand artwork featuring the 8K drone rig and cinema lens flare.',
  },
  {
    id: 'preset-6',
    name: 'Geometric Brand Emblem',
    url: APP_IMAGES.logoBadge,
    category: 'PRODUCT',
    description: 'Precision isometric geometric brand identity badge in deep imperial purple.',
  },
];

/**
 * Reads a File from device gallery and compresses it to a lightweight Base64 DataURL
 * to prevent localStorage overflow and ensure instantaneous loading.
 */
export async function processGalleryImageUpload(
  file: File,
  maxWidth = 1600,
  maxHeight = 1200,
  quality = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    // If SVG or small file, read directly
    if (file.type === 'image/svg+xml' || file.size < 150 * 1024) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(e.target?.result as string);
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
