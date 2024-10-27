import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"

export default function GameOnBooth() {
  const games = [
    {
      name: "Congklak",
      description: "A traditional board game played throughout Indonesia",
      link: "https://mancala.playdrift.com",
    },
    {
      name: "Gasing",
      description: "The gasing is a top made from bamboo with a small opening on the side",
      videoUrl: "https://www.youtube.com/watch?v=jcwNyUgzo_o",
    },
    {
      name: "Gobak Sodor",
      description: "A traditional Indonesian game of tag played between two teams",
      videoUrl: "https://www.youtube.com/watch?v=o0tPTGtCbq4",
    },
  ]

  return (
    <DefaultBooth
      title="Game ON! Nusantara"
      description="Experience traditional Indonesian games"
      image="/images/game-on-details.webp"
    >
      <div className="space-y-8 mt-8">
        {games.map((game) => (
          <div key={game.name} className="flex flex-row md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
              <p className="mb-4">{game.description}</p>
              {game.link && (
                <Button asChild>
                  <a href={game.link} target="_blank" rel="noopener noreferrer">Play {game.name}</a>
                </Button>
              )}
              {game.videoUrl && (
                <div>
                  <iframe
                    src={`https://www.youtube.com/embed/${game.videoUrl.split('v=')[1]}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DefaultBooth>
  )
}