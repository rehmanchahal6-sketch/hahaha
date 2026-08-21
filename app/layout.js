import { Bricolage_Grotesque, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { QuoteProvider } from '@/components/QuoteProvider';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-loaded',
  display: 'swap',
});

const body = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body-loaded',
  display: 'swap',
});

export const metadata = {
  title: 'Paudelon | Retention Expertise — Email & SMS',
  description:
    'Paudelon is the retention partner for DTC brands. Email & SMS frameworks, campaigns, testing, and optimization that scale repeat revenue.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <QuoteProvider>
          <ScrollProgress />
          <div className="site-shell">
            <Header />
            <main className="site-main">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
