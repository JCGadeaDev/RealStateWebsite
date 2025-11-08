import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// --- ACTUALIZADO: Importamos los iconos directamente de Lucide ---
import { ChevronUp, ChevronDown, Check } from 'lucide-react'; 

// Este componente ya no espera el prop 'Icon', lo usaremos directamente
const LanguageSwitcher = ({ variant = 'default', size = 'md' }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const currentLanguage = languages?.find(lang => lang?.code === i18n?.language) || languages?.[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document?.addEventListener('mousedown', handleClickOutside);
    return () => document?.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    // La configuración de i18n ya usa localStorage, pero esta línea lo asegura.
    i18n?.changeLanguage(langCode);
    setIsOpen(false);
    // Nota: Aunque el detector lo guarda, aseguramos el guardado para evitar race conditions en navegadores antiguos
    localStorage?.setItem('i18nextLng', langCode);
  };

  const getButtonClasses = () => {
    const baseClasses = 'flex items-center space-x-2 transition-all duration-200 font-medium';
    
    const variantClasses = {
      default: 'px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5',
      header: 'px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5',
      mobile: 'px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 w-full justify-start',
    };

    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };

    return `${baseClasses} ${variantClasses?.[variant]} ${sizeClasses?.[size]}`;
  };

  const getDropdownClasses = () => {
    // Usamos las variables CSS de card/popover que definimos en tailwind.css
    const baseClasses = 'absolute mt-2 bg-card rounded-lg shadow-luxury-lg border border-border py-2 z-50 min-w-[160px]';
    
    if (variant === 'mobile') {
      return `${baseClasses} left-0 right-0`;
    }
    
    return `${baseClasses} right-0`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonClasses()}
        aria-label={t('nav.changeLanguage', 'Change Language')}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        {/* --- ACTUALIZADO: Icono de Lucide --- */}
        {isOpen 
          ? <ChevronUp size={16} className="transition-transform duration-200" /> 
          : <ChevronDown size={16} className="transition-transform duration-200" />
        }
      </button>

      {isOpen && (
        <div className={getDropdownClasses()}>
          {languages?.map((language) => (
            <button
              key={language?.code}
              onClick={() => handleLanguageChange(language?.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary/5 transition-colors duration-150 ${
                i18n?.language === language?.code 
                  ? 'text-primary bg-primary/5' :'text-muted-foreground hover:text-primary'
              }`}
            >
              <span className="text-lg">{language?.flag}</span>
              <span className="font-medium">{language?.name}</span>
              {i18n?.language === language?.code && (
                // --- ACTUALIZADO: Icono de Lucide ---
                <Check size={16} className="ml-auto text-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
