import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes"
import BackgroundMusic from '@/components/background-music'
import '@/app/globals.css'
import { Toaster } from "@/components/ui/toaster"

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
      <Toaster />
    </ThemeProvider>
  )
}