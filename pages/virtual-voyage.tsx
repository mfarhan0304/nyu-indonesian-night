import React, { useEffect, useRef } from 'react'
import DefaultBooth from '@/components/default-booth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VirtualVoyageBooth() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => {
        const backgroundAudio = document.querySelector('audio') as HTMLAudioElement
        if (backgroundAudio) {
          backgroundAudio.pause()
        }
      }

      const handlePause = () => {
        const backgroundAudio = document.querySelector('audio') as HTMLAudioElement
        if (backgroundAudio) {
          backgroundAudio.play()
        }
      }

      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  return (
    <DefaultBooth
      title="Virtual Voyage"
      description="Explore Indonesia's breathtaking scenery"
      image="/placeholder.svg?height=300&width=450&text=Virtual+Voyage"
    >
      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="video">Video</TabsTrigger>
        </TabsList>
        <TabsContent value="image">
          <img src="/placeholder.svg?height=300&width=450&text=Virtual+Voyage" alt="Virtual Voyage" className="w-full h-48 sm:h-64 object-cover rounded-md" />
        </TabsContent>
        <TabsContent value="video">
          <video 
            ref={videoRef}
            src="https://example.com/indonesia-vr-tour.mp4" 
            controls 
            className="w-full h-48 sm:h-64 object-cover rounded-md"
          >
            Your browser does not support the video tag.
          </video>
        </TabsContent>
      </Tabs>
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Experience Indonesia in VR</h2>
        <p className="text-sm sm:text-base">
          Immerse yourself in the breathtaking landscapes of Indonesia through our cutting-edge VR experience. 
          From the pristine beaches of Bali to the lush jungles of Sumatra, explore the diverse beauty of the archipelago 
          from the comfort of our booth.
        </p>
      </div>
    </DefaultBooth>
  )
}