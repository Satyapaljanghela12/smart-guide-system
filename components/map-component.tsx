'use client';

import { useEffect, useRef } from 'react';
import { Activity } from '@/lib/mock-data';

interface MapComponentProps {
  activities: Activity[];
  center: [number, number];
}

export function MapComponent({ activities, center }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for actual map implementation
    // In a real app, you would integrate with Google Maps, Leaflet, or Mapbox
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
          <div class="text-center z-10">
            <div class="text-4xl mb-2">🗺️</div>
            <h3 class="text-lg font-semibold text-gray-800 mb-1">Interactive Map</h3>
            <p class="text-sm text-gray-600 mb-4">Day ${activities.length > 0 ? '1' : ''} Activities</p>
            <div class="space-y-2">
              ${activities.slice(0, 3).map((activity, index) => `
                <div class="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-left shadow-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ${index + 1}
                    </div>
                    <span class="text-sm font-medium text-gray-800">${activity.name}</span>
                  </div>
                </div>
              `).join('')}
              ${activities.length > 3 ? `
                <div class="text-xs text-gray-500">
                  +${activities.length - 3} more locations
                </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Decorative map elements -->
          <div class="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div class="absolute top-8 right-6 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div class="absolute bottom-6 left-8 w-2 h-2 bg-green-500 rounded-full"></div>
          <div class="absolute bottom-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          
          <!-- Map grid lines -->
          <div class="absolute inset-0 opacity-10">
            <div class="w-full h-full" style="background-image: linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 40px 40px;"></div>
          </div>
          
          <!-- Compass -->
          <div class="absolute top-4 right-4 bg-white/90 rounded-lg p-2 shadow-sm">
            <div class="text-xs font-mono">N</div>
            <div class="text-lg">🧭</div>
          </div>
        </div>
      `;
    }
  }, [activities, center]);

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden" ref={mapRef}>
      {/* Fallback content */}
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="text-gray-600">Map loading...</p>
        </div>
      </div>
    </div>
  );
}