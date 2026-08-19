import { ALL_LANGUAGES, LanguageOption } from '../data/languages';

const COOKIE_DOMAIN = typeof window !== 'undefined' ? window.location.hostname : '';

export function getCurrentLanguageCode(): string {
  if (typeof document === 'undefined') return 'en';
  
  // Check cookie first
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (match && match[1]) {
    const parts = match[1].split('/');
    if (parts.length >= 3 && parts[2]) {
      return parts[2];
    }
  }

  // Check localStorage fallback
  try {
    const saved = localStorage.getItem('sirin_app_language_code');
    if (saved) return saved;
  } catch (e) {}

  return 'en';
}

export function setGoogleTranslateLanguage(langCode: string): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  try {
    localStorage.setItem('sirin_app_language_code', langCode);
  } catch (e) {}

  // Set the standard googtrans cookie
  const cookieVal = `/en/${langCode}`;
  
  // Set for current domain, root path, and session
  document.cookie = `googtrans=${cookieVal}; path=/;`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=.${COOKIE_DOMAIN};`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${COOKIE_DOMAIN};`;

  // Trigger select change on google translate combo if present
  const selectElem = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (selectElem) {
    selectElem.value = langCode;
    selectElem.dispatchEvent(new Event('change'));
    return;
  }

  // If select element is not yet attached, reload or initialize
  window.location.reload();
}

export function getLanguageByCode(code: string): LanguageOption {
  return (
    ALL_LANGUAGES.find((l) => l.code === code) ||
    ALL_LANGUAGES.find((l) => l.code.startsWith(code)) || {
      code,
      name: code.toUpperCase(),
      nativeName: code.toUpperCase(),
      flag: '🌐',
    }
  );
}
