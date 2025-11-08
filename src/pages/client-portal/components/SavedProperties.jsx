import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Bell,
  BellOff,
  Search,
} from 'lucide-react';
// --- ACTUALIZADO: Importamos Button y cn ---
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

const SavedProperties = () => {
  const [activeTab, setActiveTab] = useState('watchlist');

  // Datos de ejemplo
  const watchlistProperties = [
    {
      id: 1,
      title: 'Luxury Penthouse in Barcelona',
      location: 'Eixample, Barcelona',
      price: '€3,200,000',
      image: 'https://images.unsplash.com/photo-1650355265079-9dad4fa101e6',
      imageAlt:
        'Modern luxury penthouse with floor-to-ceiling windows and panoramic city views',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 m²',
      status: 'Available',
      savedDate: '2024-10-20',
      isFavorite: true, // Añadido para el icono del corazón
    },
    {
      id: 2,
      title: 'Beachfront Villa in Marbella',
      location: 'Golden Mile, Marbella',
      price: '€5,800,000',
      image: 'https://images.unsplash.com/photo-1604601600542-c751186db4a3',
      imageAlt:
        'White modern villa with infinity pool overlooking Mediterranean Sea',
      bedrooms: 6,
      bathrooms: 5,
      area: '450 m²',
      status: 'Under Offer',
      savedDate: '2024-10-18',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'Historic Mansion in Madrid',
      location: 'Salamanca, Madrid',
      price: '€4,500,000',
      image: 'https://images.unsplash.com/photo-1573857518865-0427cc859b2a',
      imageAlt:
        'Classic Spanish mansion with ornate architecture and manicured gardens',
      bedrooms: 8,
      bathrooms: 6,
      area: '650 m²',
      status: 'Available',
      savedDate: '2024-10-15',
      isFavorite: true,
    },
  ];

  const recentSearches = [
    {
      id: 1,
      query: 'Luxury apartments in Barcelona €2M-€4M',
      results: 24,
      lastSearched: 'Today',
      alerts: true,
    },
    {
      id: 2,
      query: 'Beachfront villas Costa del Sol',
      results: 18,
      lastSearched: 'Yesterday',
      alerts: true,
    },
    {
      id: 3,
      query: 'Investment properties Madrid center',
      results: 32,
      lastSearched: '3 days ago',
      alerts: false,
    },
  ];

  // --- ACTUALIZADO: getStatusColor usa la nueva paleta de Tailwind ---
  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-success/20 text-success';
      case 'Under Offer':
        return 'bg-warning/20 text-warning';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    // --- ACTUALIZADO: border-border ---
    <div className="bg-card rounded-lg shadow-luxury border border-border">
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-playfair font-medium text-foreground mb-4">
          Saved Properties & Searches
        </h2>

        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('watchlist')}
            className={cn(
              'flex-1 px-4 py-2 text-sm font-inter font-medium rounded-md transition-colors duration-200',
              activeTab === 'watchlist'
                ? 'bg-card text-primary shadow-sm' // ACTUALIZADO
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Watchlist ({watchlistProperties?.length})
          </button>
          <button
            onClick={() => setActiveTab('searches')}
            className={cn(
              'flex-1 px-4 py-2 text-sm font-inter font-medium rounded-md transition-colors duration-200',
              activeTab === 'searches'
                ? 'bg-card text-primary shadow-sm' // ACTUALIZADO
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Saved Searches ({recentSearches?.length})
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === 'watchlist' && (
          <div className="space-y-4">
            {watchlistProperties?.map((property) => (
              <div
                key={property?.id}
                // --- ACTUALIZADO: border-border ---
                className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  {/* --- ACTUALIZADO: <img> con fallback --- */}
                  <img
                    src={property?.image}
                    alt={property?.imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/80x80/EAE6DC/333B44?text=Prop`;
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-inter font-medium text-foreground mb-1">
                        {property?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <MapPin size={14} className="mr-1" />
                        {property?.location}
                      </p>
                    </div>
                    <span
                      className={cn(
                        'px-2 py-1 text-xs font-medium rounded-full',
                        getStatusColor(property?.status)
                      )}
                    >
                      {property?.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <Bed size={14} className="mr-1" />
                        {property?.bedrooms}
                      </span>
                      <span className="flex items-center">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <Bath size={14} className="mr-1" />
                        {property?.bathrooms}
                      </span>
                      <span className="flex items-center">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <Square size={14} className="mr-1" />
                        {property?.area}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-playfair font-medium text-primary">
                        {property?.price}
                      </span>
                      {/* --- ACTUALIZADO: Botón de icono --- */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          'w-8 h-8',
                          property?.isFavorite
                            ? 'text-error'
                            : 'text-muted-foreground hover:text-error'
                        )}
                        icon={
                          <Heart
                            size={16}
                            fill={property?.isFavorite ? 'currentColor' : 'none'}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'searches' && (
          <div className="space-y-4">
            {recentSearches?.map((search) => (
              <div
                key={search?.id}
                // --- ACTUALIZADO: border-border ---
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="text-base font-inter font-medium text-foreground mb-1">
                    {search?.query}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{search?.results} results</span>
                    <span>Last searched: {search?.lastSearched}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    {search?.alerts ? (
                      <Bell size={16} className="text-primary" />
                    ) : (
                      <BellOff size={16} className="text-muted-foreground" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {search?.alerts ? 'Alerts On' : 'Alerts Off'}
                    </span>
                  </div>
                  {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Search size={14} />}
                  >
                    Search Again
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProperties;