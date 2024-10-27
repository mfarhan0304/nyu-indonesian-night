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
        <title>Indonesian Cultural Event</title>
        <meta name="description" content="Explore the rich culture of Indonesia through interactive booths" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-[#F9F5E7] text-[#4A4A4A]">
        <header className="bg-[#A7727D] text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Indonesian Cultural Event</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
        <footer className="bg-[#A7727D] text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2023 Indonesian Cultural Event. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <Toaster />
    </ThemeProvider>
  )
}

export default MyApp