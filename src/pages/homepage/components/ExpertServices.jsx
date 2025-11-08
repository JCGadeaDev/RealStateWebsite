import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  TrendingUp,
  Calculator,
  Settings,
  Check,
  Star,
  MessageCircle,
  Users,
} from 'lucide-react';

// --- ACTUALIZADO: Mapeo de strings a componentes de icono ---
const iconMap = {
  TrendingUp: TrendingUp,
  Calculator: Calculator,
  Settings: Settings,
};

const ExpertServices = () => {
  // --- Helper para renderizar iconos del map ---
  const renderIcon = (name, size, props = {}) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} {...props} />;
  };

  const services = [
    {
      id: 1,
      title: 'Consultoría de Inversión',
      description:
        'Análisis detallado de ROI y estrategias de inversión personalizadas para maximizar tu rentabilidad en el mercado inmobiliario.',
      icon: 'TrendingUp',
      features: [
        'Análisis de ROI',
        'Estrategias personalizadas',
        'Seguimiento de mercado',
        'Asesoramiento fiscal',
      ],
      color: 'from-primary to-secondary',
    },
    {
      id: 2,
      title: 'Valoración Profesional',
      description:
        'Tasaciones precisas realizadas por expertos certificados utilizando metodologías avanzadas y datos de mercado actualizados.',
      icon: 'Calculator',
      features: [
        'Tasación certificada',
        'Análisis comparativo',
        'Informe detallado',
        'Validez legal',
      ],
      color: 'from-accent to-warning',
    },
    {
      id: 3,
      title: 'Gestión Integral',
      description:
        'Servicio completo de administración de propiedades, desde el mantenimiento hasta la gestión de inquilinos y contratos.',
      icon: 'Settings',
      features: [
        'Gestión de inquilinos',
        'Mantenimiento',
        'Administración',
        'Reportes mensuales',
      ],
      color: 'from-success to-primary',
    },
  ];

  const experts = [
    {
      id: 1,
      name: 'María González',
      role: 'Directora de Inversiones',
      specialization: 'Propiedades de Lujo',
      experience: '15+ años',
      image: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
      alt: 'Professional headshot of Hispanic woman with shoulder-length dark hair in navy business suit smiling confidently',
      rating: 4.9,
      clients: 250,
      languages: ['Español', 'Inglés', 'Francés'],
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Especialista en Mercado',
      specialization: 'Análisis de Tendencias',
      experience: '12+ años',
      image: 'https://images.unsplash.com/photo-1538155421123-6a79813f5deb',
      alt: 'Professional portrait of middle-aged Hispanic man with short dark hair in charcoal suit and blue tie',
      rating: 4.8,
      clients: 180,
      languages: ['Español', 'Inglés'],
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Consultora Senior',
      specialization: 'Inversión Internacional',
      experience: '18+ años',
      image: 'https://images.unsplash.com/photo-1654727169791-7f46d0dfc1a3',
      alt: 'Professional businesswoman with blonde hair in elegant black blazer smiling warmly at camera',
      rating: 5.0,
      clients: 320,
      languages: ['Español', 'Inglés', 'Alemán', 'Italiano'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-medium text-foreground mb-6">
            Servicios de Expertos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Nuestro equipo de profesionales certificados te acompaña en cada paso
            de tu inversión inmobiliaria con servicios personalizados y de alta
            calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group bg-card rounded-2xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {/* --- ACTUALIZADO: Icono de Lucide desde map --- */}
                {renderIcon(service?.icon, 32, { color: 'white' })}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-playfair font-medium text-foreground mb-4">
                {service?.title}
              </h3>

              <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                {service?.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service?.features?.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    {/* --- ACTUALIZADO: Icono de Lucide --- */}
                    <Check size={16} className="mr-3 text-success" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                fullWidth
                className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
              >
                Más Información
              </Button>
            </div>
          ))}
        </div>

        {/* Expert Team */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-luxury">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-playfair font-medium text-foreground mb-4">
              Nuestro Equipo de Expertos
            </h3>
            <p className="text-lg text-muted-foreground font-inter">
              Profesionales certificados con décadas de experiencia en el mercado
              inmobiliario de lujo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {experts?.map((expert) => (
              <div key={expert?.id} className="text-center group">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-luxury group-hover:shadow-luxury-lg transition-all duration-300">
                    {/* --- ACTUALIZADO: <img> estándar --- */}
                    <img
                      src={expert?.image}
                      alt={expert?.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src=`https://placehold.co/128x128/EAE6DC/333B44?text=${expert.name[0]}`;
                      }}
                    />
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-1/2 translate-x-1/2 translate-y-1/2">
                    <div className="w-6 h-6 bg-success rounded-full border-4 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-subtle"></div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-xl font-playfair font-medium text-foreground mb-2">
                  {expert?.name}
                </h4>

                <p className="text-primary font-inter font-medium mb-1">
                  {expert?.role}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {expert?.specialization} • {expert?.experience}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <Star
                        size={16}
                        className="text-warning mr-1"
                        fill="currentColor"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {expert?.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium text-foreground mb-1">
                      {expert?.clients}+
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Clientes
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {expert?.languages?.map((language, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                {/* Contact Button */}
                <Link to={`/agent-profiles?expert=${expert?.id}`}>
                  {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={<MessageCircle size={16} />}
                  >
                    Contactar
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Team CTA */}
          <div className="text-center">
            <Link to="/agent-profiles">
              {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
              <Button variant="default" size="lg" icon={<Users size={20} />}>
                Ver Todo el Equipo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertServices;