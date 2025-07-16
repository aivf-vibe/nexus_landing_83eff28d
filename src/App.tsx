function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Our Landing Page
          </h1>
          <p className="text-xl text-white mb-8">
            A simple and beautiful landing page built with React, Vite, and TailwindCSS
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
