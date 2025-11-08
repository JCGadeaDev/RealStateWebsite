import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  Bell, 
  Heart,
  Home,
  RotateCcw,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import PropertyCard from './components/PropertyCard';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import MapView from './components/MapView';
import ComparisonPanel from './components/ComparisonPanel';
import ViewToggle from './components/ViewToggle';

// Primero, añadir la importación de mockProperties
import { mockProperties } from '../../data/mockProperties';

const propertiesPerPage = 12;

const PropertyListings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showMap, setShowMap] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [comparisonProperties, setComparisonProperties] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedProperties, setSavedProperties] = useState(() => {
    const initialSaved = mockProperties
      .filter(p => p.isSaved)
      .map(p => p.id);
    return new Set(initialSaved);
  });

  const [filters, setFilters] = useState({
    propertyType: 'all',
    location: 'all',
    priceMin: '',
    priceMax: '',
    areaMin: '',
    areaMax: '',
    bedrooms: 'any',
    bathrooms: 'any',
    amenities: [],
    investmentOnly: false
  });

  const allPropertiesWithSavedState = useMemo(() => (
    mockProperties.map(p => ({
      ...p,
      isSaved: savedProperties.has(p.id)
    }))
  ), [savedProperties]);

  const filteredProperties = useMemo(() => {
    let filtered = [...allPropertiesWithSavedState];
    
    // Aplicar filtros
    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }
    if (filters.priceMin) {
      filtered = filtered.filter(p => p.price >= parseInt(filters.priceMin));
    }
    if (filters.priceMax) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.priceMax));
    }
    if (filters.areaMin) {
      filtered = filtered.filter(p => p.area >= parseInt(filters.areaMin));
    }
    if (filters.areaMax) {
      filtered = filtered.filter(p => p.area <= parseInt(filters.areaMax));
    }
    if (filters.bedrooms !== 'any') {
      filtered = filtered.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }
    if (filters.bathrooms !== 'any') {
      filtered = filtered.filter(p => p.bathrooms >= parseInt(filters.bathrooms));
    }
    if (filters.investmentOnly) {
      filtered = filtered.filter(p => p.investmentMetrics);
    }
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(p => 
        filters.amenities.every(amenity => p.amenities.includes(amenity))
      );
    }

    // Ordenar
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'area-desc': return b.area - a.area;
        case 'date-desc': return b.id - a.id;
        default: return 0;
      }
    });
  }, [filters, sortBy, allPropertiesWithSavedState]);

  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * propertiesPerPage;
    return filteredProperties.slice(startIndex, startIndex + propertiesPerPage);
  }, [currentPage, filteredProperties]);

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handleSaveProperty = (propertyId, isSaved) => {
    setSavedProperties(prev => {
      const newSaved = new Set(prev);
      isSaved ? newSaved.add(propertyId) : newSaved.delete(propertyId);
      return newSaved;
    });
  };

  const handleCompareProperty = (propertyId) => {
    setComparisonProperties(prev => {
      if (prev.some(p => p.id === propertyId)) {
        return prev.filter(p => p.id !== propertyId);
      }
      if (prev.length >= 4) return prev;
      const property = allPropertiesWithSavedState.find(p => p.id === propertyId);
      return property ? [...prev, property] : prev;
    });
  };

  const handleFiltersChange = newFilters => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      propertyType: 'all',
      location: 'all',
      priceMin: '',
      priceMax: '',
      areaMin: '',
      areaMax: '',
      bedrooms: 'any',
      bathrooms: 'any',
      amenities: [],
      investmentOnly: false
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>Inicio</span>
            <ChevronRight size={16} />
            <span className="text-primary font-medium">Listado de Propiedades</span>
          </div>
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-playfair font-medium text-primary mb-2">
                Propiedades Exclusivas
              </h1>
              <p className="text-lg text-muted-foreground">
                Descubre las mejores oportunidades inmobiliarias en España
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Bell size={16} className="mr-2" />
                Crear Alerta
              </Button>
              <Button variant="default">
                <Heart size={16} className="mr-2" />
                Guardados ({savedProperties.size})
              </Button>
            </div>
          </div>
        </div>

        <SearchBar 
          onSearch={console.log}
          onFilterToggle={() => setIsFilterOpen(true)} 
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar 
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
          />

          <div className="flex-1">
            <ViewToggle
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              showMap={showMap}
              onMapToggle={() => setShowMap(!showMap)}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultsCount={filteredProperties.length}
            />

            {showMap && (
              <div className="mb-8">
                <MapView
                  properties={filteredProperties}
                  onPropertySelect={setSelectedProperty}
                  selectedProperty={selectedProperty}
                />
              </div>
            )}

            {paginatedProperties.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                  : 'space-y-6'
              }>
                {paginatedProperties.map(property => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    viewMode={viewMode}
                    onSave={handleSaveProperty}
                    onCompare={handleCompareProperty}
                    isComparing={comparisonProperties.some(p => p.id === property.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Home size={64} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium text-primary mb-2">
                  No se encontraron propiedades
                </h3>
                <p className="text-muted-foreground mb-6">
                  Intenta ajustar tus filtros de búsqueda
                </p>
                <Button variant="outline" onClick={handleClearFilters}>
                  <RotateCcw size={16} className="mr-2" />
                  Limpiar Filtros
                </Button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={16} />
                </Button>
                
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    );
                  }
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="px-2">...</span>;
                  }
                  return null;
                })}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon size={16} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <ComparisonPanel
        properties={comparisonProperties}
        onRemoveProperty={propertyId => 
          setComparisonProperties(prev => prev.filter(p => p.id !== propertyId))
        }
        onClearAll={() => setComparisonProperties([])}
        isOpen={isComparisonOpen}
        onToggle={() => setIsComparisonOpen(!isComparisonOpen)}
      />
    </div>
  );
};

export default PropertyListings;