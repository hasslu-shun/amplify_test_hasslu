import Meta from 'components/Meta'
import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&amp;display=swap'
          as='style'
          rel='stylesheet preload'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&amp;display=swap'
          as='style'
          rel='stylesheet preload'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
