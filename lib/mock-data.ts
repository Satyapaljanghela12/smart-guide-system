export interface Activity {
  id: string;
  name: string;
  type: string;
  description: string;
  duration: number; // in minutes
  cost: number;
  rating: number;
  reviewCount: number;
  location: {
    address: string;
    coordinates: [number, number]; // [lat, lng]
  };
  openingHours: string;
  tips: string[];
  imageUrl: string;
}

export interface DayPlan {
  date: string;
  title: string;
  activities: Activity[];
  totalCost: number;
  totalDuration: number;
  weather: {
    condition: string;
    temperature: string;
    icon: string;
  };
  transportNotes: string[];
}

export interface TripItinerary {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalCost: number;
  overview: string;
  highlights: string[];
  days: DayPlan[];
  mapCenter: [number, number];
  created: string;
}

export const mockItinerary: TripItinerary = {
  id: 'sample',
  destination: 'Paris, France',
  startDate: '2024-06-15',
  endDate: '2024-06-19',
  totalDays: 5,
  totalCost: 1250,
  overview: 'A perfect blend of iconic landmarks, world-class museums, charming neighborhoods, and culinary delights. This itinerary balances must-see attractions with authentic local experiences.',
  highlights: [
    'Skip-the-line access to Eiffel Tower and Louvre',
    'Guided food tour in Le Marais district',
    'Seine River cruise at sunset',
    'Day trip to Versailles Palace',
    'Hidden gems in Montmartre'
  ],
  mapCenter: [48.8566, 2.3522],
  created: '2024-01-15T10:00:00Z',
  days: [
    {
      date: '2024-06-15',
      title: 'Classic Paris Icons',
      totalCost: 180,
      totalDuration: 480,
      weather: {
        condition: 'Partly Cloudy',
        temperature: '22°C',
        icon: '⛅'
      },
      transportNotes: [
        'Use Metro Day Pass (€7.50)',
        'Walking distance between most attractions'
      ],
      activities: [
        {
          id: 'eiffel-tower',
          name: 'Eiffel Tower',
          type: 'Landmark',
          description: 'Iconic iron tower offering breathtaking views of Paris from multiple levels.',
          duration: 120,
          cost: 29,
          rating: 4.6,
          reviewCount: 143250,
          location: {
            address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
            coordinates: [48.8584, 2.2945]
          },
          openingHours: '9:30 AM - 11:45 PM',
          tips: [
            'Book skip-the-line tickets in advance',
            'Visit at sunset for magical views',
            'Bring a jacket - it gets windy at the top'
          ],
          imageUrl: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
        },
        {
          id: 'louvre-museum',
          name: 'Louvre Museum',
          type: 'Museum',
          description: 'World\'s largest art museum housing the Mona Lisa, Venus de Milo, and countless masterpieces.',
          duration: 180,
          cost: 17,
          rating: 4.5,
          reviewCount: 98765,
          location: {
            address: 'Rue de Rivoli, 75001 Paris',
            coordinates: [48.8606, 2.3376]
          },
          openingHours: '9:00 AM - 6:00 PM',
          tips: [
            'Focus on specific wings to avoid overwhelm',
            'Use the museum app for guided tours',
            'Enter through the Carrousel entrance for shorter lines'
          ],
          imageUrl: 'https://images.pexels.com/photos/2675269/pexels-photo-2675269.jpeg'
        },
        {
          id: 'seine-cruise',
          name: 'Seine River Cruise',
          type: 'Activity',
          description: 'Relaxing boat cruise offering unique perspectives of Paris landmarks from the water.',
          duration: 60,
          cost: 15,
          rating: 4.3,
          reviewCount: 23456,
          location: {
            address: 'Port de la Bourdonnais, 75007 Paris',
            coordinates: [48.8590, 2.2945]
          },
          openingHours: '10:00 AM - 10:00 PM',
          tips: [
            'Evening cruises offer beautiful lighting',
            'Sit on the right side for better monument views',
            'Audio guide available in multiple languages'
          ],
          imageUrl: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg'
        },
        {
          id: 'latin-quarter-dinner',
          name: 'Latin Quarter Dinner',
          type: 'Dining',
          description: 'Traditional French bistro experience in the historic Latin Quarter.',
          duration: 120,
          cost: 45,
          rating: 4.4,
          reviewCount: 5678,
          location: {
            address: 'Rue de la Harpe, 75005 Paris',
            coordinates: [48.8532, 2.3429]
          },
          openingHours: '6:00 PM - 11:00 PM',
          tips: [
            'Try the coq au vin - house specialty',
            'Make reservations for popular restaurants',
            'Embrace the unhurried French dining pace'
          ],
          imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
        }
      ]
    },
    {
      date: '2024-06-16',
      title: 'Art & Culture Immersion',
      totalCost: 95,
      totalDuration: 420,
      weather: {
        condition: 'Sunny',
        temperature: '25°C',
        icon: '☀️'
      },
      transportNotes: [
        'Walk through Tuileries Garden',
        'Metro Line 1 to Bastille'
      ],
      activities: [
        {
          id: 'musee-dorsay',
          name: 'Musée d\'Orsay',
          type: 'Museum',
          description: 'Premier collection of Impressionist masterpieces in a stunning Belle Époque railway station.',
          duration: 150,
          cost: 16,
          rating: 4.7,
          reviewCount: 45678,
          location: {
            address: '1 Rue de la Légion d\'Honneur, 75007 Paris',
            coordinates: [48.8600, 2.3266]
          },
          openingHours: '9:30 AM - 6:00 PM',
          tips: [
            'Don\'t miss the Monet water lilies',
            'Visit the museum café with its giant clock',
            'Thursday evening visits until 9:45 PM'
          ],
          imageUrl: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg'
        },
        {
          id: 'marais-food-tour',
          name: 'Le Marais Food Tour',
          type: 'Food Tour',
          description: 'Guided culinary journey through the historic Marais district with tastings at local favorites.',
          duration: 180,
          cost: 75,
          rating: 4.8,
          reviewCount: 3456,
          location: {
            address: 'Place des Vosges, 75004 Paris',
            coordinates: [48.8558, 2.3658]
          },
          openingHours: '2:00 PM - 5:00 PM',
          tips: [
            'Come hungry - lots of tastings included',
            'Learn about Jewish quarter history',
            'Visit L\'As du Fallafel for best falafel'
          ],
          imageUrl: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg'
        },
        {
          id: 'place-des-vosges',
          name: 'Place des Vosges',
          type: 'Historical Site',
          description: 'Oldest planned square in Paris with perfect symmetry and charming arcades.',
          duration: 90,
          cost: 0,
          rating: 4.5,
          reviewCount: 12345,
          location: {
            address: 'Place des Vosges, 75004 Paris',
            coordinates: [48.8558, 2.3658]
          },
          openingHours: 'Always open',
          tips: [
            'Perfect spot for picnics in the central park',
            'Browse art galleries under the arcades',
            'Visit Victor Hugo\'s house (now museum)'
          ],
          imageUrl: 'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg'
        }
      ]
    },
    {
      date: '2024-06-17',
      title: 'Montmartre & Sacred Heart',
      totalCost: 120,
      totalDuration: 360,
      weather: {
        condition: 'Light Rain',
        temperature: '18°C',
        icon: '🌦️'
      },
      transportNotes: [
        'Take Funicular to avoid steep climb',
        'Umbrella recommended for afternoon'
      ],
      activities: [
        {
          id: 'sacre-coeur',
          name: 'Sacré-Cœur Basilica',
          type: 'Religious Site',
          description: 'Stunning white basilica atop Montmartre hill with panoramic Paris views.',
          duration: 90,
          cost: 0,
          rating: 4.4,
          reviewCount: 67890,
          location: {
            address: '35 Rue du Chevalier de la Barre, 75018 Paris',
            coordinates: [48.8867, 2.3431]
          },
          openingHours: '6:00 AM - 10:30 PM',
          tips: [
            'Visit the dome for the best views (small fee)',
            'Respect photography rules inside',
            'Street artists perform on the steps'
          ],
          imageUrl: 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg'
        },
        {
          id: 'montmartre-walking-tour',
          name: 'Montmartre Artist Quarter',
          type: 'Walking Tour',
          description: 'Explore the bohemian village where Picasso, Renoir, and Toulouse-Lautrec lived and worked.',
          duration: 150,
          cost: 25,
          rating: 4.6,
          reviewCount: 8765,
          location: {
            address: 'Place du Tertre, 75018 Paris',
            coordinates: [48.8865, 2.3406]
          },
          openingHours: '10:00 AM - 6:00 PM',
          tips: [
            'Watch portrait artists at Place du Tertre',
            'Visit the last remaining vineyard in Paris',
            'See the famous Moulin Rouge from outside'
          ],
          imageUrl: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg'
        },
        {
          id: 'montmartre-cafe',
          name: 'Traditional Montmartre Café',
          type: 'Dining',
          description: 'Authentic Parisian café experience with people-watching and local atmosphere.',
          duration: 120,
          cost: 35,
          rating: 4.2,
          reviewCount: 2345,
          location: {
            address: 'Rue des Abbesses, 75018 Paris',
            coordinates: [48.8848, 2.3385]
          },
          openingHours: '7:00 AM - 11:00 PM',
          tips: [
            'Order café au lait and croissant',
            'Practice your French with locals',
            'Perfect for rainy day refuge'
          ],
          imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
        }
      ]
    }
  ]
};