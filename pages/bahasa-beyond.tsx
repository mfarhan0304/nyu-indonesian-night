import DefaultBooth from '@/components/default-booth'
import IndonesianWordle from '@/components/indonesian-wordle'

export default function BahasaBeyondBooth() {
  return (
    <DefaultBooth
      title="Bahasa & Beyond"
      description="Master simple Indonesian phrases"
      image="/images/bahasa-beyond-details.webp"
    >
      <div className="mt-4">
        <IndonesianWordle />
      </div>
    </DefaultBooth>
  )
}