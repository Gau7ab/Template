import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shikhar Lamichhane — Marketing Strategist | B2B Sales Expert | Corporate Trainer | MBA Educator',
  description:
    'Shikhar Lamichhane — Marketing Strategist, B2B Sales Expert, Corporate Trainer, Personality Development Trainer & MBA Educator with 8+ years across advertising, education, international business & academia in Nepal. Available for corporate training, workshops, speaking & collaboration.',
  keywords: [
    'Shikhar Lamichhane',
    'B2B sales Nepal',
    'marketing strategy Nepal',
    'corporate trainer Nepal',
    'personality development trainer',
    'MBA educator Nepal',
    'sales training Nepal',
    'business communication etiquette',
    'Boston International College',
    'marketing strategist Bharatpur',
    'B2B sales expert',
    'corporate training workshops Nepal',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🎯%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
