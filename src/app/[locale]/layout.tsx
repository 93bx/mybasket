import type {Metadata} from 'next';
import {Tajawal, Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import '../globals.css';
import {locales} from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'mybasket',
  description: 'B2B portfolio & product catalog'
};

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const tajawal = Tajawal({subsets: ['arabic'], variable: '--font-tajawal', weight: ['400','500','700']});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: 'en' | 'ar'};
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${tajawal.variable}`}>
      <body className="min-h-screen bg-[#ffd363] text-[#155263]">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
