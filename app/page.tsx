import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const booths = [
  { id: 'virtual-voyage', title: 'Virtual Voyage', description: 'Explore Indonesia\'s breathtaking scenery', image: '/images/virtual-voyage.webp' },
  { id: 'woven-wonders', title: 'Woven Wonders', description: 'Slip into traditional Indonesian costumes', image: '/images/woven-wonders.webp' },
  { id: 'sense-of-islands', title: 'Sense of Islands', description: 'Indulge in Indonesia\'s sensory delights', image: '/images/sense-of-islands.webp' },
  { id: 'game-on', title: 'Game ON! Nusantara', description: 'Engage in classic Indonesian games', image: '/images/game-on.webp' },
  { id: 'bahasa-beyond', title: 'Bahasa & Beyond', description: 'Master simple Indonesian phrases', image: '/images/bahasa-beyond.webp' },
  { id: 'haunting-folklores', title: 'The Haunting Folklores', description: 'Encounter Indonesia\'s rich folklore and ghostly legends', image: '/images/haunting-folklores.webp' },
  { id: 'tats-and-tales', title: 'Tats & Tales', description: 'Discover your name in traditional Indonesian scripts', image: '/images/tats-and-tales.webp' },
  { id: 'primbon-check', title: 'Primbon & Khodam Check', description: 'Uncover the meaning of your birth date', image: '/images/primbon-check.webp' },
]

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Indonesian Cultural Event Booths</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booths.map((booth) => (
          <Card key={booth.id} className="flex flex-col overflow-hidden group">
            <div className="relative w-full h-[300px]">
              <Image
                src={booth.image}
                alt={booth.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold mb-2">{booth.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-200">{booth.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-0">
                  <Link href={`/${booth.id}`} passHref className="w-full">
                    <Button className="w-full bg-white bg-opacity-30 hover:bg-opacity-30 transition-colors">
                      Explore
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}