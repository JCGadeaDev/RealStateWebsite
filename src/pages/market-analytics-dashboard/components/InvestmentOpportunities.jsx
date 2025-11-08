import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Grid3X3,
  TrendingUp,
  BarChart3,
  Wrench,
  Zap,
  Target,
  Bell,
  MapPin,
} from 'lucide-react';
// --- ACTUALIZADO: Importamos Button y cn ---
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

// --- NUEVO: Mapeo de iconos para la sección de filtros/target ---
const iconMap = {
  Grid3X3: Grid3X3,
  TrendingUp: TrendingUp,
  BarChart3: BarChart3,
  Wrench: Wrench,
  Zap: Zap,
  Target: Target,
  Bell: Bell,
  MapPin: MapPin,
};

const InvestmentOpportunities = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Los filtros usan los nombres de los iconos de Lucide en iconMap
  const filters = [
    { id: 'all', label: 'All Opportunities', icon: 'Grid3X3' },
    { id: 'high-yield', label: 'High Yield', icon: 'TrendingUp' },
    { id: 'appreciation', label: 'Appreciation', icon: 'BarChart3' },
    { id: 'value-add', label: 'Value-Add', icon: 'Wrench' },
    { id: 'emerging', label: 'Emerging Markets', icon: 'Zap' },
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Luxury Waterfront Condos',
      location: 'Marina Bay District',
      type: 'high-yield',
      expectedROI: '12.8%',
      investmentRange: '$850K - $1.2M',
      riskLevel: 'Medium',
      timeHorizon: '3-5 years',
      description:
        'Premium waterfront development with strong rental demand and appreciation potential in growing marina district.',
      highlights: [
        'Prime waterfront location',
        'High rental demand',
        'New development',
        'Marina access',
      ],
      image:
        'https://images.unsplash.com/photo-1574582329187-4db9407c47a4',
      imageAlt:
        'Modern luxury waterfront condominiums with glass facades overlooking marina with boats',
      status: 'Active',
      unitsAvailable: 12,
    },
    {
      id: 2,
      title: 'Historic District Renovation',
      location: 'Downtown Heritage Quarter',
      type: 'value-add',
      expectedROI: '15.2%',
      investmentRange: '$400K - $650K',
      riskLevel: 'High',
      timeHorizon: '2-3 years',
      description:
        'Historic building conversion opportunity in rapidly gentrifying downtown area with tax incentives.',
      highlights: [
        'Tax incentives available',
        'Historic preservation',
        'Gentrifying area',
        'Mixed-use potential',
      ],
      image:
        'https://images.unsplash.com/photo-1726831195736-3c905a12cf45',
      imageAlt:
        'Historic brick buildings in downtown district with vintage architecture and modern renovations',
      status: 'Limited Time',
      unitsAvailable: 6,
    },
    {
      id: 3,
      title: 'Suburban Family Homes',
      location: 'Oakwood Estates',
      type: 'appreciation',
      expectedROI: '8.5%',
      investmentRange: '$650K - $850K',
      riskLevel: 'Low',
      timeHorizon: '5-10 years',
      description:
        'Stable family neighborhood with excellent schools and consistent long-term appreciation.',
      highlights: [
        'Top-rated schools',
        'Family-friendly',
        'Stable market',
        'Low crime area',
      ],
      image:
        'https://images.unsplash.com/photo-1631283394714-05bdbdebd342',
      imageAlt:
        'Suburban residential street with large family homes, mature oak trees, and well-maintained lawns',
      status: 'Active',
      unitsAvailable: 18,
    },
    {
      id: 4,
      title: 'Tech Hub Apartments',
      location: 'Innovation District',
      type: 'emerging',
      expectedROI: '18.3%',
      investmentRange: '$300K - $500K',
      riskLevel: 'High',
      timeHorizon: '2-4 years',
      description:
        'High-growth area near major tech companies with strong job growth and rental demand.',
      highlights: [
        'Tech company proximity',
        'Job growth area',
        'Young professional market',
        'Transit access',
      ],
      image:
        'https://images.unsplash.com/photo-1680433328065-5a78a82fa5b2',
      imageAlt:
        'Modern apartment complex in tech district with contemporary design and glass facades',
      status: 'Hot Market',
      unitsAvailable: 24,
    },
    {
      id: 5,
      title: 'Retail Investment Properties',
      location: 'Shopping District',
      type: 'high-yield',
      expectedROI: '11.2%',
      investmentRange: '$1M - $2.5M',
      riskLevel: 'Medium',
      timeHorizon: '5-7 years',
      description:
        'Prime retail spaces with established tenants and long-term lease agreements.',
      highlights: [
        'Established tenants',
        'Long-term leases',
        'High foot traffic',
        'Stable income',
      ],
      image:
        'https://images.unsplash.com/photo-1723689678809-73a29bf5e705',
      imageAlt:
        'Busy shopping district with modern retail storefronts and pedestrian walkways',
      status: 'Active',
      unitsAvailable: 8,
    },
    {
      id: 6,
      title: 'Luxury Mountain Retreats',
      location: 'Hillcrest Manor',
      type: 'appreciation',
      expectedROI: '10.7%',
      investmentRange: '$1.2M - $3M',
      riskLevel: 'Medium',
      timeHorizon: '3-8 years',
      description:
        'Exclusive mountain properties with panoramic views and luxury amenities for high-end market.',
      highlights: [
        'Panoramic views',
        'Luxury amenities',
        'Exclusive location',
        'High-end market',
      ],
      image:
        'https://images.unsplash.com/photo-1485998271438-f85381f4545d',
      imageAlt:
        'Luxury mountain homes with panoramic valley views and contemporary architecture on hillside',
      status: 'Exclusive',
      unitsAvailable: 4,
    },
  ];

  const filteredOpportunities =
    activeFilter === 'all'
      ? opportunities
      : opportunities?.filter((opp) => opp?.type === activeFilter);

  // --- ACTUALIZADO: getRiskColor usa la nueva paleta de Tailwind ---
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return 'text-success bg-success/10';
      case 'Medium':
        return 'text-warning bg-warning/10';
      case 'High':
        return 'text-destructive bg-destructive/10'; // Usamos destructive para riesgo alto
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  // --- ACTUALIZADO: getStatusColor usa la nueva paleta de Tailwind ---
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-success bg-success/10';
      case 'Hot Market':
        return 'text-destructive bg-destructive/10';
      case 'Limited Time':
        return 'text-warning bg-warning/10';
      case 'Exclusive':
        return 'text-primary bg-primary/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  // Helper para renderizar iconos
  const renderIcon = (name) => {
    const IconComponent = iconMap[name];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-accent/10 rounded-lg">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Target size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground">
              Investment Opportunities
            </h3>
            <p className="text-sm text-muted-foreground">
              Curated investment opportunities with detailed analysis
            </p>
          </div>
        </div>

        {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
        <Button
          variant="outline"
          icon={<Bell size={16} />}
        >
          Set Alerts
        </Button>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={
              activeFilter === filter.id ? 'default' : 'outline'
            }
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              'flex items-center space-x-2',
              activeFilter === filter.id
                ? 'bg-accent text-accent-foreground'
                : 'text-foreground'
            )}
          >
            {renderIcon(filter.icon)}
            <span className="text-sm font-medium">{filter.label}</span>
          </Button>
        ))}
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredOpportunities.map((opp) => (
          <div
            key={opp.id}
            className="p-4 bg-background rounded-lg shadow-md border border-border"
          >
            <div className="relative mb-4">
              <img
                src={opp.image}
                alt={opp.imageAlt}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div
                className={cn(
                  'absolute top-3 right-3 px-3 py-1 text-xs rounded-full font-semibold',
                  getStatusColor(opp.status)
                )}
              >
                {opp.status}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {opp.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {opp.location}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <div
                className={cn(
                  'px-3 py-1 text-xs rounded-full font-semibold',
                  getRiskColor(opp.riskLevel)
                )}
              >
                {opp.riskLevel} Risk
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-muted-foreground/10">
                {opp.expectedROI} Expected ROI
              </div>
              <div className="px-3 py-1 text-xs rounded-full bg-muted-foreground/10">
                {opp.investmentRange} Investment Range
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {opp.description}
            </p>
            <Button
              variant="default"
              className="w-full"
              onClick={() => alert(`Investing in ${opp.title}`)}
            >
              Invest Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentOpportunities;