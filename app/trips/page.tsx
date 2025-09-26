'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Clock, Plus } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-sky-600" />
              <span className="text-2xl font-bold text-gray-900">TravelCraft</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/generator" className="text-gray-600 hover:text-gray-900 transition-colors">
                Plan Trip
              </Link>
              <Link href="/trips" className="text-sky-600 font-medium">
                My Trips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My Trips</h1>
            <p className="text-xl text-gray-600">Manage and view your travel itineraries</p>
          </div>
          <Link href="/generator">
            <Button size="lg">
              <Plus className="h-5 w-5 mr-2" />
              New Trip
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTrips.map((trip) => (
            <Card key={trip.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{trip.destination}</CardTitle>
                  <Badge className={statusColors[trip.status as keyof typeof statusColors]}>
                    {trip.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                      {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
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
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    {trip.status === 'draft' && (
                      <Link href="/generator" className="flex-1">
                        <Button className="w-full">
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
          <div className="text-center py-16">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No trips yet</h3>
            <p className="text-gray-600 mb-6">Start planning your first adventure with TravelCraft</p>
            <Link href="/generator">
              <Button size="lg">
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