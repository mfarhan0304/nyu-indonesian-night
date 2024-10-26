import React from 'react'
import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"
import IndonesianWordle from '@/components/indonesian-wordle'

export default function BahasaBeyondBooth() {
  return (
    <DefaultBooth
      title="Bahasa & Beyond"
      description="Master simple Indonesian phrases"
      image="/placeholder.svg?height=300&width=450&text=Bahasa+&+Beyond"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Learn Indonesian</h2>
        <p className="text-sm sm:text-base mb-4">
          Dive into the Indonesian language with our interactive learning tools and games.
        </p>
        <Button className="mb-4">Start Language Lesson</Button>
        <h3 className="text-lg font-semibold mb-2">Play Indonesian Wordle</h3>
        <IndonesianWordle />
      </div>
    </DefaultBooth>
  )
}