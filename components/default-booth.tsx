'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from 'lucide-react'

interface DefaultBoothProps {
  title: string
  description: string
  image: string
  children?: React.ReactNode
}

const DefaultBooth: React.FC<DefaultBoothProps> = ({ title, description, image, children }) => {
  const [isImageOpen, setIsImageOpen] = useState(false)

  // Calculate the aspect ratio based on the original image dimensions
  const aspectRatio = 3456 / 2304

  // Set a maximum width for the image on the page
  const maxWidth = 800

  // Calculate the height based on the aspect ratio and maxWidth
  const height = Math.round(maxWidth / aspectRatio)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8 relative">
        <Link href="/" passHref>
          <Button className="absolute top-4 left-4 bg-black hover:bg-gray-800 text-white">
            Back to Main Hall
          </Button>
        </Link>
        
        <div className="mt-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          
          <div className="max-w-[800px] mx-auto mb-8">
            <div 
              className="cursor-pointer"
              onClick={() => setIsImageOpen(true)}
            >
              <Image
                src={image}
                alt={title}
                width={maxWidth}
                height={height}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
        
        {children}
      </main>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <Button
            className="absolute right-2 top-2 rounded-full w-8 h-8 p-0"
            onClick={() => setIsImageOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <Image
            src={image}
            alt={title}
            width={3456}
            height={2304}
            className="object-contain"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DefaultBooth