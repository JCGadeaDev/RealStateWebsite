import React, { useState } from 'react';
// ELIMINADO: import Icon from '../../../components/AppIcon';
// --- NUEVO: Importamos los iconos de Lucide ---
import {
  Home,
  GraduationCap,
  Car,
  MapPin,
  Star,
  Train,
} from 'lucide-react';
import { cn } from '../../../utils/cn'; // Para las clases

const iconMap = {
  Home: Home,
  GraduationCap: GraduationCap,
  Car: Car,
  MapPin: MapPin,
};

const NeighborhoodAnalytics = ({ neighborhood }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: 'Home' },
    { id: 'schools', label: 'Educación', icon: 'GraduationCap' },
    { id: 'transport', label: 'Transporte', icon: 'Car' },
    { id: 'amenities', label: 'Servicios', icon: 'MapPin' },
  ];

  const walkScore = {
    score: 85,
    description: 'Muy caminable - La mayoría de recados se pueden hacer a pie',
  };

  const schools = [
    {
      name: 'Colegio Internacional Madrid',
      type: 'Privado',
      rating: 4.8,
      distance: '0.3 km',
    },
    {
      name: 'IES Ramón y Cajal',
      type: 'Público',
      rating: 4.5,
      distance: '0.7 km',
    },
    {
      name: 'Universidad Complutense',
      type: 'Universidad',
      rating: 4.6,
      distance: '2.1 km',
    },
  ];

  const transport = [
    {
      type: 'Metro',
      name: 'Línea 6 - Nuevos Ministerios',
      distance: '0.4 km',
      time: '5 min',
      icon: Train, // Usamos Train de Lucide
    },
    {
      type: 'Autobús',
      name: 'Líneas 7, 40, 147',
      distance: '0.2 km',
      time: '2 min',
      icon: Car, // Usamos Car de Lucide (asumiendo que Car aplica a bus)
    },
    {
      type: 'Cercanías',
      name: 'C-1, C-2, C-7',
      distance: '0.8 km',
      time: '8 min',
      icon: Train, // Usamos Train de Lucide
    },
  ];

  const amenities = [
    {
      category: 'Supermercados',
      items: [
        'El Corte Inglés (0.3km)',
        'Mercadona (0.5km)',
        'Carrefour (0.8km)',
      ],
    },
    {
      category: 'Restaurantes',
      items: ['Casa Lucio (0.2km)', 'DiverXO (1.2km)', 'Botín (0.9km)'],
    },
    {
      category: 'Salud',
      items: [
        'Hospital Clínico (1.5km)',
        'Centro Médico (0.4km)',
        'Farmacia (0.1km)',
      ],
    },
    {
      category: 'Ocio',
      items: [
        'Parque del Retiro (0.6km)',
        'Museo del Prado (1.1km)',
        'Teatro Real (0.8km)',
      ],
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Walk Score */}
            {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-playfair font-medium text-foreground">
                  Puntuación de Caminabilidad
                </h4>
                <div className="text-3xl font-inter font-bold text-success">
                  {walkScore?.score}
                </div>
              </div>
              <div className="w-full bg-border rounded-full h-3 mb-3">
                <div
                  className="bg-success h-3 rounded-full transition-all duration-500"
                  style={{ width: `${walkScore?.score}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {walkScore?.description}
              </p>
            </div>
            {/* Neighborhood Stats */}
            <div className="grid grid-cols-2 gap-4">
              {/* --- ACTUALIZADO: bg-card y border-border --- */}
              <div className="text-center p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="text-2xl font-inter font-bold text-primary mb-1">
                  €3,200
                </div>
                <div className="text-sm text-muted-foreground">
                  Precio medio/m²
                </div>
              </div>
              {/* --- ACTUALIZADO: bg-card y border-border --- */}
              <div className="text-center p-4 bg-card rounded-xl border border-border shadow-sm">
                <div className="text-2xl font-inter font-bold text-success mb-1">
                  +5.2%
                </div>
                <div className="text-sm text-muted-foreground">
                  Crecimiento anual
                </div>
              </div>
            </div>
            {/* Map */}
            {/* --- ACTUALIZADO: bg-muted y border-border --- */}
            <div className="h-64 bg-muted rounded-xl overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Ubicación del barrio"
                referrerPolicy="no-referrer-when-downgrade"
                // Coordenadas de Barrio de Salamanca, Madrid
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7909340626356!2d-3.682662284605912!3d40.42878957936309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289f6d4d1e2b%3A0x6d9f7e5f3c9d7d10!2sBarrio%20de%20Salamanca%2C%20Madrid!5e0!3m2!1sen!2ses!4v1677894567890!5m2!1sen!2ses"
                className="border-0"
                allowFullScreen=""
              />
            </div>
          </div>
        );

      case 'schools':
        return (
          <div className="space-y-4">
            {schools?.map((school, index) => (
              <div
                key={index}
                // --- ACTUALIZADO: bg-muted/30 y border-border ---
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border"
              >
                <div className="flex-1">
                  <h4 className="font-playfair font-medium text-foreground mb-1">
                    {school?.name}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{school?.type}</span>
                    <div className="flex items-center space-x-1">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <Star
                        size={14}
                        className="text-warning fill-current"
                      />
                      <span>{school?.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-inter font-medium text-primary">
                    {school?.distance}
                  </div>
                  <div className="text-sm text-muted-foreground">a pie</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'transport':
        return (
          <div className="space-y-4">
            {transport?.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  // --- ACTUALIZADO: bg-muted/30 y border-border ---
                  className="flex items-center space-x-4 p-4 bg-muted/30 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    {IconComponent && (
                      <IconComponent size={20} className="text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-medium text-foreground mb-1">
                      {item?.name}
                    </h4>
                    <div className="text-sm text-muted-foreground">
                      {item?.type}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-inter font-medium text-primary">
                      {item?.distance}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item?.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'amenities':
        return (
          <div className="space-y-6">
            {amenities?.map((category, index) => (
              <div key={index}>
                <h4 className="font-playfair font-medium text-foreground mb-3">
                  {category?.category}
                </h4>
                <div className="space-y-3">
                  {category?.items?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      // --- ACTUALIZADO: bg-muted/30 y border-border ---
                      className="flex items-center space-x-3 p-3 bg-muted/30 rounded-xl border border-border"
                    >
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <MapPin size={16} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-playfair font-medium text-foreground mb-1">
          Análisis del Barrio
        </h3>
        <p className="text-muted-foreground">
          Descubre todo lo que ofrece {neighborhood?.name}
        </p>
      </div>
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => {
            const IconComponent = iconMap[tab.icon];
            return (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={cn(
                  'flex items-center space-x-2 px-6 py-4 border-b-2 transition-all duration-200 whitespace-nowrap',
                  tab?.id === activeTab
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-transparent text-muted-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                {IconComponent && <IconComponent size={18} />}
                <span className="font-medium">{tab?.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-6">{renderTabContent()}</div>
    </div>
  );
};

export default NeighborhoodAnalytics;