import React, { useState } from 'react';
import Button from '../../../components/ui/Button'; // Restaurado
import Input from '../../../components/ui/Input'; // Restaurado

// --- ICONOS SVG EN LÍNEA (Reemplazo de AppIcon) ---
// (Estos se mantienen como SVG en línea ya que no parecen ser parte de /ui)

const SearchIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SlidersHorizontalIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="21" y1="4" x2="14" y2="4" /><line x1="10" y1="4" x2="3" y2="4" /><line x1="21" y1="12" x2="12" y2="12" /><line x1="8" y1="12" x2="3" y2="12" /><line x1="21" y1="20" x2="16" y2="20" /><line x1="12" y1="20" x2="3" y2="20" /><line x1="14" y1="2" x2="14" y2="6" /><line x1="8" y1="10" x2="8" y2="14" /><line x1="16" y1="18" x2="16" y2="22" />
  </svg>
);

const ChevronUpIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ChevronDownIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FilterIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const RotateCcwIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 2v6h6" /><path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
  </svg>
);

const TrendingUpIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

// --- COMPONENTE PRINCIPAL ---

const SearchBar = ({ onSearch, onFilterToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    location: ''
  });

  const quickSearchSuggestions = [
    "Apartamentos en Madrid Centro",
    "Villas de lujo en Barcelona",
    "Propiedades de inversión Valencia",
    "Áticos con terraza Sevilla",
    "Casas con jardín Bilbao"
  ];

  const handleSearch = (query = searchQuery) => {
    if (query?.trim() || Object.values(advancedFilters).some(v => v)) {
      onSearch({
        query: query?.trim(),
        ...advancedFilters
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  const handleQuickSearch = (suggestion) => {
    setSearchQuery(suggestion);
    const emptyFilters = { minPrice: '', maxPrice: '', propertyType: '', location: '' };
    setAdvancedFilters(emptyFilters);
    onSearch({
      query: suggestion,
      ...emptyFilters
    });
  };

  const handleAdvancedFilterChange = (key, value) => {
    setAdvancedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearAdvancedFilters = () => {
    setAdvancedFilters({
      minPrice: '',
      maxPrice: '',
      propertyType: '',
      location: ''
    });
  };

  return (
    <>
      {/* Estilos para este componente (colores, sombras, animación) */}
      {/* (Se eliminan los estilos locales ya que provendrán de tu CSS global/Tailwind) */}
      <style>{`
        /* Estilos como .shadow-luxury, .animate-slide-up, 
          y variables como --color-primary, etc., 
          se asume que están definidas en tu configuración global de Tailwind/CSS.
        */
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>

      <div className="bg-white rounded-xl shadow-luxury p-6 mb-8">
        {/* Main Search Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            {/* RESTAURADO: Componente <Input> */}
            <Input
              type="text"
              placeholder="Buscar por ubicación, tipo de propiedad, o características..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-lg pl-12 pr-4 py-3" // Asumiendo que Input acepta className
              startIcon={<SearchIcon size={20} className="text-muted-foreground" />}
            />
          </div>
          
          <div className="flex gap-3">
            {/* RESTAURADO: Componente <Button> */}
            <Button
              variant="outline"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              aria-expanded={isAdvancedOpen}
              aria-controls="advanced-search-filters"
              className="flex items-center"
            >
              <SlidersHorizontalIcon size={18} className="mr-2" />
              Búsqueda Avanzada
              {isAdvancedOpen ? (
                <ChevronUpIcon size={16} className="ml-2" />
              ) : (
                <ChevronDownIcon size={16} className="ml-2" />
              )}
            </Button>
            
            {/* RESTAURADO: Componente <Button> */}
            <Button
              onClick={() => handleSearch()}
              className="flex items-center"
            >
              <SearchIcon size={18} className="mr-2" />
              Buscar
            </Button>
            
            {/* RESTAURADO: Componente <Button> */}
            <Button
              variant="outline"
              size="icon" // Asumiendo que tienes una variante 'icon'
              onClick={onFilterToggle}
              className="lg:hidden"
              aria-label="Abrir filtros"
            >
              <FilterIcon size={18} />
            </Button>
          </div>
        </div>
        
        {/* Quick Search Suggestions */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Búsquedas populares:</p>
          <div className="flex flex-wrap gap-2">
            {quickSearchSuggestions?.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleQuickSearch(suggestion)}
                className="px-3 py-1 text-sm bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-full transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        
        {/* Advanced Search Filters */}
        {isAdvancedOpen && (
          <div id="advanced-search-filters" className="border-t pt-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* RESTAURADO: Componente <Input> */}
              <Input
                type="number"
                label="Precio Mínimo (€)" // Asumiendo que Input acepta 'label'
                placeholder="Ej: 200,000"
                value={advancedFilters?.minPrice}
                onChange={(e) => handleAdvancedFilterChange('minPrice', e?.target?.value)}
              />
              
              <Input
                type="number"
                label="Precio Máximo (€)"
                placeholder="Ej: 800,000"
                value={advancedFilters?.maxPrice}
                onChange={(e) => handleAdvancedFilterChange('maxPrice', e?.target?.value)}
              />
              
              <Input
                type="text"
                label="Tipo de Propiedad"
                placeholder="Ej: Apartamento, Villa"
                value={advancedFilters?.propertyType}
                onChange={(e) => handleAdvancedFilterChange('propertyType', e?.target?.value)}
              />
              
              <Input
                type="text"
                label="Ubicación Específica"
                placeholder="Ej: Salamanca, Eixample"
                value={advancedFilters?.location}
                onChange={(e) => handleAdvancedFilterChange('location', e?.target?.value)}
              />
            </div>
            
            <div className="flex justify-end mt-4">
              {/* RESTAURADO: Componente <Button> */}
              <Button
                variant="secondary" // Asumiendo variante 'secondary'
                onClick={clearAdvancedFilters}
                className="flex items-center"
              >
                <RotateCcwIcon size={16} className="mr-2" />
                Limpiar Filtros Avanzados
              </Button>
            </div>
          </div>
        )}
        
        {/* Search Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4 mt-4">
          <div className="flex items-center space-x-4">
            <span>Última actualización: hace 5 minutos</span>
            <span>•</span>
            <span>1,247 propiedades disponibles</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUpIcon size={16} />
            <span>Mercado activo</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;