'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DefaultBoothProps {
  title: string
  description: string
  image: string
  children?: React.ReactNode
}

const DefaultBooth: React.FC<DefaultBoothProps> = ({ title, description, image, children }) => {
  const aspectRatio = 3456 / 2304
  const maxWidth = 800
  const height = Math.round(maxWidth / aspectRatio)

  return (
    <div className="min-h-screen bg-[#F9F5E7] text-[#4A4A4A]">
      <main className="container mx-auto px-4 py-8 relative">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" passHref>
            <Button className="bg-[#A7727D] hover:bg-[#8B5D6B] text-white">
              Back to Main Hall
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#A7727D]">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          
          <div className="max-w-[800px] mx-auto mb-8">
            <div className="cursor-pointer">
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

        <Card className="mt-12 bg-[#A7727D] text-white">
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-center">
              Want to explore more? Come and ask our team at the booth!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default DefaultBooth