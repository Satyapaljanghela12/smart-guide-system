'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  Star, 
  Download, 
  Share2,
  Navigation,
  Camera,
  Utensils,
  Building,
  Heart,
  Compass
} from 'lucide-react';
import Link from 'next/link';
import { mockItinerary, type Activity } from '@/lib/mock-data';
import { MapComponent } from '@/components/map-component';

const activityIcons = {
  'Landmark': MapPin,
  'Museum': Building,
  'Activity': Navigation,
  'Dining': Utensils,
  'Food Tour': Utensils,
  'Walking Tour': Navigation,
  'Religious Site': Building,
  'Historical Site': Building
};

export default function TripDetails() {
  const [selectedDay, setSelectedDay] = useState(0);
  const itinerary = mockItinerary;

  const downloadItinerary = () => {
    // In a real app, this would generate and download a PDF
    alert('Downloading itinerary PDF...');
  };

  const shareItinerary = () => {
    // In a real app, this would share the trip
    if (navigator.share) {
      navigator.share({
        title: `My ${itinerary.destination} Trip`,
        text: itinerary.overview,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Trip link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Navigation */}
      <nav className="border-b bg-white animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-forest-green p-2 rounded-lg">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-midnight-blue font-display tracking-tight">EcoTrail</span>
            </Link>
            <div className="flex items-center space-x-4 animate-slide-in-right">
              <Button variant="outline" size="sm" onClick={shareItinerary} className="border-forest-green/30 text-forest-green hover:bg-forest-green/5">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" onClick={downloadItinerary} className="bg-forest-green hover:bg-forest-green/90">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green to-earthy-brown text-white animate-slide-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end animate-slide-in-left">
            <div>
              <h1 className="text-4xl font-bold mb-4 font-display tracking-tight">{itinerary.destination}</h1>
              <p className="text-xl text-green-100 mb-6 max-w-2xl font-light">{itinerary.overview}</p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {itinerary.totalDays} days
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ${itinerary.totalCost} total
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {itinerary.destination}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <Tabs value={selectedDay.toString()} onValueChange={(value) => setSelectedDay(parseInt(value))}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-5 w-full mb-8 animate-slide-up bg-forest-green/5">
                {itinerary.days.map((day, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="text-sm font-medium data-[state=active]:bg-forest-green data-[state=active]:text-white">
                    Day {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {itinerary.days.map((day, dayIndex) => (
                <TabsContent key={dayIndex} value={dayIndex.toString()}>
                  <Card className="transition-all duration-300 hover:shadow-lg animate-slide-up">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl font-display">{day.title}</CardTitle>
                          <p className="text-gray-600 mt-1 font-light">{new Date(day.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl mb-1">{day.weather.icon}</div>
                          <div className="text-sm text-gray-600">{day.weather.temperature}</div>
                          <div className="text-sm text-gray-600">{day.weather.condition}</div>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {Math.floor(day.totalDuration / 60)}h {day.totalDuration % 60}m
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ${day.totalCost}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {day.activities.map((activity, activityIndex) => {
                          const IconComponent = activityIcons[activity.type as keyof typeof activityIcons] || MapPin;
                          return (
                            <div key={activity.id} className="border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-left" style={{animationDelay: `${activityIndex * 0.1}s`}}>
                            <div key={activity.id} className="border border-forest-green/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slide-in-left" style={{animationDelay: `${activityIndex * 0.1}s`}}>
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start space-x-4">
                                  <div className="bg-forest-green/10 p-2 rounded-lg">
                                    <IconComponent className="h-5 w-5 text-forest-green" />
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-1 font-display">{activity.name}</h3>
                                    <Badge variant="secondary" className="mb-2 font-medium">{activity.type}</Badge>
                                    <p className="text-midnight-blue/70 mb-3 font-light">{activity.description}</p>
                                    <div className="flex items-center gap-4 text-sm text-midnight-blue/70 font-medium">
                                      <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {activity.duration} min
                                      </div>
                                      <div className="flex items-center">
                                        <DollarSign className="h-4 w-4 mr-1" />
                                        ${activity.cost}
                                      </div>
                                      <div className="flex items-center">
                                        <Star className="h-4 w-4 mr-1 text-yellow-500" />
                                        {activity.rating} ({activity.reviewCount.toLocaleString()})
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <h4 className="font-semibold mb-2 flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    Location
                                  </h4>
                                  <p className="text-midnight-blue/70 font-light">{activity.location.address}</p>
                                  <p className="text-midnight-blue/60 mt-1 font-light">Hours: {activity.openingHours}</p>
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">Pro Tips</h4>
                                  <ul className="text-midnight-blue/70 space-y-1 font-light">
                                    {activity.tips.slice(0, 2).map((tip, index) => (
                                      <li key={index} className="text-sm">• {tip}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {day.transportNotes.length > 0 && (
                        <div className="mt-6 p-4 bg-forest-green/5 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Navigation className="h-4 w-4 mr-1 text-forest-green" />
                            Transportation Tips
                          </h4>
                          <ul className="text-sm text-midnight-blue/70 space-y-1 font-light">
                            {day.transportNotes.map((note, index) => (
                              <li key={index}>• {note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Trip Highlights */}
            <Card className="transition-all duration-300 hover:shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center font-display">
                  <Heart className="h-5 w-5 mr-2 text-forest-green" />
                  Adventure Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {itinerary.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-4 w-4 mr-2 text-earthy-brown mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-light">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="transition-all duration-300 hover:shadow-lg animate-slide-up" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="font-display">Adventure Map</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <MapComponent 
                  activities={itinerary.days[selectedDay]?.activities || []} 
                  center={itinerary.mapCenter}
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="transition-all duration-300 hover:shadow-lg animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="font-display">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-midnight-blue/70 font-light">Total Duration</span>
                  <span className="font-medium">{itinerary.totalDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight-blue/70 font-light">Estimated Cost</span>
                  <span className="font-medium">${itinerary.totalCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight-blue/70 font-light">Activities</span>
                  <span className="font-medium">{itinerary.days.reduce((acc, day) => acc + day.activities.length, 0)}</span>
                </div>
                <Separator />
                <Button className="w-full bg-forest-green hover:bg-forest-green/90 font-semibold" onClick={downloadItinerary}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Adventure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}