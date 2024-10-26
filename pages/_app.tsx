import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"
import BackgroundMusic from '@/components/background-music'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      <BackgroundMusic />
    </ThemeProvider>
  )
}