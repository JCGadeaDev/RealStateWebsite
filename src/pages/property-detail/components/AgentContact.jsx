import React, { useState } from 'react';
// ELIMINADO: import Icon from '../../../components/AppIcon';
// ELIMINADO: import Image from '../../../components/AppImage';

// --- NUEVO: Importamos los iconos de Lucide ---
import {
  Check,
  Star,
  Award,
  Phone,
  MessageCircle,
  Calendar,
  Send,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { cn } from '../../../utils/cn'; // Para el textarea y clases

const AgentContact = ({ agent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Estoy interesado en esta propiedad. ¿Podríamos programar una visita?',
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Simulación de envío exitoso
    alert('Mensaje enviado. El agente se pondrá en contacto pronto.');
  };

  return (
    // --- ACTUALIZADO: bg-card, border y shadow-luxury ---
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury border border-border">
      {/* Agent Profile Header */}
      <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            {/* --- ACTUALIZADO: <img> estándar con fallback --- */}
            <img
              src={agent?.avatar}
              alt={agent?.avatarAlt}
              className="w-16 h-16 rounded-full object-cover shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/64x64/EAE6DC/333B44?text=${agent.name[0]}`;
              }}
            />
            {/* Agente Verificado */}
            {/* --- ACTUALIZADO: border-card --- */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-playfair font-medium text-primary">
              {agent?.name}
            </h3>
            <p className="text-muted-foreground mb-2">{agent?.title}</p>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                {/* --- ACTUALIZADO: Icono de Lucide con color warning --- */}
                <Star
                  size={14}
                  className="text-warning fill-current"
                />
                <span className="font-medium text-foreground">
                  {agent?.rating}
                </span>
                <span className="text-muted-foreground">
                  ({agent?.reviews} reseñas)
                </span>
              </div>

              <div className="flex items-center space-x-1">
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Award size={14} className="text-accent" />
                <span className="text-muted-foreground">
                  {agent?.experience} años exp.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Stats */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-inter font-bold text-primary">
              {agent?.propertiesSold}
            </div>
            <div className="text-xs text-muted-foreground">
              Propiedades Vendidas
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-inter font-bold text-primary">
              {agent?.avgDaysOnMarket}
            </div>
            <div className="text-xs text-muted-foreground">Días Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-inter font-bold text-primary">
              {agent?.responseTime}
            </div>
            <div className="text-xs text-muted-foreground">
              Tiempo Respuesta
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <div className="grid grid-cols-2 gap-3">
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="default"
            icon={<Phone size={18} />}
            iconPosition="left"
          >
            Llamar Ahora
          </Button>
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="outline"
            icon={<MessageCircle size={18} />}
            iconPosition="left"
          >
            WhatsApp
          </Button>
        </div>

        <div className="mt-3">
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="secondary"
            fullWidth
            icon={<Calendar size={18} />}
            iconPosition="left"
          >
            Programar Visita
          </Button>
        </div>
      </div>
      {/* Contact Form */}
      <div className="p-6">
        <h4 className="text-lg font-playfair font-medium text-foreground mb-4">
          Enviar Mensaje
        </h4>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* --- ACTUALIZADO: Usa componente Input --- */}
          <Input
            label="Nombre Completo"
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleInputChange}
            placeholder="Tu nombre"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            {/* --- ACTUALIZADO: Usa componente Input --- */}
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
            />

            {/* --- ACTUALIZADO: Usa componente Input --- */}
            <Input
              label="Teléfono"
              type="tel"
              name="phone"
              value={formData?.phone}
              onChange={handleInputChange}
              placeholder="+34 600 000 000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Mensaje
            </label>
            {/* --- ACTUALIZADO: Textarea con clases de Input --- */}
            <textarea
              name="message"
              value={formData?.message}
              onChange={handleInputChange}
              rows={4}
              className={cn(
                'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                'resize-none' // Aseguramos que solo se pueda redimensionar verticalmente si se desea
              )}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            type="submit"
            variant="default"
            fullWidth
            icon={<Send size={18} />}
            iconPosition="left"
          >
            Enviar Mensaje
          </Button>
        </form>
      </div>
      {/* Agent Specialties */}
      {/* --- ACTUALIZADO: bg-muted/30 y border-border --- */}
      <div className="p-6 border-t border-border bg-muted/30">
        <h4 className="text-sm font-medium text-primary mb-3">
          Especialidades
        </h4>
        <div className="flex flex-wrap gap-2">
          {agent?.specialties?.map((specialty, index) => (
            <span
              key={index}
              // --- ACTUALIZADO: Estilos semánticos ---
              className="px-3 py-1 bg-card text-xs text-muted-foreground rounded-full border border-border"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentContact;