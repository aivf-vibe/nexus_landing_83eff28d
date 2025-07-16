import { FC, MouseEvent } from 'react'

const App: FC = () => {
  const handleGetStarted = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    // Add your navigation or action logic here
    console.log('Get Started clicked')
  }

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg p-2">
            <div className="flex items-center justify-between">
              <div className="text-white font-bold text-xl">
                Logo
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => handleNavClick('features')}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Contact
                </button>
                <button 
                  onClick={handleGetStarted}
                  className="bg-white text-emerald-600 px-4 py-2 rounded-full font-semibold hover:bg-emerald-50 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow hover:scale-105 transform duration-200 ease-in-out"
                >
                  Get Started
                </button>
              </div>
              <button 
                className="md:hidden text-white hover:text-white/80 transition-colors"
                onClick={() => console.log('Toggle mobile menu')}
                aria-label="Toggle Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
      {/* Hero Section */}
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

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg animate-fade-in">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl animate-fade-in">
            <div className="text-white/80 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern Design</h3>
            <p className="text-white/80">Clean and modern interface with smooth animations and transitions.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-white/80 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fully Responsive</h3>
            <p className="text-white/80">Optimized for all devices and screen sizes.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-white/80 mb-4">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Developer Friendly</h3>
            <p className="text-white/80">Built with TypeScript and modern development tools.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us today and experience the power of modern web development with our cutting-edge tools and frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleGetStarted}
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:scale-105 transform duration-200 ease-in-out min-w-[200px]"
              aria-label="Sign Up Now"
            >
              Sign Up Now
            </button>
            <button 
              onClick={handleGetStarted}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:scale-105 transform duration-200 ease-in-out min-w-[200px]"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
