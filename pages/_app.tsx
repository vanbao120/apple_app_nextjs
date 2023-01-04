import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'

import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Provider store={store}>
    <Toaster position='bottom-center' />
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </Provider>
}
