import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Eben String</h1>
      <p className="text-xl mb-8">Start your journey to becoming a guitar pro today!</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Interactive Lessons" 
          description="Learn guitar with our step-by-step video lessons."
          link="/lessons"
        />
        <FeatureCard 
          title="Chord Library" 
          description="Explore and learn various guitar chords."
          link="/chords"
        />
        <FeatureCard 
          title="Metronome" 
          description="Practice with our built-in metronome to improve your timing."
          link="/metronome"
        />
      </div>
    </main>
  )
}

function FeatureCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

