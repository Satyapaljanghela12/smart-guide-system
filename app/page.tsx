'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Users, Calendar, DollarSign, Plane, Camera, Compass, Globe, Map, Navigation, TreePalm as Palmtree, Sunset, Mountain, Waves, Car, Brain as Train, Ship, Hotel, Utensils, Coffee, ShoppingBag, Music, Ticket, Shield, Smartphone, Wifi, CreditCard, MessageCircle, Heart, Share2, Download, CircleCheck as CheckCircle, TrendingUp, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Plane,
    title: 'Flight Integration',
    description: 'Compare and book flights directly through our platform with real-time pricing.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Hotel,
    title: 'Smart Accommodation',
    description: 'AI-powered hotel recommendations based on your preferences and budget.',
    color: 'bg-sky-50 text-sky-600'
  },
  {
    icon: Navigation,
    title: 'GPS Navigation',
    description: 'Turn-by-turn directions and offline maps for seamless exploration.',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: Camera,
    title: 'Photo Spots',
    description: 'Discover Instagram-worthy locations and hidden photography gems.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: Utensils,
    title: 'Local Cuisine',
    description: 'Find authentic restaurants and street food recommended by locals.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage and emergency assistance worldwide.',
    color: 'bg-sky-50 text-sky-600'
  }
];

const destinations = [
  {
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg',
    icon: Sunset,
    price: 'From $899',
    duration: '7 days',
    rating: 4.9,
    highlights: ['Sunset Views', 'White Architecture', 'Wine Tasting']
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg',
    icon: Palmtree,
    price: 'From $1,299',
    duration: '10 days',
    rating: 4.8,
    highlights: ['Beach Resorts', 'Temple Tours', 'Rice Terraces']
  },
  {
    name: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    icon: Mountain,
    price: 'From $1,599',
    duration: '8 days',
    rating: 4.9,
    highlights: ['Mountain Views', 'Skiing', 'Alpine Villages']
  },
  {
    name: 'Maldives',
    image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
    icon: Waves,
    price: 'From $2,199',
    duration: '6 days',
    rating: 4.9,
    highlights: ['Overwater Villas', 'Diving', 'Pristine Beaches']
  }
];

const travelServices = [
  { icon: Car, title: 'Car Rentals', description: 'Best rates worldwide' },
  { icon: Train, title: 'Rail Passes', description: 'European & Asian networks' },
  { icon: Ship, title: 'Cruise Packages', description: 'Ocean & river cruises' },
  { icon: Ticket, title: 'Event Tickets', description: 'Shows, tours & attractions' },
  { icon: Coffee, title: 'Local Experiences', description: 'Cooking classes & workshops' },
  { icon: ShoppingBag, title: 'Shopping Tours', description: 'Markets & boutiques' }
];

const stats = [
  { icon: Users, number: '50K+', label: 'Happy Travelers' },
  { icon: Globe, number: '150+', label: 'Countries Covered' },
  { icon: Star, number: '4.9', label: 'Average Rating' },
  { icon: Award, number: '25+', label: 'Travel Awards' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 font-display tracking-tight">TravelCraft</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 font-semibold flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Destinations</span>
              </Link>
              <Link href="/generator" className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <Map className="h-4 w-4" />
                <span>Plan Trip</span>
              </Link>
              <Link href="/trips" className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>My Trips</span>
              </Link>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Smartphone className="h-4 w-4 mr-2" />
                Get App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Plane className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-display tracking-tight leading-tight">
              Discover Your Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                {' '}Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              AI-powered travel planning that creates personalized itineraries, finds the best deals, 
              and connects you with authentic local experiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/generator">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 font-semibold">
                  <Compass className="h-5 w-5 mr-2" />
                  Start Planning
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold">
                <Camera className="h-5 w-5 mr-2" />
                Explore Destinations
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Globe className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">Popular Destinations</h2>
            <p className="text-xl text-gray-600 font-light">Handpicked destinations for unforgettable experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-blue-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <destination.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-display">{destination.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{destination.price}</span>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Zap className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">Everything You Need</h2>
            <p className="text-xl text-gray-600 font-light">Comprehensive travel tools in one platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-display">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">Travel Services</h2>
            <p className="text-xl text-gray-600 font-light">Book everything you need for your journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {travelServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-blue-100 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{service.title}</h3>
                  <p className="text-xs text-gray-600 font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display tracking-tight">How It Works</h2>
            <p className="text-xl text-blue-100 font-light">Three simple steps to your perfect trip</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Tell Us Your Dreams</h3>
              <p className="text-blue-100 leading-relaxed font-light">
                Share your destination, dates, budget, and interests. Our AI learns what makes you happy.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">AI Crafts Your Journey</h3>
              <p className="text-blue-100 leading-relaxed font-light">
                We analyze millions of data points to create your perfect itinerary with real-time optimization.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Travel with Confidence</h3>
              <p className="text-blue-100 leading-relaxed font-light">
                Get your personalized itinerary, book everything in one place, and travel worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900 font-display tracking-tight">Mobile App</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 font-light">
                Take your travel plans anywhere with our feature-rich mobile app.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Wifi className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Offline Access</h3>
                    <p className="text-gray-600 text-sm font-light">Access your itinerary without internet connection</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure Payments</h3>
                    <p className="text-gray-600 text-sm font-light">Book and pay securely with multiple payment options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Share2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Share & Collaborate</h3>
                    <p className="text-gray-600 text-sm font-light">Plan trips together with friends and family</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Smartphone className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Coming Soon</h3>
                <p className="text-gray-600 mb-6 font-light">
                  Get notified when our mobile app launches with exclusive early access features.
                </p>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-display tracking-tight">Ready for Your Next Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of travelers who trust TravelCraft to create unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold">
                <Compass className="h-5 w-5 mr-2" />
                Start Planning Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
              <Music className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold font-display">TravelCraft</span>
              </div>
              <p className="text-gray-400 font-light mb-4">
                AI-powered travel planning for unforgettable journeys worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <Share2 className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <Camera className="h-5 w-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Destinations</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Europe</li>
                <li className="hover:text-white cursor-pointer transition-colors">Asia</li>
                <li className="hover:text-white cursor-pointer transition-colors">Americas</li>
                <li className="hover:text-white cursor-pointer transition-colors">Africa</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Services</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Trip Planning</li>
                <li className="hover:text-white cursor-pointer transition-colors">Hotel Booking</li>
                <li className="hover:text-white cursor-pointer transition-colors">Flight Search</li>
                <li className="hover:text-white cursor-pointer transition-colors">Travel Insurance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Support</h3>
              <ul className="space-y-2 text-gray-400 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-light">© 2024 TravelCraft. Crafting perfect journeys with AI.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-light">Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="h-4 w-4" />
                <span className="text-sm font-light">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}