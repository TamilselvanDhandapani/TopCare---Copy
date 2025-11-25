// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to top whenever route changes
    window.scrollTo({
      top: 0,
      
      behavior: "smooth", // use "smooth" if you want nice animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
