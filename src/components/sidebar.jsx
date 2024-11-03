import { useState } from 'react'
import { Menu, X, Home, Users, Settings, HelpCircle } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
 
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
       

        
          <ul className="space-y-2 text-white">
           <li>hello</li>
           <li>hello</li>
           <li>hello</li>
           <li>hello</li>
          </ul>
        </div>
      </aside>

      
      
    </div>
  )
}