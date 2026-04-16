import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'İç Mimar Dilek Karaman - DK İç Mimarlık | Fütüristik Tasarım',
  description: 'Teknoloji ve estetiğin mükemmel buluşması. Akıllı yaşam alanları, fütüristik tasarımlar ve sürdürülebilir çözümlerle geleceğin iç mimarisini şekillendiriyoruz.',
  keywords: ['iç mimar', 'iç tasarım', 'akıllı ev', 'fütüristik tasarım', 'lüks konut', 'ofis tasarımı', 'İstanbul'],
  authors: [{ name: 'DK İç Mimarlık' }],
  openGraph: {
    title: 'İç Mimar Dilek Karaman - DK İç Mimarlık',
    description: 'Fütüristik iç mimarlık ve akıllı yaşam alanları tasarımı',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
