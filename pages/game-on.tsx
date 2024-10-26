import React from 'react'
import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"

export default function GameOnBooth() {
  const games = [
    { name: "Congklak", description: "Traditional board game of strategy" },
    { name: "Gobak Sodor", description: "Team game of agility and strategy" },
    { name: "Engklek", description: "Hopscotch-like game of balance and aim" }
  ]

  return (
    <DefaultBooth
      title="Game ON! Nusantara"
      description="Engage in classic Indonesian games"
      image="/placeholder.svg?height=300&width=450&text=Game+ON!+Nusantara"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Traditional Games</h2>
        <ul className="space-y-4">
          {games.map((game, index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{game.name}</h3>
                <p className="text-sm">{game.description}</p>
              </div>
              <Button>Play</Button>
            </li>
          ))}
        </ul>
      </div>
    </DefaultBooth>
  )
}