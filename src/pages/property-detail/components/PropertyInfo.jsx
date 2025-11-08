import React from 'react';
// ELIMINADO: import Icon from '../../../components/AppIcon';

// --- NUEVO: Importamos los iconos de Lucide ---
import {
  Bed,
  Bath,
  Car,
  Maximize2,
  Calendar,
  Home,
  MapPin,
  Star,
  Check,
} from 'lucide-react';

const PropertyInfo = ({ property }) => {
  // Mapeo de features usando componentes de Lucide
  const features = [
    { icon: Bed, label: 'Dormitorios', value: property?.bedrooms },
    { icon: Bath, label: 'Baños', value: property?.bathrooms },
    { icon: Car, label: 'Garaje', value: property?.parking },
    { icon: Maximize2, label: 'Superficie', value: `${property?.area} m²` },
    { icon: Calendar, label: 'Año', value: property?.yearBuilt },
    { icon: Home, label: 'Tipo', value: property?.type },
  ];

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="mb-6">
        {/* Title and Location */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-playfair font-medium text-foreground">
            {property?.title}
          </h1>
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <MapPin size={20} className="text-muted-foreground" />
            <span className="text-muted-foreground font-inter text-base">
              {property?.location}
            </span>
          </div>
        </div>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="text-4xl font-playfair font-medium text-primary">
            €{property?.price?.toLocaleString('es-ES')}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {/* --- ACTUALIZADO: Icono de Lucide y color warning --- */}
              <Star
                size={16}
                className="text-warning fill-current"
              />
              <span className="text-sm font-medium text-foreground font-inter">
                {property?.rating}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-inter">
              {property?.views} visualizaciones
            </span>
          </div>
        </div>
      </div>

      {/* Property Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {features?.map((feature, index) => {
          const IconComponent = feature.icon; // Componente Lucide
          return (
            <div
              key={index}
              // --- ACTUALIZADO: bg-muted/30 y border-border ---
              className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg border border-border"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                {/* --- ACTUALIZADO: Renderizamos el componente Lucide --- */}
                <IconComponent size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground font-inter">
                  {feature?.label}
                </div>
                <div className="font-playfair font-medium text-foreground text-lg">
                  {feature?.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="text-xl font-playfair font-medium text-foreground mb-3 border-b border-border pb-2">
          Descripción
        </h3>
        <p className="text-muted-foreground leading-relaxed font-inter whitespace-pre-line">
          {property?.description}
        </p>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="text-xl font-playfair font-medium text-foreground mb-4 border-b border-border pb-2">
          Características Destacadas
        </h3>
        {/* Ajustado a 3 columnas para mejor lectura en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
          {property?.amenities?.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Check size={18} className="text-success flex-shrink-0" />
              <span className="text-sm text-muted-foreground font-inter">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;