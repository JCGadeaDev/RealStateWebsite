import React from 'react';
// --- ACTUALIZADO: Importamos el icono de Lucide ---
import { Star } from 'lucide-react';

const TestimonialSection = ({ testimonials }) => {
  return (
    // --- ACTUALIZADO: bg-muted a bg-muted/30 para consistencia ---
    <div className="bg-muted/30 rounded-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-playfair font-medium text-primary mb-2">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-muted-foreground font-inter">
          Experiencias reales de clientes satisfechos con nuestros agentes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial) => (
          // --- ACTUALIZADO: bg-white a bg-card y añadido border ---
          <div
            key={testimonial?.id}
            className="bg-card rounded-lg p-6 shadow-luxury border border-border"
          >
            <div className="flex items-center mb-4">
              {/* --- ACTUALIZADO: Icono de Lucide para el rating --- */}
              {[...Array(5)]?.map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={`${
                    index < testimonial?.rating
                      ? 'text-accent fill-accent' // Usamos accent para estrellas llenas
                      : 'text-muted-foreground/20' // Color de la paleta para estrellas vacías
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-muted-foreground font-inter mb-6 leading-relaxed">
              "{testimonial?.content}"
            </blockquote>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                {/* --- ACTUALIZADO: <img> con fallback --- */}
                <img
                  src={testimonial?.clientImage}
                  alt={testimonial?.clientImageAlt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/48x48/EAE6DC/333B44?text=${testimonial.clientName[0]}`;
                  }}
                />
              </div>
              <div>
                <div className="font-medium text-primary">
                  {testimonial?.clientName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial?.propertyType}
                </div>
              </div>
            </div>

            {/* --- ACTUALIZADO: border-border --- */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  {/* --- ACTUALIZADO: <img> con fallback --- */}
                  <img
                    src={testimonial?.agentImage}
                    alt={testimonial?.agentImageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/32x32/EAE6DC/333B44?text=${testimonial.agentName[0]}`;
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary">
                    {testimonial?.agentName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Agente Inmobiliario
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;