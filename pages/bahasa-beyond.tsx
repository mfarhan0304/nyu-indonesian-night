import DefaultBooth from '@/components/default-booth'
import IndonesianWordle from '@/components/indonesian-wordle'

export default function BahasaBeyondBooth() {
  return (
    <DefaultBooth
      title="Bahasa & Beyond"
      description="Master simple Indonesian phrases"
      image="/path/to/your/high-resolution-image.jpg"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Learn Indonesian</h2>
        <p className="text-sm sm:text-base mb-4">
          Dive into the Indonesian language with our interactive learning tools and games.
        </p>
        <IndonesianWordle />
      </div>
    </DefaultBooth>
  )
}