'use client'

import { useState, useRef } from 'react'
import DefaultBooth from '@/components/default-booth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/text-input"

const pasaranTable = [
  [3, 4, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3],
  [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3],
  [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3],
  [4, 0, 3, 4, 4, 0, 0, 1, 2, 2, 3, 3],
  [4, 0, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4],
  [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4],
  [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4],
  [0, 1, 4, 0, 0, 1, 1, 2, 3, 3, 4, 4],
  [0, 1, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0],
  [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0],
  [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0],
  [1, 2, 0, 1, 1, 2, 2, 3, 4, 4, 0, 0],
  [1, 2, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1],
  [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1],
  [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1],
  [2, 3, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1],
  [2, 3, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2],
  [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2],
  [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2],
  [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2],
  [3, 4, 2, 3, 3, 4, 4, 0, 1, 1, 2, 2],
]

const javaDays = ['Pon', 'Wage', 'Kliwon', 'Legi', 'Pahing']

export default function PrimbonCheckBooth() {
  const [weton, setWeton] = useState('')
  const [error, setError] = useState('')
  const [date, setDate] = useState(['', '', ''])
  const inputRefs = [useRef(null), useRef(null), useRef(null)]

  const handleDateChange = (index: number, value: string) => {
    const newDate = [...date]
    newDate[index] = value
    setDate(newDate)

    if (value.length === 2 && index < 2) {
      inputRefs[index + 1].current.focus()
    }
  }

  const calculateWeton = (date: string[]): string | null => {
    const monthRegex = /^(0[1-9]|1[0-2])$/
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])$/
    const yearRegex = /^\d{4}$/
    if (!monthRegex.test(date[0]) || !dateRegex.test(date[1]) || !yearRegex.test(date[2])) {
      setError('Please enter a valid date in MM/DD/YYYY format.')
      return null
    }

    const [month, day, year] = date.map(Number)
    const birthDate = new Date(year, month - 1, day)
    
    if (isNaN(birthDate.getTime())) {
      setError('Invalid date. Please check your input.')
      return null
    }

    // Calculate pasaran
    let tableLength = pasaranTable.length
    if (year > 1993) {
      tableLength -= 1
    }

    const yearIndex = (year - 4) % tableLength
    const monthIndex = (month - 1) % 12
    const firstNumber = pasaranTable[yearIndex][monthIndex]
    const totalFromAbove = (day + firstNumber) % 5

    const javaDay = javaDays[totalFromAbove]

    // Calculate day of week
    const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const dayOfWeek = daysOfWeek[birthDate.getDay()]

    return `${dayOfWeek} ${javaDay}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setWeton('')
    setError('')
    const calculatedWeton = calculateWeton(date)
    if (calculatedWeton) {
      setWeton(calculatedWeton)
    }
  }

  return (
    <DefaultBooth
      title="Primbon & Khodam Check"
      description="Discover your fortune through traditional Javanese numerology"
      image="/placeholder.svg?height=300&width=450&text=Primbon+Check"
    >
      <div className="mt-8 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Enter Your Birthdate</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              ref={inputRefs[0]}
              type="text"
              placeholder="MM"
              maxLength={2}
              value={date[0]}
              onChange={(e) => handleDateChange(0, e.target.value)}
              className="w-16 text-center"
            />
            <span className="text-2xl">/</span>
            <Input
              ref={inputRefs[1]}
              type="text"
              placeholder="DD"
              maxLength={2}
              value={date[1]}
              onChange={(e) => handleDateChange(1, e.target.value)}
              className="w-16 text-center"
            />
            <span className="text-2xl">/</span>
            <Input
              ref={inputRefs[2]}
              type="text"
              placeholder="YYYY"
              maxLength={4}
              value={date[2]}
              onChange={(e) => handleDateChange(2, e.target.value)}
              className="w-24 text-center"
            />
          </div>
          <Button type="submit" className="w-full">Check My Fortune</Button>
        </form>
        { error && (
          <div className="mt-4 text-red-600">
            {error}
          </div>
        )}
        { weton && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Your Weton:</h2>
            <p className="text-lg">{weton}</p>
          </div>
        )}
      </div>
    </DefaultBooth>
  )
}