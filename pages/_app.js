import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { Inter, Poppins } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

function MyApp({ Component, pageProps, router }) {
  return (
    <main className={`${inter.variable} ${poppins.variable} font-sans`}>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </main>
  );
}

export default MyApp;
