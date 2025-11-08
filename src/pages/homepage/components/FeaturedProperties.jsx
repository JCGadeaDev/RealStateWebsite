import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Star,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
} from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Villa de Lujo con Vista al Mar',
      location: 'Marbella, Málaga',
      price: '€3.200.000',
      originalPrice: '€3.500.000',
      image: 'https://images.unsplash.com/photo-1559583166-ff8217a0db23',
      alt: 'Luxury beachfront villa with white modern architecture, infinity pool, and panoramic ocean views',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 m²',
      type: 'Villa',
      status: 'Nuevo',
      featured: true,
      amenities: ['Piscina', 'Jardín', 'Garaje', 'Vista al Mar'],
    },
    {
      id: 2,
      title: 'Penthouse Moderno Centro Ciudad',
      location: 'Madrid, Salamanca',
      price: '€1.850.000',
      image: 'https://images.unsplash.com/photo-1675075576630-db175ff8fb6b',
      alt: 'Modern penthouse with floor-to-ceiling windows, contemporary furniture, and city skyline panorama',
      bedrooms: 3,
      bathrooms: 3,
      area: '280 m²',
      type: 'Penthouse',
      status: 'Disponible',
      featured: true,
      amenities: ['Terraza', 'Ascensor', 'Parking', 'Gimnasio'],
    },
    {
      id: 3,
      title: 'Casa Histórica Restaurada',
      location: 'Barcelona, Gràcia',
      price: '€2.100.000',
      image: 'https://images.unsplash.com/photo-1640549664076-f969cc47d50f',
      alt: 'Restored historic townhouse with original stone facade, ornate balconies, and traditional Mediterranean architecture',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 m²',
      type: 'Casa',
      status: 'Exclusivo',
      featured: true,
      amenities: ['Patio', 'Bodega', 'Chimenea', 'Balcón'],
    },
    {
      id: 4,
      title: 'Apartamento de Lujo Frente al Puerto',
      location: 'Valencia, Puerto',
      price: '€890.000',
      image: 'https://images.unsplash.com/photo-1453110489996-ede650cc887e',
      alt: 'Luxury waterfront apartment with modern interior design, large windows overlooking marina with yachts',
      bedrooms: 2,
      bathrooms: 2,
      area: '180 m²',
      type: 'Apartamento',
      status: 'Nuevo',
      featured: false,
      amenities: ['Balcón', 'Parking', 'Portero', 'Piscina'],
    },
    {
      id: 5,
      title: 'Chalet Contemporáneo con Piscina',
      location: 'Sevilla, Aljarafe',
      price: '€750.000',
      image: 'https://images.unsplash.com/photo-1660361338517-8c8fbb3ac264',
      alt: 'Contemporary single-story house with clean lines, large glass doors, swimming pool, and landscaped garden',
      bedrooms: 4,
      bathrooms: 3,
      area: '350 m²',
      type: 'Chalet',
      status: 'Disponible',
      featured: false,
      amenities: ['Piscina', 'Jardín', 'Barbacoa', 'Garaje'],
    },
    {
      id: 6,
      title: 'Loft Industrial Renovado',
      location: 'Bilbao, Casco Viejo',
      price: '€650.000',
      image: 'https://images.unsplash.com/photo-1701911845753-7e467fc8d4bb',
      alt: 'Industrial loft with exposed brick walls, high ceilings, modern fixtures, and open-plan living space',
      bedrooms: 2,
      bathrooms: 2,
      area: '220 m²',
      type: 'Loft',
      status: 'Exclusivo',
      featured: false,
      amenities: ['Terraza', 'Ascensor', 'Trastero', 'Calefacción'],
    },
  ];

  const PropertyCard = ({ property }) => (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg property-card-hover">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* --- ACTUALIZADO: <img> estándar --- */}
        <img
          src={property?.image}
          alt={property?.alt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src=`https://placehold.co/400x256/EAE6DC/333B44?text=Propiedad`;
          }}
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              property?.status === 'Nuevo'
                ? 'bg-success text-white'
                : property?.status === 'Exclusivo'
                ? 'bg-accent text-foreground'
                : 'bg-primary text-white'
            }`}
          >
            {property?.status}
          </span>
        </div>

        {/* Featured Badge */}
        {property?.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-warning text-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Star size={12} className="mr-1" fill="currentColor" />
              Destacado
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-white transition-colors">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Heart size={18} />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-white transition-colors">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price and Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-inter font-bold text-primary">
              {property?.price}
            </span>
            {property?.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {property?.originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
            {property?.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-playfair font-medium text-foreground mb-2 line-clamp-2">
          {property?.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-muted-foreground mb-4">
          {/* --- ACTUALIZADO: Icono de Lucide --- */}
          <MapPin size={16} className="mr-2" />
          <span className="text-sm font-inter">{property?.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Bed size={16} className="mr-1" />
            <span>{property?.bedrooms}</span>
          </div>
          <div className="flex items-center">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Bath size={16} className="mr-1" />
            <span>{property?.bathrooms}</span>
          </div>
          <div className="flex items-center">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Square size={16} className="mr-1" />
            <span>{property?.area}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property?.amenities?.slice(0, 3)?.map((amenity, index) => (
            <span
              key={index}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {property?.amenities?.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{property?.amenities?.length - 3} más
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link to={`/property-detail?id=${property?.id}`}>
          <Button variant="default" fullWidth>
            Ver Detalles
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-foreground mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Selección exclusiva de propiedades de lujo en las mejores
              ubicaciones de España.
            </p>
          </div>

          <Link to="/property-listings" className="hidden lg:block">
            {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Ver Todas
            </Button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties?.map((property) => (
            <PropertyCard key={property?.id} property={property} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center lg:hidden">
          <Link to="/property-listings">
            {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
            <Button
              variant="default"
              size="lg"
              icon={<ArrowRight size={20} />}
            >
              Ver Todas las Propiedades
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;