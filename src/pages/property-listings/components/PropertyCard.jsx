import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Icon from '../../../components/AppIcon'; // ELIMINADO
// import Image from '../../../components/AppImage'; // ELIMINADO
import Button from '../../../components/ui/Button'; // MANTENIDO

// --- FORMATTERS (Optimizados fuera del componente) ---

const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatPrice = (price) => {
  if (price == null) return 'N/A';
  return priceFormatter.format(price);
};

const formatArea = (area) => {
  if (area == null) return 'N/A';
  return `${area.toLocaleString('es-ES')} m²`;
};

// --- ICONOS SVG EN LÍNEA (Reemplazo de AppIcon) ---

const HeartIcon = ({ size = 18, fill = 'none', className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const GitCompareIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><path d="M11 18H8a2 2 0 0 1-2-2V9" />
  </svg>
);
const VideoIcon = ({ size = 12, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const MapPinIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const BedIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 4v16" /><path d="M2 10h20" /><path d="M7 10v10" /><path d="M17 10v10" /><path d="M22 17v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4" /><path d="M22 7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2" />
  </svg>
);
const BathIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12h6" /><path d="M12 10v6" /><path d="M12 21a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2h.5a2 2 0 0 0 2-2V2" /><path d="M6 10v1.1A5.002 5.002 0 0 0 8 16h8a5 5 0 0 0 2-4.9V10" />
  </svg>
);
const SquareIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);
const CarIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10h-3.2c-.1 0-.2.1-.2.1l-1.9 2.8c-.2.3-.5.4-.9.4H6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M9 17h6" />
  </svg>
);
const PhoneIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const CameraIcon = ({ size = 12, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" />
  </svg>
);

// --- COMPONENTE PRINCIPAL ---

const PropertyCard = ({ property, viewMode = 'grid', onSave, onCompare, isComparing = false }) => {
  const [isSaved, setIsSaved] = useState(property?.isSaved || false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Sincronizar el estado 'isSaved' si la prop cambia
  React.useEffect(() => {
    setIsSaved(property?.isSaved || false);
  }, [property?.isSaved]);

  const handleSave = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    onSave?.(property?.id, newSavedState);
  };

  const handleCompare = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onCompare?.(property?.id);
  };
  
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevenir bucles de error
    e.target.src = 'https://placehold.co/800x600/f3f4f6/6b7280?text=Imagen+no+disponible';
  };

  if (viewMode === 'list') {
    return (
      <>
        {/* Estilos para este componente (colores, sombras) */}
        <style>{`
          :root {
            --color-primary: #0A2342;
            --color-secondary: #007A7C;
            --color-accent: #D97706;
            --color-muted: #F3F4F6;
            --color-muted-foreground: #6B7280;
            --color-success: #10B981;
          }
          .bg-primary { background-color: var(--color-primary); }
          .bg-secondary { background-color: var(--color-secondary); }
          .bg-accent { background-color: var(--color-accent); }
          .bg-muted { background-color: var(--color-muted); }
          .text-primary { color: var(--color-primary); }
          .text-secondary { color: var(--color-secondary); }
          .text-accent { color: var(--color-accent); }
          .text-muted-foreground { color: var(--color-muted-foreground); }
          .text-success { color: var(--color-success); }
          .font-playfair { font-family: 'Playfair Display', serif; }
          .shadow-luxury { box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.04); }
          .hover\\:shadow-luxury-lg:hover { box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.05); }
        `}</style>
      
        <Link 
          to={`/property-detail?id=${property?.id}`}
          className="block bg-white rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="relative w-full md:w-80 h-64 md:h-48 overflow-hidden flex-shrink-0">
              {/* REEMPLAZO: img en lugar de Image */}
              <img
                src={property?.images?.[0]}
                alt={property?.imageAlt || `Imagen de ${property?.title}`}
                className="w-full h-full object-cover"
                onLoad={() => setIsImageLoading(false)}
                onError={handleImageError}
              />
              {isImageLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse"></div>
              )}
              
              {/* Property Type Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                  {property?.type}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handleSave}
                  aria-label={isSaved ? "Quitar de guardados" : "Guardar propiedad"}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isSaved 
                      ? 'bg-accent text-primary' :'bg-white/90 text-muted-foreground hover:bg-white hover:text-accent'
                  }`}
                >
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <HeartIcon size={18} fill={isSaved ? "currentColor" : "none"} />
                </button>
                <button
                  onClick={handleCompare}
                  aria-label={isComparing ? "Quitar de la comparación" : "Añadir a comparar"}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isComparing 
                      ? 'bg-secondary text-white' :'bg-white/90 text-muted-foreground hover:bg-white hover:text-secondary'
                  }`}
                >
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <GitCompareIcon size={18} />
                </button>
              </div>

              {/* Virtual Tour Badge */}
              {property?.hasVirtualTour && (
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-accent text-primary text-xs font-medium rounded-md flex items-center space-x-1">
                    {/* REEMPLAZO: SVG en lugar de Icon */}
                    <VideoIcon size={12} />
                    <span>Tour Virtual</span>
                  </span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-playfair font-medium text-primary mb-1 line-clamp-1" title={property?.title}>
                    {property?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center">
                    {/* REEMPLAZO: SVG en lugar de Icon */}
                    <MapPinIcon size={14} className="mr-1" />
                    {property?.location}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-2xl font-playfair font-medium text-primary">
                    {formatPrice(property?.price)}
                  </p>
                  {property?.pricePerSqm && (
                    <p className="text-sm text-muted-foreground">
                      {formatPrice(property?.pricePerSqm)}/m²
                    </p>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {property?.description}
              </p>

              {/* Property Features */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <BedIcon size={16} />
                  <span>{property?.bedrooms} dormitorios</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <BathIcon size={16} />
                  <span>{property?.bathrooms} baños</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <SquareIcon size={16} />
                  <span>{formatArea(property?.area)}</span>
                </div>
                {property?.parking > 0 && (
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    {/* REEMPLAZO: SVG en lugar de Icon */}
                    <CarIcon size={16} />
                    <span>{property?.parking} parking</span>
                  </div>
                )}
              </div>

              {/* Investment Metrics */}
              {property?.investmentMetrics && (
                <div className="flex space-x-4 mb-4">
                  <div className="text-sm">
                    <span className="text-muted-foreground">ROI: </span>
                    <span className="text-success font-medium">{property?.investmentMetrics?.roi}%</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Rentabilidad: </span>
                    <span className="text-primary font-medium">{property?.investmentMetrics?.yield}%</span>
                  </div>
                </div>
              )}

              {/* Agent Info */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-3">
                  {/* REEMPLAZO: img en lugar de Image */}
                  <img
                    src={property?.agent?.avatar}
                    alt={property?.agent?.avatarAlt || `Agente ${property?.agent?.name}`}
                    className="w-8 h-8 rounded-full object-cover"
                    onError={handleImageError}
                  />
                  <div>
                    <p className="text-sm font-medium text-primary">{property?.agent?.name}</p>
                    <p className="text-xs text-muted-foreground">{property?.agent?.company}</p>
                  </div>
                </div>
                {/* MANTENIDO: Button (importado) */}
                <Button variant="outline" size="sm">
                  {/* REEMPLAZO: SVG en lugar de Icon */}
                  <PhoneIcon size={14} className="mr-1" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }

  // Grid View
  return (
    <>
      {/* Estilos para este componente (colores, sombras) */}
      <style>{`
        :root {
          --color-primary: #0A2342;
          --color-secondary: #007A7C;
          --color-accent: #D97706;
          --color-muted: #F3F4F6;
          --color-muted-foreground: #6B7280;
          --color-success: #10B981;
        }
        .bg-primary { background-color: var(--color-primary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .bg-accent { background-color: var(--color-accent); }
        .bg-muted { background-color: var(--color-muted); }
        .text-primary { color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .text-muted-foreground { color: var(--color-muted-foreground); }
        .text-success { color: var(--color-success); }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .shadow-luxury { box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.04); }
        .hover\\:shadow-luxury-lg:hover { box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.05); }
      `}</style>

      <Link 
        to={`/property-detail?id=${property?.id}`}
        className="block bg-white rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {/* REEMPLAZO: img en lugar de Image */}
          <img
            src={property?.images?.[0]}
            alt={property?.imageAlt || `Imagen de ${property?.title}`}
            className="w-full h-full object-cover"
            onLoad={() => setIsImageLoading(false)}
            onError={handleImageError}
          />
          {isImageLoading && (
            <div className="absolute inset-0 bg-muted animate-pulse"></div>
          )}
          
          {/* Property Type Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
              {property?.type}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={handleSave}
              aria-label={isSaved ? "Quitar de guardados" : "Guardar propiedad"}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isSaved 
                  ? 'bg-accent text-primary' :'bg-white/90 text-muted-foreground hover:bg-white hover:text-accent'
              }`}
            >
              {/* REEMPLAZO: SVG en lugar de Icon */}
              <HeartIcon size={18} fill={isSaved ? "currentColor" : "none"} />
            </button>
            <button
              onClick={handleCompare}
              aria-label={isComparing ? "Quitar de la comparación" : "Añadir a comparar"}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isComparing 
                  ? 'bg-secondary text-white' :'bg-white/90 text-muted-foreground hover:bg-white hover:text-secondary'
              }`}
            >
              {/* REEMPLAZO: SVG en lugar de Icon */}
              <GitCompareIcon size={18} />
            </button>
          </div>

          {/* Virtual Tour Badge */}
          {property?.hasVirtualTour && (
            <div className="absolute bottom-4 left-4">
              <span className="px-2 py-1 bg-accent text-primary text-xs font-medium rounded-md flex items-center space-x-1">
                {/* REEMPLAZO: SVG en lugar de Icon */}
                <VideoIcon size={12} />
                <span>Tour Virtual</span>
              </span>
            </div>
          )}

          {/* Image Count */}
          <div className="absolute bottom-4 right-4">
            <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-md flex items-center space-x-1">
              {/* REEMPLAZO: SVG en lugar de Icon */}
              <CameraIcon size={12} />
              <span>{property?.images?.length}</span>
            </span>
          </div>
        </div>
        {/* Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 mr-4">
              <h3 className="text-lg font-playfair font-medium text-primary mb-1 line-clamp-1" title={property?.title}>
                {property?.title}
              </h3>
              <p className="text-muted-foreground text-sm flex items-center line-clamp-1" title={property?.location}>
                {/* REEMPLAZO: SVG en lugar de Icon */}
                <MapPinIcon size={14} className="mr-1" />
                {property?.location}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xl font-playfair font-medium text-primary">
                {formatPrice(property?.price)}
              </p>
              {property?.pricePerSqm && (
                <p className="text-xs text-muted-foreground">
                  {formatPrice(property?.pricePerSqm)}/m²
                </p>
              )}
            </div>
          </div>

          {/* Property Features */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                {/* REEMPLAZO: SVG en lugar de Icon */}
                <BedIcon size={16} />
                <span>{property?.bedrooms}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                {/* REEMPLAZO: SVG en lugar de Icon */}
                <BathIcon size={16} />
                <span>{property?.bathrooms}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                {/* REEMPLAZO: SVG en lugar de Icon */}
                <SquareIcon size={16} />
                <span>{formatArea(property?.area)}</span>
              </div>
            </div>
          </div>

          {/* Investment Metrics */}
          {property?.investmentMetrics && (
            <div className="flex justify-between text-sm mb-4 p-3 bg-muted/30 rounded-lg">
              <div>
                <span className="text-muted-foreground">ROI: </span>
                <span className="text-success font-medium">{property?.investmentMetrics?.roi}%</span>
              </div>
              <div>
                <span className="text-muted-foreground">Rentabilidad: </span>
                <span className="text-primary font-medium">{property?.investmentMetrics?.yield}%</span>
              </div>
            </div>
          )}

          {/* Agent Info */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-3">
              {/* REEMPLAZO: img en lugar de Image */}
              <img
                src={property?.agent?.avatar}
                alt={property?.agent?.avatarAlt || `Agente ${property?.agent?.name}`}
                className="w-8 h-8 rounded-full object-cover"
                onError={handleImageError}
              />
              <div>
                <p className="text-sm font-medium text-primary">{property?.agent?.name}</p>
                <p className="text-xs text-muted-foreground">{property?.agent?.company}</p>
              </div>
            </div>
            {/* MANTENIDO: Button (importado) */}
            <Button variant="outline" size="xs">
              {/* REEMPLAZO: SVG en lugar de Icon */}
              <PhoneIcon size={12} className="mr-1" />
              Contactar
            </Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;