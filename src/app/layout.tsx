import type {Metadata} from 'next';
import {Tajawal, Inter} from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'mybasket',
  description: 'B2B portfolio & product catalog'
};

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const tajawal = Tajawal({subsets: ['arabic'], variable: '--font-tajawal', weight: ['400','500','700']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${tajawal.variable}`}>
      <body className="min-h-screen bg-[#ffd363] text-[#155263]">
        {children}
      </body>
    </html>
  );
}
