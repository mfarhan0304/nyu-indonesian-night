import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"

export default function HauntingFolkloresBooth() {
  const recommendations = [
    {
      title: "Satan's Slave",
      image: "/images/movies-placeholder.jpg?height=450&width=300&text=Satan's+Slave",
      link: "https://www.imdb.com/title/tt7076834/",
    },
    {
      title: "May The Devil Take You",
      image: "/images/movies-placeholder.jpg?height=450&width=300&text=May+The+Devil+Take+You",
      link: "https://www.imdb.com/title/tt8765496/",
    },
    {
      title: "Grave Torture",
      image: "/images/movies-placeholder.jpg?height=450&width=300&text=Grave+Torture",
      link: "https://www.imdb.com/title/tt27004148/",
    },
    {
      title: "Suzanna: Kliwon Friday Night",
      image: "/images/movies-placeholder.jpg?height=450&width=300&text=Suzanna:+Kliwon+Friday+Night",
      link: "https://www.imdb.com/title/tt27411059/",
    },
  ]

  return (
    <DefaultBooth
      title="Haunting Folklores"
      description="Explore the chilling world of Indonesian horror"
      image="/placeholder.svg?height=300&width=450&text=Haunting+Folklores"
    >
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recommended Horror Movies</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {recommendations.map((movie) => (
            <div key={movie.title} className="flex-shrink-0 w-48">
              <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
              <Button asChild className="w-full">
                <a href={movie.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DefaultBooth>
  )
}