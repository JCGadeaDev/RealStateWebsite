import React from 'react';
import { ArrowRight, Building2, CalendarDays, FileText } from 'lucide-react';
import Button from '../../../components/ui/Button';

const mockTransactions = [
  {
    id: 1,
    propertyName: "Apartamento en Salamanca",
    type: "Compra",
    status: "En proceso",
    lastUpdate: "2023-11-08",
    nextStep: "Firma de escritura",
    nextDate: "2023-11-15"
  },
  {
    id: 2,
    propertyName: "Villa en La Moraleja",
    type: "Venta",
    status: "Pendiente",
    lastUpdate: "2023-11-07",
    nextStep: "Revisión de documentos",
    nextDate: "2023-11-12"
  }
];

const ActiveTransactions = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">
            Transacciones Activas
          </h2>
        </div>
        <Button variant="outline" size="sm">
          Ver todas <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {mockTransactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="flex flex-col space-y-4 p-4 rounded-lg border border-border bg-background"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-foreground">
                  {transaction.propertyName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {transaction.type} - {transaction.status}
                </p>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 mr-1" />
                Actualizado: {transaction.lastUpdate}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  Próximo: {transaction.nextStep}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {transaction.nextDate}
                </div>
              </div>
              <Button variant="link" size="sm">
                Ver detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTransactions;