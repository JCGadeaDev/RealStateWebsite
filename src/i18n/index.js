import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  ?.use(Backend)
  ?.use(LanguageDetector)
  ?.use(initReactI18next)
  ?.init({
    // Idioma de respaldo si el idioma detectado no tiene una traducción
    fallbackLng: 'es',
    // Si lo pones en true, i18next mostrará logs útiles en la consola
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    // Configuración para guardar la preferencia de idioma del usuario
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    // Si usas Backend, este path le dice dónde buscar los archivos .json
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Recursos de traducción incluidos directamente para simplificar el setup inicial
    resources: {
      es: {
        translation: {
          // Header
          'nav.properties': 'Propiedades',
          'nav.agents': 'Agentes',
          'nav.analytics': 'Analíticas',
          'nav.clientPortal': 'Portal Cliente',
          'nav.more': 'Más',
          'nav.settings': 'Configuración',
          'nav.help': 'Ayuda',
          'nav.contact': 'Contacto',
          'nav.contactExpert': 'Contactar Experto',
          'nav.findProperties': 'Buscar Propiedades',

          // Hero Section
          'hero.title': 'Descubre tu',
          'hero.titleHighlight': 'Hogar Perfecto',
          'hero.subtitle':
            'Propiedades de lujo e inversiones inteligentes respaldadas por análisis de mercado avanzado y experiencia profesional.',
          'hero.searchPlaceholder':
            'Buscar por ubicación, tipo de propiedad o características...',
          'hero.searchButton': 'Buscar Propiedades',
          'hero.viewAllProperties': 'Ver Todas las Propiedades',
          'hero.marketAnalysis': 'Análisis de Mercado',
          'hero.viewDetails': 'Ver Detalles',

          // Market Insights
          'insights.title': 'Información del Mercado y Analíticas',
          'insights.subtitle':
            'Mantente al día con datos de mercado en tiempo real, tendencias y oportunidades de inversión respaldadas por análisis integrales y conocimientos de expertos.',
          'insights.marketGrowth': 'Crecimiento del Mercado',
          'insights.marketGrowthDesc':
            'Aumento del valor de propiedades año tras año',
          'insights.activeListings': 'Listados Activos',
          'insights.activeListingsDesc': 'Propiedades actualmente disponibles',
          'insights.expertAgents': 'Agentes Expertos',
          'insights.expertAgentsDesc':
            'Profesionales inmobiliarios certificados',
          'insights.clientSatisfaction': 'Satisfacción del Cliente',
          'insights.clientSatisfactionDesc': 'Calificación promedio del cliente',
          'insights.topAreas': 'Áreas de Mayor Rendimiento',
          'insights.viewAllMarkets': 'Ver Todos los Mercados',
          'insights.avgPrice': 'Precio Prom:',
          'insights.properties': 'Propiedades:',
          'insights.exploreAnalytics':
            'Explorar Panel de Analíticas del Mercado',

          // Common
          'common.loading': 'Cargando...',
          'common.error': 'Error',
          'common.bedrooms': 'Habitaciones',
          'common.bathrooms': 'Baños',
          'common.area': 'Área',
        },
      },
      en: {
        translation: {
          // Header
          'nav.properties': 'Properties',
          'nav.agents': 'Agents',
          'nav.analytics': 'Analytics',
          'nav.clientPortal': 'Client Portal',
          'nav.more': 'More',
          'nav.settings': 'Settings',
          'nav.help': 'Help',
          'nav.contact': 'Contact',
          'nav.contactExpert': 'Contact Expert',
          'nav.findProperties': 'Find Properties',

          // Hero Section
          'hero.title': 'Discover your',
          'hero.titleHighlight': 'Perfect Home',
          'hero.subtitle':
            'Luxury properties and smart investments backed by advanced market analytics and professional expertise.',
          'hero.searchPlaceholder':
            'Search by location, property type or features...',
          'hero.searchButton': 'Search Properties',
          'hero.viewAllProperties': 'View All Properties',
          'hero.marketAnalysis': 'Market Analysis',
          'hero.viewDetails': 'View Details',

          // Market Insights
          'insights.title': 'Market Insights & Analytics',
          'insights.subtitle':
            'Stay ahead with real-time market data, trends, and investment opportunities backed by comprehensive analytics and expert insights.',
          'insights.marketGrowth': 'Market Growth',
          'insights.marketGrowthDesc': 'Year-over-year property value increase',
          'insights.activeListings': 'Active Listings',
          'insights.activeListingsDesc': 'Properties currently available',
          'insights.expertAgents': 'Expert Agents',
          'insights.expertAgentsDesc': 'Certified real estate professionals',
          'insights.clientSatisfaction': 'Client Satisfaction',
          'insights.clientSatisfactionDesc': 'Average customer rating',
          'insights.topAreas': 'Top Performing Areas',
          'insights.viewAllMarkets': 'View All Markets',
          'insights.avgPrice': 'Avg Price:',
          'insights.properties': 'Properties:',
          'insights.exploreAnalytics': 'Explore Market Analytics Dashboard',

          // Common
          'common.loading': 'Loading...',
          'common.error': 'Error',
          'common.bedrooms': 'Bedrooms',
          'common.bathrooms': 'Bathrooms',
          'common.area': 'Area',
        },
      },
      fr: {
        translation: {
          // Header
          'nav.properties': 'Propriétés',
          'nav.agents': 'Agents',
          'nav.analytics': 'Analyses',
          'nav.clientPortal': 'Portail Client',
          'nav.more': 'Plus',
          'nav.settings': 'Paramètres',
          'nav.help': 'Aide',
          'nav.contact': 'Contact',
          'nav.contactExpert': 'Contacter un Expert',
          'nav.findProperties': 'Trouver des Propriétés',

          // Hero Section
          'hero.title': 'Découvrez votre',
          'hero.titleHighlight': 'Maison Parfaite',
          'hero.subtitle':
            'Propriétés de luxe et investissements intelligents soutenus par des analyses de marché avancées et une expertise professionnelle.',
          'hero.searchPlaceholder':
            'Rechercher par lieu, type de propriété ou caractéristiques...',
          'hero.searchButton': 'Rechercher des Propriétés',
          'hero.viewAllProperties': 'Voir Toutes les Propriétés',
          'hero.marketAnalysis': 'Analyse de Marché',
          'hero.viewDetails': 'Voir les Détails',

          // Market Insights
          'insights.title': 'Aperçus du Marché et Analyses',
          'insights.subtitle':
            "Restez en avance avec des données de marché en temps réel, des tendances et des opportunités d'investissement soutenues par des analyses complètes et des connaissances d'experts.",
          'insights.marketGrowth': 'Croissance du Marché',
          'insights.marketGrowthDesc':
            "Augmentation de la valeur des propriétés d'année en année",
          'insights.activeListings': 'Annonces Actives',
          'insights.activeListingsDesc': 'Propriétés actuellement disponibles',
          'insights.expertAgents': 'Agents Experts',
          'insights.expertAgentsDesc': 'Professionnels immobiliers certifiés',
          'insights.clientSatisfaction': 'Satisfaction Client',
          'insights.clientSatisfactionDesc': 'Note moyenne du client',
          'insights.topAreas': 'Zones les Plus Performantes',
          'insights.viewAllMarkets': 'Voir Tous les Marchés',
          'insights.avgPrice': 'Prix Moy:',
          'insights.properties': 'Propriétés:',
          'insights.exploreAnalytics':
            'Explorer le Tableau de Bord des Analyses de Marché',

          // Common
          'common.loading': 'Chargement...',
          'common.error': 'Erreur',
          'common.bedrooms': 'Chambres',
          'common.bathrooms': 'Salles de bain',
          'common.area': 'Surface',
        },
      },
      de: {
        translation: {
          // Header
          'nav.properties': 'Immobilien',
          'nav.agents': 'Makler',
          'nav.analytics': 'Analysen',
          'nav.clientPortal': 'Kundenportal',
          'nav.more': 'Mehr',
          'nav.settings': 'Einstellungen',
          'nav.help': 'Hilfe',
          'nav.contact': 'Kontakt',
          'nav.contactExpert': 'Experten Kontaktieren',
          'nav.findProperties': 'Immobilien Finden',

          // Hero Section
          'hero.title': 'Entdecken Sie Ihr',
          'hero.titleHighlight': 'Traumzuhause',
          'hero.subtitle':
            'Luxusimmobilien und intelligente Investitionen unterstützt durch fortschrittliche Marktanalysen und professionelle Expertise.',
          'hero.searchPlaceholder':
            'Nach Standort, Immobilientyp oder Eigenschaften suchen...',
          'hero.searchButton': 'Immobilien Suchen',
          'hero.viewAllProperties': 'Alle Immobilien Anzeigen',
          'hero.marketAnalysis': 'Marktanalyse',
          'hero.viewDetails': 'Details Anzeigen',

          // Market Insights
          'insights.title': 'Markteinblicke & Analysen',
          'insights.subtitle':
            'Bleiben Sie voraus mit Echtzeit-Marktdaten, Trends und Investmentmöglichkeiten unterstützt durch umfassende Analysen und Experteneinblicke.',
          'insights.marketGrowth': 'Marktwachstum',
          'insights.marketGrowthDesc':
            'Jährliche Wertsteigerung von Immobilien',
          'insights.activeListings': 'Aktive Angebote',
          'insights.activeListingsDesc': 'Derzeit verfügbare Immobilien',
          'insights.expertAgents': 'Expertenmakler',
          'insights.expertAgentsDesc': 'Zertifizierte Immobilienprofis',
          'insights.clientSatisfaction': 'Kundenzufriedenheit',
          'insights.clientSatisfactionDesc': 'Durchschnittliche Kundenbewertung',
          'insights.topAreas': 'Top-Performing Gebiete',
          'insights.viewAllMarkets': 'Alle Märkte Anzeigen',
          'insights.avgPrice': 'Ø Preis:',
          'insights.properties': 'Immobilien:',
          'insights.exploreAnalytics':
            'Marktanalyse-Dashboard Erkunden',

          // Common
          'common.loading': 'Laden...',
          'common.error': 'Fehler',
          'common.bedrooms': 'Schlafzimmer',
          'common.bathrooms': 'Badezimmer',
          'common.area': 'Fläche',
        },
      },
    },
  });

export default i18n;