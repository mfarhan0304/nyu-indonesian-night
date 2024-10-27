'use client'

import React, { useState, useCallback, useEffect } from 'react'
import DefaultBooth from '@/components/default-booth'
import { Input } from "@/components/ui/text-input"

export default function TatsAndTalesBooth() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const convertToJavanese = useCallback((text: string) => {
    const javaneseMap: { [key: string]: string } = {
      'a': 'ꦲ', 'b': 'ꦧ', 'c': 'ꦕ', 'd': 'ꦢ', 'e': 'ꦲꦺ', 'f': 'ꦥ꦳', 'g': 'ꦒ', 'h': 'ꦲ', 'i': 'ꦲꦶ', 'j': 'ꦗ',
      'k': 'ꦏ', 'l': 'ꦭ', 'm': 'ꦩ', 'n': 'ꦤ', 'o': 'ꦲꦺꦴ', 'p': 'ꦥ', 'q': 'ꦐ', 'r': 'ꦫ', 's': 'ꦱ', 't': 'ꦠ',
      'u': 'ꦲꦸ', 'v': 'ꦮ꦳', 'w': 'ꦮ', 'x': 'ꦏ꧀ꦱ', 'y': 'ꦪ', 'z': 'ꦗ꦳'
    }

    return text.toLowerCase().split('').map(char => javaneseMap[char] || char).join('')
  }, [])

  useEffect(() => {
    setOutputText(convertToJavanese(inputText))
  }, [inputText, convertToJavanese])

  return (
    <DefaultBooth
      title="Tats & Tales"
      description="Discover your name in traditional Indonesian scripts"
      image="/images/tats-and-tales-details.webp"
    >
      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Convert Your Name to Hanacaraka!</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-1">Enter your name:</label>
            <Input
              id="inputText"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type here..."
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-1">Your Javanese Name:</label>
            <div 
              id="outputText"
              className="w-full p-2 bg-gray-100 rounded-md min-h-[50px] text-2xl"
            >
              {outputText}
            </div>
          </div>
        </div>
      </div>
    </DefaultBooth>
  )
}