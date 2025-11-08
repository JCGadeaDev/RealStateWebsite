import React from 'react';
import { TrendingUp, Users, Home, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// Datos de ejemplo para el gráfico
const data = [
  { month: 'Ene', value: 2500 },
  { month: 'Feb', value: 2700 },
  { month: 'Mar', value: 2600 },
  { month: 'Abr', value: 2900 },
  { month: 'May', value: 3100 },
  { month: 'Jun', value: 3000 }
];

// Estadísticas para las tarjetas
const stats = [
  {
    title: 'Precio Medio',
    value: '€325,000',
    change: '+5.3%',
    isPositive: true,
    icon: TrendingUp
  },
  {
    title: 'Demanda',
    value: '15,234',
    change: '+12.8%',
    isPositive: true,
    icon: Users
  },
  {
    title: 'Oferta',
    value: '8,742',
    change: '-3.2%',
    isPositive: false,
    icon: Home
  }
];

const MarketOverview = () => {
  return (
    <div className="grid gap-6">
      {/* Sección de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-card p-6 rounded-xl border border-border"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className={`flex items-center text-sm ${
                stat.isPositive ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
                {stat.isPositive ? 
                  <ArrowUpRight className="h-4 w-4 ml-1" /> : 
                  <ArrowDownRight className="h-4 w-4 ml-1" />
                }
              </span>
            </div>
            <h3 className="text-2xl font-semibold mt-4">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Sección del gráfico */}
      <div className="bg-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Tendencia de Precios</h3>
            <p className="text-sm text-muted-foreground">
              Últimos 6 meses
            </p>
          </div>
        </div>
        
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  background: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value}€/m²`, 'Precio']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;