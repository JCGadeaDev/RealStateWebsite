import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  MapPin,
  TrendingUp,
  Users,
  Star,
  Heart,
  Building2,
  ArrowRight,
} from 'lucide-react';
import Button from '../../../components/ui/Button'; // Importamos el botón para el CTA

const MarketInsights = () => {
  const { t } = useTranslation();

  // Mapping Tailwind color names to our custom CSS variable classes (bg-success, text-primary, etc.)
  const colorMap = (id) => {
    switch (id) {
      case 1: // Market Growth
        return {
          color: 'text-success',
          bgColor: 'bg-success/20',
        };
      case 2: // Active Listings
        return {
          color: 'text-primary',
          bgColor: 'bg-primary/20',
        };
      case 3: // Expert Agents
        return {
          color: 'text-secondary',
          bgColor: 'bg-secondary/20',
        };
      case 4: // Client Satisfaction
        return {
          color: 'text-warning',
          bgColor: 'bg-warning/20',
        };
      default:
        return { color: 'text-foreground', bgColor: 'bg-muted' };
    }
  };

  const insights = [
    {
      id: 1,
      title: t('insights.marketGrowth'),
      value: '+15.2%',
      description: t('insights.marketGrowthDesc'),
      icon: TrendingUp,
    },
    {
      id: 2,
      title: t('insights.activeListings'),
      value: '12,458',
      description: t('insights.activeListingsDesc'),
      icon: Building2,
    },
    {
      id: 3,
      title: t('insights.expertAgents'),
      value: '850+',
      description: t('insights.expertAgentsDesc'),
      icon: Users,
    },
    {
      id: 4,
      title: t('insights.clientSatisfaction'),
      value: '4.9/5',
      description: t('insights.clientSatisfactionDesc'),
      icon: Star,
    },
  ];

  const topAreas = [
    {
      name: 'Downtown Core',
      growth: '+18%',
      avgPrice: '$850K',
      properties: 1245,
    },
    {
      name: 'Westside District',
      growth: '+12%',
      avgPrice: '$720K',
      properties: 892,
    },
    {
      name: 'Harbor View',
      growth: '+25%',
      avgPrice: '$1.2M',
      properties: 567,
    },
    {
      name: 'Tech Valley',
      growth: '+20%',
      avgPrice: '$950K',
      properties: 734,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-foreground mb-6">
            {t('insights.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            {t('insights.subtitle')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights?.map((insight) => {
            const colors = colorMap(insight?.id);
            return (
              <div
                key={insight?.id}
                className="bg-card rounded-2xl shadow-luxury p-6 hover:shadow-luxury-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${colors.bgColor} p-3 rounded-lg`}>
                    <insight.icon className={`w-6 h-6 ${colors.color}`} />
                  </div>
                  {/* Heart Icon updated to use text-muted-foreground and custom colors */}
                  <Heart className="w-5 h-5 text-muted-foreground/50 hover:text-error transition-colors cursor-pointer" />
                </div>
                <h3 className="text-3xl font-inter font-bold text-foreground mb-1">
                  {insight?.value}
                </h3>
                <p className="text-sm font-inter font-medium text-foreground mb-1">
                  {insight?.title}
                </p>
                <p className="text-xs text-muted-foreground font-inter">
                  {insight?.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Top Performing Areas */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            {/* Título actualizado con font-playfair */}
            <h3 className="text-3xl font-playfair font-medium text-foreground mb-4 md:mb-0">
              {t('insights.topAreas')}
            </h3>
            {/* Botón actualizado a componente Button */}
            <Button variant="ghost" size="lg" icon={<ArrowRight size={20} />}>
              {t('insights.viewAllMarkets')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAreas?.map((area, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  {/* Color de crecimiento ajustado */}
                  <span className="text-sm font-semibold text-success">
                    {area?.growth}
                  </span>
                </div>
                {/* Título actualizado con font-playfair */}
                <h4 className="font-playfair font-medium text-foreground mb-3">
                  {area?.name}
                </h4>
                <div className="space-y-2 font-inter">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t('insights.avgPrice')}
                    </span>
                    <span className="font-semibold text-foreground">
                      {area?.avgPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t('insights.properties')}
                    </span>
                    <span className="font-semibold text-foreground">
                      {area?.properties}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          {/* Botón actualizado a componente Button */}
          <Button variant="default" size="xl">
            {t('insights.exploreAnalytics')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
