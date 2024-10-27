import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from "next-themes"
import '@/app/globals.css'
import { Toaster } from "@/components/ui/toaster"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        <title>This is Indonesia</title>
        <meta name="description" content="Explore the rich culture of Indonesia through interactive booths" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-[#F9F5E7] text-[#4A4A4A]">
        <header className="bg-[#A7727D] text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">This is Indonesia</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default MyApp