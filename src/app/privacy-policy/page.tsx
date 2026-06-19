import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export { default } from '../privacy/page';

export const metadata: Metadata = {
  title: 'Privacy Policy - GlobalPlay',
  description:
    'Privacy policy for GlobalPlay.games, including analytics, cookies, embedded games, Google AdSense disclosures, and user choices.',
  alternates: {
    canonical: canonical('/privacy-policy'),
  },
};
