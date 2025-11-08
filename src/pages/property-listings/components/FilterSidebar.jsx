import React, { useState, useEffect } from 'react';
// --- Tus componentes de UI (los mantenemos) ---
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

// --- Iconos SVG en línea (reemplazo del <Icon /> faltante) ---
const XIcon = ({ size = 20, className = "" }) => (
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

const SearchIcon = ({ size = 16, className = "" }) => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const RotateCcwIcon = ({ size = 16, className = "" }) => (
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
    <path d="M3 2v6h6" />
    <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
  </svg>
);


// --- Constantes de datos ---
const propertyTypes = [
  { value: 'all', label: 'Todos los tipos' },
  { value: 'Apartamento', label: 'Apartamento' },
  { value: 'Casa', label: 'Casa' },
  { value: 'Villa', label: 'Villa' },
  { value: 'Ático', label: 'Ático' },
  { value: 'Loft', label: 'Loft' },
  { value: 'townhouse', label: 'Casa adosada' },
  { value: 'commercial', label: 'Comercial' }
];

const locations = [
  { value: 'all', label: 'Todas las ubicaciones' },
  { value: 'Barrio de Salamanca, Madrid', label: 'Barrio de Salamanca, Madrid' },
  { value: 'Pozuelo de Alarcón, Madrid', label: 'Pozuelo de Alarcón, Madrid' },
  { value: 'Eixample, Barcelona', label: 'Eixample, Barcelona' },
  { value: 'Casco Viejo, Bilbao', label: 'Casco Viejo, Bilbao' },
  { value: 'Malagueta, Málaga', label: 'Malagueta, Málaga' },
  { value: 'Poblenou, Barcelona', label: 'Poblenou, Barcelona' },
];

const bedroomOptions = [
  { value: 'any', label: 'Cualquiera' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
  { value: '5', label: '5+' }
];

const bathroomOptions = [
  { value: 'any', label: 'Cualquiera' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' }
];

const amenities = [
  { id: 'Parking', label: 'Parking' },
  { id: 'Piscina', label: 'Piscina' },
  { id: 'Gimnasio', label: 'Gimnasio' },
  { id: 'Jardín', label: 'Jardín' },
  { id: 'Terraza', label: 'Terraza' },
  { id: 'Ascensor', label: 'Ascensor' },
  { id: 'Aire acondicionado', label: 'Aire acondicionado' },
  { id: 'Calefacción', label: 'Calefacción' },
  { id: 'Seguridad 24h', label: 'Seguridad 24h' },
  { id: 'Vista al mar', label: 'Vista al mar' },
];

// --- Componente ---

const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange, 
  onClearFilters, 
  resultsCount 
}) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...localFilters, [key]: value };
    setLocalFilters(updatedFilters);
  };

  const handleAmenityChange = (amenityId, checked) => {
    const currentAmenities = localFilters.amenities || [];
    const updatedAmenities = checked
      ? [...currentAmenities, amenityId]
      : currentAmenities.filter(id => id !== amenityId);
    
    handleFilterChange('amenities', updatedAmenities);
  };

  const handleApplyFilters = () => {
    onFiltersChange(localFilters);
    onClose(); 
  };

  const handleClearFilters = () => {
    onClearFilters();
  };

  // Estilos en línea para clases personalizadas de Tailwind (en caso de que falten)
  // Esto asegura que 'text-primary', 'font-playfair', etc., tengan una definición.
  const styles = `
    :root {
      --color-primary: #0A2342; /* Color de ejemplo para 'text-primary' */
      --color-muted-foreground: #6B7280;
      --color-border: #E5E7EB;
      --color-muted: #F3F4F6;
    }

    .text-primary { color: var(--color-primary); }
    .hover\\:text-primary:hover { color: var(--color-primary); }
    .bg-primary\\/5 { background-color: rgba(10, 35, 66, 0.05); }

    .text-muted-foreground { color: var(--color-muted-foreground); }
    .bg-muted\\/30 { background-color: rgba(243, 244, 246, 0.3); }
    .border-border\\/60 { border-color: rgba(229, 231, 235, 0.6); }
    
    .font-playfair {
      font-family: 'Playfair Display', serif; /* Asegúrate de importar esta fuente en tu CSS global */
    }
    
    .shadow-luxury-lg {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.07), 0 6px 10px rgba(0, 0, 0, 0.05);
    }
  `;

  return (
    <>
      {/* Añadimos los estilos de fallback */}
      <style>{styles}</style>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 lg:top-28 right-0 h-full lg:h-[calc(100vh-7rem)] 
        w-80 lg:w-72 bg-white shadow-luxury-lg lg:shadow-none
        lg:border lg:border-border/60 lg:rounded-lg
        transform transition-transform duration-300 z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        flex flex-col flex-shrink-0
      `}>
        {/* Cabecera del Sidebar */}
        <div className="p-6 flex-shrink-0 border-b border-border/60">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-playfair font-medium text-primary">
              Filtros de Búsqueda
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              aria-label="Cerrar filtros"
            >
              {/* Icono corregido */}
              <XIcon size={20} />
            </button>
          </div>
        </div>

        {/* Contenedor de filtros con scroll */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            
            {/* Property Type (Usando tu componente Select) */}
            <div>
              <Select
                label="Tipo de Propiedad"
                options={propertyTypes}
                value={localFilters.propertyType}
                onChange={(value) => handleFilterChange('propertyType', value)}
              />
            </div>

            {/* Location (Usando tu componente Select) */}
            <div>
              <Select
                label="Ubicación"
                options={locations}
                value={localFilters.location}
                onChange={(value) => handleFilterChange('location', value)}
                searchable
              />
            </div>

            {/* Price Range (Usando tu componente Input) */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Rango de Precio (€)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="number"
                  min="0"
                  placeholder="Mínimo"
                  value={localFilters.priceMin}
                  onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                />
                <Input
                  type="number"
                  min="0"
                  placeholder="Máximo"
                  value={localFilters.priceMax}
                  onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                />
              </div>
            </div>

            {/* Area Range (Usando tu componente Input) */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Superficie (m²)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="number"
                  min="0"
                  placeholder="Mínimo"
                  value={localFilters.areaMin}
                  onChange={(e) => handleFilterChange('areaMin', e.target.value)}
                />
                <Input
                  type="number"
                  min="0"
                  placeholder="Máximo"
                  value={localFilters.areaMax}
                  onChange={(e) => handleFilterChange('areaMax', e.target.value)}
                />
              </div>
            </div>

            {/* Bedrooms (Usando tu componente Select) */}
            <div>
              <Select
                label="Dormitorios"
                options={bedroomOptions}
                value={localFilters.bedrooms}
                onChange={(value) => handleFilterChange('bedrooms', value)}
              />
            </div>

            {/* Bathrooms (Usando tu componente Select) */}
            <div>
              <Select
                label="Baños"
                options={bathroomOptions}
                value={localFilters.bathrooms}
                onChange={(value) => handleFilterChange('bathrooms', value)}
              />
            </div>

            {/* Investment Only (Usando tu componente Checkbox) */}
            <div>
              <Checkbox
                label="Solo propiedades de inversión"
                description="Mostrar únicamente propiedades con métricas de ROI"
                checked={localFilters.investmentOnly}
                onChange={(checked) => handleFilterChange('investmentOnly', checked)}
              />
            </div>

            {/* Amenities (Usando tu componente Checkbox) */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Comodidades
              </label>
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {amenities.map((amenity) => (
                  <Checkbox
                    key={amenity.id}
                    label={amenity.label}
                    checked={(localFilters.amenities || []).includes(amenity.id)}
                    onChange={(checked) => handleAmenityChange(amenity.id, checked)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Sidebar */}
        <div className="p-6 mt-auto flex-shrink-0 border-t border-border/60 space-y-4">
          {/* Quick Stats */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <div className="text-center">
              <p className="text-2xl font-playfair font-medium text-primary">
                {new Intl.NumberFormat('es-ES').format(resultsCount ?? 0)}
              </p>
              <p className="text-sm text-muted-foreground">
                {/* Texto basura eliminado de aquí */}
                {resultsCount === 1 ? 'Propiedad encontrada' : 'Propiedades encontradas'}
              </p>
            </div>
          </div>

          {/* Action Buttons (Usando tu componente Button) */}
          <div className="space-y-3">
            <Button 
              variant="default" 
              fullWidth 
              onClick={handleApplyFilters}
            >
              {/* Texto basura eliminado e icono corregido */}
              <SearchIcon size={16} className="mr-2" />
              Aplicar Filtros
            </Button>
            <Button 
              variant="outline" 
              fullWidth 
              onClick={handleClearFilters}
            >
              {/* Texto basura eliminado e icono corregido */}
              <RotateCcwIcon size={16} className="mr-2" />
              Limpiar Filtros
            </Button>
          </div>
        </div>

      </aside>
    </>
  );
};

export default FilterSidebar;