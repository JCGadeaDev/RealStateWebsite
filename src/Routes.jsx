import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importar todas tus páginas
import Homepage from './pages/homepage';
import ClientPortal from './pages/client-portal';
import MarketAnalyticsDashboard from './pages/market-analytics-dashboard';
import PropertyDetail from './pages/property-detail';
import AgentProfiles from './pages/agent-profiles';
import PropertyListings from './pages/property-listings';
import NotFound from './pages/NotFound';

// Lo renombramos a "AppRoutes" para evitar confusión
const AppRoutes = () => {
  return (
    // Ya no se necesita <BrowserRouter>, <ErrorBoundary>, o <ScrollToTop> aquí
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/client-portal" element={<ClientPortal />} />
      <Route
        path="/market-analytics-dashboard"
        element={<MarketAnalyticsDashboard />}
      />
      <Route path="/property-detail" element={<PropertyDetail />} />
      <Route path="/agent-profiles" element={<AgentProfiles />} />
      <Route path="/property-listings" element={<PropertyListings />} />

      {/* Nota: La ruta "/homepage" es redundante porque ya tienes
        la ruta "/", a menos que la quieras por alguna razón específica.
      */}
      <Route path="/homepage" element={<Homepage />} />

      {/* La ruta "catch-all" para 404 siempre va al final */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;