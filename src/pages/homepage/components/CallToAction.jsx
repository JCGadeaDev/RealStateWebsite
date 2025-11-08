import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Search,
  MessageCircle,
  TrendingUp,
  User,
  Phone,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Check,
  Send,
} from 'lucide-react';

// --- ACTUALIZADO: Mapeo de strings a componentes de icono ---
const iconMap = {
  Search: Search,
  MessageCircle: MessageCircle,
  TrendingUp: TrendingUp,
};

const CallToAction = () => {
  // --- Helper para renderizar iconos del map ---
  const renderIcon = (name, size, props = {}) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} {...props} />;
  };

  const quickActions = [
    {
      id: 1,
      title: 'Buscar Propiedades',
      description: 'Explora nuestra selección exclusiva de propiedades de lujo',
      icon: 'Search',
      link: '/property-listings',
      color: 'from-primary to-secondary',
    },
    {
      id: 2,
      title: 'Consulta Gratuita',
      description: 'Habla con nuestros expertos sobre tu estrategia de inversión',
      icon: 'MessageCircle',
      link: '/agent-profiles',
      color: 'from-accent to-warning',
    },
    {
      id: 3,
      title: 'Análisis de Mercado',
      description: 'Accede a datos en tiempo real y tendencias del mercado',
      icon: 'TrendingUp',
      link: '/market-analytics-dashboard',
      color: 'from-success to-primary',
    },
  ];

  const benefits = [
    'Acceso exclusivo a propiedades premium',
    'Análisis de mercado en tiempo real',
    'Asesoramiento personalizado de expertos',
    'Gestión integral de inversiones',
    'Soporte 24/7 durante todo el proceso',
    'Red internacional de contactos',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-playfair font-medium text-white mb-6 leading-tight">
            Comienza tu Viaje de
            <span className="block text-accent">Inversión Inmobiliaria</span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-inter leading-relaxed mb-8">
            Únete a más de 2,800 inversores que han confiado en RealEstate Pro
            para construir su patrimonio inmobiliario con estrategias
            inteligentes y resultados excepcionales.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/client-portal">
              {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
              <Button
                variant="default"
                size="xl"
                className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-4"
                icon={<User size={20} />}
              >
                Crear Cuenta Gratuita
              </Button>
            </Link>

            <Link to="/agent-profiles">
              {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary font-medium px-8 py-4"
                icon={<Phone size={20} />}
              >
                Hablar con un Experto
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm font-inter">
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Shield size={16} className="mr-2" />
              <span>100% Seguro y Certificado</span>
            </div>
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Clock size={16} className="mr-2" />
              <span>Respuesta en &lt; 2 horas</span>
            </div>
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Award size={16} className="mr-2" />
              <span>15+ Años de Experiencia</span>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {quickActions?.map((action) => (
            <Link key={action?.id} to={action?.link} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${action?.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* --- ACTUALIZADO: Icono de Lucide desde map --- */}
                  {renderIcon(action?.icon, 32, { color: 'white' })}
                </div>

                <h3 className="text-2xl font-playfair font-medium text-white mb-4">
                  {action?.title}
                </h3>

                <p className="text-white/80 font-inter leading-relaxed mb-6">
                  {action?.description}
                </p>

                <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Comenzar ahora</span>
                  {/* --- ACTUALIZADO: Icono de Lucide --- */}
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div>
              <h3 className="text-3xl font-playfair font-medium text-white mb-8">
                ¿Por qué elegir RealEstate Pro?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-white/90 font-inter text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-luxury-lg">
              <h4 className="text-2xl font-playfair font-medium text-foreground mb-6">
                Solicita Información
              </h4>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option>Tipo de inversión</option>
                    <option>Residencial de lujo</option>
                    <option>Comercial</option>
                    <option>Vacacional</option>
                    <option>Desarrollo</option>
                  </select>
                </div>

                {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
                <Button
                  variant="default"
                  fullWidth
                  size="lg"
                  icon={<Send size={20} />}
                >
                  Enviar Solicitud
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Al enviar este formulario, aceptas nuestros términos y
                condiciones de privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;