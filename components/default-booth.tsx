import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface BoothProps {
  title: string
  description: string
  image: string
  children?: React.ReactNode
}

export default function DefaultBooth({ title, description, image, children }: BoothProps) {
  return (
    <div className="container mx-auto py-4 px-4 sm:py-8 sm:px-0">
      <Link href="/" passHref>
        <Button className="mb-4">Back to All Booths</Button>
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-4 text-sm sm:text-base">{description}</p>
      <img src={image} alt={title} className="w-full h-48 sm:h-64 object-cover rounded-md mb-4" />
      {children}
    </div>
  )
}