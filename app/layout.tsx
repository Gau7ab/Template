import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio — Faculty Coordinator • Mentor • HR Expert • IELTS Tutor',
  description:
    'Portfolio of a dynamic College Faculty Coordinator, Mentor, HR Professional, and IELTS Tutor. Empowering students and professionals to achieve their full potential.',
  keywords: [
    'Faculty Coordinator',
    'Mentor',
    'HR Professional',
    'IELTS Tutor',
    'Education',
    'Career Mentorship',
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
