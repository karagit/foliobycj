import localFont from 'next/font/local';
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";

const veryVogueText = localFont({
  src: '../fonts/VeryVogueText.otf',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
