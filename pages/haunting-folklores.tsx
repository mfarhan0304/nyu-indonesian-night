import React from 'react'
import DefaultBooth from '@/components/default-booth'
import { Card, CardContent } from "@/components/ui/card"

export default function HauntingFolkloresBooth() {
  const movies = [
    { title: 'Pengabdi Setan', url: 'https://www.netflix.com/title/81012591' },
    { title: 'Impetigore', url: 'https://www.netflix.com/title/81307787' },
    { title: 'May the Devil Take You', url: 'https://www.netflix.com/title/81028889' },
    { title: 'The 3rd Eye', url: 'https://www.netflix.com/title/81012586' }
  ]

  return (
    <DefaultBooth
      title="The Haunting Folklores"
      description="Encounter Indonesia's rich folklore and ghostly legends"
      image="/placeholder.svg?height=300&width=450&text=Haunting+Folklores"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Explore Indonesian Horror</h2>
        <p className="text-sm sm:text-base mb-4">
          Dive into the chilling world of Indonesian folklore and supernatural tales.
        </p>
        <h3 className="text-lg font-semibold mb-2">Recommended Movies on Netflix</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {movies.map((movie, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <a href={movie.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {movie.title}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DefaultBooth>
  )
}