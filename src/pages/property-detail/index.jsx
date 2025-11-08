import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Mover al inicio

import {
  ChevronRight,
  Heart,
  Share2,
  FileText,
  Phone,
  Calendar,
} from 'lucide-react';

import Button from '../../components/ui/Button';

// Mock component imports (asumimos que existen)
import PropertyGallery from './components/PropertyGallery';
import PropertyInfo from './components/PropertyInfo';
import VirtualTour from './components/VirtualTour';
import NeighborhoodAnalytics from './components/NeighborhoodAnalytics';
import InvestmentAnalysis from './components/InvestmentAnalysis';
import AgentContact from './components/AgentContact';
import SimilarProperties from './components/SimilarProperties';

// Mover fuera del componente funcional
const MemoizedPropertyGallery = React.memo(PropertyGallery);
const MemoizedPropertyInfo = React.memo(PropertyInfo);

const PropertyDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simular carga de datos
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (err) {
        setError(err.message || 'Ha ocurrido un error al cargar la propiedad');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  // Mock property data
  const property = {
    id: 1,
    title: 'Ático de Lujo en Salamanca',
    location: 'Barrio de Salamanca, Madrid',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: 180,
    yearBuilt: 2019,
    type: 'Ático',
    rating: 4.8,
    views: 1247,
    description: `Espectacular ático de lujo ubicado en el prestigioso Barrio de Salamanca. Esta exclusiva propiedad combina elegancia contemporánea con las mejores vistas panorámicas de Madrid.\n\nCon acabados de primera calidad, amplios espacios y una terraza privada de 60m², esta residencia ofrece el máximo confort y sofisticación. La cocina está completamente equipada con electrodomésticos de alta gama y la suite principal cuenta con vestidor y baño en suite.\n\nUbicado en una de las zonas más exclusivas de la capital, con fácil acceso a boutiques de lujo, restaurantes gourmet y excelentes conexiones de transporte.`,
    amenities: [
      'Terraza privada 60m²',
      'Cocina equipada premium',
      'Aire acondicionado',
      'Calefacción por suelo radiante',
      'Vestidor en suite principal',
      'Trastero incluido',
      'Plaza de garaje doble',
      'Portero físico 24h',
      'Gimnasio comunitario',
      'Piscina en azotea',
      'Jardín comunitario',
      'Sistema domótica',
    ],
  };

  // Mock gallery images
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1595959531210-8389d9b061c4',
      alt: 'Salón principal del ático con grandes ventanales y decoración moderna',
    },
    {
      url: 'https://images.unsplash.com/photo-1604145195376-e2c8195adf29',
      alt: 'Terraza privada con muebles de exterior y vistas panorámicas de Madrid',
    },
    {
      url: 'https://images.unsplash.com/photo-1640792087548-1af5386e6e9f',
      alt: 'Cocina moderna con isla central y electrodomésticos de acero inoxidable',
    },
    {
      url: 'https://images.unsplash.com/photo-1552155235-5d2ea4cd4d62',
      alt: 'Dormitorio principal con cama king size y vestidor integrado',
    },
    {
      url: 'https://images.unsplash.com/photo-1573045938008-29d173a65545',
      alt: 'Baño principal de lujo con bañera independiente y ducha de cristal',
    },
    {
      url: 'https://images.unsplash.com/photo-1636138389529-d35a2a348dc1',
      alt: 'Vista del comedor con mesa de madera y lámpara colgante moderna',
    },
  ];

  // Mock neighborhood data
  const neighborhood = {
    name: 'Barrio de Salamanca',
  };

  // Mock agent data
  const agent = {
    name: 'Carmen Rodríguez',
    title: 'Especialista en Propiedades de Lujo',
    avatar: 'https://images.unsplash.com/flagged/photo-1568734254283-e4bb69b8d364',
    avatarAlt:
      'Retrato profesional de mujer hispana con cabello castaño en traje azul marino',
    rating: 4.9,
    reviews: 127,
    experience: 12,
    propertiesSold: 245,
    avgDaysOnMarket: 28,
    responseTime: '< 2h',
    specialties: [
      'Propiedades de Lujo',
      'Barrio Salamanca',
      'Inversión Inmobiliaria',
      'Clientes Internacionales',
    ],
  };

  // Mock similar properties
  const similarProperties = [
    {
      id: 2,
      title: 'Piso Exclusivo en Serrano',
      location: 'Calle Serrano, Madrid',
      price: 980000,
      bedrooms: 3,
      bathrooms: 2,
      area: 145,
      image: 'https://images.unsplash.com/photo-1721523259501-b50383c9d88f',
      imageAlt: 'Salón elegante con sofás beige y ventanales grandes',
    },
    {
      id: 3,
      title: 'Dúplex Moderno en Velázquez',
      location: 'Calle Velázquez, Madrid',
      price: 1450000,
      bedrooms: 5,
      bathrooms: 4,
      area: 220,
      image: 'https://images.unsplash.com/photo-1610276099599-67d69ba55d1e',
      imageAlt: 'Cocina moderna con isla de mármol y taburetes altos',
    },
    {
      id: 4,
      title: 'Ático con Terraza en Goya',
      location: 'Calle Goya, Madrid',
      price: 1100000,
      bedrooms: 3,
      bathrooms: 3,
      area: 165,
      image: 'https://images.unsplash.com/photo-1599696850225-a0c950381056',
      imageAlt: 'Terraza amplia con plantas y muebles de jardín modernos',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb - ACTUALIZADO: Iconos de Lucide */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Inicio</span>
          <ChevronRight size={16} />
          <span>Propiedades</span>
          <ChevronRight size={16} />
          <span className="text-foreground">Ático de Lujo en Salamanca</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Gallery */}
            <MemoizedPropertyGallery
              images={galleryImages}
              propertyTitle={property?.title}
            />

            {/* Property Information */}
            <MemoizedPropertyInfo property={property} />

            {/* Virtual Tour */}
            <VirtualTour tourData={{}} />

            {/* Neighborhood Analytics */}
            <NeighborhoodAnalytics neighborhood={neighborhood} />

            {/* Investment Analysis */}
            <InvestmentAnalysis property={property} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sticky Actions */}
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions - ACTUALIZADO: Estilos y Botones con prop 'icon' */}
              <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
                <div className="space-y-4">
                  <Button
                    variant="default"
                    className="w-full" // Usar clase de Tailwind en su lugar
                    icon={<Heart size={20} />} // Icono de Lucide
                    iconPosition="left"
                  >
                    Guardar Favorito
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    icon={<Share2 size={20} />} // Icono de Lucide
                    iconPosition="left"
                  >
                    Compartir Propiedad
                  </Button>
                  <Button
                    variant="secondary"
                    fullWidth
                    icon={<FileText size={20} />} // Icono de Lucide
                    iconPosition="left"
                  >
                    Descargar Ficha
                  </Button>
                </div>
              </div>

              {/* Agent Contact */}
              <AgentContact agent={agent} />

              {/* Similar Properties */}
              <SimilarProperties properties={similarProperties} />
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - ACTUALIZADO: Botones con prop 'icon' */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-playfair font-medium text-white mb-4">
            ¿Interesado en esta propiedad?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte con toda la información
            que necesites y programar una visita personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              icon={<Phone size={20} />}
              iconPosition="left"
            >
              Programar Visita Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Programar Visita
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyDetail.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // ... resto de propiedades
  }),
  // ... otras props
};

PropertyDetail.defaultProps = {
  property: null,
};

export default PropertyDetail;