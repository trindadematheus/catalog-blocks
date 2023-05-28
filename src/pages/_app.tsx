import { GlobalStyle } from "@/styles/global";

import Head from "next/head";
import type { AppProps } from "next/app";

import { trpc } from "@/utils/trpc";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <title>Catálogo - Blocks</title>
      </Head>

      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default trpc.withTRPC(App);
