import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { year: '2018', rentYield: 4.2, priceGrowth: 3.5 },
  { year: '2019', rentYield: 4.5, priceGrowth: 4.2 },
  { year: '2020', rentYield: 4.3, priceGrowth: 2.8 },
  { year: '2021', rentYield: 4.8, priceGrowth: 5.5 },
  { year: '2022', rentYield: 5.1, priceGrowth: 6.2 },
  { year: '2023', rentYield: 4.9, priceGrowth: 5.8 }
];

const MarketTrends = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Tendencias del Mercado</h3>
          <p className="text-sm text-muted-foreground">
            Evolución histórica de rentabilidades
          </p>
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="year"
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#64748b', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                background: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value}%`]}
            />
            <Line 
              type="monotone" 
              dataKey="rentYield" 
              stroke="#6366f1" 
              strokeWidth={2}
              name="Rentabilidad Alquiler"
            />
            <Line 
              type="monotone" 
              dataKey="priceGrowth" 
              stroke="#22c55e" 
              strokeWidth={2}
              name="Revalorización"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground mb-1">
            Rentabilidad media alquiler
          </div>
          <div className="text-lg font-semibold text-primary">
            4.9%
          </div>
        </div>
        <div className="bg-background rounded-lg p-4 border border-border">
          <div className="text-sm text-muted-foreground mb-1">
            Revalorización anual media
          </div>
          <div className="text-lg font-semibold text-green-500">
            5.8%
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;