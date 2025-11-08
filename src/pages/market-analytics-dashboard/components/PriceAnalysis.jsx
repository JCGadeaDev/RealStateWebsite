import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Euro, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { distrito: 'Salamanca', precio: 6500 },
  { distrito: 'Chamberí', precio: 5800 },
  { distrito: 'Retiro', precio: 5200 },
  { distrito: 'Chamartín', precio: 4900 },
  { distrito: 'Centro', precio: 4700 }
];

const comparisons = [
  {
    label: 'vs. Año anterior',
    value: '+8.5%',
    isPositive: true
  },
  {
    label: 'vs. Media nacional',
    value: '+45.2%',
    isPositive: true
  }
];

const PriceAnalysis = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Euro className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Análisis de Precios</h3>
          <p className="text-sm text-muted-foreground">
            Precio por m² por distrito
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <XAxis type="number" />
              <YAxis 
                dataKey="distrito" 
                type="category" 
                scale="band" 
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => [`€${value}/m²`, 'Precio']}
              />
              <Bar 
                dataKey="precio" 
                fill="#6366f1"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {comparisons.map((comp, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-4 border border-border"
            >
              <div className="text-sm text-muted-foreground mb-1">
                {comp.label}
              </div>
              <div className="flex items-center">
                <span className={`text-lg font-semibold ${
                  comp.isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {comp.value}
                </span>
                {comp.isPositive ? 
                  <ArrowUpRight className="h-4 w-4 ml-1 text-green-500" /> : 
                  <ArrowDownRight className="h-4 w-4 ml-1 text-red-500" />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceAnalysis;