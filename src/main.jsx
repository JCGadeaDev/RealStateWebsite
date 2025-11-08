import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importar el Provider
import { store } from './app/store'; // Importar la store configurada
import App from './App.jsx';
import './styles/tailwind.css'; 

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    {/* Envolvemos toda la aplicación con el Provider de Redux. 
      Esto hace que la 'store' (el estado global) sea accesible para todos los componentes.
    */}
    <Provider store={store}>
      {/* BrowserRouter DEBE estar dentro del Provider (o del App) */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
