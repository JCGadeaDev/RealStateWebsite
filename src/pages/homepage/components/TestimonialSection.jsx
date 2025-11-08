import React, { useState, useEffect } from 'react';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  TrendingUp,
  Home,
  Star,
  DollarSign,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// --- ACTUALIZADO: Mapeo de strings a componentes de icono ---
const iconMap = {
  TrendingUp: TrendingUp,
  Home: Home,
  Star: Star,
  DollarSign: DollarSign,
  MapPin: MapPin,
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // --- Helper para renderizar iconos del map ---
  const renderIcon = (name, size, props = {}) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} {...props} />;
  };

  const testimonials = [
    {
      id: 1,
      name: 'Elena Vázquez',
      role: 'Inversora Inmobiliaria',
      company: 'Grupo Vázquez Holdings',
      image: 'https://images.unsplash.com/photo-1648466982925-65dac4ed0814',
      alt: 'Professional portrait of elegant woman with long dark hair in white business attire smiling confidently',
      rating: 5,
      content: `RealEstate Pro transformó completamente mi estrategia de inversión. Su plataforma de análisis me permitió identificar oportunidades que generaron un ROI del 24% en mi primer año. El equipo de expertos me guió en cada decisión, desde la selección hasta la negociación final.`,
      investment: '€2.8M invertidos',
      properties: 8,
      roi: '24%',
      location: 'Madrid & Barcelona',
    },
    {
      id: 2,
      name: 'Roberto Fernández',
      role: 'CEO',
      company: 'Fernández Enterprises',
      image: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
      alt: 'Professional businessman with short dark hair in navy suit and tie smiling warmly at camera',
      rating: 5,
      content: `La experiencia fue excepcional desde el primer contacto. Necesitaba encontrar propiedades comerciales en ubicaciones estratégicas y su equipo no solo las encontró, sino que negoció términos que superaron mis expectativas. Su conocimiento del mercado es incomparable.`,
      investment: '€4.2M invertidos',
      properties: 12,
      roi: '19%',
      location: 'Valencia & Sevilla',
    },
    {
      id: 3,
      name: 'Carmen Jiménez',
      role: 'Directora Financiera',
      company: 'Jiménez Capital',
      image: 'https://images.unsplash.com/photo-1654727169791-7f46d0dfc1a3',
      alt: 'Professional businesswoman with blonde hair in elegant black blazer smiling warmly at camera',
      rating: 5,
      content: `Como directora financiera, valoro la transparencia y los datos precisos. RealEstate Pro me proporcionó análisis detallados que me permitieron tomar decisiones informadas. Su plataforma de seguimiento en tiempo real es una herramienta invaluable para cualquier inversor serio.`,
      investment: '€1.9M invertidos',
      properties: 6,
      roi: '21%',
      location: 'Málaga & Alicante',
    },
    {
      id: 4,
      name: 'Miguel Ángel Torres',
      role: 'Inversor Internacional',
      company: 'Torres Global Investments',
      image: 'https://images.unsplash.com/photo-1538155421123-6a79813f5deb',
      alt: 'Professional portrait of middle-aged Hispanic man with short dark hair in charcoal suit and blue tie',
      rating: 5,
      content: `Desde Estados Unidos, necesitaba un socio confiable para invertir en el mercado español. RealEstate Pro no solo cumplió, sino que superó todas mis expectativas. Su servicio de gestión integral me permite invertir con confianza desde cualquier parte del mundo.`,
      investment: '€3.5M invertidos',
      properties: 15,
      roi: '26%',
      location: 'Costa del Sol',
    },
  ];

  const stats = [
    {
      id: 1,
      value: '€847M+',
      label: 'Volumen de Transacciones',
      icon: 'TrendingUp',
    },
    {
      id: 2,
      value: '2,847',
      label: 'Propiedades Vendidas',
      icon: 'Home',
    },
    {
      id: 3,
      value: '98.5%',
      label: 'Satisfacción del Cliente',
      icon: 'Star',
    },
    {
      id: 4,
      value: '23.2%',
      label: 'ROI Promedio',
      icon: 'DollarSign',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-foreground mb-6">
            Historias de Éxito
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Descubre cómo nuestros clientes han transformado sus inversiones
            inmobiliarias con resultados excepcionales y asesoramiento experto.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="text-center bg-card rounded-2xl p-6 shadow-luxury"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                {/* --- ACTUALIZADO: Icono de Lucide desde map --- */}
                {renderIcon(stat?.icon, 24, { color: 'white' })}
              </div>
              <div className="text-3xl font-inter font-bold text-foreground mb-2">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-card rounded-3xl shadow-luxury-lg overflow-hidden">
          <div className="relative h-[480px] lg:h-80">
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial?.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : index < currentTestimonial
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        // --- ACTUALIZADO: Icono de Lucide ---
                        <Star
                          key={i}
                          size={20}
                          className="text-warning mr-1"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg lg:text-xl text-foreground font-inter leading-relaxed mb-8">
                      "{testimonial?.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-luxury">
                        {/* --- ACTUALIZADO: <img> estándar --- */}
                        <img
                          src={testimonial?.image}
                          alt={testimonial?.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src=`https://placehold.co/64x64/EAE6DC/333B44?text=${testimonial.name[0]}`;
                          }}
                        />
                      </div>
                      <div>
                        <div className="font-playfair font-medium text-lg text-foreground">
                          {testimonial?.name}
                        </div>
                        <div className="text-primary font-inter font-medium">
                          {testimonial?.role}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial?.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Panel */}
                  <div className="lg:w-80 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-xl font-playfair font-medium text-foreground mb-6">
                      Resultados Destacados
                    </h4>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-inter">
                          Inversión Total
                        </span>
                        <span className="text-xl font-inter font-bold text-primary">
                          {testimonial?.investment}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-inter">
                          Propiedades
                        </span>
                        <span className="text-xl font-inter font-bold text-foreground">
                          {testimonial?.properties}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground font-inter">
                          ROI Anual
                        </span>
                        <span className="text-xl font-inter font-bold text-success">
                          {testimonial?.roi}
                        </span>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center text-sm text-muted-foreground">
                          {/* --- ACTUALIZADO: Icono de Lucide --- */}
                          <MapPin size={16} className="mr-2" />
                          <span>{testimonial?.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-white shadow-luxury transition-all duration-200"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-white shadow-luxury transition-all duration-200"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;