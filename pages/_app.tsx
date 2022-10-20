import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp;
