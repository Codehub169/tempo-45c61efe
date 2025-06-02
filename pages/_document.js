import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Specific font links via <link> are generally not needed when using next/font as in _app.js */}
      </Head>
      <body className="bg-neutral-DEFAULT text-neutral-text antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
