import { GlobalStyle } from "@/styles/global";
import type { AppProps } from "next/app";

import { trpc } from "@/utils/trpc";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default trpc.withTRPC(App);
