import Image from 'next/image'
import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HauntingFolkloresBooth() {
  const recommendations = [
    {
      title: "Satan's Slave",
      image: "/images/satans-slave.jpg",
      link: "https://www.imdb.com/title/tt7076834/",
    },
    {
      title: "Impetigore",
      image: "/images/impetigore.jpg",
      link: "https://www.imdb.com/title/tt9000302/",
    },
    {
      title: "Macabre",
      image: "/images/macabre.jpg",
      link: "https://www.imdb.com/title/tt1447791/",
    },
    {
      title: "Dancing Village: The Curse Begins",
      image: "/images/kkn.jpg",
      link: "https://www.imdb.com/title/tt28763074/",
    },
    {
      title: "Suzanna: Kliwon Friday Night",
      image: "/images/suzanna.jpg",
      link: "https://www.imdb.com/title/tt27411059/",
    },
    {
      title: "May The Devil Take You",
      image: "/images/may-the-devil-take-you.jpg",
      link: "https://www.imdb.com/title/tt8765496/",
    },
  ]

  const legends = [
    {
      name: "Kuntilanak",
      story: "Kuntilanak is a female vampiric ghost in Indonesian mythology. She is said to be the spirit  of a woman who died during childbirth and is often depicted as a beautiful woman with long black hair, dressed in white.",
      funFact: "The scent of frangipani flowers is said to indicate the presence of a Kuntilanak. In some versions of the legend, if you can drive a nail into the hole in her neck, she will turn into a beautiful woman and become your wife!",
      image: "/images/kuntilanak.webp"
    },
    {
      name: "Si Manis Jembatan Ancol",
      story: "This legend tells the story of a beautiful young woman named Ariah who was murdered on the Ancol Bridge in Jakarta. Her ghost is said to haunt the bridge, appearing to lone travelers at night.",
      funFact: "The legend has inspired numerous films and TV shows in Indonesia. Some versions of the story claim that if you drive across the Ancol Bridge at midnight and look in your rearview mirror, you might see Ariah sitting in your backseat!",
      image: "/images/si-manis-jembatan-ancol.jpg"
    },
    {
      name: "Kuyang",
      story: "The Kuyang is a type of vampire in the folklore of Kalimantan. It's believed to be a person who practices black magic and can detach their head from their body at night to fly around and hunt for blood or unborn children.",
      funFact: "It's said that you can prevent a Kuyang from reattaching its head by placing salt, shattered glass, or thorny leaves around its body while the head is away.",
      image: "/images/kuyang.jpg"
    },
    {
      name: "Sundel Bolong",
      story: "Sundel Bolong is the ghost of a beautiful woman who died during childbirth and is buried with her unborn baby. She appears as a long-haired woman in a white dress, with a large hole in her back, hence the name 'bolong' which means 'hole' in Indonesian.",
      funFact: "Despite her terrifying appearance, some legends portray Sundel Bolong as a protective spirit for women and children, particularly those who have been abused or abandoned.",
      image: "/images/sundel-bolong.jpg"
    }
  ]

  return (
    <DefaultBooth
      title="Haunting Folklores"
      description="Explore the chilling world of Indonesian horror"
      image="/images/haunting-folklores-details.webp"
    >
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#A7727D]">Indonesian Legends</h2>
        <div className="space-y-4 mb-8">
          {legends.map((legend) => (
            <Card key={legend.name}>
              <CardHeader>
                <CardTitle className="text-[#A7727D]">{legend.name}</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="md:flex md:space-x-4 items-center">
                  <div className="relative">
                    <Image
                      src={legend.image}
                      alt={legend.name}
                      width={300}
                      height={450}
                      layout="responsive"
                      className="rounded-lg object-cover w-full h-72"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <p className="mb-2">{legend.story}</p>
                    <p className="font-semibold">Fun Fact: {legend.funFact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-[#A7727D]">Recommended Horror Movies</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {recommendations.map((movie) => (
            <div key={movie.title} className="flex-shrink-0 w-48 flex flex-col">
              <div className="relative">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
              <Button asChild className="w-full mt-2 bg-[#A7727D] hover:bg-[#8B5D6B] text-white">
                <a href={movie.link} target="_blank" rel="noopener noreferrer">Watch Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DefaultBooth>
  )
}