import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-screen bg-gray-100 flex items-center '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
