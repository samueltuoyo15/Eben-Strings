'use client'

import { useState } from 'react'

const chords = [
  { name: 'A', fingering: '✕ ◯ ② ② ② ◯' },
  { name: 'D', fingering: '✕ ✕ ◯ ② ③ ②' },
  { name: 'G', fingering: '③ ② ◯ ◯ ◯ ③' },
  { name: 'C', fingering: '✕ ③ ② ◯ ① ◯' },
  { name: 'Em', fingering: '◯ ② ② ◯ ◯ ◯' },
  { name: 'Am', fingering: '✕ ◯ ② ② ① ◯' },
]

export default function ChordLibrary() {
  const [selectedChord, setSelectedChord] = useState(chords[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Chord Library</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Chord List</h2>
          <div className="grid grid-cols-3 gap-2">
            {chords.map((chord) => (
              <button
                key={chord.name}
                className={`p-2 rounded ${selectedChord.name === chord.name ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedChord(chord)}
              >
                {chord.name}
              </button>
            ))}
          </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Chord Diagram</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{selectedChord.name} Chord</h3>
            <p className="text-4xl font-mono mb-4">{selectedChord.fingering}</p>
            <p className="text-gray-600">
              ✕ = Don't play this string<br />
              ◯ = Open string<br />
              ① ② ③ ④ = Finger placement
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

