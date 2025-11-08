import React from 'react';
// import Icon from '../../../components/AppIcon'; // Eliminado
import Button from '../../../components/ui/Button';

// --- ICONOS SVG EN LÍNEA ---
// (Reemplazo de AppIcon)

const ArrowUpIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const ArrowDownIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const SquareIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const ClockIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const StarIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ChevronDownIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CheckIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Grid3X3Icon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line>
  </svg>
);

const ListIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

const MapIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const DownloadIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Share2Icon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);


// --- COMPONENTE PRINCIPAL ---

const ViewToggle = ({ 
  viewMode, 
  onViewModeChange, 
  showMap, 
  onMapToggle, 
  sortBy, 
  onSortChange,
  resultsCount 
}) => {

  // Modificado: 'icon' ahora es una referencia de componente
  const sortOptions = [
    { value: 'price-asc', label: 'Precio: Menor a Mayor', icon: ArrowUpIcon },
    { value: 'price-desc', label: 'Precio: Mayor a Menor', icon: ArrowDownIcon },
    { value: 'area-desc', label: 'Superficie: Mayor a Menor', icon: SquareIcon },
    { value: 'date-desc', label: 'Más Recientes', icon: ClockIcon },
    { value: 'relevance', label: 'Más Relevantes', icon: StarIcon }
  ];

  const getCurrentSortOption = () => {
    return sortOptions?.find(option => option?.value === sortBy) || sortOptions?.[0];
  };

  const CurrentSortIcon = getCurrentSortOption()?.icon;

  return (
    <div className="bg-white rounded-lg shadow-luxury p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Results Count */}
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">{resultsCount?.toLocaleString('es-ES')}</span> propiedades encontradas
          </div>
          <div className="hidden lg:block w-px h-6 bg-border"></div>
          <div className="text-sm text-muted-foreground">
            Actualizado hace 5 minutos
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <div className="relative group">
            <Button
              variant="outline"
              className="flex items-center space-x-2"
            >
              {/* Modificado: Renderizar componente */}
              {CurrentSortIcon && <CurrentSortIcon size={16} />} 
              <span className="hidden sm:inline">{getCurrentSortOption()?.label}</span>
              <span className="sm:hidden">Ordenar</span>
              {/* Modificado: Renderizar componente */}
              <ChevronDownIcon size={14} /> 
            </Button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-luxury-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-10">
              <div className="py-2">
                {sortOptions?.map((option) => {
                  // Modificado: Obtener componente de icono
                  const OptionIcon = option.icon; 
                  return (
                    <button
                      key={option?.value}
                      onClick={() => onSortChange(option?.value)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left transition-colors duration-150 ${
                        sortBy === option?.value
                          ? 'bg-primary/5 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {/* Modificado: Renderizar componente */}
                      {OptionIcon && <OptionIcon size={16} />} 
                      <span>{option?.label}</span>
                      {sortBy === option?.value && (
                        // Modificado: Renderizar componente
                        <CheckIcon size={14} className="ml-auto" /> 
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted/30 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
                viewMode === 'grid' ?'bg-white text-primary shadow-sm' :'text-muted-foreground hover:text-primary'
              }`}
            >
              {/* Modificado: Renderizar componente */}
              <Grid3X3Icon size={18} /> 
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
                viewMode === 'list' ?'bg-white text-primary shadow-sm' :'text-muted-foreground hover:text-primary'
              }`}
            >
              {/* Modificado: Renderizar componente */}
              <ListIcon size={18} /> 
            </button>
          </div>

          {/* Map Toggle */}
          <Button
            variant={showMap ? "default" : "outline"}
            onClick={onMapToggle}
            className="flex items-center space-x-2"
          >
            {/* Modificado: Renderizar componente */}
            <MapIcon size={16} /> 
            <span className="hidden sm:inline">
              {showMap ? 'Ocultar Mapa' : 'Mostrar Mapa'}
            </span>
            <span className="sm:hidden">Mapa</span>
          </Button>

          {/* Additional Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              {/* Modificado: Renderizar componente */}
              <DownloadIcon size={16} /> 
              <span className="hidden lg:inline ml-2">Exportar</span>
            </Button>
            <Button variant="ghost" size="sm">
              {/* Modificado: Renderizar componente */}
              <Share2Icon size={16} /> 
              <span className="hidden lg:inline ml-2">Compartir</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Quick Filters */}
      <div className="flex items-center space-x-3 mt-4 pt-4 border-t">
        <span className="text-sm font-medium text-muted-foreground">Filtros rápidos:</span>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
            Nuevas propiedades
          </button>
          <button className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            Con tour virtual
          </button>
          <button className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            Precio reducido
          </button>
          <button className="px-3 py-1 text-sm bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
            Inversión premium
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewToggle;