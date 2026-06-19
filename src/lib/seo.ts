export const SITE_URL = 'https://globalplay.games';

export function absoluteUrl(path = '') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function canonical(path = '') {
  return absoluteUrl(path);
}
