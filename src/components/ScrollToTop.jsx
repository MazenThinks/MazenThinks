import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top instantly without smooth behavior to avoid conflicts with animations
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
