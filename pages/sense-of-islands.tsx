import React from 'react'
import DefaultBooth from '@/components/default-booth'
import { Card, CardContent } from "@/components/ui/card"

export default function SenseOfIslandsBooth() {
  const senses = [
    { title: "Taste", description: "Sample virtual Indonesian delicacies" },
    { title: "Smell", description: "Experience the aroma of spices and tropical flowers" },
    { title: "Touch", description: "Feel the textures of traditional crafts" },
    { title: "Sound", description: "Listen to the melodies of gamelan music" },
    { title: "Sight", description: "View stunning landscapes and cultural artifacts" }
  ]

  return (
    <DefaultBooth
      title="Sense of Islands"
      description="Indulge in Indonesia's sensory delights"
      image="/images/sense-of-islands-details.png"
    >
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {senses.map((sense, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{sense.title}</h3>
              <p className="text-sm">{sense.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DefaultBooth>
  )
}