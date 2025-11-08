import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que el pathname cambie (navegación a una nueva ruta),
    // la ventana se desplaza a la posición superior (0, 0).
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada visible.
  return null;
};

export default ScrollToTop;
