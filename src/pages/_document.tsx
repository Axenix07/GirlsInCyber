import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>AFCEDS</title>
        <meta
            name="description"
            content="Air Force Center for Electronic Distribution of Systems (AFCEDS) is a centralized tool for users to download commercial software products, and organically developed solutions."
          />
        <link rel="icon" href="/AFLCMC.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
