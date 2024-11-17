/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Script from 'next/script';

const GTM = () => {
  return (
    <>
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