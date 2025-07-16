import { FC, MouseEvent } from 'react'

const App: FC = () => {
  const handleGetStarted = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    // Add your navigation or action logic here
    console.log('Get Started clicked')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to Our Landing Page
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow">
            A simple and beautiful landing page built with React, Vite, and TailwindCSS
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50 shadow-lg"
            aria-label="Get Started"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
