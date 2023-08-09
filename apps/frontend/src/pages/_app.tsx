import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <title>80Lines React Challenge</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
