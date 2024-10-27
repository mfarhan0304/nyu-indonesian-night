"use client";

import { useEffect, useState, useRef } from "react";
import DefaultBooth from "@/components/default-booth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/text-input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WetonData {
  weton: string;
  "naga-hari": string;
  "jam-baik": string;
  "watak-kelahiran": string;
  "nasib-rezeki": Array<{
    "range-usia": string;
    nasib: string;
  }>;
}

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
];

export default function PrimbonCheckBooth() {
  const [wetonData, setWetonData] = useState<WetonData[]>([])
  const [result, setResult] = useState<WetonData | null>(null)
  const [error, setError] = useState("");
  const [date, setDate] = useState(["", "", ""]);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    fetch('/files/weton.json')
      .then(response => response.json())
      .then(data => setWetonData(data))
      .catch(error => console.error('Error fetching weton data:', error))
  }, [])

  const handleDateChange = (index: number, value: string) => {
    const newDate = [...date];
    newDate[index] = value;
    setDate(newDate);

    if (value.length === 2 && index < 2) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const calculateWeton = (date: string[]): string | null => {
    // Calculate day of week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const javaDays = ["Pon", "Wage", "Kliwon", "Legi", "Pahing"];
    
    const monthRegex = /^(0*[1-9]|1[0-2])$/;
    const dateRegex = /^(0*[1-9]|[12][0-9]|3[01])$/;
    const yearRegex = /^\d{4}$/;
    if (
      !monthRegex.test(date[0]) ||
      !dateRegex.test(date[1]) ||
      !yearRegex.test(date[2])
    ) {
      setError("Please enter a valid date in MM/DD/YYYY format.");
      return null;
    }

    const [month, day, year] = date.map(Number);
    const birthDate = new Date(year, month - 1, day);

    if (isNaN(birthDate.getTime())) {
      setError("Invalid date. Please check your input.");
      return null;
    }

    // Calculate pasaran
    let tableLength = pasaranTable.length;
    if (year > 1993) {
      tableLength -= 1;
    }

    const yearIndex = (year - 4) % tableLength;
    const monthIndex = (month - 1) % 12;
    const firstNumber = pasaranTable[yearIndex][monthIndex];
    const totalFromAbove = (day + firstNumber) % 5;

    const javaDay = javaDays[totalFromAbove];
    const dayOfWeek = daysOfWeek[birthDate.getDay()];

    return `${javaDay} ${dayOfWeek}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const calculatedWeton = calculateWeton(date);
    const matchedData = wetonData.find(data => data.weton === calculatedWeton)
    setResult(matchedData || null)
  };

  return (
    <DefaultBooth
      title="Primbon & Khodam Check"
      description="Discover your fortune through traditional Javanese numerology"
      image="/images/primbon-check-details.webp"
    >
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-[#A7727D]">Javanese Weton</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            In Javanese belief, the meaning of an event occurring on a specific
            day can be predicted by examining a cycle of days in the traditional
            calendar. This concept is based on &quot;moco ing waskito&quot;, which means
            reading events through observing natural phenomena or signs that
            have already occurred as a guide to understanding each future event.
            One example of this method of forecasting is found in the neptu
            calculation system for Javanese birth days, known as Wetonan.
            Javanese ancestors believed that the day a child is born influences
            their personality, character, and life path.
          </p>
          <p className="mb-2">
            Rooted in philosophical foundations and the beliefs of Javanese
            society, there exists a theological background that leans toward
            mysticism and magic. Mysticism here refers to an effort to align
            oneself with the divine decrees (fate) set by God. By following the
            calculations in the Primbon, one strives to harmonize with fate. The
            magical aspect, on the other hand, involves human action aided by
            supernatural forces with the aim of altering divine nature. This
            magical dimension is evident in the assignment of certain numbers as
            sacred, influencing the determination of auspicious or inauspicious
            times, as well as beliefs about forbidden days or unfavorable months
            based on calculations.
          </p>
          <p>
            Since ancient times, the Javanese neptu weton calculation system has
            been commonly used by Javanese society. It is not only used to
            describe a person&apos;s traits, character, and destiny but also to
            determine planting and harvesting seasons, predict compatibility in
            marriage, and choose auspicious days for specific purposes.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-center space-x-2">
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
              <Button type="submit" className="w-full mt-2 bg-[#A7727D] hover:bg-[#8B5D6B] text-white">
                Check Your Weton
              </Button>
            </form>
            
            {error && <div className="mt-4 text-red-600">{error}</div>}
          </div>
          {result && (
              <div className="mt-8 space-y-4">
                <p><b>{result.weton}</b></p>
                <p><b>Dragon Day</b>: {result["naga-hari"]}</p>
                <p><b>Good Hours</b>: {result["jam-baik"]}</p>
                <p><b>Personality</b>:<br />{result["watak-kelahiran"]}</p>
                <div>
                  <p><b>Fate</b></p>
                  {result["nasib-rezeki"].map((item, index) => (
                    <p key={index}><b>{item["range-usia"]}</b>: {item.nasib}</p>
                  ))}
                </div>
              </div>
            )}
        </CardContent>
      </Card>

    </DefaultBooth>
  );
}
