import '@/styles/globals.css'
import Head from 'next/head'
import { ProductContextProvider } from '@/contexts/productContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <title>80Lines React Challenge</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ProductContextProvider>
          <Component {...pageProps} />
        </ProductContextProvider>
      </QueryClientProvider>
    </>
  )
}
