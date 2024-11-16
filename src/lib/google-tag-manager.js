/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Script from 'next/script';

const GTM = () => {
  return (
    <>
      <Head>
        <title>Google analytics nextjs script</title>
        <meta name="robots" content="noindex" key="robots" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
          key="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-D4DH8C5BXL`}
      />
      <Script
        id="ga-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-D4DH8C5BXL', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  );
};

export { GTM };