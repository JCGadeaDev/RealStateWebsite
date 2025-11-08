import React from 'react';
import './i18n';
import AppRoutes from './Routes';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

// --- ¡ACTUALIZADO! ---
// Asumiendo que tus componentes Header/Footer compartidos
// vivirán en 'src/components/ui/'
import Header from './components/ui/Header';
import Footer from './pages/homepage/components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Header se renderiza aquí, aparecerá en todas las páginas */}
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        {/* Footer se renderiza aquí, aparecerá en todas las páginas */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
