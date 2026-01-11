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

    return (
        <Router>
            <ThemeProvider>
                <ToastProvider>
                    <ScrollToTop />
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
