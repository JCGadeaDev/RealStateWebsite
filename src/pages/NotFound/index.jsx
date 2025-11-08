import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react'; // <-- ACTUALIZADO: Importamos desde lucide-react
import Button from '../../components/ui/Button' ; 
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Usamos tu 'text-primary' y la fuente 'font-playfair' */}
            <h1 className="text-9xl font-playfair font-bold text-primary opacity-20">
              404
            </h1>
          </div>
        </div>

        {/* --- ACTUALIZADO ---
          Cambiado 'text-onBackground' a 'text-foreground'
          para que coincida con tu nuevo tailwind.config.js
        */}
        <h2 className="text-2xl font-playfair font-medium text-foreground mb-2">
          Page Not Found
        </h2>
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist. Let's get you back!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            // --- ACTUALIZADO ---
            // Reemplazado <Icon> por el componente de lucide-react
            icon={<ArrowLeft className="h-4 w-4" />}
            iconPosition="left"
            onClick={() => window.history?.back()}
          >
            Go Back
          </Button>

          <Button
            variant="outline"
            // --- ACTUALIZADO ---
            // Reemplazado <Icon> por el componente de lucide-react
            icon={<Home className="h-4 w-4" />}
            iconPosition="left"
            onClick={handleGoHome}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;