import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastProvider } from './contexts/ToastContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            if (!e.relatedTarget?.closest('a, button, [role="button"]')) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <Router>
            <ThemeProvider>
                <ToastProvider>
                    <ScrollToTop />
                    {/* Subtle Cursor Layer */}
                    <div
                        className="custom-cursor"
                        style={{
                            left: `${cursorPos.x}px`,
                            top: `${cursorPos.y}px`,
                            transform: 'translate(-50%, -50%)',
                            opacity: isHovering ? 1 : 0,
                        }}
                    />
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/work" element={<Work />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </ToastProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
