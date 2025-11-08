import React from 'react';
import Button from '../../../components/ui/Button';
// --- ACTUALIZADO: Importamos el icono X ---
import { X } from 'lucide-react';
// --- ¡NUEVO! Importamos tu componente Input (que lo hace todo) ---
import Input from '../../../components/ui/Input';
// --- ¡NUEVO! Importamos tu componente Select ---
import Select from '../../../components/ui/Select';

const AgentFilters = ({
  filters,
  onFilterChange,
  onClearFilters,
  isFilterActive,
}) => {
  // Opciones de filtros (hemos mantenido tus 'value' originales en minúsculas)
  const specializationOptions = [
    { value: '', label: 'Todas las Especializaciones' },
    { value: 'luxury', label: 'Propiedades de Lujo' },
    { value: 'investment', label: 'Inversión Inmobiliaria' },
    { value: 'commercial', label: 'Comercial' },
    { value: 'residential', label: 'Residencial' },
    { value: 'international', label: 'Compradores Internacionales' },
    { value: 'firstTime', label: 'Primeros Compradores' },
  ];

  const locationOptions = [
    { value: '', label: 'Todas las Ubicaciones' },
    { value: 'madrid', label: 'Madrid' },
    { value: 'barcelona', label: 'Barcelona' },
    { value: 'valencia', label: 'Valencia' },
    { value: 'sevilla', label: 'Sevilla' },
    { value: 'marbella', label: 'Marbella' },
  ];

  const experienceOptions = [
    { value: '', label: 'Cualquier Experiencia' },
    { value: '1-3', label: '1-3 años' },
    { value: '4-7', label: '4-7 años' },
    { value: '8-15', label: '8-15 años' },
    { value: '15+', label: '15+ años' },
  ];

  const ratingOptions = [
    { value: '', label: 'Cualquier Calificación' },
    { value: '4.5', label: '4.5+ estrellas' },
    { value: '4.0', label: '4.0+ estrellas' },
    { value: '3.5', label: '3.5+ estrellas' },
  ];

  return (
    // --- ACTUALIZADO: bg-white a bg-card y añadido border ---
    <div className="bg-card rounded-xl shadow-luxury p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-playfair font-medium text-primary">
          Filtrar Agentes
        </h3>
        {isFilterActive && (
          // --- ACTUALIZADO: Botón con prop 'icon' ---
          <Button
            variant="ghost"
            size="sm"
            icon={<X size={16} />}
            onClick={onClearFilters}
          >
            Limpiar Filtros
          </Button>
        )}
      </div>
      <div className="space-y-6">
        {/* --- ACTUALIZADO: Usamos tu componente Input --- */}
        <Input
          label="Buscar por Nombre"
          type="search"
          placeholder="Nombre del agente..."
          value={filters?.search}
          onChange={(e) => onFilterChange('search', e?.target?.value)}
        />

        {/* --- ACTUALIZADO: Usamos tu componente Select --- */}
        <Select
          label="Especialización"
          options={specializationOptions}
          value={filters?.specialization}
          onChange={(value) => onFilterChange('specialization', value)}
          placeholder="Todas las Especializaciones"
        />

        {/* --- ACTUALIZADO: Usamos tu componente Select --- */}
        <Select
          label="Ubicación"
          options={locationOptions}
          value={filters?.location}
          onChange={(value) => onFilterChange('location', value)}
          placeholder="Todas las Ubicaciones"
        />

        {/* --- ACTUALIZADO: Usamos tu componente Select --- */}
        <Select
          label="Experiencia"
          options={experienceOptions}
          value={filters?.experience}
          onChange={(value) => onFilterChange('experience', value)}
          placeholder="Cualquier Experiencia"
        />

        {/* --- ACTUALIZADO: Usamos tu componente Select --- */}
        <Select
          label="Calificación Mínima"
          options={ratingOptions}
          value={filters?.rating}
          onChange={(value) => onFilterChange('rating', value)}
          placeholder="Cualquier Calificación"
        />

        {/* Languages */}
        <div>
          <label className="block text-sm font-medium text-primary mb-3">
            Idiomas
          </label>
          <div className="space-y-2">
            {['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano']?.map(
              (language) => (
                // --- ACTUALIZADO: Usamos tu componente Input type="checkbox" ---
                <label
                  key={language}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <Input
                    type="checkbox"
                    id={`lang-${language}`}
                    checked={filters?.languages?.includes(language)}
                    onChange={(e) => {
                      const newLanguages = e?.target?.checked
                        ? [...filters?.languages, language]
                        : filters?.languages?.filter(
                            (lang) => lang !== language
                          );
                      onFilterChange('languages', newLanguages);
                    }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {language}
                  </span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium text-primary mb-3">
            Disponibilidad
          </label>
          <div className="space-y-2">
            {/* --- ACTUALIZADO: Usamos tu componente Input type="checkbox" --- */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <Input
                type="checkbox"
                id="availableNow"
                checked={filters?.availableNow}
                onChange={(e) =>
                  onFilterChange('availableNow', e?.target?.checked)
                }
              />
              <span className="text-sm text-muted-foreground">
                Disponible Ahora
              </span>
            </label>
            {/* --- ACTUALIZADO: Usamos tu componente Input type="checkbox" --- */}
            <label className="flex items-center space-x-3 cursor-pointer">
              <Input
                type="checkbox"
                id="weekendAvailable"
                checked={filters?.weekendAvailable}
                onChange={(e) =>
                  onFilterChange('weekendAvailable', e?.target?.checked)
                }
              />
              <span className="text-sm text-muted-foreground">
                Disponible Fines de Semana
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentFilters;