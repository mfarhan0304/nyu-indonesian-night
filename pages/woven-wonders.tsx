import React from 'react'
import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"

export default function WovenWondersBooth() {
  return (
    <DefaultBooth
      title="Woven Wonders"
      description="Slip into traditional Indonesian costumes"
      image="/placeholder.svg?height=300&width=450&text=Woven+Wonders"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Explore Indonesian Textiles</h2>
        <p className="text-sm sm:text-base mb-4">
          Discover the rich tapestry of Indonesian textiles, from intricate batik patterns to 
          handwoven ikat fabrics. Each piece tells a story of cultural heritage and artisanal skill.
        </p>
        <Button>Try on Virtual Costume</Button>
      </div>
    </DefaultBooth>
  )
}