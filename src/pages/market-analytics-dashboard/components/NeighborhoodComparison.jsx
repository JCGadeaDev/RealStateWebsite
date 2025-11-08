import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  BarChart3,
  DollarSign,
  TrendingUp,
  Calendar,
  MapPin,
  GraduationCap,
  Shield,
  Percent,
  Download,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { cn } from '../../../utils/cn'; // Importamos cn

// --- NUEVO: Mapeo de iconos para las métricas ---
const iconMap = {
  DollarSign: DollarSign,
  TrendingUp: TrendingUp,
  Calendar: Calendar,
  MapPin: MapPin,
  GraduationCap: GraduationCap,
  Shield: Shield,
  Percent: Percent,
  BarChart3: BarChart3,
};

// Helper para obtener el componente de icono
const renderMetricIcon = (name, size = 16, className = '') => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
};

// Helper para obtener el color de cambio de precio
const getChangeColor = (change) => {
  // Asume positivo si incluye '+'
  if (change?.includes('+')) {
    return 'text-success';
  }
  // Asume negativo si incluye '-'
  if (change?.includes('-')) {
    return 'text-destructive'; // Usamos destructive para negativo
  }
  return 'text-foreground';
};

const NeighborhoodComparison = () => {
  // Configuración de múltiples selecciones
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([
    'downtown',
    'westside',
  ]);

  const neighborhoods = [
    { value: 'downtown', label: 'Downtown District' },
    { value: 'westside', label: 'Westside Heights' },
    { value: 'riverside', label: 'Riverside Gardens' },
    { value: 'hillcrest', label: 'Hillcrest Manor' },
    { value: 'oakwood', label: 'Oakwood Estates' },
    { value: 'marina', label: 'Marina Bay' },
  ];

  const neighborhoodData = {
    downtown: {
      name: 'Downtown District',
      medianPrice: 850000,
      priceChange: '+12.5%',
      avgDaysOnMarket: 28,
      walkScore: 95,
      schoolRating: 8.2,
      crimeIndex: 'Low',
      appreciation: '+8.3%',
      rentYield: '4.2%',
      image: 'https://images.unsplash.com/photo-1696012019210-d8f3de7dedc7',
      imageAlt:
        'Modern downtown cityscape with glass skyscrapers and busy streets during golden hour',
    },
    westside: {
      name: 'Westside Heights',
      medianPrice: 1200000,
      priceChange: '+15.2%',
      avgDaysOnMarket: 35,
      walkScore: 78,
      schoolRating: 9.1,
      crimeIndex: 'Very Low',
      appreciation: '+11.7%',
      rentYield: '3.8%',
      image: 'https://images.unsplash.com/photo-1723801904785-2c2c70284c73',
      imageAlt:
        'Luxury residential neighborhood with modern white houses and manicured lawns',
    },
    riverside: {
      name: 'Riverside Gardens',
      medianPrice: 675000,
      priceChange: '+9.8%',
      avgDaysOnMarket: 42,
      walkScore: 65,
      schoolRating: 7.8,
      crimeIndex: 'Low',
      appreciation: '+6.2%',
      rentYield: '5.1%',
      image: 'https://images.unsplash.com/photo-1681261622030-e333eca8e95a',
      imageAlt:
        'Peaceful riverside residential area with traditional houses and tree-lined streets',
    },
    hillcrest: {
      name: 'Hillcrest Manor',
      medianPrice: 950000,
      priceChange: '+7.3%',
      avgDaysOnMarket: 38,
      walkScore: 72,
      schoolRating: 8.7,
      crimeIndex: 'Very Low',
      appreciation: '+5.9%',
      rentYield: '3.9%',
      image: 'https://images.unsplash.com/photo-1719551988052-39865137964f',
      imageAlt:
        'Hillside luxury homes with panoramic city views and contemporary architecture',
    },
    marina: {
      name: 'Marina Bay',
      medianPrice: 1450000,
      priceChange: '+18.7%',
      avgDaysOnMarket: 25,
      walkScore: 88,
      schoolRating: 8.9,
      crimeIndex: 'Low',
      appreciation: '+14.2%',
      rentYield: '3.5%',
      image: 'https://images.unsplash.com/photo-1674330801428-2349fd739d16',
      imageAlt:
        'Waterfront luxury condominiums with marina views and modern glass facades',
    },
    oakwood: {
      name: 'Oakwood Estates',
      medianPrice: 720000,
      priceChange: '+6.1%',
      avgDaysOnMarket: 45,
      walkScore: 58,
      schoolRating: 8.4,
      crimeIndex: 'Very Low',
      appreciation: '+4.8%',
      rentYield: '4.7%',
      image: 'https://images.unsplash.com/photo-1631283394714-05bdbdebd342',
      imageAlt:
        'Suburban family neighborhood with large oak trees and traditional colonial homes',
    },
  };

  const handleNeighborhoodChange = (value) => {
    // Limitar a 3 selecciones (para que el layout de 3 columnas funcione bien)
    if (value?.length > 3) {
      // Ignora la última selección si ya hay 3
      setSelectedNeighborhoods(value?.slice(0, 3));
      console.warn('Comparison limited to 3 neighborhoods for better layout.');
    } else {
      setSelectedNeighborhoods(value);
    }
  };

  const getComparisonData = () => {
    return selectedNeighborhoods
      ?.map((id) => neighborhoodData?.[id])
      ?.filter(Boolean);
  };

  // Definición de métricas usando los nombres de iconos de Lucide
  const metrics = [
    {
      key: 'medianPrice',
      label: 'Median Price',
      format: (val) => `$${(val / 1000)?.toFixed(0)}K`,
      icon: 'DollarSign',
    },
    {
      key: 'priceChange',
      label: 'Price Change (YoY)',
      format: (val) => val,
      icon: 'TrendingUp',
    },
    {
      key: 'appreciation',
      label: 'Appreciation Rate (5-Yr)',
      format: (val) => val,
      icon: 'TrendingUp',
    },
    {
      key: 'rentYield',
      label: 'Rental Yield',
      format: (val) => val,
      icon: 'Percent',
    },
    {
      key: 'avgDaysOnMarket',
      label: 'Avg Days on Market',
      format: (val) => `${val} days`,
      icon: 'Calendar',
    },
    {
      key: 'walkScore',
      label: 'Walk Score',
      format: (val) => `${val}/100`,
      icon: 'MapPin',
    },
    {
      key: 'schoolRating',
      label: 'School Rating',
      format: (val) => `${val}/10`,
      icon: 'GraduationCap',
    },
    {
      key: 'crimeIndex',
      label: 'Safety Index',
      format: (val) => val,
      icon: 'Shield',
    },
  ];

  const comparisonData = getComparisonData();

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {/* --- ACTUALIZADO: Icono de Lucide --- */}
          <div className="p-3 bg-secondary/10 rounded-lg">
            <BarChart3 size={24} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground">
              Neighborhood Comparison
            </h3>
            <p className="text-sm text-muted-foreground">
              Compare market metrics across neighborhoods
            </p>
          </div>
        </div>

        {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
        <Button
          variant="outline"
          icon={<Download size={16} />}
          iconPosition="left"
        >
          Export Report
        </Button>
      </div>
      <div className="mb-6">
        <Select
          label="Select Neighborhoods to Compare"
          description={`Choose up to 3 neighborhoods for comparison. Currently selected: ${comparisonData?.length}`}
          multiple
          searchable
          options={neighborhoods}
          value={selectedNeighborhoods}
          onChange={handleNeighborhoodChange}
          className="max-w-md"
        />
      </div>
      {comparisonData?.length > 0 && (
        <div className="space-y-6">
          {/* Neighborhood Cards */}
          {/* Layout ajustado para 3 columnas máximo */}
          <div
            className={cn(
              'grid gap-6',
              comparisonData?.length === 3 && 'grid-cols-1 md:grid-cols-3',
              comparisonData?.length === 2 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
              comparisonData?.length === 1 && 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1'
            )}
          >
            {comparisonData?.map((neighborhood) => (
              <div
                key={neighborhood?.name}
                // --- ACTUALIZADO: bg-background y border-border ---
                className="bg-background rounded-xl overflow-hidden shadow-md border border-border"
              >
                <div className="h-32 overflow-hidden">
                  {/* --- ACTUALIZADO: <img> con fallback --- */}
                  <img
                    src={neighborhood?.image}
                    alt={neighborhood?.imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x128/EAE6DC/333B44?text=Neighborhood`;
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-playfair font-medium text-foreground mb-4">
                    {neighborhood?.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center">
                         {renderMetricIcon('DollarSign', 16, 'mr-2')}
                         Median Price
                      </span>
                      <span className="font-inter font-medium text-primary">
                        ${(neighborhood?.medianPrice / 1000)?.toFixed(0)}K
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center">
                        {renderMetricIcon('TrendingUp', 16, 'mr-2')}
                        Price Change (YoY)
                      </span>
                      <span
                        className={cn(
                          'font-inter font-medium',
                          getChangeColor(neighborhood?.priceChange)
                        )}
                      >
                        {neighborhood?.priceChange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {/* --- ACTUALIZADO: borde de la tabla --- */}
          <div className="overflow-x-auto bg-card rounded-xl border border-border">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-3 px-4 font-inter font-medium text-muted-foreground w-1/4">
                    Metric
                  </th>
                  {comparisonData?.map((neighborhood) => (
                    <th
                      key={neighborhood?.name}
                      className="text-center py-3 px-4 font-inter font-medium text-foreground w-1/4"
                    >
                      {neighborhood?.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics?.map((metric) => (
                  <tr key={metric?.key} className="border-b border-border/50">
                    {/* Fila de la métrica */}
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        {/* --- ACTUALIZADO: Icono de Lucide renderizado por helper --- */}
                        {renderMetricIcon(metric?.icon, 16, 'text-muted-foreground')}
                        <span className="font-inter text-foreground font-medium">
                          {metric?.label}
                        </span>
                      </div>
                    </td>
                    {/* Valores de las columnas */}
                    {comparisonData?.map((neighborhood) => (
                      <td
                        key={neighborhood?.name}
                        className={cn(
                          'text-center py-3 px-4 font-inter font-medium text-foreground',
                          // Coloreamos los campos de cambio/rendimiento
                          (metric?.key === 'priceChange' || metric?.key === 'appreciation') && getChangeColor(neighborhood?.[metric?.key]),
                          metric?.key === 'rentYield' && 'text-accent',
                          metric?.key === 'crimeIndex' && neighborhood?.[metric?.key] === 'Very Low' && 'text-success'
                        )}
                      >
                        {metric?.format(neighborhood?.[metric?.key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {comparisonData?.length === 0 && (
        <div className="text-center py-12 bg-muted/30 rounded-lg border border-border">
          {renderMetricIcon('BarChart3', 48, 'mx-auto text-muted-foreground mb-4')}
          <h3 className="text-lg font-playfair font-medium text-foreground mb-2">
            No neighborhoods selected
          </h3>
          <p className="text-muted-foreground mb-4">
            Use the selector above to choose neighborhoods for comparison.
          </p>
        </div>
      )}
    </div>
  );
};

export default NeighborhoodComparison;