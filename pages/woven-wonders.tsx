import DefaultBooth from '@/components/default-booth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WovenWondersBooth() {
  const traditionalClothes = [
    {
      name: "Ulos",
      description: "Ulos is a traditional cloth of the Batak people from North Sumatra. It's handwoven and used in almost all traditional ceremonies.",
      funFact: "Ulos is created using a back-strap loom and can take weeks to months to complete a single piece. It's traditionally given as a symbol of blessing and protection."
    },
    {
      name: "Songket",
      description: "Songket is a luxurious fabric that is hand-woven in silk or cotton, and intricately patterned with gold or silver threads.",
      funFact: "Originating from Sumatra, songket is now produced in many parts of Indonesia. It's often worn during ceremonial occasions and can take up to 3 months to weave a single piece."
    },
    {
      name: "Kebaya",
      description: "Kebaya is a traditional blouse-dress combination worn by women in Indonesia, Malaysia, Brunei, Singapore, and southern Thailand.",
      funFact: "While not a fabric itself, kebaya is an iconic garment often made from delicate materials like silk, thin cotton, or semi-transparent nylon or polyester, with intricate embroidery."
    }
  ]

  return (
    <DefaultBooth
      title="Woven Wonders"
      description="Explore the rich tapestry of Indonesian traditional textiles"
      image="/placeholder.svg?height=300&width=450&text=Woven+Wonders"
    >
      <div className="mt-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#A7727D]">Did You Know?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Indonesia is home to over 300 ethnic groups, each with their own traditional clothing. This diversity results in hundreds of different traditional garments across the archipelago!</p>
          </CardContent>
        </Card>

        {traditionalClothes.map((cloth) => (
          <Card key={cloth.name}>
            <CardHeader>
              <CardTitle className="text-[#A7727D]">{cloth.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{cloth.description}</p>
              <p className="font-semibold">Fun Fact: {cloth.funFact}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </DefaultBooth>
  )
}