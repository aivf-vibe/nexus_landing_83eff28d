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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left md:pr-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
              Welcome to Our Landing Page
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 drop-shadow animate-fade-in-delayed">
              A simple and beautiful landing page built with React, Vite, and TailwindCSS. Experience modern web development at its finest.
            </p>
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50 shadow-lg hover:scale-105 transform duration-200 ease-in-out"
              aria-label="Get Started"
            >
              Get Started
            </button>
          </div>
          <div className="relative animate-fade-in-delayed">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                <div className="h-full w-full bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-md flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
