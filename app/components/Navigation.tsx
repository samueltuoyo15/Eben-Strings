import Link from 'next/link'
import { Menu } from 'lucide-react'
const Navigation = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Eben Strings</Link>
        <Menu className="text-white"/>
        <ul className="flex space-x-4 hidden md:inline-flex">
          <li><Link href="/lessons" className="text-white hover:text-blue-200">Lessons</Link></li>
          <li><Link href="/chords" className="text-white hover:text-blue-200">Chord Library</Link></li>
          <li><Link href="/metronome" className="text-white hover:text-blue-200">Metronome</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

