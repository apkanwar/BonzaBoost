import '@/styles/globals.css'

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
      <Component {...pageProps} />
    </main>
  )
}