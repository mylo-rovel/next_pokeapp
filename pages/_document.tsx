import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from "@nextui-org/react";

export default function Document(ctx: DocumentContext) {
  
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
