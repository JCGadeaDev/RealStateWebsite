import React, { useState } from 'react';
// ELIMINADO: import Icon from '../../../components/AppIcon';

// --- NUEVO: Importamos los iconos de Lucide ---
import {
  Play,
  Pause,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Camera,
  Zap,
  Smartphone,
  Info,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn'; // Para el textarea y clases

const VirtualTour = ({ tourData }) => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const rooms = [
    {
      name: 'Salón Principal',
      image:
        'https://images.unsplash.com/photo-1723468356910-cf906bb7c7c1',
      alt: 'Amplio salón moderno con sofás grises y ventanales grandes',
    },
    {
      name: 'Cocina',
      image:
        'https://images.unsplash.com/photo-1640792087548-1af5386e6e9f',
      alt: 'Cocina moderna con isla central y electrodomésticos de acero inoxidable',
    },
    {
      name: 'Dormitorio Principal',
      image:
        'https://images.unsplash.com/photo-1552155235-5d2ea4cd4d62',
      alt: 'Dormitorio elegante con cama king size y vestidor integrado',
    },
    {
      name: 'Baño Principal',
      image:
        'https://images.unsplash.com/photo-1682817240020-f4f447888af6',
      alt: 'Baño de lujo con bañera independiente y ducha de cristal',
    },
    {
      name: 'Terraza',
      image:
        'https://images.unsplash.com/photo-1604145195376-e2c8195adf29',
      alt: 'Terraza espaciosa con muebles de exterior y vistas panorámicas',
    },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Helper para simular navegación (mantener la funcionalidad del código original)
  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms?.length);
  };

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms?.length) % rooms?.length);
  };


  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury border border-border">
      {/* Header */}
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground mb-1">
              Tour Virtual 360°
            </h3>
            <p className="text-muted-foreground">
              Explora cada rincón de esta propiedad exclusiva
            </p>
          </div>
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="outline"
            icon={isPlaying ? <Pause size={20} /> : <Play size={20} />}
            iconPosition="left"
            onClick={togglePlay}
          >
            {isPlaying ? 'Pausar' : 'Reproducir'} Tour
          </Button>
        </div>
      </div>
      
      {/* Virtual Tour Viewer */}
      <div className="relative h-96 bg-gray-900">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${rooms?.[currentRoom]?.image})` }}
        >
          {/* Tour Controls Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                <RotateCcw size={32} className="animate-spin text-white" />
              </div>
              <h4 className="text-xl font-playfair font-medium mb-2">
                {rooms?.[currentRoom]?.name}
              </h4>
              <p className="text-sm opacity-80 font-inter">
                Arrastra para explorar en 360°
              </p>
            </div>
          </div>
          {/* Navigation Hotspots */}
          {/* --- ACTUALIZADO: Botón con prop 'icon' y onClick --- */}
          <button 
            onClick={prevRoom}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-200 shadow-lg"
            aria-label="Previous room"
          >
            <ArrowLeft size={20} />
          </button>
          {/* --- ACTUALIZADO: Botón con prop 'icon' y onClick --- */}
          <button 
            onClick={nextRoom}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-200 shadow-lg"
            aria-label="Next room"
          >
            <ArrowRight size={20} />
          </button>
          {/* Mock Down Arrow (Control de Navegación) */}
          <button 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-white transition-all duration-200 shadow-lg"
            aria-label="Look down"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
      
      {/* Room Navigation */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-playfair font-medium text-foreground">
            Recorrer Habitaciones
          </h4>
          <div className="text-sm text-muted-foreground font-inter">
            {currentRoom + 1} de {rooms?.length}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 overflow-x-auto pb-2">
          {rooms?.map((room, index) => (
            <button
              key={index}
              onClick={() => setCurrentRoom(index)}
              className={cn(
                'relative h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0',
                index === currentRoom
                  ? 'border-primary shadow-md'
                  : 'border-transparent hover:border-border/50'
              )}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${room?.image})` }}
              />

              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center transition-opacity duration-200',
                  index === currentRoom ? 'bg-primary/50' : 'bg-black/50 hover:bg-black/30'
                )}
              >
                <span className="text-xs text-white font-medium text-center px-1 font-inter">
                  {room?.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Tour Features */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
          <div className="text-center p-3 bg-muted/30 rounded-lg border border-border">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Camera size={24} className="text-primary mx-auto mb-2" />
            <div className="text-sm font-playfair font-medium text-foreground">
              Vista 360°
            </div>
            <div className="text-xs text-muted-foreground font-inter">
              Rotación completa
            </div>
          </div>
          {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
          <div className="text-center p-3 bg-muted/30 rounded-lg border border-border">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Zap size={24} className="text-primary mx-auto mb-2" />
            <div className="text-sm font-playfair font-medium text-foreground">
              HD Quality
            </div>
            <div className="text-xs text-muted-foreground font-inter">
              Alta resolución
            </div>
          </div>
          {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
          <div className="text-center p-3 bg-muted/30 rounded-lg border border-border">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Smartphone size={24} className="text-primary mx-auto mb-2" />
            <div className="text-sm font-playfair font-medium text-foreground">
              VR Compatible
            </div>
            <div className="text-xs text-muted-foreground font-inter">
              Realidad virtual
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;