import React from 'react';
import { Link } from 'react-router-dom';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Building2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Send,
  Shield,
} from 'lucide-react';

// --- ACTUALIZADO: Mapeo de strings a componentes de icono ---
const iconMap = {
  Linkedin: Linkedin,
  Twitter: Twitter,
  Facebook: Facebook,
  Instagram: Instagram,
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
};

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  // --- Helper para renderizar iconos del map ---
  const renderIcon = (name, size, props = {}) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} {...props} />;
  };

  const footerSections = [
    {
      title: 'Propiedades',
      links: [
        { name: 'Buscar Propiedades', path: '/property-listings' },
        {
          name: 'Propiedades de Lujo',
          path: '/property-listings?category=luxury',
        },
        {
          name: 'Inversiones Comerciales',
          path: '/property-listings?category=commercial',
        },
        {
          name: 'Propiedades Vacacionales',
          path: '/property-listings?category=vacation',
        },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { name: 'Consultoría de Inversión', path: '/agent-profiles' },
        { name: 'Valoración de Propiedades', path: '/agent-profiles' },
        { name: 'Gestión Integral', path: '/agent-profiles' },
        {
          name: 'Análisis de Mercado',
          path: '/market-analytics-dashboard',
        },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Centro de Análisis', path: '/market-analytics-dashboard' },
        { name: 'Guías de Inversión', path: '/market-analytics-dashboard' },
        { name: 'Tendencias del Mercado', path: '/market-analytics-dashboard' },
        { name: 'Calculadoras ROI', path: '/market-analytics-dashboard' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', path: '/homepage' },
        { name: 'Nuestro Equipo', path: '/agent-profiles' },
        { name: 'Carreras', path: '/homepage' },
        { name: 'Contacto', path: '/agent-profiles' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
  ];

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Teléfono',
      content: '+34 91 123 4567',
      link: 'tel:+34911234567',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@realestatepro.es',
      link: 'mailto:info@realestatepro.es',
    },
    {
      icon: 'MapPin',
      title: 'Oficina Principal',
      content: 'Paseo de la Castellana 95\n28046 Madrid, España',
      link: '#',
    },
  ];

  return (
    // Tus clases de Tailwind aquí funcionarán perfecto con la nueva paleta pastel
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Building2 size={28} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-playfair font-medium text-white">
                  RealEstate
                </span>
                <span className="text-lg font-inter font-medium text-accent -mt-1">
                  Pro
                </span>
              </div>
            </Link>

            <p className="text-white/80 font-inter leading-relaxed mb-6">
              Transformamos inversiones inmobiliarias a través de tecnología
              avanzada, análisis de mercado inteligente y asesoramiento experto
              personalizado.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={social?.name}
                >
                  {/* --- ACTUALIZADO: Icono de Lucide desde map --- */}
                  {renderIcon(social?.icon, 20)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="text-lg font-playfair font-medium text-white mb-6">
                {section?.title}
              </h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-white/70 hover:text-white font-inter transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link?.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/20 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo?.map((contact) => (
              <div
                key={contact?.title}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* --- ACTUALIZADO: Icono de Lucide desde map --- */}
                  {renderIcon(contact?.icon, 20)}
                </div>
                <div>
                  <h4 className="text-white font-inter font-medium mb-2">
                    {contact?.title}
                  </h4>
                  {contact?.link !== '#' ? (
                    <a
                      href={contact?.link}
                      className="text-white/80 hover:text-white font-inter transition-colors duration-200 whitespace-pre-line"
                    >
                      {contact?.content}
                    </a>
                  ) : (
                    <p className="text-white/80 font-inter whitespace-pre-line">
                      {contact?.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/20 mt-12 pt-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-playfair font-medium text-white mb-4">
              Mantente Informado
            </h3>
            <p className="text-white/80 font-inter mb-6">
              Recibe análisis de mercado exclusivos, oportunidades de inversión
              y tendencias inmobiliarias directamente en tu correo.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-foreground font-inter font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center justify-center"
              >
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Send size={18} className="mr-2" />
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 font-inter text-sm">
              © {currentYear} RealEstate Pro. Todos los derechos reservados.
            </div>

            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link
                to="/homepage"
                className="text-white/70 hover:text-white font-inter transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/homepage"
                className="text-white/70 hover:text-white font-inter transition-colors duration-200"
              >
                Términos de Servicio
              </Link>
              <Link
                to="/homepage"
                className="text-white/70 hover:text-white font-inter transition-colors duration-200"
              >
                Cookies
              </Link>
              <div className="flex items-center text-white/70">
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Shield size={16} className="mr-2" />
                <span className="font-inter">SSL Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;