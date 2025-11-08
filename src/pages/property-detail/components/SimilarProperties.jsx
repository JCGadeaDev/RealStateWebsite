import React from 'react';
import { Link } from 'react-router-dom';
// ELIMINADO: import Icon from '../../../components/AppIcon';
// ELIMINADO: import Image from '../../../components/AppImage';

// --- NUEVO: Importamos los iconos de Lucide ---
import {
  ArrowRight,
  MapPin,
  Bed,
  Bath,
  Maximize2, // Usamos Maximize2 para superficie
  Plus,
} from 'lucide-react';
import Button from '../../../components/ui/Button';

// Helper para formatear la moneda
const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return amount;
  return `€${amount?.toLocaleString('es-ES', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })}`;
};

const SimilarProperties = ({ properties }) => {
  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground mb-1">
              Propiedades Similares
            </h3>
            <p className="text-muted-foreground font-inter text-sm">
              Otras opciones que podrían interesarte
            </p>
          </div>
          <Link to="/property-listings">
            {/* --- ACTUALIZADO: Botón con prop 'icon' (ArrowRight) --- */}
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              Ver Todas
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {properties?.map((property, index) => (
            // --- ACTUALIZADO: border-border y hover:bg-muted/50 ---
            <div
              key={index}
              className="flex space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              {/* Property Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-20 rounded-lg overflow-hidden">
                  {/* --- ACTUALIZADO: <img> estándar con fallback --- */}
                  <img
                    src={property?.image}
                    alt={property?.imageAlt || property?.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/96x80/EAE6DC/333B44?text=Prop`;
                    }}
                  />
                </div>
              </div>

              {/* Property Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-foreground truncate pr-2 font-inter text-base">
                    {property?.title}
                  </h4>
                  {/* --- ACTUALIZADO: text-primary para el precio --- */}
                  <div className="text-lg font-playfair font-medium text-primary whitespace-nowrap">
                    {formatCurrency(property?.price)}
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                  {/* --- ACTUALIZADO: Icono de Lucide --- */}
                  <MapPin size={14} />
                  <span className="truncate font-inter">
                    {property?.location}
                  </span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    <Bed size={14} />
                    <span>{property?.bedrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    <Bath size={14} />
                    <span>{property?.bathrooms}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    <Maximize2 size={14} />
                    <span>{property?.area} m²</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 flex items-center">
                <Link to={`/property-detail?id=${property?.id}`}>
                  {/* --- ACTUALIZADO: Botón con prop 'icon' (ArrowRight) --- */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 text-primary hover:bg-primary/5"
                    icon={<ArrowRight size={18} />}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          {/* --- ACTUALIZADO: Botón con prop 'icon' (Plus) --- */}
          <Button
            variant="outline"
            size="sm"
            icon={<Plus size={16} />}
            iconPosition="left"
          >
            Cargar Más Propiedades
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarProperties;