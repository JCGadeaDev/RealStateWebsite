import React from 'react';
// --- MIRA AQUÍ ---
// Estas son las importaciones de los iconos NUEVOS
import {
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar,
} from 'lucide-react';
// --- MIRA AQUÍ ---
// Esta es la importación del Botón NUEVO
import Button from '../../../components/ui/Button';

// Este es el componente que usa 'viewMode'
const AgentCard = ({ agent, onViewProfile, onBookConsultation, viewMode = 'grid' }) => {
  // Lógica para el modo 'list'
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden group flex flex-col md:flex-row">
        {/* Agent Image (Modo Lista) */}
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
          <div className="relative h-64 md:h-full overflow-hidden">
            <img
              src={agent?.image}
              alt={agent?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x400/EAE6DC/333B44?text=${agent.name[0]}`;
              }}
            />
            {agent?.isTopAgent && (
              <div className="absolute top-4 left-4">
                <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Agente Top
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Agent Info (Modo Lista) */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-playfair font-medium text-primary mb-1">
                  {agent?.name}
                </h3>
                <p className="text-muted-foreground font-inter">{agent?.title}</p>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                 <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border">
                   <div className="flex items-center space-x-1">
                     <Star size={14} className="text-accent" fill="currentColor" />
                     <span className="text-sm font-medium text-primary">{agent?.rating}</span>
                   </div>
                 </div>
                {agent?.isVerified && (
                  <div className="bg-success/10 p-1 rounded-full">
                    <CheckCircle size={16} className="text-success" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {agent?.specializations?.slice(0, 3)?.map((spec, index) => (
                <span
                  key={index}
                  className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-inter"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b">
              {/* Stats resumidos */}
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-sm font-inter text-muted-foreground">{agent?.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-sm font-inter text-muted-foreground">{agent?.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              icon={<User size={16} />}
              onClick={() => onViewProfile(agent?.id)}
              className="flex-1"
            >
              Ver Perfil
            </Button>
            <Button
              variant="outline"
              icon={<Calendar size={16} />}
              onClick={() => onBookConsultation(agent?.id)}
              className="flex-1"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Modo 'grid' (tu código original migrado)
  return (
    <div className="bg-white rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 overflow-hidden group">
      {/* Agent Image */}
      <div className="relative h-64 overflow-hidden">
        {/* --- MIRA AQUÍ: Este es un <img>, no un <Image> --- */}
        <img
          src={agent?.image}
          alt={agent?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x400/EAE6DC/333B44?text=${agent.name[0]}`;
          }}
        />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center space-x-1">
              {/* --- MIRA AQUÍ: Este es un icono de Lucide --- */}
              <Star size={14} className="text-accent" fill="currentColor" />
              <span className="text-sm font-medium text-primary">{agent?.rating}</span>
            </div>
          </div>
        </div>
        {agent?.isTopAgent && (
          <div className="absolute top-4 left-4">
            <div className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium">
              Agente Top
            </div>
          </div>
        )}
      </div>
      {/* Agent Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-playfair font-medium text-primary mb-1">
              {agent?.name}
            </h3>
            <p className="text-muted-foreground font-inter">{agent?.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            {agent?.isVerified && (
              <div className="bg-success/10 p-1 rounded-full">
                {/* --- MIRA AQUÍ: Este es un icono de Lucide --- */}
                <CheckCircle size={16} className="text-success" />
              </div>
            )}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {agent?.specializations?.slice(0, 3)?.map((spec, index) => (
              <span
                key={index}
                className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-inter"
              >
                {spec}
              </span>
            ))}
            {agent?.specializations?.length > 3 && (
              <span className="text-muted-foreground text-sm">
                +{agent?.specializations?.length - 3} más
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b">
          <div className="text-center">
            <div className="text-lg font-playfair font-medium text-primary">
              {agent?.stats?.totalSales}
            </div>
            <div className="text-sm text-muted-foreground">Ventas</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-playfair font-medium text-primary">
              {agent?.stats?.experience}
            </div>
            <div className="text-sm text-muted-foreground">Años</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-playfair font-medium text-primary">
              {agent?.stats?.avgPrice}
            </div>
            <div className="text-sm text-muted-foreground">Precio Prom.</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-3">
            {/* --- MIRA AQUÍ: Este es un icono de Lucide --- */}
            <Phone size={16} className="text-muted-foreground" />
            <span className="text-sm font-inter text-muted-foreground">{agent?.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            {/* --- MIRA AQUÍ: Este es un icono de Lucide --- */}
            <Mail size={16} className="text-muted-foreground" />
            <span className="text-sm font-inter text-muted-foreground">{agent?.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            {/* --- MIRA AQUÍ: Este es un icono de Lucide --- */}
            <MapPin size={16} className="text-muted-foreground" />
            <span className="text-sm font-inter text-muted-foreground">{agent?.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* --- MIRA AQUÍ: Este es el Botón NUEVO --- */}
          <Button
            variant="default"
            fullWidth
            icon={<User size={16} />}
            onClick={() => onViewProfile(agent?.id)}
          >
            Ver Perfil Completo
          </Button>
          {/* --- MIRA AQUÍ: Este es el Botón NUEVO --- */}
          <Button
            variant="outline"
            fullWidth
            icon={<Calendar size={16} />}
            onClick={() => onBookConsultation(agent?.id)}
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
