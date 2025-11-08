import React from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Home,
  BarChart3,
  Calendar,
  Square,
  Package,
  Zap, // Para el caso general o forecast
} from 'lucide-react';
import { cn } from '../../../utils/cn'; // Importamos cn

// --- NUEVO: Mapeo de iconos para las métricas de Market Analytics ---
const iconMap = {
  Home: Home,
  BarChart3: BarChart3,
  Calendar: Calendar,
  Square: Square,
  Package: Package,
  TrendingUp: TrendingUp,
  Zap: Zap,
};

const MarketOverviewCard = ({
  title,
  value,
  change,
  changeType,
  icon,
  description,
}) => {
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';

  // Helper para obtener el componente de Lucide
  const IconComponent = iconMap[icon] || Zap;

  // Helper para obtener el componente de tendencia
  const TrendIcon = isPositive
    ? TrendingUp
    : isNegative
    ? TrendingDown
    : Minus;

  // Determinar el color base para el texto y el fondo del icono
  const { colorClass, bgColorClass } = (() => {
    if (isPositive)
      return { colorClass: 'text-success', bgColorClass: 'bg-success/10' };
    if (isNegative)
      // Usamos destructive para la paleta de errores/alertas
      return { colorClass: 'text-destructive', bgColorClass: 'bg-destructive/10' };
    return { colorClass: 'text-primary', bgColorClass: 'bg-primary/10' };
  })();

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* --- ACTUALIZADO: Clases semánticas y Lucide Icon --- */}
          <div
            className={cn(
              'p-3 rounded-lg',
              bgColorClass
            )}
          >
            <IconComponent 
              size={24} 
              className={colorClass}
              // Forzar el color de Lucide a través de Tailwind
            />
          </div>
          <div>
            <h3 className="text-lg font-playfair font-medium text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-3xl font-playfair font-medium text-foreground">
          {value}
        </div>

        {change && (
          // --- ACTUALIZADO: Clases semánticas y Lucide Icon ---
          <div
            className={cn(
              'flex items-center space-x-1 text-sm font-inter font-medium',
              colorClass
            )}
          >
            <TrendIcon size={16} />
            <span>{change}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketOverviewCard;