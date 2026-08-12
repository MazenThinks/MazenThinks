import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';

function App() {
    const [pageReady, setPageReady] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setPageReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <ScrollProgress />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main
                    className={`flex-grow pt-16 sm:pt-[4.25rem] transition-[opacity,transform] duration-500 ease-out ${
                        pageReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
