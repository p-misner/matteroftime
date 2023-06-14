import Document, { Head, Html, Main, NextScript } from 'next/document'
    import { ServerStyleSheet } from 'styled-components'

    export default class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }

      static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
            })

          const initialProps = await Document.getInitialProps(ctx)
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal()
        }
      }
    }