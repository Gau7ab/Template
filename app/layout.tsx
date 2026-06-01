import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shikhar Lamichhane — Assistant Director MBA Program | Education Leader | Business Strategist',
  description:
    'Portfolio of Shikhar Lamichhane — Assistant Director of MBA/Graduate Program at Boston International College, Bharatpur. Education leader, business developer, and youth empowerment advocate with 7+ years of experience.',
  keywords: [
    'Shikhar Lamichhane',
    'Boston International College',
    'MBA Program Director',
    'Education Management',
    'Business Development',
    'Bharatpur Nepal',
    'Student Counseling',
    'Youth Empowerment',
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
