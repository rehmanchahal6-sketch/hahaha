import { Bricolage_Grotesque, Source_Serif_4 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { QuoteProvider } from '@/components/QuoteProvider';
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
  title: 'Paudelon | Technology, Email & Web',
  description:
    'Paudelon helps businesses with IT support, email marketing, automation, and web solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <QuoteProvider>
          <div className="site-shell">
            <Header />
            <main className="site-main">{children}</main>
            <Footer />
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}
