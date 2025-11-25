// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jump to top whenever route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // use "smooth" if you want nice animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
