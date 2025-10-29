import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Enhanced ScrollToTop Component
 * 
 * Features:
 * - Instant scroll to top on route change
 * - Restores scroll position for browser back/forward
 * - Smooth scroll option
 * - Configurable delay
 */
const ScrollToTop = ({ 
  smooth = false,        // Enable smooth scrolling
  delay = 0,             // Delay in ms before scrolling
  restoreOnBack = false  // Restore scroll position on browser back
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if this is a browser back/forward navigation
    const isBackNavigation = window.history.state?.idx !== undefined;

    if (isBackNavigation && restoreOnBack) {
      // Don't scroll to top on back navigation
      return;
    }

    const scrollToTop = () => {
      if (smooth) {
        // Smooth scroll to top
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        // Instant scroll to top
        window.scrollTo(0, 0);
      }
    };

    if (delay > 0) {
      // Scroll after delay
      const timer = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timer);
    } else {
      // Scroll immediately
      scrollToTop();
    }
  }, [pathname, smooth, delay, restoreOnBack]);

  return null;
};

export default ScrollToTop;