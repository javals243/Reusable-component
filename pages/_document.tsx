import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr" className="scroll-pt-[2rem] scroll-smooth">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,500;0,700;0,900;1,100;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <body></body>

          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
        </Head>
        <body className="relative bg-gray-50 text-gray-600 antialiased selection:bg-fuchsia-200 selection:text-gray-900 dark:bg-gray-900  dark:text-gray-400 dark:selection:bg-fuchsia-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
