import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// --- CORREGIDO: La ruta debe ser '../LanguageSwitcher' ---
import LanguageSwitcher from '../LanguageSwitcher'; 
import Button from './Button';
import {
  Home,
  Users,
  TrendingUp,
  User,
  Settings,
  HelpCircle,
  Phone,
  MoreHorizontal,
  Menu,
  X,
  Building2,
  Search,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { cn } from '../../utils/cn'; // Importamos cn

// Mapeo de nombres a componentes de Lucide
const iconMap = {
  Home,
  Users,
  TrendingUp,
  User,
  Settings,
  HelpCircle,
  Phone,
  MoreHorizontal,
  Menu,
  X,
  Building2,
  Search,
  ArrowRight,
  ArrowLeft
};

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función genérica para renderizar iconos
  const renderIcon = (name, size, className) => {
    const IconComponent = iconMap[name];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
  };

  const navigationItems = useMemo(() => [
    { name: t('nav.properties'), path: '/property-listings', icon: 'Home' },
    { name: t('nav.agents'), path: '/agent-profiles', icon: 'Users' },
    { name: t('nav.analytics'), path: '/market-analytics-dashboard', icon: 'TrendingUp' },
    { name: t('nav.clientPortal'), path: '/client-portal', icon: 'User' },
  ], [t]);

  const moreItems = useMemo(() => [
    { name: t('nav.settings'), path: '/settings', icon: 'Settings' },
    { name: t('nav.help'), path: '/help', icon: 'HelpCircle' },
    { name: t('nav.contact'), path: '/contact', icon: 'Phone' },
  ], [t]);

  const isActivePath = (path) => {
    return location?.pathname === path || (path === '/homepage' && location?.pathname === '/');
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? 'bg-card/95 backdrop-blur-luxury shadow-luxury' 
            : 'bg-transparent'
        )}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className={cn(
                "flex items-center space-x-3 transition-transform duration-300",
                isScrolled ? 'scale-90' : 'scale-100'
              )}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                {renderIcon("Building2", 24, "text-white stroke-[2.5]")}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-medium text-primary">
                  RealEstate
                </span>
                <span className="text-sm font-inter font-medium text-accent -mt-1">
                  Pro
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-inter font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {renderIcon(item?.icon, 18)}
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-3 py-2 rounded-lg font-inter font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200">
                  {renderIcon("MoreHorizontal", 18)}
                  <span>{t('nav.more')}</span>
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-card rounded-lg shadow-luxury-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {moreItems?.map((item) => (
                      <Link
                        key={item?.path}
                        to={item?.path}
                        className="flex items-center space-x-3 px-4 py-2 text-sm font-inter text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                      >
                        {renderIcon(item?.icon, 16)}
                        <span>{item?.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* --- AHORA VISIBLE: LanguageSwitcher --- */}
              <LanguageSwitcher variant="header" size="sm" /> 
              <Button 
                variant="outline" 
                size="sm"
                icon={renderIcon("Phone", 16, "mr-2")} // Corregido: Usar renderIcon para evitar conflicto de tipos
              >
                {t('nav.contactExpert')}
              </Button>
              <Button 
                variant="default" 
                size="sm"
                icon={renderIcon("Search", 16, "mr-2")} // Corregido: Usar renderIcon para evitar conflicto de tipos
              >
                {t('nav.findProperties')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
            >
              {renderIcon(isMobileMenuOpen ? "X" : "Menu", 24)}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border shadow-luxury-lg animate-slide-up">
            <div className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {renderIcon(item?.icon, 20)}
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-4">
                {moreItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg font-inter text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    {renderIcon(item?.icon, 20)}
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-border pt-4 mt-4 space-y-3">
                {/* --- AHORA VISIBLE: LanguageSwitcher --- */}
                <LanguageSwitcher variant="mobile" size="md" /> 
                <Button 
                  variant="outline" 
                  fullWidth
                  icon={renderIcon("Phone", 16, "mr-2")}
                >
                  {t('nav.contactExpert')}
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  icon={renderIcon("Search", 16, "mr-2")}
                >
                  {t('nav.findProperties')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer para evitar solapamiento con el contenido */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
