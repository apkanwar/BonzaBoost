import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="Shortcut Icon" href="logo.png" />        
      </Head>
      <body className="bg-dMode">
        <Main />
        <NextScript />
        <Script src="https://platform.billgang.com/embed.js" strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
