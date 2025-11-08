import React, { useState } from 'react';
// --- ACTUALIZADO: Importamos los iconos de Lucide ---
import {
  Bell,
  Plus,
  X,
  TrendingDown,
  Home,
  Target,
  BarChart3,
  Edit,
  Pause,
  Trash2,
  MapPin,
  Eye,
  Archive,
} from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { cn } from '../../../utils/cn';

// --- NUEVO: Mapeo de iconos para las listas de alertas ---
const alertIconMap = {
  TrendingDown: TrendingDown,
  Home: Home,
  Target: Target,
  BarChart3: BarChart3,
};

const MarketAlerts = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateAlert, setShowCreateAlert] = useState(false);

  const [newAlert, setNewAlert] = useState({
    type: '',
    location: '',
    priceRange: '',
    condition: '',
    frequency: 'daily',
  });

  const alertTypes = [
    { value: 'price-drop', label: 'Price Drop Alert' },
    { value: 'new-listing', label: 'New Listing Alert' },
    { value: 'market-trend', label: 'Market Trend Alert' },
    { value: 'roi-opportunity', label: 'ROI Opportunity Alert' },
    { value: 'neighborhood-change', label: 'Neighborhood Change Alert' },
  ];

  const locations = [
    { value: 'downtown', label: 'Downtown District' },
    { value: 'westside', label: 'Westside Heights' },
    { value: 'riverside', label: 'Riverside Gardens' },
    { value: 'hillcrest', label: 'Hillcrest Manor' },
    { value: 'marina', label: 'Marina Bay' },
    { value: 'oakwood', label: 'Oakwood Estates' },
  ];

  const frequencies = [
    { value: 'instant', label: 'Instant' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
  ];

  const activeAlerts = [
    {
      id: 1,
      type: 'Price Drop Alert',
      location: 'Marina Bay',
      condition: 'Properties under $1.2M',
      frequency: 'Daily',
      created: '2024-10-20',
      triggered: 3,
      status: 'Active',
      icon: 'TrendingDown',
      color: 'success', // Usamos esta string para la clase cn
    },
    {
      id: 2,
      type: 'New Listing Alert',
      location: 'Downtown District',
      condition: 'Luxury condos 2+ bedrooms',
      frequency: 'Instant',
      created: '2024-10-18',
      triggered: 12,
      status: 'Active',
      icon: 'Home',
      color: 'primary', // Usamos esta string para la clase cn
    },
    {
      id: 3,
      type: 'ROI Opportunity Alert',
      location: 'Westside Heights',
      condition: 'ROI potential >12%',
      frequency: 'Weekly',
      created: '2024-10-15',
      triggered: 2,
      status: 'Active',
      icon: 'Target',
      color: 'accent', // Usamos esta string para la clase cn
    },
    {
      id: 4,
      type: 'Market Trend Alert',
      location: 'All Areas',
      condition: 'Price increase >10%',
      frequency: 'Monthly',
      created: '2024-10-10',
      triggered: 1,
      status: 'Paused',
      icon: 'BarChart3',
      color: 'warning', // Usamos esta string para la clase cn
    },
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'Price Drop Alert',
      message:
        'Luxury waterfront condo in Marina Bay dropped to $1.15M (-8.2%)',
      location: 'Marina Bay',
      timestamp: '2 hours ago',
      priority: 'high',
      icon: 'TrendingDown',
    },
    {
      id: 2,
      type: 'New Listing Alert',
      message: 'New 3BR penthouse listed in Downtown District - $2.3M',
      location: 'Downtown District',
      timestamp: '4 hours ago',
      priority: 'medium',
      icon: 'Home',
    },
    {
      id: 3,
      type: 'ROI Opportunity Alert',
      message:
        'Investment property in Riverside Gardens showing 14.2% ROI potential',
      location: 'Riverside Gardens',
      timestamp: '1 day ago',
      priority: 'high',
      icon: 'Target',
    },
    {
      id: 4,
      type: 'Market Trend Alert',
      message: 'Oakwood Estates median price increased 12.5% this quarter',
      location: 'Oakwood Estates',
      timestamp: '2 days ago',
      priority: 'low',
      icon: 'BarChart3',
    },
  ];

  const handleCreateAlert = () => {
    // Simulate creating alert
    setShowCreateAlert(false);
    setNewAlert({
      type: '',
      location: '',
      priceRange: '',
      condition: '',
      frequency: 'daily',
    });
  };

  // --- ACTUALIZADO: Usa destructive para high (error) ---
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-destructive bg-destructive/10 border-destructive/20';
      case 'medium':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'low':
        return 'text-success bg-success/10 border-success/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  // --- ACTUALIZADO: Usa la paleta semántica de Tailwind ---
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-success bg-success/10';
      case 'Paused':
        return 'text-warning bg-warning/10';
      case 'Inactive':
        return 'text-muted-foreground bg-muted';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  // Helper para las clases de color dinámicas de los iconos
  const getIconColorClasses = (colorName) => {
    switch (colorName) {
      case 'success':
        return 'bg-success/10 text-success';
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      case 'warning':
        return 'bg-warning/10 text-warning';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {/* --- ACTUALIZADO: Icono de Lucide y color --- */}
          <div className="p-3 bg-warning/10 rounded-lg">
            <Bell size={24} className="text-warning" />
          </div>
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground">
              Market Alerts
            </h3>
            <p className="text-sm text-muted-foreground">
              Stay informed with personalized market notifications
            </p>
          </div>
        </div>

        {/* --- ACTUALIZADO: Botón con prop 'icon' --- */}
        <Button
          variant="default"
          onClick={() => setShowCreateAlert(true)}
          icon={<Plus size={16} />}
        >
          Create Alert
        </Button>
      </div>
      {/* Tab Navigation */}
      {/* --- ACTUALIZADO: bg-muted/30 y bg-card en activo --- */}
      <div className="flex space-x-1 mb-6 bg-muted/30 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('active')}
          className={cn(
            'flex-1 py-2 px-4 rounded-md font-inter font-medium transition-all duration-200',
            activeTab === 'active'
              ? 'bg-card text-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Active Alerts ({activeAlerts?.filter((a) => a?.status === 'Active')?.length})
        </button>
        <button
          onClick={() => setActiveTab('recent')}
          className={cn(
            'flex-1 py-2 px-4 rounded-md font-inter font-medium transition-all duration-200',
            activeTab === 'recent'
              ? 'bg-card text-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Recent Alerts ({recentAlerts?.length})
        </button>
      </div>
      {/* Create Alert Modal */}
      {showCreateAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          {/* --- ACTUALIZADO: bg-card, border y shadow --- */}
          <div className="bg-card rounded-xl p-6 w-full max-w-md mx-4 shadow-luxury-lg border border-border">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-playfair font-medium text-foreground">
                Create New Alert
              </h4>
              <button
                onClick={() => setShowCreateAlert(false)}
                className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <Select
                label="Alert Type"
                options={alertTypes}
                value={newAlert?.type}
                onChange={(value) =>
                  setNewAlert((prev) => ({ ...prev, type: value }))
                }
              />

              <Select
                label="Location"
                options={locations}
                value={newAlert?.location}
                onChange={(value) =>
                  setNewAlert((prev) => ({ ...prev, location: value }))
                }
              />

              <Input
                label="Price Range"
                type="text"
                placeholder="e.g., $500K - $1M"
                value={newAlert?.priceRange}
                onChange={(e) =>
                  setNewAlert((prev) => ({
                    ...prev,
                    priceRange: e?.target?.value,
                  }))
                }
              />

              <Input
                label="Condition"
                type="text"
                placeholder="e.g., Price drop >5%"
                value={newAlert?.condition}
                onChange={(e) =>
                  setNewAlert((prev) => ({
                    ...prev,
                    condition: e?.target?.value,
                  }))
                }
              />

              <Select
                label="Frequency"
                options={frequencies}
                value={newAlert?.frequency}
                onChange={(value) =>
                  setNewAlert((prev) => ({ ...prev, frequency: value }))
                }
              />
            </div>

            <div className="flex space-x-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowCreateAlert(false)}
                fullWidth
              >
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleCreateAlert}
                fullWidth
              >
                Create Alert
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Alert Content */}
      {activeTab === 'active' && (
        <div className="space-y-4">
          {activeAlerts?.map((alert) => {
            const AlertIconComponent = alertIconMap[alert.icon];
            const iconColorClasses = getIconColorClasses(alert.color);
            return (
              <div
                key={alert?.id}
                className="border border-border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    {/* --- ACTUALIZADO: Uso de cn y Icono de Lucide --- */}
                    <div
                      className={cn('p-2 rounded-lg', iconColorClasses)}
                    >
                      {AlertIconComponent && <AlertIconComponent size={20} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-inter font-medium text-foreground">
                          {alert?.type}
                        </h5>
                        <span
                          className={cn(
                            'px-2 py-1 rounded text-xs font-inter font-medium',
                            getStatusColor(alert?.status)
                          )}
                        >
                          {alert?.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {alert?.location} • {alert?.condition}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Created: {alert?.created}</span>
                        <span>Frequency: {alert?.frequency}</span>
                        <span>Triggered: {alert?.triggered} times</span>
                      </div>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8"
                      icon={<Edit size={16} />}
                      aria-label="Edit alert"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8"
                      icon={<Pause size={16} />}
                      aria-label="Pause alert"
                    />
                    {/* --- ACTUALIZADO: Estilo destructivo --- */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8 text-destructive hover:bg-destructive/10"
                      icon={<Trash2 size={16} />}
                      aria-label="Delete alert"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {activeTab === 'recent' && (
        <div className="space-y-4">
          {recentAlerts?.map((alert) => {
            const AlertIconComponent = alertIconMap[alert.icon];
            return (
              <div
                key={alert?.id}
                // --- ACTUALIZADO: Uso de getPriorityColor y border ---
                className={cn('border rounded-lg p-4', getPriorityColor(alert?.priority))}
              >
                <div className="flex items-start space-x-3">
                  {/* --- ACTUALIZADO: Icono de Lucide --- */}
                  <div className="p-2 bg-card/50 rounded-lg">
                    {AlertIconComponent && <AlertIconComponent size={20} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h5 className="font-inter font-medium">
                        {alert?.type}
                      </h5>
                      <span className="text-xs opacity-75">
                        {alert?.timestamp}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{alert?.message}</p>
                    <div className="flex items-center space-x-1 text-xs opacity-75">
                      {/* --- ACTUALIZADO: Icono de Lucide --- */}
                      <MapPin size={12} />
                      <span>{alert?.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* --- ACTUALIZADO: Botones con size="icon" --- */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8"
                      icon={<Eye size={16} />}
                      aria-label="View property"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-8 h-8"
                      icon={<Archive size={16} />}
                      aria-label="Archive alert"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MarketAlerts;