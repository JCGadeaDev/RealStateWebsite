import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/ui/Button';

// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  Square,
  Home,
  TrendingUp,
} from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProperties = [
    {
      id: 1,
      title: 'Villa Mediterránea de Lujo',
      location: 'Marbella, Costa del Sol',
      price: '€2.850.000',
      image: 'https://images.unsplash.com/photo-1600137444380-ce5aea5c43c8',
      alt: 'Luxury Mediterranean villa with white facade, infinity pool overlooking ocean, and palm trees in foreground',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 m²',
    },
    {
      id: 2,
      title: 'Penthouse Moderno en el Centro',
      location: 'Madrid, Salamanca',
      price: '€1.950.000',
      image: 'https://images.unsplash.com/photo-1719368472219-95740ee5d021',
      alt: 'Modern penthouse interior with floor-to-ceiling windows, minimalist furniture, and city skyline view',
      bedrooms: 3,
      bathrooms: 3,
      area: '280 m²',
    },
    {
      id: 3,
      title: 'Casa Colonial Restaurada',
      location: 'Barcelona, Eixample',
      price: '€3.200.000',
      image: 'https://images.unsplash.com/photo-1733570892985-e545e255ba6a',
      alt: 'Restored colonial mansion with ornate stone facade, wrought iron balconies, and manicured garden entrance',
      bedrooms: 6,
      bathrooms: 5,
      area: '520 m²',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredProperties?.length]);

  const handleSearch = (e) => {
    e?.preventDefault();
    // Navigate to property listings with search query
    window.location.href = `/property-listings?search=${encodeURIComponent(
      searchQuery
    )}`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties?.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProperties?.length) % featuredProperties?.length
    );
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {featuredProperties?.map((property, index) => (
          <div
            key={property?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              {/* --- ACTUALIZADO: <img> estándar --- */}
              <img
                src={property?.image}
                alt={property?.alt}
                className="w-full h-full object-cover animate-ken-burns"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src=`https://placehold.co/1920x1080/EAE6DC/333B44?text=Hero`;
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
      >
        {/* --- ACTUALIZADO: Icono de Lucide --- */}
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
      >
        {/* --- ACTUALIZADO: Icono de Lucide --- */}
        <ChevronRight size={24} />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {featuredProperties?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-playfair font-medium text-white mb-6 leading-tight">
              {t('hero.title')}
              {/* Nota: Usar text-gradient-luxury en tailwind.css es mejor que inline */}
              <span className="block text-gradient-luxury">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 font-inter leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-luxury-lg">
                <div className="flex-1 relative">
                  {/* --- ACTUALIZADO: Icono de Lucide --- */}
                  <Search
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />

                  <input
                    type="text"
                    placeholder={t('hero.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none font-inter"
                  />
                </div>
                {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="px-8 py-4 whitespace-nowrap"
                  icon={<Search size={20} />}
                >
                  {t('hero.searchButton')}
                </Button>
              </div>
            </form>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <Link to="/property-listings">
                {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  icon={<Home size={20} />}
                >
                  {t('hero.viewAllProperties')}
                </Button>
              </Link>
              <Link to="/market-analytics-dashboard">
                {/* --- ACTUALIZADO: Botón con 'icon' prop --- */}
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                  icon={<TrendingUp size={20} />}
                >
                  {t('hero.marketAnalysis')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Property Info Card */}
      <div className="absolute bottom-20 right-6 z-20 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-luxury-lg max-w-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-playfair font-medium text-lg text-foreground">
              {featuredProperties?.[currentSlide]?.title}
            </h3>
            <span className="text-2xl font-inter font-semibold text-primary">
              {featuredProperties?.[currentSlide]?.price}
            </span>
          </div>

          <div className="flex items-center text-muted-foreground mb-4">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <MapPin size={16} className="mr-2" />
            <span className="font-inter text-sm">
              {featuredProperties?.[currentSlide]?.location}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Bed size={16} className="mr-1" />
              <span>{featuredProperties?.[currentSlide]?.bedrooms}</span>
            </div>
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Bath size={16} className="mr-1" />
              <span>{featuredProperties?.[currentSlide]?.bathrooms}</span>
            </div>
            <div className="flex items-center">
              {/* --- ACTUALIZADO: Icono de Lucide --- */}
              <Square size={16} className="mr-1" />
              <span>{featuredProperties?.[currentSlide]?.area}</span>
            </div>
          </div>

          <Link
            to={`/property-detail?id=${featuredProperties?.[currentSlide]?.id}`}
          >
            <Button variant="default" fullWidth className="mt-4">
              {t('hero.viewDetails')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;