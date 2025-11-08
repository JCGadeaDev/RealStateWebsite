import React from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import { Eye, FileText, Upload, MessageCircle, Bell } from 'lucide-react';
// --- ACTUALIZADO: Importamos Button y cn ---
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

// --- NUEVO: Mapeo de iconos para las actividades ---
const iconMap = {
  Eye: Eye,
  FileText: FileText,
  Upload: Upload,
  MessageCircle: MessageCircle,
  Bell: Bell,
};

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'property_viewed',
      title: 'Viewed Luxury Villa in Marbella',
      description: '5 bedroom villa with ocean views',
      timestamp: '2 hours ago',
      icon: 'Eye',
      // --- ACTUALIZADO: Clases de color semánticas ---
      colorClasses: 'bg-primary/20 text-primary',
      image: 'https://images.unsplash.com/photo-1617052167777-f0f26b5c54f4',
      imageAlt:
        'Modern luxury villa with white facade and large windows overlooking ocean',
    },
    {
      id: 2,
      type: 'offer_submitted',
      title: 'Offer Submitted',
      description: '€2.8M offer on Barcelona penthouse',
      timestamp: '5 hours ago',
      icon: 'FileText',
      // --- ACTUALIZADO: Clases de color semánticas ---
      colorClasses: 'bg-success/20 text-success',
      image: 'https://images.unsplash.com/photo-1586129006413-0fb04715aef4',
      imageAlt:
        'Modern penthouse interior with floor-to-ceiling windows and city skyline view',
    },
    {
      id: 3,
      type: 'document_uploaded',
      title: 'Document Uploaded',
      description: 'Pre-approval letter added to portfolio',
      timestamp: '1 day ago',
      icon: 'Upload',
      // --- ACTUALIZADO: Clases de color semánticas ---
      colorClasses: 'bg-secondary/20 text-secondary',
      image: null,
      imageAlt: null,
    },
    {
      id: 4,
      type: 'agent_message',
      title: 'Message from Agent',
      description: 'María González sent you property updates',
      timestamp: '2 days ago',
      icon: 'MessageCircle',
      // --- ACTUALIZADO: Clases de color semánticas ---
      colorClasses: 'bg-warning/20 text-warning',
      image: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
      imageAlt: 'Professional woman with dark hair in business attire smiling at camera',
    },
    {
      id: 5,
      type: 'search_alert',
      title: 'New Property Alert',
      description: '3 new properties match your saved search',
      timestamp: '3 days ago',
      icon: 'Bell',
      // --- ACTUALIZADO: Clases de color semánticas ---
      colorClasses: 'bg-accent/20 text-accent',
      image: null,
      imageAlt: null,
    },
  ];

  return (
    // --- ACTUALIZADO: Añadido border ---
    <div className="bg-card rounded-lg p-6 shadow-luxury border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-playfair font-medium text-foreground">
          Recent Activity
        </h2>
        {/* --- ACTUALIZADO: Usamos el componente Button --- */}
        <Button variant="ghost" size="sm" className="text-sm">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity) => {
          // --- NUEVO: Obtenemos el icono del map ---
          const IconComponent = iconMap[activity.icon];
          return (
            <div
              key={activity?.id}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              {/* --- ACTUALIZADO: Usamos cn y colorClasses --- */}
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
                  activity.colorClasses
                )}
              >
                {/* --- ACTUALIZADO: Renderizamos el icono de Lucide --- */}
                {IconComponent && <IconComponent size={18} />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-inter font-medium text-foreground mb-1">
                      {activity?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {activity?.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity?.timestamp}
                    </p>
                  </div>

                  {activity?.image && (
                    <div className="w-12 h-12 rounded-lg overflow-hidden ml-4 flex-shrink-0">
                      {/* --- ACTUALIZADO: <img> con fallback --- */}
                      <img
                        src={activity?.image}
                        alt={activity?.imageAlt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/48x48/EAE6DC/333B44?text=!`;
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;