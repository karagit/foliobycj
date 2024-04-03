import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="favicon.png" />
      </Head>
      <title>Portfolio | Carla Jean</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}