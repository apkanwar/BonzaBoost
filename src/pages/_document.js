import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="Shortcut Icon" href="favicon.ico" />
      </Head>
      <body className="bg-dMode">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
