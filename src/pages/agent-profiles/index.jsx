import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Calendar,
  Grid3X3,
  List,
  UserPlus,
  Info,
  Users,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import AgentCard from './components/AgentCard';
import AgentFilters from './components/AgentFilters';
import AgentStats from './components/AgentStats';
import FeaturedAgents from './components/FeaturedAgents';
import TestimonialSection from './components/TestimonialSection';
import ConsultationModal from './components/ConsultationModal';

const AgentProfiles = () => {
  const [filters, setFilters] = useState({
    search: '',
    specialization: '',
    location: '',
    experience: '',
    rating: '',
    languages: [],
    availableNow: false,
    weekendAvailable: false,
  });

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');

  // Mock data for agents
  const mockAgents = [
    {
      id: 1,
      name: 'María González Ruiz',
      title: 'Especialista en Propiedades de Lujo',
      image: 'https://images.unsplash.com/photo-1684262855358-88f296a2cfc2',
      imageAlt:
        'Professional headshot of Hispanic woman with long dark hair in navy blazer smiling confidently',
      rating: 4.9,
      reviewCount: 127,
      isVerified: true,
      isTopAgent: true,
      rank: 1,
      specializations: [
        'Propiedades de Lujo',
        'Inversión Inmobiliaria',
        'Compradores Internacionales',
      ],
      stats: {
        totalSales: 156,
        experience: 12,
        avgPrice: '€850K',
      },
      phone: '+34 600 123 456',
      email: 'maria.gonzalez@realestatepro.es',
      location: 'Madrid Centro',
      languages: ['Español', 'Inglés', 'Francés'],
      availableNow: true,
      weekendAvailable: true,
    },
    {
      id: 2,
      name: 'Carlos Mendoza Silva',
      title: 'Experto en Inversión Comercial',
      image: 'https://images.unsplash.com/photo-1650490323009-96fc950a959c',
      imageAlt:
        'Professional headshot of Hispanic man with short black hair in dark suit with confident smile',
      rating: 4.8,
      reviewCount: 89,
      isVerified: true,
      isTopAgent: true,
      rank: 2,
      specializations: [
        'Comercial',
        'Inversión Inmobiliaria',
        'Desarrollo Urbano',
      ],
      stats: {
        totalSales: 98,
        experience: 8,
        avgPrice: '€1.2M',
      },
      phone: '+34 600 234 567',
      email: 'carlos.mendoza@realestatepro.es',
      location: 'Barcelona',
      languages: ['Español', 'Inglés'],
      availableNow: true,
      weekendAvailable: false,
    },
    {
      id: 3,
      name: 'Ana Martín López',
      title: 'Asesora de Primeros Compradores',
      image: 'https://images.unsplash.com/photo-1725271765764-669af9988700',
      imageAlt:
        'Professional headshot of young woman with blonde hair in light blue blouse smiling warmly',
      rating: 4.7,
      reviewCount: 156,
      isVerified: true,
      isTopAgent: true,
      rank: 3,
      specializations: ['Primeros Compradores', 'Residencial', 'Financiación'],
      stats: {
        totalSales: 203,
        experience: 6,
        avgPrice: '€320K',
      },
      phone: '+34 600 345 678',
      email: 'ana.martin@realestatepro.es',
      location: 'Valencia',
      languages: ['Español', 'Inglés', 'Alemán'],
      availableNow: false,
      weekendAvailable: true,
    },
    {
      id: 4,
      name: 'Roberto Fernández Cruz',
      title: 'Especialista en Propiedades Costeras',
      image: 'https://images.unsplash.com/photo-1729162128021-f37dca3ff30d',
      imageAlt:
        'Professional headshot of middle-aged man with graying hair in white shirt and navy jacket',
      rating: 4.9,
      reviewCount: 74,
      isVerified: true,
      isTopAgent: false,
      specializations: [
        'Propiedades Costeras',
        'Propiedades de Lujo',
        'Turismo Residencial',
      ],
      stats: {
        totalSales: 87,
        experience: 15,
        avgPrice: '€680K',
      },
      phone: '+34 600 456 789',
      email: 'roberto.fernandez@realestatepro.es',
      location: 'Marbella',
      languages: ['Español', 'Inglés', 'Italiano'],
      availableNow: true,
      weekendAvailable: true,
    },
    {
      id: 5,
      name: 'Isabel Rodríguez Vega',
      title: 'Consultora de Inversión Internacional',
      image: 'https://images.unsplash.com/photo-1684262855358-88f296a2cfc2',
      imageAlt:
        'Professional headshot of woman with dark hair in burgundy blazer with confident expression',
      rating: 4.8,
      reviewCount: 92,
      isVerified: true,
      isTopAgent: false,
      specializations: [
        'Compradores Internacionales',
        'Inversión Inmobiliaria',
        'Propiedades de Lujo',
      ],
      stats: {
        totalSales: 134,
        experience: 10,
        avgPrice: '€950K',
      },
      phone: '+34 600 567 890',
      email: 'isabel.rodriguez@realestatepro.es',
      location: 'Madrid',
      languages: ['Español', 'Inglés', 'Francés', 'Alemán'],
      availableNow: true,
      weekendAvailable: false,
    },
    {
      id: 6,
      name: 'Diego Herrera Morales',
      title: 'Experto en Desarrollo Residencial',
      image: 'https://images.unsplash.com/photo-1654727157781-e4d438e3a02a',
      imageAlt:
        'Professional headshot of young man with short dark hair in gray suit with friendly smile',
      rating: 4.6,
      reviewCount: 68,
      isVerified: true,
      isTopAgent: false,
      specializations: ['Desarrollo Residencial', 'Obra Nueva', 'Inversión'],
      stats: {
        totalSales: 76,
        experience: 5,
        avgPrice: '€420K',
      },
      phone: '+34 600 678 901',
      email: 'diego.herrera@realestatepro.es',
      location: 'Sevilla',
      languages: ['Español', 'Inglés'],
      availableNow: false,
      weekendAvailable: true,
    },
  ];

  // Mock statistics
  const mockStats = {
    totalAgents: 247,
    monthlySales: 89,
    averageRating: 4.7,
    avgResponseTime: '< 2h',
  };

  // Mock testimonials
  const mockTestimonials = [
    {
      id: 1,
      content: `María nos ayudó a encontrar la casa perfecta en Madrid. Su conocimiento del mercado y atención al detalle fueron excepcionales. Recomendamos sus servicios sin dudarlo.`,
      rating: 5,
      clientName: 'Carmen y José Luis',
      propertyType: 'Apartamento de Lujo',
      clientImage:
        'https://images.unsplash.com/photo-1680977735364-cf4ad5eead54',
      clientImageAlt: 'Happy couple in their 40s smiling together outdoors',
      agentName: 'María González',
      agentImage:
        'https://images.unsplash.com/photo-1672867209978-1183d00d4714',
      agentImageAlt:
        'Professional headshot of Hispanic woman with long dark hair in navy blazer',
    },
    {
      id: 2,
      content: `Carlos nos guió perfectamente en nuestra primera inversión inmobiliaria. Su análisis del mercado fue muy preciso y los resultados superaron nuestras expectativas.`,
      rating: 5,
      clientName: 'Alejandro Ruiz',
      propertyType: 'Inversión Comercial',
      clientImage:
        'https://images.unsplash.com/photo-1723990720514-65968a7d517b',
      clientImageAlt:
        'Professional businessman in his 30s with confident expression',
      agentName: 'Carlos Mendoza',
      agentImage:
        'https://images.unsplash.com/photo-1678282955795-200c1e18bc7d',
      agentImageAlt:
        'Professional headshot of Hispanic man with short black hair in dark suit',
    },
    {
      id: 3,
      content: `Ana hizo que comprar nuestra primera casa fuera muy fácil. Nos explicó cada paso del proceso y siempre estuvo disponible para resolver nuestras dudas.`,
      rating: 5,
      clientName: 'Laura y Miguel',
      propertyType: 'Primera Vivienda',
      clientImage:
        'https://images.unsplash.com/photo-1717238457914-3d6b554253b1',
      clientImageAlt: 'Young couple in their late 20s smiling happily together',
      agentName: 'Ana Martín',
      agentImage:
        'https://images.unsplash.com/photo-1676439122768-aff65cfda312',
      agentImageAlt:
        'Professional headshot of young woman with blonde hair in light blue blouse',
    },
  ];

  const sortOptions = [
    { value: 'rating', label: 'Mayor Calificación' },
    { value: 'experience', label: 'Más Experiencia' },
    { value: 'sales', label: 'Más Ventas' },
    { value: 'name', label: 'Nombre A-Z' },
  ];

  // Filter and sort agents
  const filteredAgents = mockAgents?.filter((agent) => {
    if (
      filters?.search &&
      !agent?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase())
    ) {
      return false;
    }
    if (
      filters?.specialization &&
      !agent?.specializations?.some((spec) =>
        spec?.toLowerCase()?.includes(filters?.specialization?.toLowerCase())
      )
    ) {
      return false;
    }
    if (
      filters?.location &&
      !agent?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase())
    ) {
      return false;
    }
    if (filters?.rating && agent?.rating < parseFloat(filters?.rating)) {
      return false;
    }
    if (
      filters?.languages?.length > 0 &&
      !filters?.languages?.every((lang) => agent?.languages?.includes(lang))
    ) {
      return false;
    }
    if (filters?.availableNow && !agent?.availableNow) {
      return false;
    }
    if (filters?.weekendAvailable && !agent?.weekendAvailable) {
      return false;
    }
    return true;
  });

  const sortedAgents = [...filteredAgents]?.sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b?.rating - a?.rating;
      case 'experience':
        return b?.stats?.experience - a?.stats?.experience;
      case 'sales':
        return b?.stats?.totalSales - a?.stats?.totalSales;
      case 'name':
        return a?.name?.localeCompare(b?.name);
      default:
        return 0;
    }
  });

  const featuredAgents = mockAgents?.filter((agent) => agent?.isTopAgent)?.slice(0, 3);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      specialization: '',
      location: '',
      experience: '',
      rating: '',
      languages: [],
      availableNow: false,
      weekendAvailable: false,
    });
  };

  const isFilterActive = Object.values(filters)?.some((value) =>
    Array.isArray(value) ? value?.length > 0 : Boolean(value)
  );

  const handleViewProfile = (agentId) => {
    console.log('Ver perfil del agente:', agentId);
    // Navigate to agent detail page
  };

  const handleBookConsultation = (agentId, formData = null) => {
    const agent = mockAgents?.find((a) => a?.id === agentId);
    setSelectedAgent(agent);

    if (formData) {
      console.log('Consulta agendada:', { agentId, formData });
      // Handle booking submission
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsConsultationModalOpen(false);
    setSelectedAgent(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* EL HEADER HA SIDO ELIMINADO de aquí y debe estar en App.jsx 
      */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-medium mb-4">
              Expertos Inmobiliarios Verificados
            </h1>
            <p className="text-xl text-white/90 font-inter mb-8 max-w-3xl mx-auto">
              Conecta con los mejores profesionales del sector inmobiliario.
              Agentes certificados con experiencia comprobada y calificaciones
              excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<Search size={20} />}
              >
                Buscar Agente
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Calendar size={20} />}
              >
                Agendar Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AgentStats stats={mockStats} />
        </div>
      </section>
      
      {/* Featured Agents */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FeaturedAgents
            agents={featuredAgents}
            onViewProfile={handleViewProfile}
            onBookConsultation={handleBookConsultation}
          />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <AgentFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                  isFilterActive={isFilterActive}
                />
              </div>
            </div>

            {/* Agents Grid */}
            <div className="lg:w-3/4">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-playfair font-medium text-primary mb-2">
                    Todos los Agentes
                  </h2>
                  <p className="text-muted-foreground">
                    {sortedAgents?.length} agentes encontrados
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e?.target?.value)}
                    className="px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {sortOptions?.map((option) => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-primary text-white'
                          : 'bg-white text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Grid3X3 size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-colors ${
                        viewMode === 'list'
                          ? 'bg-primary text-white'
                          : 'bg-white text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Agents Grid/List */}
              {sortedAgents?.length > 0 ? (
                <div
                  className={`grid gap-6 ${
                    viewMode === 'grid'
                      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {sortedAgents?.map((agent) => (
                    <AgentCard
                      key={agent?.id}
                      agent={agent}
                      onViewProfile={handleViewProfile}
                      onBookConsultation={handleBookConsultation}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card rounded-xl shadow-luxury">
                  <Users size={64} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-medium text-primary mb-2">
                    No se encontraron agentes
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Intenta ajustar los filtros para encontrar más resultados
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Limpiar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TestimonialSection testimonials={mockTestimonials} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-medium text-white mb-4">
            ¿Eres un Agente Inmobiliario?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8">
            Únete a nuestra red de expertos y conecta con clientes de alta calidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<UserPlus size={20} />}
            >
              Registrarse como Agente
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              icon={<Info size={20} />}
            >
              Más Información
            </Button>
          </div>
        </div>
      </section>
      
      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseModal}
        agent={selectedAgent}
        onBookConsultation={handleBookConsultation}
      />
    </div>
  );
};

export default AgentProfiles;
