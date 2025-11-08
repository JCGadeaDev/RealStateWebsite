import React from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import { ArrowRight, Star, User, Calendar } from 'lucide-react';
// --- ACTUALIZADO: Importamos el Botón (ya no Image ni Icon) ---
import Button from '../../../components/ui/Button';

const FeaturedAgents = ({ agents, onViewProfile, onBookConsultation }) => {
  return (
    // --- ACTUALIZADO: bg-white a bg-card y añadido border ---
    <div className="bg-card rounded-xl shadow-luxury p-8 border border-border">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-playfair font-medium text-primary mb-2">
            Agentes Destacados
          </h2>
          <p className="text-muted-foreground font-inter">
            Los mejores profesionales con mayor experiencia y calificaciones
          </p>
        </div>
        {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
        <Button
          variant="outline"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          Ver Todos
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents?.map((agent) => (
          <div key={agent?.id} className="group">
            <div className="relative mb-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                {/* --- ACTUALIZADO: <img> estándar con fallback --- */}
                <img
                  src={agent?.image}
                  alt={agent?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/300x300/EAE6DC/333B44?text=${agent.name[0]}`;
                  }}
                />
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  #{agent?.rank}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    <Star
                      size={16}
                      className="text-accent"
                      fill="currentColor"
                    />
                    <span className="text-sm font-medium text-primary">
                      {agent?.rating} ({agent?.reviewCount} reseñas)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-playfair font-medium text-primary mb-1">
                {agent?.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {agent?.title}
              </p>
              {/* --- ACTUALIZADO: Usamos stats del objeto agent --- */}
              <p className="text-sm text-muted-foreground mb-4">
                {agent?.stats?.experience} años • {agent?.stats?.totalSales}{' '}
                ventas
              </p>

              {/* --- ACTUALIZADO: Contenedor para que los botones tengan el mismo tamaño --- */}
              <div className="flex space-x-2">
                {/* --- ACTUALIZADO: Botón con prop 'icon' y flex-1 --- */}
                <Button
                  variant="outline"
                  size="sm"
                  icon={<User size={16} />}
                  onClick={() => onViewProfile(agent?.id)}
                  className="flex-1"
                >
                  Perfil
                </Button>
                {/* --- ACTUALIZADO: Botón con prop 'icon' y flex-1 --- */}
                <Button
                  variant="default"
                  size="sm"
                  icon={<Calendar size={16} />}
                  onClick={() => onBookConsultation(agent?.id)}
                  className="flex-1"
                >
                  Consulta
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgents;
