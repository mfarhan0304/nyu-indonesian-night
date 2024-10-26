'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

const WORD_LENGTH = 5
const MAX_GUESSES = 6

type GuessState = ('correct' | 'present' | 'absent' | 'empty')[]

type Word = {
  word: string;
  meaning: string;
  similarity: number;
}

const IndonesianWordle = () => {
  const [words, setWords] = useState<Word[]>([])
  const [currentWord, setCurrentWord] = useState('')
  const [currentMeaning, setCurrentMeaning] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [showWinDialog, setShowWinDialog] = useState(false)
  const [showLoseDialog, setShowLoseDialog] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetch('/files/words.json')
      .then(response => response.json())
      .then(data => setWords(data))
      .catch(error => console.error('Error fetching words:', error))
  }, [])

  const newGame = useCallback(() => {
    if (words.length === 0) return
    let randomIndex = Math.floor(Math.random() * words.length)
    while (words[randomIndex].similarity == 1) {
      randomIndex = Math.floor(Math.random() * words.length)
    }

    setCurrentWord(words[randomIndex].word.toUpperCase())
    setCurrentMeaning(words[randomIndex].meaning.toLowerCase())
    setGuesses([])
    setCurrentGuess('')
    setGameOver(false)
    setShowWinDialog(false)
    setShowLoseDialog(false)
  }, [words])

  useEffect(() => {
    if (words.length > 0) {
      newGame()
    }
  }, [words, newGame])

  const showToastMessage = (message: string) => {
    toast({
      description: message,
      duration: 1000,
    })
  }

  const onGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) return

    if (!words.some(word => word.word.toUpperCase() === currentGuess.toUpperCase())) {
      showToastMessage('Invalid word')
      return
    }

    const newGuesses = [...guesses, currentGuess.toUpperCase()]
    setGuesses(newGuesses)
    setCurrentGuess('')

    if (currentGuess.toUpperCase() === currentWord) {
      setShowWinDialog(true)
      setGameOver(true)
    } else if (newGuesses.length >= MAX_GUESSES) {
      setShowLoseDialog(true)
      setGameOver(true)
    }
  }, [currentGuess, currentWord, guesses, words, showToastMessage])

  const getGuessState = useCallback((guess: string): GuessState => {
    const result: GuessState = Array(WORD_LENGTH).fill('absent')
    const wordArray = currentWord.split('')
    const guessArray = guess.toUpperCase().split('')

    // First pass: mark correct letters
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guessArray[i] === wordArray[i]) {
        result[i] = 'correct'
        wordArray[i] = ''
        guessArray[i] = ''
      }
    }

    // Second pass: mark present letters
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (guessArray[i] && wordArray.includes(guessArray[i])) {
        result[i] = 'present'
        wordArray[wordArray.indexOf(guessArray[i])] = ''
      }
    }

    return result
  }, [currentWord])

  const handleKeyPress = useCallback((key: string) => {
    if (gameOver) return

    if (key === 'ENTER') {
      if (currentGuess.length === WORD_LENGTH) {
        onGuess()
      }
    } else if (key === '⌫') {
      setCurrentGuess(prev => prev.slice(0, -1))
    } else if (currentGuess.length < WORD_LENGTH && /^[A-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key)
    }
  }, [currentGuess, gameOver, onGuess])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleKeyPress('ENTER')
      } else if (e.key === 'Backspace') {
        handleKeyPress('⌫')
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase())
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyPress])

  const renderGrid = () => {
    const rows = []
    for (let i = 0; i < MAX_GUESSES; i++) {
      const guess = i < guesses.length ? guesses[i] : (i === guesses.length ? currentGuess : '')
      const guessState = i < guesses.length ? getGuessState(guess) : Array(WORD_LENGTH).fill('empty')
      rows.push(
        <div key={i} className="flex justify-center mb-2">
          {Array(WORD_LENGTH).fill(0).map((_, j) => (
            <div
              key={j}
              className={`w-12 h-12 border-2 flex items-center justify-center mx-1 text-xl font-bold
              ${guessState[j] === 'correct' ? 'bg-green-500 text-white' :
                guessState[j] === 'present' ? 'bg-yellow-500 text-white' :
                guessState[j] === 'absent' ? 'bg-gray-500 text-white' :
                'bg-white'}`}
            >
              {guess[j] || ''}
            </div>
          ))}
        </div>
      )
    }
    return rows
  }

  const renderKeyboard = () => {
    const keyboard = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
    ]

    return keyboard.map((row, i) => (
      <div key={i} className="flex justify-center mb-2">
        {row.map((key) => {
          let bgColor = 'bg-gray-200'
          if (guesses.some(guess => getGuessState(guess).some((state, index) => state === 'correct' && guess[index] === key))) {
            bgColor = 'bg-green-500 text-white'
          } else if (guesses.some(guess => getGuessState(guess).some((state, index) => state === 'present' && guess[index] === key))) {
            bgColor = 'bg-yellow-500 text-white'
          } else if (guesses.some(guess => guess.includes(key))) {
            bgColor = 'bg-gray-500 text-white'
          }

          return (
            <Button
              key={key}
              className={`m-1 ${bgColor} ${key === 'ENTER' || key === '⌫' ? 'px-4' : 'px-2'} py-2`}
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </Button>
          )
        })}
      </div>
    ))
  }

  return (
    <div className="w-full mx-auto mt-8">
      {showOverlay ? (
        <div className="bg-gray-800 bg-opacity-75 flex items-center justify-center" style={{ width: '100%', height: '400px' }}>
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Wanna try to guess a word?</h2>
            <Button onClick={() => {
              setShowOverlay(false);
              setGameOver(false);
              newGame();
            }}>Start Game
            </Button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold">Meaning: {currentMeaning}</h2>
          </div>
          <div className="mb-4">
            {renderGrid()}
          </div>
          {renderKeyboard()}
        </div>
      )}

      <Dialog open={showWinDialog} onOpenChange={setShowWinDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congratulations!</DialogTitle>
            <DialogDescription>
              You&apos;ve guessed the word correctly. Cool!
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button onClick={newGame}>Play Again</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={() => {
              setShowWinDialog(false);
              setShowOverlay(true);
              setGameOver(true);
            }}>I&apos;m done</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Dialog open={showLoseDialog} onOpenChange={setShowLoseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Oh no!</DialogTitle>
            <DialogDescription>
              The word was {currentWord}. Bet you wanna win this game. Play again?
            </DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <Button onClick={newGame}>Play Again</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={() => {
              setShowLoseDialog(false);
              setShowOverlay(true);
              setGameOver(true);
            }}>I&apos;m done</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}


export default IndonesianWordle