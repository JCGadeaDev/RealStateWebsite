import React from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import { Users, TrendingUp, Star, Clock } from 'lucide-react';

// --- Mapeo de strings a componentes de icono ---
const iconMap = {
  Users: Users,
  TrendingUp: TrendingUp,
  Star: Star,
  Clock: Clock,
};

const AgentStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Users', // Este string se usará en iconMap
      label: 'Agentes Verificados',
      value: stats?.totalAgents,
    },
    {
      icon: 'TrendingUp', // Este string se usará en iconMap
      label: 'Ventas Este Mes',
      value: stats?.monthlySales,
    },
    {
      icon: 'Star', // Este string se usará en iconMap
      label: 'Calificación Promedio',
      value: `${stats?.averageRating}/5`,
    },
    {
      icon: 'Clock', // Este string se usará en iconMap
      label: 'Tiempo Respuesta Prom.',
      value: stats?.avgResponseTime,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white shadow-luxury">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-medium mb-2">
          Red de Expertos Inmobiliarios
        </h2>
        <p className="text-white/80 font-inter">
          Conecta con los mejores profesionales del sector inmobiliario
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems?.map((item, index) => {
          // --- ACTUALIZADO: Obtenemos el componente de icono del map ---
          const IconComponent = iconMap[item.icon];
          
          return (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-3">
                {/* --- ACTUALIZADO: Renderizamos el icono de Lucide --- */}
                {IconComponent && (
                  <IconComponent
                    size={32}
                    className="text-white mx-auto"
                    strokeWidth={2.5}
                  />
                )}
              </div>
              <div className="text-2xl font-playfair font-medium mb-1">
                {item?.value}
              </div>
              <div className="text-sm text-white/80 font-inter">
                {item?.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentStats;