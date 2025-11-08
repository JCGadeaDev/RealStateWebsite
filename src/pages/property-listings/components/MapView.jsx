import React, { useState } from 'react';

// --- Iconos SVG en línea (reemplazo de AppIcon) ---
// Usamos el set de iconos 'lucide-react' como inspiración.

const MapPinIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Maximize2Icon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const Minimize2Icon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="10" y1="14" x2="3" y2="21" />
  </svg>
);

const XIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = ({ size = 14, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PlusIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const NavigationIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

// --- Componente MapView ---

const MapView = ({ properties, onPropertySelect, selectedProperty }) => {
  const [mapCenter] = useState({ lat: 40.4168, lng: -3.7038 }); // Madrid center
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePropertyMarkerClick = (property) => {
    onPropertySelect(property);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(price);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Estilos y animaciones en línea para que el componente sea autónomo
  const styles = `
    :root {
      --color-primary: #0A2342; /* Un azul oscuro/naval para lujo */
      --color-secondary: #D4AF37; /* Un tono dorado/oro */
      --color-accent: #B8860B; /* Oro oscuro */
      --color-muted-foreground: #6B7280; /* Gris estándar */
    }

    .text-primary { color: var(--color-primary); }
    .bg-primary { background-color: var(--color-primary); }
    .border-primary { border-color: var(--color-primary); }
    .hover\\:border-primary:hover { border-color: var(--color-primary); }
    .text-secondary { color: var(--color-secondary); }
    .bg-secondary { background-color: var(--color-secondary); }
    .text-accent { color: var(--color-accent); }
    .bg-accent { background-color: var(--color-accent); }
    .text-muted-foreground { color: var(--color-muted-foreground); }
    
    .font-playfair {
      font-family: 'Playfair Display', serif; /* Asumiendo que esta fuente está cargada globalmente */
    }

    .shadow-luxury {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.07);
    }
    
    @keyframes slide-up {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-slide-up {
      animation: slide-up 0.3s ease-out forwards;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className={`relative bg-white rounded-xl shadow-luxury overflow-hidden transition-all duration-300 ${
        isFullscreen ? 'fixed inset-4 z-50' : 'h-96'
      }`}>
        {/* Map Header */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <MapPinIcon size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {properties?.length} propiedades en el mapa
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {/* Botón refactorizado */}
            <button
              onClick={toggleFullscreen}
              className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md p-2 text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all"
            >
              {isFullscreen ? <Minimize2Icon size={16} /> : <Maximize2Icon size={16} />}
            </button>
            {isFullscreen && (
              /* Botón refactorizado */
              <button
                onClick={toggleFullscreen}
                className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md p-2 text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all"
              >
                <XIcon size={16} />
              </button>
            )}
          </div>
        </div>
        
        {/* Map Container */}
        <div className="w-full h-full relative">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Mapa de Propiedades - Madrid"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapCenter?.lat},${mapCenter?.lng}&z=12&output=embed`}
            className="w-full h-full"
          />
          
          {/* Property Markers Overlay (Simulación) */}
          {/* NOTA: Esto es una simulación de marcadores sobre el iframe.
              En una implementación real con Google Maps API, los marcadores se renderizarían DENTRO del mapa.
              Este overlay es solo visual y no se moverá con el mapa del iframe. */}
          <div className="absolute inset-0 pointer-events-none">
            {properties?.slice(0, 8)?.map((property, index) => (
              <div
                key={property?.id}
                className="absolute pointer-events-auto"
                style={{
                  // Posicionamiento simulado
                  left: `${20 + (index % 4) * 20}%`,
                  top: `${30 + Math.floor(index / 4) * 25}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <button
                  onClick={() => handlePropertyMarkerClick(property)}
                  className={`
                    relative bg-white rounded-lg shadow-lg px-3 py-2 border-2 transition-all duration-200
                    ${selectedProperty?.id === property?.id 
                      ? 'border-primary scale-110' :'border-transparent hover:border-primary hover:scale-105'
                    }
                  `}
                >
                  <div className="text-xs font-medium text-primary">
                    {formatPrice(property?.price)}
                  </div>
                  {/* Triángulo indicador */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Selected Property Card */}
        {selectedProperty && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="bg-white rounded-lg shadow-luxury p-4 animate-slide-up">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={selectedProperty?.images?.[0] || 'https://placehold.co/100x100/eeeeee/aaaaaa?text=Img'}
                    alt={selectedProperty?.imageAlt || 'Propiedad'}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://placehold.co/100x100/eeeeee/aaaaaa?text=Error'; }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-primary truncate">
                    {selectedProperty?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPinIcon size={12} className="mr-1" />
                    {selectedProperty?.location}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-lg font-playfair font-medium text-primary">
                      {formatPrice(selectedProperty?.price)}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{selectedProperty?.bedrooms} dorm</span>
                      <span>•</span>
                      <span>{selectedProperty?.bathrooms} baños</span>
                      <span>•</span>
                      <span>{selectedProperty?.area} m²</span>
                    </div>
                  </div>
                </div>
                
                {/* Botón refactorizado */}
                <button
                  className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-primary shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all flex-shrink-0"
                >
                  <ExternalLinkIcon size={14} className="mr-1" />
                  Ver
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Map Controls */}
        {!selectedProperty && ( // Ocultar controles si hay una tarjeta seleccionada para evitar superposición
          <div className="absolute bottom-4 right-4 z-10 flex flex-col space-y-2">
            {/* Botón refactorizado */}
            <button
              className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md w-10 h-10 p-0 text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all"
            >
              <PlusIcon size={16} />
            </button>
            {/* Botón refactorizado */}
            <button
              className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md w-10 h-10 p-0 text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all"
            >
              <MinusIcon size={16} />
            </button>
            {/* Botón refactorizado */}
            <button
              className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md w-10 h-10 p-0 text-sm font-medium shadow-sm hover:bg-gray-50 flex items-center justify-center transition-all"
            >
              <NavigationIcon size={16} />
            </button>
          </div>
        )}
        
        {/* Legend */}
        <div className="absolute top-16 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Propiedades disponibles</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span>Propiedades premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span>Nuevas en el mercado</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapView;