/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Script from 'next/script';

const GTM = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" key="robots" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
          key="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
      </Head>
      <Script src="https://platform.billgang.com/embed.js" strategy="beforeInteractive" />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="ga-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  );
};

export { GTM };