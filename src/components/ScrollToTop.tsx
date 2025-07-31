import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef<string>();

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathname.current !== pathname) {
      // Use requestAnimationFrame for optimal performance
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;