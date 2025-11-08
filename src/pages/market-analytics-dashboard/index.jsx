import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import MarketOverview from './components/MarketOverview';
import PriceAnalysis from './components/PriceAnalysis';
import ROICalculator from './components/ROICalculator';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import MarketTrends from './components/MarketTrends';

const MarketAnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Análisis de Mercado | RealEstate Pro</title>
      </Helmet>

      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-playfair font-medium text-primary mb-2">
            Panel de Análisis de Mercado
          </h1>
          <p className="text-lg text-muted-foreground">
            Análisis detallado del mercado inmobiliario español
          </p>
        </div>

        <div className="grid gap-8">
          <MarketOverview />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PriceAnalysis />
            <MarketTrends />
          </div>

          <ROICalculator />
          
          <InvestmentOpportunities />
        </div>
      </main>
    </div>
  );
};

export default MarketAnalyticsDashboard;