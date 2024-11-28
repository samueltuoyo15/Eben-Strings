'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Plus, Minus } from 'lucide-react'

export default function Metronome() {
  const [bpm, setBpm] = useState(100)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContext = useRef<AudioContext | null>(null)
  const nextNoteTime = useRef(0)
  const timerID = useRef<number | null>(null)

  useEffect(() => {
    audioContext.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    return () => {
      if (audioContext.current) {
        audioContext.current.close()
      }
    }
  }, [])

  const scheduleNote = (time: number) => {
    const osc = audioContext.current!.createOscillator()
    osc.connect(audioContext.current!.destination)
    osc.frequency.value = 880.0
    osc.start(time)
    osc.stop(time + 0.1)
  }

  const scheduler = () => {
    while (nextNoteTime.current < audioContext.current!.currentTime + 0.1) {
      scheduleNote(nextNoteTime.current)
      nextNoteTime.current += 60.0 / bpm
    }
    timerID.current = requestAnimationFrame(scheduler)
  }

  const startStop = () => {
    if (isPlaying) {
      cancelAnimationFrame(timerID.current!)
      setIsPlaying(false)
    } else {
      nextNoteTime.current = audioContext.current!.currentTime
      scheduler()
      setIsPlaying(true)
    }
  }

  const changeTempo = (amount: number) => {
    setBpm((prevBpm) => Math.max(40, Math.min(218, prevBpm + amount)))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Metronome</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <div className="text-6xl font-bold text-center mb-4">{bpm} BPM</div>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
            onClick={() => changeTempo(-1)}
          >
            <Minus className="h-6 w-6" />
          </button>
          <button
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
            onClick={startStop}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
            onClick={() => changeTempo(1)}
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>
        <input
          type="range"
          min="40"
          max="218"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  )
}
