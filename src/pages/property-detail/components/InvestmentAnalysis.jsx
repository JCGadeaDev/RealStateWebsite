import React, { useState } from 'react';
// ELIMINADO: import Icon from '../../../components/AppIcon';
// --- NUEVO: Importamos los iconos de Lucide ---
import {
  TrendingUp,
  Home,
  BarChart3,
  Euro,
  Download,
  Calculator,
  FileText,
} from 'lucide-react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { cn } from '../../../utils/cn'; // Para el uso de clases

const InvestmentAnalysis = ({ property }) => {
  // Estado inicial basado en el precio de la propiedad
  const [loanAmount, setLoanAmount] = useState(property?.price * 0.8);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(property?.price * 0.2);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    // Tasa mensual (interés / 100 / 12)
    const monthlyRate = interestRate / 100 / 12;
    // Número total de pagos (plazo en años * 12)
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      // Evita división por cero si la tasa es 0
      return principal / numPayments;
    }

    // Fórmula de la cuota hipotecaria
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return isNaN(monthlyPayment) || !isFinite(monthlyPayment)
      ? 0
      : monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  // Helper para formatear monedas
  const formatCurrency = (amount) => {
    return `€${(amount || 0).toLocaleString('es-ES', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    })}`;
  };

  const investmentMetrics = [
    {
      label: 'ROI Estimado Anual',
      value: '8.5%',
      icon: TrendingUp, // Componente Lucide
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Retorno de inversión proyectado',
    },
    {
      label: 'Rentabilidad por Alquiler',
      value: '6.2%',
      icon: Home, // Componente Lucide
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Yield bruto anual estimado',
    },
    {
      label: 'Apreciación Anual',
      value: '4.8%',
      icon: BarChart3, // Componente Lucide
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Crecimiento histórico del valor',
    },
    {
      label: 'Cash Flow Mensual',
      value: '€1,250',
      icon: Euro, // Componente Lucide
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Flujo de caja neto estimado',
    },
  ];

  const pricePerArea = property?.price / property?.area;
  // Cálculo de un precio de mercado simple para la comparación
  const avgMarketPricePerArea = 3500; // Valor de ejemplo
  const priceDiff = pricePerArea - avgMarketPricePerArea;
  const priceDiffPercent = (priceDiff / avgMarketPricePerArea) * 100;
  const isGoodDeal = priceDiffPercent < -5;

  return (
    // --- ACTUALIZADO: bg-card, border y shadow-luxury ---
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury border border-border">
      {/* Header */}
      {/* --- ACTUALIZADO: border-border --- */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-medium text-foreground mb-1">
              Análisis de Inversión
            </h3>
            <p className="text-muted-foreground">
              Calculadora financiera y métricas de rentabilidad
            </p>
          </div>
          {/* --- ACTUALIZADO: Botón con prop 'icon' (Download de Lucide) --- */}
          <Button
            variant="outline"
            icon={<Download size={16} />}
            iconPosition="left"
          >
            Descargar Reporte
          </Button>
        </div>
      </div>
      <div className="p-6 space-y-8">
        {/* Investment Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {investmentMetrics?.map((metric, index) => {
            const IconComponent = metric.icon; // Componente Lucide
            return (
              <div
                key={index}
                // --- ACTUALIZADO: bg-muted/30 y border-border ---
                className="p-4 bg-muted/30 rounded-lg border border-border"
              >
                <div className="flex items-center space-x-3 mb-2">
                  {/* --- ACTUALIZADO: Icono con color semántico --- */}
                  <div
                    className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center',
                      metric.bgColor
                    )}
                  >
                    <IconComponent size={18} className={metric?.color} />
                  </div>
                  <div className="flex-1">
                    <div className={cn('text-lg font-bold', metric?.color)}>
                      {metric?.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {metric?.label}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  {metric?.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mortgage Calculator */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="border border-border rounded-xl p-6 bg-muted/30">
          <h4 className="text-lg font-playfair font-medium text-foreground mb-4 flex items-center">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <Calculator size={20} className="mr-2 text-primary" />
            Calculadora Hipotecaria
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Input
              label={`Importe del Préstamo (${formatCurrency(loanAmount)})`}
              type="range"
              min={0}
              max={property?.price}
              step={1000}
              value={loanAmount}
              onChange={(e) => {
                const newLoan = Number(e?.target?.value);
                setLoanAmount(newLoan);
                setDownPayment(property?.price - newLoan);
              }}
            />
            <Input
              label={`Entrada (${formatCurrency(downPayment)})`}
              type="range"
              min={0}
              max={property?.price}
              step={1000}
              value={downPayment}
              onChange={(e) => {
                const newDownPayment = Number(e?.target?.value);
                setDownPayment(newDownPayment);
                setLoanAmount(property?.price - newDownPayment);
              }}
            />

            <Input
              label={`Tipo de Interés (%): ${interestRate.toFixed(2)}%`}
              type="range"
              min={1.0}
              max={10.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e?.target?.value))}
            />

            <Input
              label={`Plazo (años): ${loanTerm}`}
              type="range"
              min={5}
              max={30}
              step={1}
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e?.target?.value))}
            />
          </div>

          {/* Calculation Results */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="text-center">
              <div className="text-2xl font-playfair font-medium text-primary">
                {formatCurrency(monthlyPayment)}
              </div>
              <div className="text-sm text-muted-foreground">Cuota Mensual</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-playfair font-medium text-primary">
                {formatCurrency(totalInterest)}
              </div>
              <div className="text-sm text-muted-foreground">
                Intereses Totales
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-playfair font-medium text-primary">
                {formatCurrency(totalPayment)}
              </div>
              <div className="text-sm text-muted-foreground">Pago Total</div>
            </div>
          </div>
        </div>

        {/* Market Comparison */}
        {/* --- ACTUALIZADO: border-border --- */}
        <div className="border border-border rounded-xl p-6">
          <h4 className="text-lg font-playfair font-medium text-foreground mb-4 flex items-center">
            {/* --- ACTUALIZADO: Icono de Lucide --- */}
            <BarChart3 size={20} className="mr-2 text-primary" />
            Comparativa de Mercado
          </h4>

          <div className="space-y-4">
            {/* --- ACTUALIZADO: bg-muted/50 y border-border --- */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">
                Precio por m² (zona media)
              </span>
              <span className="font-medium text-foreground">
                {formatCurrency(avgMarketPricePerArea)} /m²
              </span>
            </div>

            {/* --- ACTUALIZADO: bg-primary/10 y border-border --- */}
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
              <span className="text-sm text-muted-foreground">
                Esta propiedad
              </span>
              <span className="font-medium text-primary">
                {formatCurrency(pricePerArea)} /m²
              </span>
            </div>

            {/* --- ACTUALIZADO: Color semántico para la diferencia --- */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">
                Diferencia vs mercado
              </span>
              <span
                className={cn(
                  'font-medium',
                  isGoodDeal ? 'text-success' : 'text-warning'
                )}
              >
                {priceDiffPercent?.toFixed(1)}% ({isGoodDeal ? 'Oportunidad' : 'Alto'})
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* --- ACTUALIZADO: Botón con prop 'icon' (FileText de Lucide) --- */}
          <Button
            variant="default"
            fullWidth
            icon={<FileText size={20} />}
          >
            Solicitar Financiación
          </Button>
          {/* --- ACTUALIZADO: Botón con prop 'icon' (Calculator de Lucide) --- */}
          <Button
            variant="outline"
            fullWidth
            icon={<Calculator size={20} />}
          >
            Análisis Detallado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;