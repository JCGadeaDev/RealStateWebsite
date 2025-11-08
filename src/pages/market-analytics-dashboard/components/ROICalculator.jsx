import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    purchasePrice: '',
    downPayment: '',
    monthlyRent: '',
    monthlyExpenses: '',
    appreciationRate: '3.5',
    holdingPeriod: '5',
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateROI = () => {
    if (!inputs.purchasePrice || !inputs.downPayment || !inputs.monthlyRent) {
      console.error('Por favor complete los campos requeridos');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const purchasePrice = parseFloat(inputs.purchasePrice) || 0;
      const downPayment = parseFloat(inputs.downPayment) || 0;
      const monthlyRent = parseFloat(inputs.monthlyRent) || 0;
      const monthlyExpenses = parseFloat(inputs.monthlyExpenses) || 0;
      const appreciationRate = parseFloat(inputs.appreciationRate) / 100 || 0;
      const holdingPeriod = parseFloat(inputs.holdingPeriod) || 0;

      const monthlyNetIncome = monthlyRent - monthlyExpenses;
      const annualNetIncome = monthlyNetIncome * 12;
      const totalNetIncome = annualNetIncome * holdingPeriod;

      const futureValue = purchasePrice * Math.pow(1 + appreciationRate, holdingPeriod);
      const totalReturn = totalNetIncome + (futureValue - purchasePrice);
      const roi = (totalReturn / downPayment) * 100;
      const cashOnCashReturn = (annualNetIncome / downPayment) * 100;

      setResults({
        monthlyNetIncome: monthlyNetIncome.toFixed(0),
        annualNetIncome: annualNetIncome.toFixed(0),
        totalReturn: totalReturn.toFixed(0),
        roi: roi.toFixed(1),
        cashOnCashReturn: cashOnCashReturn.toFixed(1),
        futureValue: futureValue.toFixed(0),
        totalAppreciation: (futureValue - purchasePrice).toFixed(0),
      });

      setIsCalculating(false);
    }, 1000);
  };

  const resetCalculator = () => {
    setInputs({
      purchasePrice: '',
      downPayment: '',
      monthlyRent: '',
      monthlyExpenses: '',
      appreciationRate: '3.5',
      holdingPeriod: '5',
    });
    setResults(null);
  };

  const formatCurrency = (amount) => {
    const num = parseInt(amount, 10);
    return isNaN(num) ? '$0' : `$${num.toLocaleString('en-US')}`;
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-accent/10 rounded-lg">
          <Calculator size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-playfair font-medium text-foreground">
            Calculadora ROI
          </h3>
          <p className="text-sm text-muted-foreground">
            Calcula tus retornos de inversión
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección de Inputs */}
        <div className="space-y-4">
          <h4 className="text-lg font-inter font-medium text-foreground mb-4">
            Detalles de la Inversión
          </h4>

          <Input
            label="Precio de Compra"
            type="number"
            required
            placeholder="500000"
            value={inputs.purchasePrice}
            onChange={(e) => handleInputChange('purchasePrice', e.target.value)}
          />

          <Input
            label="Pago Inicial"
            type="number"
            required
            placeholder="100000"
            value={inputs.downPayment}
            onChange={(e) => handleInputChange('downPayment', e.target.value)}
          />

          <Input
            label="Renta Mensual"
            type="number"
            required
            placeholder="3500"
            value={inputs.monthlyRent}
            onChange={(e) => handleInputChange('monthlyRent', e.target.value)}
          />

          <Input
            label="Gastos Mensuales (Impuestos, Seguro, HOA, etc.)"
            type="number"
            placeholder="1200"
            value={inputs.monthlyExpenses}
            onChange={(e) => handleInputChange('monthlyExpenses', e.target.value)}
          />

          <Input
            label="Tasa de Apreciación Anual (%)"
            type="number"
            placeholder="3.5"
            value={inputs.appreciationRate}
            onChange={(e) => handleInputChange('appreciationRate', e.target.value)}
          />

          <Input
            label="Período de Tenencia (Años)"
            type="number"
            placeholder="5"
            value={inputs.holdingPeriod}
            onChange={(e) => handleInputChange('holdingPeriod', e.target.value)}
          />

          <div className="flex space-x-3 pt-4">
            <Button
              variant="default"
              onClick={calculateROI}
              disabled={isCalculating}
            >
              <Calculator size={16} className="mr-2" />
              Calcular ROI
            </Button>
            <Button variant="outline" onClick={resetCalculator}>
              Reiniciar
            </Button>
          </div>
        </div>

        {/* Sección de Resultados */}
        <div className="space-y-4">
          <h4 className="text-lg font-inter font-medium text-foreground mb-4">
            Análisis de Inversión
          </h4>

          {results ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* --- ACTUALIZADO: Estilo de tarjeta --- */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">
                    Ingreso Neto Mensual
                  </div>
                  <div className="text-xl font-playfair font-medium text-foreground">
                    {formatCurrency(results.monthlyNetIncome)}
                  </div>
                </div>

                {/* --- ACTUALIZADO: Estilo de tarjeta --- */}
                <div className="bg-muted/50 rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">
                    Ingreso Neto Anual
                  </div>
                  <div className="text-xl font-playfair font-medium text-foreground">
                    {formatCurrency(results.annualNetIncome)}
                  </div>
                </div>

                {/* --- ACTUALIZADO: Estilo semántico (Success) --- */}
                <div className="bg-success/10 rounded-lg p-4 border border-success/30">
                  <div className="text-sm text-success mb-1">
                    Retorno sobre el Efectivo
                  </div>
                  <div className="text-xl font-playfair font-medium text-success">
                    {results.cashOnCashReturn}%
                  </div>
                </div>

                {/* --- ACTUALIZADO: Estilo semántico (Primary) --- */}
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
                  <div className="text-sm text-primary mb-1">ROI Total</div>
                  <div className="text-xl font-playfair font-medium text-primary">
                    {results.roi}%
                  </div>
                </div>
              </div>

              {/* Future Value */}
              <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                <div className="text-sm text-muted-foreground mb-1">
                  Valor Futuro de la Propiedad (al final del período de tenencia)
                </div>
                <div className="text-2xl font-playfair font-medium text-foreground">
                  {formatCurrency(results.futureValue)}
                </div>
                <div className="text-sm text-accent mt-1">
                  Apreciación Total: {formatCurrency(results.totalAppreciation)}
                </div>
              </div>

              {/* Total Return */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">
                  Retorno Total (Flujo de Caja + Apreciación)
                </div>
                <div className="text-3xl font-playfair font-medium text-primary">
                  {formatCurrency(results.totalReturn)}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-muted/30 rounded-lg p-6 border border-border">
              <div className="text-center">
                {/* --- ACTUALIZADO: Icono de Lucide --- */}
                <Calculator
                  size={48}
                  className="mx-auto text-muted-foreground mb-4"
                />
                <p className="text-muted-foreground">
                  Ingresa los detalles de la inversión para ver el análisis
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;