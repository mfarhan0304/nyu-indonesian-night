import DefaultBooth from '@/components/default-booth'

export default function VirtualVoyageBooth() {
  return (
    <DefaultBooth
      title="Virtual Voyage"
      description="Embark on a virtual journey through Indonesia's diverse landscapes"
      image="/images/virtual-voyage-details.webp"
    >
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Explore Indonesia</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/5v6u_U6QRQA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Experience Komodo Island</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/RaTWq98hzF0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </DefaultBooth>
  )
}