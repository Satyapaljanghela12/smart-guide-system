'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Clock, Plus, Compass, Globe, Map } from 'lucide-react';
import Link from 'next/link';

const mockTrips = [
  {
    id: 'paris-2024',
    destination: 'Paris, France',
    startDate: '2024-06-15',
    endDate: '2024-06-19',
    totalDays: 5,
    totalCost: 1250,
    status: 'completed',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
  },
  {
    id: 'tokyo-2024',
    destination: 'Tokyo, Japan',
    startDate: '2024-08-10',
    endDate: '2024-08-17',
    totalDays: 8,
    totalCost: 2100,
    status: 'upcoming',
    image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg'
  },
  {
    id: 'rome-2024',
    destination: 'Rome, Italy',
    startDate: '2024-10-05',
    endDate: '2024-10-10',
    totalDays: 6,
    totalCost: 980,
    status: 'draft',
    image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg'
  }
];

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  upcoming: 'bg-blue-100 text-blue-800',
  draft: 'bg-gray-100 text-gray-800'
};

export default function MyTrips() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Navigation */}
      <nav className="border-b bg-white animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900 font-display tracking-tight">TravelCraft</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 animate-slide-in-right">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link href="/generator" className="text-gray-600 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                <Map className="h-4 w-4" />
                <span>Plan Trip</span>
              </Link>
              <Link href="/trips" className="text-blue-600 font-semibold flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>My Trips</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8 animate-slide-up">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 font-display tracking-tight">My Trips</h1>
            <p className="text-xl text-gray-600 font-light">Manage and view your travel itineraries</p>
          </div>
          <Link href="/generator" className="animate-slide-in-right">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold">
              <Plus className="h-5 w-5 mr-2" />
              New Trip
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
          {mockTrips.map((trip) => (
            <Card key={trip.id} className="group hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 animate-slide-in-left" style={{animationDelay: `${mockTrips.indexOf(trip) * 0.1}s`}}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-display">{trip.destination}</CardTitle>
                  <Badge className={`${statusColors[trip.status as keyof typeof statusColors]} font-medium`}>
                    {trip.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 font-light">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 font-medium">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {trip.totalDays} days
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      ${trip.totalCost}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Link href={`/trip/${trip.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 font-medium">
                        View Details
                      </Button>
                    </Link>
                    {trip.status === 'draft' && (
                      <Link href="/generator" className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 font-medium">
                          Continue
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {mockTrips.length === 0 && (
          <div className="text-center py-16 animate-slide-up">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-display">No trips yet</h3>
            <p className="text-gray-600 mb-6 font-light">Start planning your first adventure with TravelCraft</p>
            <Link href="/generator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-semibold">
                <Plus className="h-5 w-5 mr-2" />
                Plan Your First Trip
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}