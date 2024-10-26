'use client'

import React, { useState } from 'react'
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
  const [birthDate, setBirthDate] = useState('')
  const [weton, setWeton] = useState('')
  const [error, setError] = useState('')

  const calculateWeton = (date: string): string | null => {
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/
    if (!dateRegex.test(date)) {
      setError('Please enter a valid date in MM/DD/YYYY format.')
      return null
    }

    const [month, day, year] = date.split('/').map(Number)
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
    setError('')
    const calculatedWeton = calculateWeton(birthDate)
    if (calculatedWeton) {
      setWeton(calculatedWeton)
    }
  }

  return (
    <DefaultBooth
      title="Primbon & Khodam Check"
      description="Uncover the meaning of your birth date"
      image="/placeholder.svg?height=300&width=450&text=Primbon+&+Khodam+Check"
    >
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Enter your birth date (MM/DD/YYYY):</label>
          <Input
            type="text"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="MM/DD/YYYY"
            required
            className="mt-1"
          />
        </div>
        <Button type="submit">Check Weton</Button>
      </form>
      {error && (
        <div className="mt-4 text-red-600">
          {error}
        </div>
      )}
      {weton && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Your Weton:</h2>
          <p className="text-lg">{weton}</p>
        </div>
      )}
    </DefaultBooth>
  )
}