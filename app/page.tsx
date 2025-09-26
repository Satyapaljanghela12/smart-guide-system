'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Users, Calendar, DollarSign, Plane, Camera, Globe, Map, Navigation, TreePine, Mountain, Waves, Car, Brain as Train, Ship, Hotel, Utensils, Coffee, ShoppingBag, Music, Ticket, Shield, Smartphone, Wifi, CreditCard, MessageCircle, Heart, Share2, Download, CircleCheck as CheckCircle, TrendingUp, Award, Zap, Compass, Leaf, Sun, Wind, Tent, Binoculars, Backpack, Route, TreeDeciduous, Flower2, Bird, Fish, Sunrise } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: TreePine,
    title: 'Eco-Friendly Routes',
    description: 'Discover sustainable travel paths that minimize environmental impact.',
    color: 'bg-forest-green/10 text-forest-green'
  },
  {
    icon: Mountain,
    title: 'Mountain Adventures',
    description: 'Expert-curated trekking routes and mountain climbing experiences.',
    color: 'bg-midnight-blue/10 text-midnight-blue'
  },
  {
    icon: Tent,
    title: 'Camping & Glamping',
    description: 'Find perfect camping spots and luxury glamping experiences.',
    color: 'bg-earthy-brown/10 text-earthy-brown'
  },
  {
    icon: Binoculars,
    title: 'Wildlife Watching',
    description: 'Spot rare wildlife with guided tours and expert naturalists.',
    color: 'bg-forest-green/10 text-forest-green'
  },
  {
    icon: Route,
    title: 'Hiking Trails',
    description: 'Detailed trail maps with difficulty levels and scenic viewpoints.',
    color: 'bg-midnight-blue/10 text-midnight-blue'
  },
  {
    icon: Leaf,
    title: 'Nature Conservation',
    description: 'Support local conservation efforts through responsible tourism.',
    color: 'bg-earthy-brown/10 text-earthy-brown'
  }
];

const destinations = [
  {
    name: 'Swiss Alps, Switzerland',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    icon: Mountain,
    price: 'From $1,899',
    duration: '8 days',
    rating: 4.9,
    highlights: ['Alpine Hiking', 'Mountain Villages', 'Scenic Railways']
  },
  {
    name: 'Patagonia, Chile',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    icon: Wind,
    price: 'From $2,299',
    duration: '12 days',
    rating: 4.8,
    highlights: ['Torres del Paine', 'Glacier Trekking', 'Wildlife Safari']
  },
  {
    name: 'Canadian Rockies',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
    icon: TreePine,
    price: 'From $1,599',
    duration: '10 days',
    rating: 4.9,
    highlights: ['Banff National Park', 'Lake Louise', 'Mountain Wildlife']
  },
  {
    name: 'Norwegian Fjords',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
    icon: Waves,
    price: 'From $2,199',
    duration: '9 days',
    rating: 4.8,
    highlights: ['Fjord Cruises', 'Northern Lights', 'Midnight Sun']
  }
];

const travelServices = [
  { icon: Backpack, title: 'Gear Rental', description: 'Professional hiking equipment' },
  { icon: TreeDeciduous, title: 'Forest Guides', description: 'Expert naturalist guides' },
  { icon: Bird, title: 'Bird Watching', description: 'Ornithology tours' },
  { icon: Fish, title: 'Fishing Trips', description: 'Mountain lake fishing' },
  { icon: Flower2, title: 'Botanical Tours', description: 'Flora identification walks' },
  { icon: Sunrise, title: 'Sunrise Hikes', description: 'Early morning adventures' }
];

const stats = [
  { icon: Users, number: '25K+', label: 'Nature Lovers' },
  { icon: TreePine, number: '200+', label: 'National Parks' },
  { icon: Mountain, number: '500+', label: 'Mountain Trails' },
  { icon: Award, number: '15+', label: 'Eco Awards' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-misty-gray/20 to-forest-green/5">
      {/* Navigation */}
      <nav className="border-b border-misty-gray bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-forest-green p-2 rounded-lg">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-midnight-blue font-display tracking-tight">EcoTrail</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-forest-green font-semibold flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Destinations</span>
              </Link>
              <Link href="/generator" className="text-midnight-blue hover:text-forest-green transition-colors font-medium flex items-center space-x-1">
                <Map className="h-4 w-4" />
                <span>Plan Adventure</span>
              </Link>
              <Link href="/trips" className="text-midnight-blue hover:text-forest-green transition-colors font-medium flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>My Trips</span>
              </Link>
              <Button size="sm" className="bg-forest-green hover:bg-forest-green/90 text-white">
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
              <div className="bg-forest-green/10 p-4 rounded-full">
                <Mountain className="h-12 w-12 text-forest-green" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-midnight-blue mb-6 font-display tracking-tight leading-tight">
              Explore Nature's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-green to-earthy-brown">
                {' '}Wonders
              </span>
            </h1>
            <p className="text-xl text-midnight-blue/80 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Discover breathtaking mountain trails, pristine forests, and eco-friendly adventures. 
              Plan sustainable journeys that connect you with nature while preserving it for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/generator">
                <Button size="lg" className="text-lg px-8 py-6 bg-forest-green hover:bg-forest-green/90 text-white font-semibold">
                  <TreePine className="h-5 w-5 mr-2" />
                  Start Adventure
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-forest-green text-forest-green hover:bg-forest-green/5 font-semibold">
                <Camera className="h-5 w-5 mr-2" />
                Explore Trails
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-misty-gray">
                    <stat.icon className="h-8 w-8 text-forest-green mx-auto mb-3" />
                    <div className="text-2xl font-bold text-midnight-blue mb-1">{stat.number}</div>
                    <div className="text-sm text-midnight-blue/70 font-medium">{stat.label}</div>
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
              <Globe className="h-10 w-10 text-forest-green" />
            </div>
            <h2 className="text-4xl font-bold text-midnight-blue mb-4 font-display tracking-tight">Mountain Destinations</h2>
            <p className="text-xl text-midnight-blue/70 font-light">Handpicked wilderness adventures for nature enthusiasts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-misty-gray">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <destination.icon className="h-5 w-5 text-forest-green" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-earthy-brown fill-current" />
                      <span className="text-sm font-semibold">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-display text-midnight-blue">{destination.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-forest-green">{destination.price}</span>
                    <div className="flex items-center text-midnight-blue/70">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-forest-green/10 text-forest-green">
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
      <section className="py-20 bg-gradient-to-br from-forest-green/5 to-earthy-brown/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Leaf className="h-10 w-10 text-forest-green" />
            </div>
            <h2 className="text-4xl font-bold text-midnight-blue mb-4 font-display tracking-tight">Nature-First Features</h2>
            <p className="text-xl text-midnight-blue/70 font-light">Sustainable travel tools for conscious adventurers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-display text-midnight-blue">{feature.title}</h3>
                  <p className="text-midnight-blue/70 leading-relaxed font-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-midnight-blue mb-4 font-display tracking-tight">Adventure Services</h2>
            <p className="text-xl text-midnight-blue/70 font-light">Everything you need for your outdoor expedition</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {travelServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-misty-gray hover:border-forest-green">
                <CardContent className="p-6 text-center">
                  <div className="bg-forest-green/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-green/20 transition-colors">
                    <service.icon className="h-6 w-6 text-forest-green" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm text-midnight-blue">{service.title}</h3>
                  <p className="text-xs text-midnight-blue/70 font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-forest-green to-earthy-brown text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-display tracking-tight">Plan Your Adventure</h2>
            <p className="text-xl text-green-100 font-light">Three simple steps to your perfect nature escape</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Share Your Vision</h3>
              <p className="text-green-100 leading-relaxed font-light">
                Tell us about your ideal outdoor adventure - mountains, forests, difficulty level, and eco-preferences.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Route className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">AI Plans Your Route</h3>
              <p className="text-green-100 leading-relaxed font-light">
                Our nature-focused AI creates sustainable itineraries with the best trails, eco-lodges, and conservation sites.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 font-display">Adventure Awaits</h3>
              <p className="text-green-100 leading-relaxed font-light">
                Get your personalized eco-adventure plan, book sustainable accommodations, and explore responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-forest-green mr-3" />
                <h2 className="text-4xl font-bold text-midnight-blue font-display tracking-tight">Trail Companion App</h2>
              </div>
              <p className="text-xl text-midnight-blue/70 mb-8 font-light">
                Your pocket guide to sustainable adventures with offline maps and nature identification.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-green/10 p-2 rounded-lg">
                    <Navigation className="h-5 w-5 text-forest-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-midnight-blue">Offline Trail Maps</h3>
                    <p className="text-midnight-blue/70 text-sm font-light">Navigate wilderness areas without cell service</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-green/10 p-2 rounded-lg">
                    <Leaf className="h-5 w-5 text-forest-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-midnight-blue">Species Identification</h3>
                    <p className="text-midnight-blue/70 text-sm font-light">Identify plants and animals with AI-powered recognition</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-green/10 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-forest-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-midnight-blue">Safety Features</h3>
                    <p className="text-midnight-blue/70 text-sm font-light">Emergency contacts and location sharing for peace of mind</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button className="bg-forest-green hover:bg-forest-green/90 text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
                <Button variant="outline" className="border-forest-green text-forest-green hover:bg-forest-green/5">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-forest-green/10 to-earthy-brown/10 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <TreePine className="h-24 w-24 text-forest-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-midnight-blue mb-4 font-display">Coming Soon</h3>
                <p className="text-midnight-blue/70 mb-6 font-light">
                  Be the first to experience our nature-focused mobile companion with exclusive beta access.
                </p>
                <Button size="sm" className="bg-forest-green hover:bg-forest-green/90 text-white">
                  Join Beta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-forest-green to-midnight-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-display tracking-tight">Ready to Explore Responsibly?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of eco-conscious travelers who choose sustainable adventures that protect our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 font-semibold bg-white text-forest-green hover:bg-gray-50">
                <TreePine className="h-5 w-5 mr-2" />
                Plan Adventure Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-forest-green font-semibold">
              <Camera className="h-5 w-5 mr-2" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-blue text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-forest-green p-2 rounded-lg">
                  <TreePine className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold font-display">EcoTrail</span>
              </div>
              <p className="text-gray-300 font-light mb-4">
                Sustainable adventure planning for conscious travelers who love nature.
              </p>
              <div className="flex space-x-4">
                <div className="bg-midnight-blue/50 p-2 rounded-lg hover:bg-forest-green cursor-pointer transition-colors">
                  <Share2 className="h-5 w-5" />
                </div>
                <div className="bg-midnight-blue/50 p-2 rounded-lg hover:bg-forest-green cursor-pointer transition-colors">
                  <Camera className="h-5 w-5" />
                </div>
                <div className="bg-midnight-blue/50 p-2 rounded-lg hover:bg-forest-green cursor-pointer transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Destinations</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Mountain Ranges</li>
                <li className="hover:text-white cursor-pointer transition-colors">National Parks</li>
                <li className="hover:text-white cursor-pointer transition-colors">Forest Trails</li>
                <li className="hover:text-white cursor-pointer transition-colors">Wildlife Reserves</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Adventures</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Hiking & Trekking</li>
                <li className="hover:text-white cursor-pointer transition-colors">Wildlife Watching</li>
                <li className="hover:text-white cursor-pointer transition-colors">Eco Camping</li>
                <li className="hover:text-white cursor-pointer transition-colors">Photography Tours</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-display">Support</h3>
              <ul className="space-y-2 text-gray-300 font-light">
                <li className="hover:text-white cursor-pointer transition-colors">Trail Guides</li>
                <li className="hover:text-white cursor-pointer transition-colors">Safety Tips</li>
                <li className="hover:text-white cursor-pointer transition-colors">Conservation</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-light">© 2024 EcoTrail. Protecting nature through responsible travel.</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-light">Carbon Neutral</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Award className="h-4 w-4" />
                <span className="text-sm font-light">Eco Certified</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}