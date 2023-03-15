import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1362806546794686"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="min-h-screen bg-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
