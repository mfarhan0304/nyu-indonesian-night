import DefaultBooth from '@/components/default-booth'

export default function VirtualVoyageBooth() {
  return (
    <DefaultBooth
      title="Virtual Voyage"
      description="Embark on a virtual journey through Indonesia's diverse landscapes"
      image="/images/virtual-voyage-details.png"
    >
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Experience Komodo Island in 360°</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/osX-JP0ZL6g"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </DefaultBooth>
  )
}