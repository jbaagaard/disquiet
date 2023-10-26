import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../features/themeContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Disquiet me</title>
        <meta name={""} content={""} />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}
