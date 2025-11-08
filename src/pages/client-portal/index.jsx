import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DashboardStats from './components/DashboardStats';
import RecentActivity from './components/RecentActivity';
import SavedProperties from './components/SavedProperties';
import ActiveTransactions from './components/ActiveTransactions';
import DocumentCenter from './components/DocumentCenter';
import MessageCenter from './components/MessageCenter';
import UpcomingAppointments from './components/UpcomingAppointments';

const ClientPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const navigationItems = [
  { id: 'dashboard', name: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'properties', name: 'My Properties', icon: 'Home' },
  { id: 'transactions', name: 'Transactions', icon: 'FileText' },
  { id: 'documents', name: 'Documents', icon: 'FolderOpen' },
  { id: 'messages', name: 'Messages', icon: 'MessageCircle' },
  { id: 'appointments', name: 'Appointments', icon: 'Calendar' }];


  const userProfile = {
    name: "Alexandra Martínez",
    email: "alexandra.martinez@email.com",
    memberSince: "January 2024",
    avatar: "https://images.unsplash.com/photo-1662104935703-b4e193c3a852",
    avatarAlt: "Professional woman with dark hair in business attire smiling confidently",
    accountType: "Premium Client",
    properties: 12,
    activeTransactions: 2
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <UpcomingAppointments />
            </div>
          </div>);

      case 'properties':
        return <SavedProperties />;
      case 'transactions':
        return <ActiveTransactions />;
      case 'documents':
        return <DocumentCenter />;
      case 'messages':
        return <MessageCenter />;
      case 'appointments':
        return <UpcomingAppointments />;
      default:
        return (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RecentActivity />
              <UpcomingAppointments />
            </div>
          </div>);

    }
  };

  return (
    <>
      <Helmet>
        <title>Client Portal - RealEstate Pro</title>
        <meta name="description" content="Manage your real estate portfolio, track transactions, and communicate with agents through your personalized client portal." />
        <meta name="keywords" content="client portal, real estate management, property tracking, transactions, documents" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="flex">
          {/* Sidebar */}
          <div className="w-80 bg-card border-r luxury-shadow-lg h-screen sticky top-16 overflow-y-auto">
            {/* User Profile Section */}
            <div className="p-6 border-b">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={userProfile?.avatar}
                    alt={userProfile?.avatarAlt}
                    className="w-full h-full object-cover" />

                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-playfair font-medium text-foreground">
                    {userProfile?.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {userProfile?.accountType}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Member since {userProfile?.memberSince}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-lg font-playfair font-medium text-primary">
                    {userProfile?.properties}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Properties
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-lg font-playfair font-medium text-primary">
                    {userProfile?.activeTransactions}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Active Deals
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4">
              <div className="space-y-2">
                {navigationItems?.map((item) =>
                <button
                  key={item?.id}
                  onClick={() => setActiveSection(item?.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                  activeSection === item?.id ?
                  'bg-primary text-white shadow-sm' :
                  'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`
                  }>

                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </button>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <Button variant="outline" fullWidth className="mb-3">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Account Settings
                </Button>
                <Button variant="outline" fullWidth>
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Help & Support
                </Button>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-playfair font-medium text-foreground mb-2">
                      {navigationItems?.find((item) => item?.id === activeSection)?.name || 'Dashboard'}
                    </h1>
                    <p className="text-muted-foreground">
                      Welcome back, {userProfile?.name?.split(' ')?.[0]}! Here's what's happening with your properties.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-2" />
                      Export Data
                    </Button>
                    <Button variant="default" size="sm">
                      <Icon name="Plus" size={16} className="mr-2" />
                      New Search
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>);

};

export default ClientPortal;