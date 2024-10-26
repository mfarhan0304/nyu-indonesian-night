import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"

export default function HauntingFolkloresBooth() {
  const recommendations = [
    {
      title: "Satan's Slave",
      image: "/images/satans-slave.jpg?height=450&width=300&text=Satan's+Slave",
      link: "https://www.imdb.com/title/tt7076834/",
    },
    {
      title: "May The Devil Take You",
      image: "/images/may-the-devil-take-you.jpg?height=450&width=300&text=May+The+Devil+Take+You",
      link: "https://www.imdb.com/title/tt8765496/",
    },
    {
      title: "Grave Torture",
      image: "/images/grave-torture.jpg?height=450&width=300&text=Grave+Torture",
      link: "https://www.imdb.com/title/tt27004148/",
    },
    {
      title: "Suzanna: Kliwon Friday Night",
      image: "/images/suzanna.jpg?height=450&width=300&text=Suzanna:+Kliwon+Friday+Night",
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
            <div key={movie.title} className="flex-shrink-0 w-48 flex flex-col">
              <div className="relative">
                {/* <h3 className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm font-semibold p-2 line-clamp-2 h-10 flex items-center justify-center text-center">
                  {movie.title}
                </h3> */}
                <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover rounded-lg" />
              </div>
              <Button asChild className="w-full mt-2">
                <a href={movie.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DefaultBooth>
  )
}