import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from 'lucide-react'

export default function SenseOfTheIslandBooth() {
  const coffeeInfo = [
    { name: "Sumatra Mandheling", description: "Known for its full body, low acidity, and notes of chocolate and earthy spices." },
    { name: "Java", description: "Typically has a heavy body, sweet overall impression, and rustic flavors." },
    { name: "Sulawesi Toraja", description: "Characterized by its full body, rich flavor, and notes of dark chocolate and spices." },
    { name: "Bali Kintamani", description: "Known for its clean, sweet flavor with notes of citrus and a syrupy body." },
    { name: "Papua Wamena", description: "Rare and exotic, with a balanced body and flavors of nuts and spices." }
  ]

  return (
    <DefaultBooth
      title="Sense of the Island"
      description="Experience the flavors and aromas of Indonesia"
      image="/images/sense-of-islands-details.webp"
    >
      <div className="mt-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#A7727D]">Indonesian Coffee Varieties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Indonesia is the fourth-largest coffee producer in the world, known for its wide variety of unique and flavorful beans. Here are some of the most notable Indonesian coffee varieties:</p>
            <ul className="list-disc list-inside space-y-2">
              {coffeeInfo.map((coffee) => (
                <li key={coffee.name}>
                  <span className="font-semibold">{coffee.name}</span>: {coffee.description}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#A7727D]">How to Make Tempeh Mendoan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Tempeh Mendoan is a popular Indonesian snack from Banyumas, Central Java. Here&apos;s a simple recipe:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Slice tempeh thinly (about 3mm thick).</li>
              <li>Mix flour, rice flour, salt, and water to make a thin batter.</li>
              <li>Add chopped scallions and coriander leaves to the batter.</li>
              <li>Dip tempeh slices in the batter.</li>
              <li>Fry in hot oil until light golden (not too crispy).</li>
              <li>Serve with chili sauce or sambal.</li>
            </ol>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="mb-4">For more delicious Indonesian tempeh products, follow @bostempeh on Instagram!</p>
          <Button asChild className="bg-[#A7727D] hover:bg-[#8B5D6B] text-white">
            <a href="https://www.instagram.com/bostempeh" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-4 w-4" /> Follow @bostempeh
            </a>
          </Button>
        </div>
      </div>
    </DefaultBooth>
  )
}