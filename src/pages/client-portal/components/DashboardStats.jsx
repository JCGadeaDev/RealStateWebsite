import React from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Home,
  Search,
  FileText,
  FolderOpen,
  TrendingUp,
} from 'lucide-react';
// --- AÑADIDO: Importamos cn ---
import { cn } from '../../../utils/cn';

// --- NUEVO: Mapeo de iconos para los stats ---
const iconMap = {
  Home: Home,
  Search: Search,
  FileText: FileText,
  FolderOpen: FolderOpen,
};

const DashboardStats = () => {
  const stats = [
    {
      id: 1,
      title: 'Active Properties',
      value: '12',
      change: '+3 this month',
      changeType: 'positive',
      icon: 'Home',
      // --- ACTUALIZADO: Clases semánticas de la paleta ---
      color: 'bg-primary/20 text-primary',
    },
    {
      id: 2,
      title: 'Saved Searches',
      value: '8',
      change: '2 new alerts',
      changeType: 'neutral',
      icon: 'Search',
      // --- ACTUALIZADO: Clases semánticas de la paleta ---
      color: 'bg-success/20 text-success',
    },
    {
      id: 3,
      title: 'Pending Offers',
      value: '2',
      change: '1 counter-offer',
      changeType: 'warning',
      icon: 'FileText',
      // --- ACTUALIZADO: Clases semánticas de la paleta ---
      color: 'bg-warning/20 text-warning',
    },
    {
      id: 4,
      title: 'Documents',
      value: '24',
      change: '3 pending review',
      changeType: 'neutral',
      icon: 'FolderOpen',
      // --- ACTUALIZADO: Clases semánticas de la paleta ---
      color: 'bg-secondary/20 text-secondary',
    },
  ];

  // --- ACTUALIZADO: getChangeColor usa la nueva paleta de Tailwind ---
  const getChangeColor = (type) => {
    switch (type) {
      case 'positive':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat) => {
        // --- NUEVO: Obtenemos el componente Icono del map ---
        const IconComponent = iconMap[stat.icon];
        return (
          <div
            key={stat?.id}
            // --- ACTUALIZADO: Añadido border ---
            className="bg-card rounded-lg p-6 shadow-luxury hover:shadow-luxury-lg transition-shadow duration-300 border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              {/* --- ACTUALIZADO: Usamos cn y stat.color --- */}
              <div
                className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center',
                  stat.color
                )}
              >
                {/* --- ACTUALIZADO: Renderizamos el componente Icono --- */}
                {IconComponent && <IconComponent size={24} />}
              </div>
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <TrendingUp size={16} className="text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-playfair font-medium text-foreground">
                {stat?.value}
              </h3>
              <p className="text-sm font-inter text-muted-foreground">
                {stat?.title}
              </p>
              {/* --- ACTUALIZADO: Usamos cn y la función helper --- */}
              <p
                className={cn(
                  'text-xs font-inter',
                  getChangeColor(stat?.changeType)
                )}
              >
                {stat?.change}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;