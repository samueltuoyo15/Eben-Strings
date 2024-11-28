import { Play } from 'lucide-react'

const lessons = [
  { id: 1, title: "Guitar Basics", duration: "10:00" },
  { id: 2, title: "Your First Chords", duration: "15:00" },
  { id: 3, title: "Strumming Patterns", duration: "12:00" },
  { id: 4, title: "Reading Tabs", duration: "20:00" },
  { id: 5, title: "Barre Chords", duration: "18:00" },
]

export default function Lessons() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guitar Lessons</h1>
      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
              <p className="text-gray-600">Duration: {lesson.duration}</p>
            </div>
            <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
              <Play className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

