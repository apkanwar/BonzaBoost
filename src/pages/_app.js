import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {

  return (
    <main>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16778799212"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16778799212');
        `}
      </Script>

      <Script id="crisp">
        {`
          window.$crisp=[];window.CRISP_WEBSITE_ID="0c5c017c-d065-43b6-a15b-813ffe7f25f0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}