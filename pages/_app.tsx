import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import Wrapper from './components/Wrapper'

function MyApp({ Component, pageProps }: AppProps) {

  console.log('got pageProps', pageProps)

  console.log('got pageProps.session', pageProps.session)
  return( 
    <SessionProvider options={{clientMaxAge: 0}} session={pageProps.session}>
    <Wrapper>
    <Component {...pageProps} />
    </Wrapper>
    </SessionProvider>
)
}

export default MyApp
