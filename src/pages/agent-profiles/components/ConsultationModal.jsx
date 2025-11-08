import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import { X, Star, Calendar } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
// --- AÑADIDO: Importamos 'cn' para el textarea ---
import { cn } from '../../../utils/cn';

const ConsultationModal = ({ isOpen, onClose, agent, onBookConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const consultationTypes = [
    { value: '', label: 'Seleccionar tipo de consulta' },
    { value: 'buying', label: 'Compra de Propiedad' },
    { value: 'selling', label: 'Venta de Propiedad' },
    { value: 'investment', label: 'Asesoría de Inversión' },
    { value: 'market-analysis', label: 'Análisis de Mercado' },
    { value: 'property-valuation', label: 'Valoración de Propiedad' },
  ];

  const timeSlots = [
    { value: '', label: 'Seleccionar horario' },
    { value: '09:00', label: '09:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '02:00 PM' },
    { value: '15:00', label: '03:00 PM' },
    { value: '16:00', label: '04:00 PM' },
    { value: '17:00', label: '05:00 PM' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    onBookConsultation(agent?.id, formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* --- ACTUALIZADO: bg-card y border --- */}
      <div className="bg-card rounded-xl shadow-luxury-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
        {/* Header */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-playfair font-medium text-primary">
              Agendar Consulta
            </h2>
            <p className="text-muted-foreground text-sm">
              con {agent?.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <X size={20} />
          </button>
        </div>

        {/* Agent Info */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="p-6 border-b border-border bg-muted/30">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              {/* --- ACTUALIZADO: <img> con fallback --- */}
              <img
                src={agent?.image}
                alt={agent?.imageAlt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/64x64/EAE6DC/333B44?text=${agent.name[0]}`;
                }}
              />
            </div>
            <div>
              <h3 className="font-medium text-primary">{agent?.name}</h3>
              <p className="text-sm text-muted-foreground">{agent?.title}</p>
              <div className="flex items-center space-x-2 mt-1">
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Star
                  size={14}
                  className="text-accent"
                  fill="currentColor"
                />
                <span className="text-sm text-muted-foreground">
                  {agent?.rating} • {agent?.stats?.totalSales} ventas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nombre Completo"
              type="text"
              required
              value={formData?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              placeholder="Tu nombre completo"
            />
            <Input
              label="Correo Electrónico"
              type="email"
              required
              value={formData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Teléfono"
              type="tel"
              required
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              placeholder="+34 600 000 000"
            />
            <Select
              label="Tipo de Consulta"
              required
              options={consultationTypes}
              value={formData?.consultationType}
              onChange={(value) => handleInputChange('consultationType', value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Fecha Preferida"
              type="date"
              required
              value={formData?.preferredDate}
              onChange={(e) =>
                handleInputChange('preferredDate', e?.target?.value)
              }
              min={new Date()?.toISOString()?.split('T')?.[0]}
            />
            <Select
              label="Horario Preferido"
              required
              options={timeSlots}
              value={formData?.preferredTime}
              onChange={(value) => handleInputChange('preferredTime', value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Mensaje Adicional
            </label>
            {/* --- ACTUALIZADO: Textarea con estilos de Input --- */}
            <textarea
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
              placeholder="Cuéntanos más sobre tus necesidades..."
              rows={4}
              className={cn(
                "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                "resize-none min-h-[80px]" // Permitimos resize vertical
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancelar
            </Button>
            {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
            <Button
              type="submit"
              variant="default"
              fullWidth
              icon={<Calendar size={18} />}
            >
              Confirmar Consulta
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;