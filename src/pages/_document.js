import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="favicon.png" />
      </Head>
      <title>Portfolio by Carla Jean - Web Developer & Designer in the Philippines</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}