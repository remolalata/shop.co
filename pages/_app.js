import { MainContextProvider } from '@/context/MainContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  )
}
