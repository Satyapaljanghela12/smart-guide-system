import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Star, Users, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 animate-fade-in">
            <div className="flex items-center space-x-2 group">
              <MapPin className="h-8 w-8 text-sky-600 transition-transform group-hover:scale-110 animate-bounce-gentle" />
              <span className="text-2xl font-bold text-gray-900 font-display tracking-tight">TravelCraft</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 animate-slide-in-right">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium">
                Home
              </Link>
              <Link href="/generator" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium">
                Plan Trip
              </Link>
              <Link href="/trips" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 font-medium">
                My Trips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-display tracking-tight leading-tight">
              Your Perfect Trip,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600 animate-pulse-slow">
                {' '}AI-Crafted
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
              Generate personalized, optimized travel itineraries that blend real-world data with AI reasoning. 
              Get day-by-day plans, interactive maps, and real-time adjustments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link href="/generator">
                <Button size="lg" className="text-lg px-8 py-6 bg-sky-600 hover:bg-sky-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold">
                  Start Planning
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold">
                View Sample Trip
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2 animate-slide-in-left">
              <CardContent className="p-8">
                <div className="bg-sky-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                  <Clock className="h-7 w-7 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display">Smart Scheduling</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  AI-optimized daily schedules that factor in travel times, opening hours, and your personal pace.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8">
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <Star className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display">Personalized Picks</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Recommendations tailored to your interests, budget, and travel style with real reviews and ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-8">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
                  <MapPin className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display">Live Updates</h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  Real-time adjustments for weather changes, traffic updates, and unexpected closures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">How It Works</h2>
            <p className="text-xl text-gray-600 font-light">Three simple steps to your perfect itinerary</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center group animate-slide-in-left">
              <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg animate-bounce-gentle">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Tell Us Your Preferences</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Share your destination, dates, budget, interests, and travel pace. Our AI learns what matters to you.
              </p>
            </div>

            <div className="text-center group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-emerald-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">AI Crafts Your Plan</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We analyze real-time data, reviews, and logistics to create an optimized day-by-day itinerary.
              </p>
            </div>

            <div className="text-center group animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg animate-bounce-gentle" style={{animationDelay: '1s'}}>
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Explore & Adjust</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                View your trip on interactive maps, make adjustments, and download your personalized itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-emerald-600 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-6 font-display tracking-tight">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
            Join thousands of travelers who trust TravelCraft to create unforgettable experiences.
          </p>
          <Link href="/generator" className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold">
              Create Your Itinerary
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center animate-slide-up">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <MapPin className="h-6 w-6 text-sky-400 transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold font-display">TravelCraft</span>
            </div>
            <p className="text-gray-400 font-light">© 2024 TravelCraft. Crafting perfect journeys with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}