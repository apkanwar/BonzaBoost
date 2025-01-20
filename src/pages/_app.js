import '@/styles/globals.css'
import Script from 'next/script';
import { DefaultSeo } from 'next-seo'
// import TagManager from 'react-gtm-module';
import { v4 as uuid4 } from 'uuid'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // const tagManagerArgs = {
    //   gtmId: ''
    // }
    // TagManager.initialize(tagManagerArgs)

    const uuid = localStorage.getItem('uuid') ?? uuid4()
    localStorage.setItem('uuid', uuid)
  }, [])

  return (
    <main>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en',
          siteName: 'Bonza Boost'
        }}
      />

      <Script id="crisp">
        {`
          window.$crisp=[];window.CRISP_WEBSITE_ID="0c5c017c-d065-43b6-a15b-813ffe7f25f0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
        `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}