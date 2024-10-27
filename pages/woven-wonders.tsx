import React from 'react'
import DefaultBooth from '@/components/default-booth'

export default function WovenWondersBooth() {
  return (
    <DefaultBooth
      title="Woven Wonders"
      description="Slip into traditional Indonesian costumes"
      image="/images/woven-wonders-details.webp"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Explore Indonesian Textiles</h2>
        <p className="text-sm sm:text-base mb-4">
          Discover the rich tapestry of Indonesian textiles, from intricate batik patterns to 
          handwoven ikat fabrics. Each piece tells a story of cultural heritage and artisanal skill.
        </p>
      </div>
    </DefaultBooth>
  )
}