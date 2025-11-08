import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { cn } from '../../../utils/cn'; // Importamos cn

const InteractiveChart = ({ title, data, type = 'line', height = 300 }) => {
  const [timeframe, setTimeframe] = useState('6M');

  const timeframes = [
    { label: '1M', value: '1M' },
    { label: '3M', value: '3M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: 'All', value: 'All' },
  ];

  // --- ACTUALIZADO: Paleta de colores basada en las variables CSS ---
  const colors = [
    'var(--color-primary)', // Primary
    'var(--color-accent)', // Accent
    'var(--color-secondary)', // Secondary
    'var(--color-warning)', // Warning
    'var(--color-success)', // Success
  ];

  const renderChart = () => {
    // Definiciones de color y estilo fuera de JSX
    const axisColor = 'var(--color-muted-foreground)';
    const gridColor = 'var(--color-border)';
    const primaryColor = 'var(--color-primary)';
    const accentColor = 'var(--color-accent)';

    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: axisColor, fontFamily: 'Inter' }}
              axisLine={{ stroke: gridColor }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: axisColor, fontFamily: 'Inter' }}
              axisLine={{ stroke: gridColor }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-luxury-lg)',
                fontFamily: 'Inter',
              }}
            />
            {/* --- ACTUALIZADO: Color de la barra a primaryColor --- */}
            <Bar dataKey="value" fill={primaryColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        );

      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors?.[index % colors?.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-luxury-lg)',
                fontFamily: 'Inter',
              }}
            />
          </PieChart>
        );

      default:
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: axisColor, fontFamily: 'Inter' }}
              axisLine={{ stroke: gridColor }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: axisColor, fontFamily: 'Inter' }}
              axisLine={{ stroke: gridColor }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-luxury-lg)',
                fontFamily: 'Inter',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={primaryColor}
              strokeWidth={3}
              dot={{ fill: primaryColor, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: accentColor, fill: primaryColor, strokeWidth: 2 }} // Usamos accent para el borde del dot activo
            />
          </LineChart>
        );
    }
  };

  return (
    // --- ACTUALIZADO: bg-card, shadow-luxury, y border-border ---
    <div className="bg-card rounded-xl p-6 shadow-luxury border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h3 className="text-xl font-playfair font-medium text-foreground">
            {title}
          </h3>
        </div>

        {type === 'line' && (
          <div className="flex items-center space-x-2">
            {timeframes?.map((tf) => (
              <button
                key={tf?.value}
                onClick={() => setTimeframe(tf?.value)}
                className={cn(
                  'px-3 py-1 rounded-lg text-sm font-inter font-medium transition-all duration-200',
                  timeframe === tf?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {tf?.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InteractiveChart;