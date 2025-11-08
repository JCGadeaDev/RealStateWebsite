import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Plus,
  MapPin,
  User,
  ChevronUp,
  ChevronDown,
  Check,
  Clock,
  Circle,
  MessageCircle,
  Phone,
} from 'lucide-react';
// --- ACTUALIZADO: Importamos Button y cn ---
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

const ActiveTransactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Datos de ejemplo
  const transactions = [
    {
      id: 1,
      property: {
        title: 'Luxury Penthouse Barcelona',
        address: 'Passeig de Gràcia, Barcelona',
        image: 'https://images.unsplash.com/photo-1650355265079-9dad4fa101e6',
        imageAlt:
          'Modern luxury penthouse with panoramic city views and floor-to-ceiling windows',
      },
      offer: {
        amount: '€3,200,000',
        status: 'Counter Offer Received',
        statusType: 'warning', // Usado en getStatusColor
        submittedDate: '2024-10-22',
        responseDate: '2024-10-24',
      },
      timeline: [
        { step: 'Offer Submitted', completed: true, date: 'Oct 22' },
        { step: 'Under Review', completed: true, date: 'Oct 23' },
        { step: 'Counter Offer', completed: true, date: 'Oct 24', current: true },
        { step: 'Negotiation', completed: false, date: 'Pending' },
        { step: 'Acceptance', completed: false, date: 'Pending' },
        { step: 'Closing', completed: false, date: 'Pending' },
      ],
      agent: {
        name: 'María González',
        image: 'https://images.unsplash.com/photo-1662104935703-b4e193c3a852',
        imageAlt:
          'Professional woman with dark hair in business attire smiling confidently',
      },
    },
    {
      id: 2,
      property: {
        title: 'Beachfront Villa Marbella',
        address: 'Golden Mile, Marbella',
        image: 'https://images.unsplash.com/photo-1559583166-ff8217a0db23',
        imageAlt:
          'White modern villa with infinity pool overlooking Mediterranean coastline',
      },
      offer: {
        amount: '€5,800,000',
        status: 'Inspection Scheduled',
        statusType: 'positive', // Usado en getStatusColor
        submittedDate: '2024-10-18',
        responseDate: '2024-10-20',
      },
      timeline: [
        { step: 'Offer Submitted', completed: true, date: 'Oct 18' },
        { step: 'Under Review', completed: true, date: 'Oct 19' },
        { step: 'Accepted', completed: true, date: 'Oct 20' },
        {
          step: 'Inspection',
          completed: false,
          date: 'Oct 26',
          current: true,
        },
        { step: 'Financing', completed: false, date: 'Pending' },
        { step: 'Closing', completed: false, date: 'Pending' },
      ],
      agent: {
        name: 'Carlos Mendoza',
        image: 'https://images.unsplash.com/photo-1714974528889-d51109fb6ae9',
        imageAlt: 'Professional man with beard in dark suit smiling at camera',
      },
    },
  ];

  // --- ACTUALIZADO: getStatusColor usa la nueva paleta de Tailwind ---
  const getStatusColor = (type) => {
    switch (type) {
      case 'positive':
        return 'bg-success/20 text-success';
      case 'warning':
        return 'bg-warning/20 text-warning';
      case 'neutral':
        return 'bg-primary/20 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  // --- ACTUALIZADO: getTimelineStepColor usa la nueva paleta de Tailwind ---
  const getTimelineStepClasses = (step) => {
    if (step?.completed) {
      return 'bg-success/20 text-success';
    }
    if (step?.current) {
      return 'bg-primary/20 text-primary';
    }
    return 'bg-muted text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-lg shadow-luxury border border-border">
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-playfair font-medium text-foreground">
            Active Transactions
          </h2>
          {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
          <Button
            variant="outline"
            size="sm"
            icon={<Plus size={16} />}
          >
            New Offer
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {transactions?.map((transaction) => (
            <div
              key={transaction?.id}
              // --- ACTUALIZADO: border-border ---
              className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors duration-200"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  {/* --- ACTUALIZADO: <img> con fallback --- */}
                  <img
                    src={transaction?.property?.image}
                    alt={transaction?.property?.imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/64x64/EAE6DC/333B44?text=Prop`;
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-inter font-medium text-foreground mb-1">
                        {transaction?.property?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <MapPin size={14} className="mr-1" />
                        {transaction?.property?.address}
                      </p>
                    </div>
                    <span
                      className={cn(
                        'px-3 py-1 text-sm font-medium rounded-full',
                        getStatusColor(transaction?.offer?.statusType)
                      )}
                    >
                      {transaction?.offer?.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-playfair font-medium text-primary">
                        {transaction?.offer?.amount}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        {/* --- ACTUALIZADO: Icono de Lucide --- */}
                        <User size={14} />
                        <span>{transaction?.agent?.name}</span>
                      </div>
                    </div>
                    {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setSelectedTransaction(
                          selectedTransaction === transaction?.id
                            ? null
                            : transaction?.id
                        )
                      }
                      icon={
                        selectedTransaction === transaction?.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )
                      }
                    >
                      {selectedTransaction === transaction?.id
                        ? 'Hide Details'
                        : 'View Timeline'}
                    </Button>
                  </div>
                </div>
              </div>

              {selectedTransaction === transaction?.id && (
                // --- ACTUALIZADO: border-border ---
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="text-sm font-inter font-medium text-foreground mb-3">
                    Transaction Timeline
                  </h4>

                  <div className="space-y-3">
                    {transaction?.timeline?.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {/* --- ACTUALIZADO: Estilos de Timeline --- */}
                        <div
                          className={cn(
                            'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                            getTimelineStepClasses(step)
                          )}
                        >
                          {/* --- ACTUALIZADO: Iconos de Lucide --- */}
                          {step?.completed ? (
                            <Check size={16} />
                          ) : step?.current ? (
                            <Clock size={16} />
                          ) : (
                            <Circle size={16} fill="currentColor" /> // Icono de círculo relleno
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span
                              className={cn(
                                'text-sm font-inter',
                                step?.completed || step?.current
                                  ? 'text-foreground font-medium'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {step?.step}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {step?.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* --- ACTUALIZADO: border-border --- */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        {/* --- ACTUALIZADO: <img> con fallback --- */}
                        <img
                          src={transaction?.agent?.image}
                          alt={transaction?.agent?.imageAlt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://placehold.co/32x32/EAE6DC/333B44?text=${transaction.agent.name[0]}`;
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-inter font-medium text-foreground">
                          {transaction?.agent?.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Your Agent
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<MessageCircle size={14} />}
                      >
                        Message
                      </Button>
                      {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Phone size={14} />}
                      >
                        Call
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveTransactions;