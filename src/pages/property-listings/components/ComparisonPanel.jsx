import React from 'react';

// --- ¡NOTA IMPORTANTE! ---
//
// Te di un error porque este entorno de vista previa no puede
// encontrar tu archivo en la ruta: '@/components/ui/Button'.
//
// Para que este archivo funcione AQUÍ, he definido un componente
// 'Button' localmente justo debajo.
//
// En tu proyecto real, por favor:
// 1. ELIMINA este componente 'Button' local.
// 2. DESCOMENTA tu línea de importación original:
//
// import Button from '@/components/ui/Button';
//
// ---------------------------------------------------------------

// --- Definición Local de Button (SOLO PARA VISTA PREVIA) ---
const Button = ({ variant = 'default', size = 'sm', className = '', children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';
  const variantClasses = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };
  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    default: 'h-10 px-4 py-2 text-sm',
    icon: 'h-10 w-10',
  };
  const finalClassName = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  ].join(' ');
  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
// --- Fin de la Definición Local de Button ---


// --- Iconos SVG en línea ---
// (Mantenemos los iconos SVG en línea para evitar más errores de importación)
const GitCompareIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 18H6" /><path d="M11 6H6v5" /><path d="M18 6v5h-5" /><path d="M14 15l-4 4" /><path d="M10 9l4 4" />
  </svg>
);
// ... (El resto de los iconos SVG y el componente permanecen igual) ...
const ChevronDownIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronUpIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m18 15-6-6-6 6" />
  </svg>
);
const Trash2Icon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const XIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const MapPinIcon = ({ size = 12, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const PlusIcon = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const ExternalLinkIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const FileTextIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// --- Funciones de formato (movidas fuera del componente) ---
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

// --- Componente ---
const ComparisonPanel = React.memo(({ 
  properties, 
  onRemoveProperty, 
  onClearAll, 
  isOpen, 
  onToggle 
}) => {

  if (properties?.length === 0 && !isOpen) {
    return null;
  }

  const styles = `
    :root {
      --color-primary: #0A2342;
      --color-muted-foreground: #6B7280;
      --color-border: #E5E7EB;
      --color-muted: #F3F4F6;
      --color-success: #16A34A;
      --color-accent: #D97706;
      --color-accent-foreground: #FFFFFF;
      --color-white: #FFFFFF;
    }
    .text-primary { color: var(--color-primary); }
    .text-muted-foreground { color: var(--color-muted-foreground); }
    .text-success { color: var(--color-success); }
    .text-accent { color: var(--color-accent); }
    .text-accent-foreground { color: var(--color-accent-foreground); }
    .text-white { color: var(--color-white); }
    .bg-primary { background-color: var(--color-primary); }
    .hover\\:bg-primary\\/90:hover { background-color: rgba(10, 35, 66, 0.9); }
    .bg-primary\\/10 { background-color: rgba(10, 35, 66, 0.1); }
    .bg-muted\\/30 { background-color: rgba(243, 244, 246, 0.3); }
    .bg-accent { background-color: var(--color-accent); }
    .hover\\:bg-accent:hover { background-color: var(--color-accent); }
    .bg-accent\\/20 { background-color: rgba(217, 119, 6, 0.2); }
    .border-border { border-color: var(--color-border); }
    .border-border\\/60 { border-color: rgba(229, 231, 235, 0.6); }
    .border-muted { border-color: var(--color-muted); }
    .font-playfair { font-family: 'Playfair Display', serif; }
    .shadow-luxury-lg { box-shadow: 0 15px 30px rgba(0, 0, 0, 0.07), 0 6px 10px rgba(0, 0, 0, 0.05); }
    @keyframes slide-up {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    .animate-slide-up { animation: slide-up 0.3s ease-out; }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Comparison Toggle Button */}
      {properties?.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            variant="default"
            onClick={onToggle}
            className="rounded-full shadow-luxury-lg px-5 py-3"
          >
            <GitCompareIcon size={18} className="mr-2" />
            <span className="font-medium">
              Comparar ({properties.length})
            </span>
            {isOpen ? (
              <ChevronDownIcon size={18} className="ml-2" />
            ) : (
              <ChevronUpIcon size={18} className="ml-2" />
            )}
          </Button>
        </div>
      )}

      {/* Comparison Panel */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border/60 shadow-luxury-lg z-50 animate-slide-up pb-24 lg:pb-0">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-playfair font-medium text-primary">
                  Comparación de Propiedades
                </h2>
                <p className="text-sm text-muted-foreground">
                  {properties?.length ?? 0} de 4 propiedades seleccionadas
                </p>
              </div>
              <div className="flex items-center space-x-3 flex-shrink-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onClearAll}
                  disabled={properties?.length === 0}
                >
                  <Trash2Icon size={16} className="mr-2" />
                  Limpiar Todo
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={onToggle}
                  aria-label="Cerrar panel de comparación"
                >
                  <XIcon size={20} />
                </Button>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="overflow-x-auto">
              <div className="flex space-x-6 min-w-max pb-4">
                {/* Propiedades seleccionadas */}
                {properties?.map((property) => (
                  <div 
                    key={property?.id} 
                    className="w-80 bg-muted/30 rounded-lg p-4 relative flex-shrink-0"
                  >
                    <button
                      onClick={() => onRemoveProperty(property?.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 text-muted-foreground transition-colors z-10"
                      aria-label="Quitar propiedad de la comparación"
                    >
                      <XIcon size={16} />
                    </button>

                    {/* Property Image (<img>) */}
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={property?.images?.[0] || 'https://placehold.co/320x192/f3f4f6/6b7280?text=Sin+Imagen'}
                        alt={property?.imageAlt || `Imagen de ${property?.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/320x192/f3f4f6/6b7280?text=Error'; }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full shadow-md">
                          {property?.type}
                        </span>
                      </div>
                    </div>

                    {/* Property Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-medium text-primary line-clamp-1" title={property?.title}>
                          {property?.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center line-clamp-1" title={property?.location}>
                          <MapPinIcon size={12} className="mr-1.5 flex-shrink-0" />
                          {property?.location}
                        </p>
                      </div>

                      <div className="text-xl font-playfair font-medium text-primary">
                        {formatPrice(property?.price)}
                      </div>

                      {/* Comparison Metrics */}
                      <div className="space-y-2">
                        <MetricRow label="Dormitorios" value={property?.bedrooms} />
                        <MetricRow label="Baños" value={property?.bathrooms} />
                        <MetricRow label="Superficie" value={formatArea(property?.area)} />
                        <MetricRow 
                          label="Precio/m²" 
                          value={property?.pricePerSqm ? formatPrice(property?.pricePerSqm) : 'N/A'} 
                        />
                        {property?.parking != null && (
                          <MetricRow label="Parking" value={property.parking} />
                        )}
                      </div>

                      {/* Investment Metrics */}
                      {property?.investmentMetrics && (
                        <div className="border-t pt-3 space-y-2">
                          <MetricRow 
                            label="ROI" 
                            value={`${property.investmentMetrics.roi}%`}
                            valueClassName="text-success"
                          />
                          <MetricRow 
                            label="Rentabilidad" 
                            value={`${property.investmentMetrics.yield}%`}
                            valueClassName="text-primary"
                          />
                        </div>
                      )}

                      {/* Features */}
                      <div className="border-t pt-3">
                        <p className="text-xs text-muted-foreground mb-2">Características:</p>
                        <div className="flex flex-wrap gap-1">
                          {property?.hasVirtualTour && (
                            <FeatureTag text="Tour Virtual" variant="accent" />
                          )}
                          {property?.amenities?.slice(0, 3)?.map((amenity) => (
                            <FeatureTag key={amenity} text={amenity} variant="primary" />
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" size="sm" fullWidth className="mt-4">
                        <ExternalLinkIcon size={14} className="mr-2" />
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add More Properties Placeholder */}
                {Array.from({ length: 4 - (properties?.length ?? 0) }).map((_, index) => (
                  <div 
                    key={`placeholder-${index}`} 
                    className="w-80 border-2 border-dashed border-muted rounded-lg p-4 flex flex-col items-center justify-center text-center flex-shrink-0"
                  >
                    <PlusIcon size={32} className="text-muted-foreground/50 mb-3" />
                    <p className="text-muted-foreground font-medium mb-2">
                      Agregar Propiedad
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      Selecciona más propiedades para comparar
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Actions */}
            {properties?.length > 1 && (
              <div className="flex justify-center mt-6">
                <Button variant="default">
                  <FileTextIcon size={16} className="mr-2" />
                  Generar Reporte de Comparación
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});

// --- Componentes hijos ---
const MetricRow = ({ label, value, valueClassName = '' }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}:</span>
    <span className={`font-medium text-primary ${valueClassName}`}>
      {value ?? 'N/A'}
    </span>
  </div>
);

const FeatureTag = ({ text, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/20 text-accent',
  };
  
  return (
    <span className={`px-2 py-1 text-xs rounded-md ${variants[variant]}`}>
      {text}
    </span>
  );
};


export default ComparisonPanel;