import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="Shortcut Icon" href="logo.png" />
      </Head>
      <GoogleTagManager gtmId="G-D4DH8C5BXL" />
      <body className="bg-dMode">
        <Main />
        <NextScript />
        <Script src="https://platform.billgang.com/embed.js" strategy="beforeInteractive"/>
      </body>
    </Html>
  )
}
