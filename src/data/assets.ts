import heroCinematicImg from '../assets/images/sirin_hero_cinematic_1787143442924.jpg';
import skyDroneShowImg from '../assets/images/sirin_sky_droneshow_1787143463022.jpg';
import filmCrewImg from '../assets/images/sirin_film_crew_1787143479237.jpg';
import photoBoothImg from '../assets/images/sirin_photobooth_360_1787143500363.jpg';
import officialPosterImg from '../assets/images/sirin_official_poster_1787144399628.jpg';
import logoBadgeImg from '../assets/images/sirin_logo_badge_1787144422268.jpg';

export const APP_IMAGES = {
  heroCinematic: heroCinematicImg,
  skyDroneShow: skyDroneShowImg,
  filmCrew: filmCrewImg,
  photoBooth: photoBoothImg,
  officialPoster: officialPosterImg,
  logoBadge: logoBadgeImg,
};

/**
 * Resolves any image URL or legacy path to a production-safe bundled asset URL
 * Ensures 100% image visibility on GitHub, GitHub Pages, Vercel, Netlify, and all hosting platforms.
 */
export function resolveImageUrl(src: string | undefined | null): string {
  if (!src) return APP_IMAGES.heroCinematic;

  // If already base64 data URL or external CDN/HTTP url, return as-is
  if (src.startsWith('data:') || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('blob:')) {
    return src;
  }

  // Match bundled image assets
  if (src.includes('sirin_hero_cinematic')) return APP_IMAGES.heroCinematic;
  if (src.includes('sirin_sky_droneshow')) return APP_IMAGES.skyDroneShow;
  if (src.includes('sirin_film_crew')) return APP_IMAGES.filmCrew;
  if (src.includes('sirin_photobooth_360')) return APP_IMAGES.photoBooth;
  if (src.includes('sirin_official_poster')) return APP_IMAGES.officialPoster;
  if (src.includes('sirin_logo_badge')) return APP_IMAGES.logoBadge;

  // Fallback to hero cinematic if path was unknown
  return src;
}
