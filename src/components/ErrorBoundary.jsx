import React from "react";
import { ArrowLeft, Frown } from 'lucide-react';

/**
 * Componente de React Class para capturar errores de JavaScript en el árbol de componentes.
 * Muestra una UI de fallback si un error es detectado durante el renderizado.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Inicializa el estado para rastrear si ha ocurrido un error
    this.state = { hasError: false };
  }

  /**
   * Actualiza el estado para que la próxima renderización muestre la UI de fallback.
   */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /**
   * Puedes usar componentDidCatch para registrar la información del error.
   */
  componentDidCatch(error, errorInfo) {
    // Estas líneas son específicas del entorno DhiWise y pueden ser ignoradas/eliminadas si no se usan
    error.__ErrorBoundary = true;
    window.__COMPONENT_ERROR__?.(error, errorInfo);
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state?.hasError) {
      // UI de fallback estilizada con la nueva paleta pastel (fondo claro, textos de foreground)
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center p-8 max-w-md bg-card rounded-xl shadow-luxury-lg border border-border">
            <div className="flex justify-center items-center mb-4">
              {/* Icono de Lucide para representar un error */}
              <Frown size={48} className="text-destructive stroke-1" />
            </div>
            <div className="flex flex-col gap-1 text-center">
              <h1 className="text-3xl font-playfair font-medium text-foreground mb-2">
                ¡Oops! Algo salió mal
              </h1>
              <p className="text-muted-foreground font-inter text-base mx-auto mb-4">
                Encontramos un error inesperado. Por favor, intenta regresar a la página de inicio o inténtalo de nuevo.
              </p>
            </div>
            <div className="flex justify-center items-center mt-6">
              <button
                onClick={() => {
                  // Redirige a la página de inicio
                  window.location.href = "/";
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors duration-200 shadow-md"
              >
                {/* Icono de Lucide para la acción */}
                <ArrowLeft size={18} />
                Volver al Inicio
              </button>
            </div>
          </div >
        </div >
      );
    }

    // Si no hay error, renderiza los componentes hijos normales
    return this.props?.children;
  }
}

export default ErrorBoundary;
