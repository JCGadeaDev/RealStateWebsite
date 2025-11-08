import React, { useState } from 'react';
// ELIMINADO: import Image from '../../../components/AppImage';
// ELIMINADO: import Icon from '../../../components/AppIcon';

// --- NUEVO: Importamos los iconos de Lucide ---
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from 'lucide-react';
import { cn } from '../../../utils/cn'; // Para las clases

const PropertyGallery = ({ images, propertyTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images?.length) % images?.length);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const currentImage = images?.[currentImageIndex];

  return (
    <>
      {/* --- ACTUALIZADO: bg-card, shadow-luxury, y border-border --- */}
      <div className="relative bg-card rounded-xl overflow-hidden shadow-luxury-lg border border-border">
        {/* Main Image */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          {/* --- ACTUALIZADO: <img> estándar con fallback --- */}
          <img
            src={currentImage?.url}
            alt={currentImage?.alt || propertyTitle}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/800x500/EAE6DC/333B44?text=Propiedad`;
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-card transition-all duration-200 shadow-lg"
            aria-label="Previous image"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-card transition-all duration-200 shadow-lg"
            aria-label="Next image"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <ChevronRight size={24} />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={openFullscreen}
            className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary hover:bg-card transition-all duration-200 shadow-md"
            aria-label="View fullscreen"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Maximize2 size={18} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 text-white text-sm font-inter rounded-lg">
            {currentImageIndex + 1} / {images?.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
        <div className="p-4 bg-muted/30 border-t border-border">
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  'flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 shadow-sm',
                  index === currentImageIndex
                    ? 'border-primary shadow-lg'
                    : 'border-transparent hover:border-primary/50'
                )}
              >
                {/* --- ACTUALIZADO: <img> estándar con fallback --- */}
                <img
                  src={image?.url}
                  alt={image?.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/96x80/EAE6DC/333B44?text=Img`;
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 shadow-xl"
            aria-label="Close fullscreen"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <X size={24} />
          </button>

          <div
            className="relative max-w-full max-h-[95vh]"
            onClick={(e) => e?.stopPropagation()} // Previene cerrar al hacer clic en la imagen
          >
            {/* --- ACTUALIZADO: <img> estándar --- */}
            <img
              src={currentImage?.url}
              alt={currentImage?.alt || propertyTitle}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/1200x800/EAE6DC/333B44?text=Propiedad`;
              }}
            />

            <button
              onClick={(e) => {
                e?.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              aria-label="Previous image"
            >
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e?.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
              aria-label="Next image"
            >
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;