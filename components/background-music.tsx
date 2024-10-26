'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1 // Set volume to 10%
      audioRef.current.loop = true
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      if (audioRef.current && isPlaying) {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error))
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router, isPlaying])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current?.pause()
      } else if (isPlaying) {
        audioRef.current?.play().catch(error => console.error("Error playing audio:", error))
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error))
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/path-to-your-audio-file.mp3" />
      <button
        onClick={togglePlay}
        className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
      >
        {isPlaying ? '🔇 Mute' : '🔊 Unmute'}
      </button>
    </div>
  )
}