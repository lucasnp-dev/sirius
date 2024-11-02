import '../styles/globals.css'

import { AppProps } from 'next/app'
import localFont from 'next/font/local'

const geistSans = localFont({
  src: '../fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter-sans',
  weight: '100 900',
})

const sourceCodePro = localFont({
  src: '../fonts/SourceCodePro-Light.ttf',
  variable: '--font-source-code-pro',
  weight: '300',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component
      className={`${geistSans.variable} ${sourceCodePro.variable}`}
      {...pageProps}
    />
  )
}
