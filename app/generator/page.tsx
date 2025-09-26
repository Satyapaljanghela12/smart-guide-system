'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Calendar, DollarSign, Heart, Clock, Loader as Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const interests = [
  'Museums & Culture',
  'Food & Dining',
  'Nightlife',
  'Outdoor Activities',
  'Shopping',
  'Historical Sites',
  'Art & Galleries',
  'Nature & Parks',
  'Architecture',
  'Local Experiences',
  'Adventure Sports',
  'Photography'
];

export default function ItineraryGenerator() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    groupSize: '',
    interests: [] as string[],
    pace: '',
    accommodation: '',
    notes: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to trip details with mock data
    router.push('/trip/sample');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
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
              <Link href="/generator" className="text-sky-600 font-medium">
                Plan Trip
              </Link>
              <Link href="/trips" className="text-gray-600 hover:text-gray-900 transition-colors">
                My Trips
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Perfect Itinerary</h1>
          <p className="text-xl text-gray-600">Tell us your preferences and we'll craft a personalized travel plan</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Destination & Dates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <span>Destination & Dates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="destination">Where would you like to go?</Label>
                <Input
                  id="destination"
                  placeholder="e.g., Paris, France or Tokyo, Japan"
                  value={formData.destination}
                  onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                  required
                  className="mt-2"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget & Group */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-emerald-600" />
                <span>Budget & Group Size</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget">Budget per person (USD)</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($0 - $100/day)</SelectItem>
                      <SelectItem value="mid">Mid-range ($100 - $300/day)</SelectItem>
                      <SelectItem value="luxury">Luxury ($300+ /day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="groupSize">Group Size</Label>
                  <Select value={formData.groupSize} onValueChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Number of travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo traveler</SelectItem>
                      <SelectItem value="couple">Couple (2 people)</SelectItem>
                      <SelectItem value="small">Small group (3-5 people)</SelectItem>
                      <SelectItem value="large">Large group (6+ people)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-rose-600" />
                <span>What interests you?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label htmlFor={interest} className="text-sm cursor-pointer">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Travel Style */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <span>Travel Style & Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="pace">Travel Pace</Label>
                  <Select value={formData.pace} onValueChange={(value) => setFormData(prev => ({ ...prev, pace: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="How fast-paced?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relaxed">Relaxed - Take it easy</SelectItem>
                      <SelectItem value="moderate">Moderate - Balanced schedule</SelectItem>
                      <SelectItem value="packed">Packed - See everything</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="accommodation">Accommodation Style</Label>
                  <Select value={formData.accommodation} onValueChange={(value) => setFormData(prev => ({ ...prev, accommodation: value }))}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Preferred lodging" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hostel">Budget/Hostel</SelectItem>
                      <SelectItem value="hotel">Mid-range Hotel</SelectItem>
                      <SelectItem value="luxury">Luxury Hotel/Resort</SelectItem>
                      <SelectItem value="local">Local/Airbnb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific requirements, accessibility needs, or preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isGenerating}
              className="text-lg px-12 py-6 bg-sky-600 hover:bg-sky-700"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Crafting Your Itinerary...
                </>
              ) : (
                'Generate My Itinerary'
              )}
            </Button>
            {isGenerating && (
              <p className="text-gray-600 mt-4">
                Analyzing destinations, checking weather, optimizing routes...
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}