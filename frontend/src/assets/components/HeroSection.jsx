import { Link } from "react-router-dom"
import Button from "./Button"

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Amazing
              <span className="block text-yellow-400">Events Near You</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Find concerts, workshops, conferences, and more. Book tickets instantly and create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events">
                <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                  Explore Events
                </Button>
              </Link>
              <Link to="/create-event">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                  Create Event
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10K+</div>
                <div className="text-blue-100">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-blue-100">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-blue-100">Cities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Event crowd"
              className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">Secure Booking</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">100% Safe & Trusted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </div>
  )
}

export default HeroSection
