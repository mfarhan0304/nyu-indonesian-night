'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const booths = [
  { id: 'virtual-voyage', title: 'Virtual Voyage', description: 'Explore Indonesia\'s breathtaking scenery', image: '/images/virtual-voyage.webp' },
  { id: 'woven-wonders', title: 'Woven Wonders', description: 'Slip into traditional Indonesian costumes', image: '/images/woven-wonders.webp' },
  { id: 'sense-of-islands', title: 'Sense of the Islands', description: 'Indulge in Indonesia\'s sensory delights', image: '/images/sense-of-islands.webp' },
  { id: 'game-on', title: 'Game ON! Nusantara', description: 'Engage in classic Indonesian games', image: '/images/game-on.webp' },
  { id: 'bahasa-beyond', title: 'Bahasa & Beyond', description: 'Master simple Indonesian phrases', image: '/images/bahasa-beyond.webp' },
  { id: 'haunting-folklores', title: 'The Haunting Folklores', description: 'Encounter Indonesia\'s rich folklore and ghostly legends', image: '/images/haunting-folklores.webp' },
  { id: 'tats-and-tales', title: 'Tats & Tales', description: 'Discover your name in traditional Indonesian scripts', image: '/images/tats-and-tales.webp' },
  { id: 'primbon-check', title: 'Primbon & Khodam Check', description: 'Uncover the meaning of your birth date', image: '/images/primbon-check.webp' },
]

export default function Home() {
  const [hoveredBooth, setHoveredBooth] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F9F5E7] text-[#4A4A4A]">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#A7727D] mb-4">Welcome to the Indonesian Cultural Event</h1>
          <p className="text-xl mb-8">Explore the rich and diverse culture of Indonesia through our interactive booths</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {booths.map((booth) => (
            <Link href={`/${booth.id}`} key={booth.title} passHref>
              <Card 
                className="h-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredBooth(booth.title)}
                onMouseLeave={() => setHoveredBooth(null)}
              >
                <div className="relative w-full h-[300px]">
                  <Image
                    src={booth.image}
                    alt={booth.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="z-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-90" />
                  <CardContent className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${hoveredBooth === booth.title ? 'text-[#F9F5E7]' : ''}`}>
                      {booth.title}
                    </h2>
                    <p className="text-sm mb-4">{booth.description}</p>
                  </CardContent>
                  <CardFooter className="absolute bottom-0 left-0 right-0 z-20 p-4">
                    <Button className="w-full bg-[#A7727D] hover:bg-[#8B5D6B] text-white">
                      Visit Booth
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-[#A7727D] text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Indonesian Cultural Event. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}