import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { CustomOrder } from './pages/CustomOrder';
import { About } from './pages/About';

// Helper for scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App: React.FC = () => {
  return (
    <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/custom-order" element={<CustomOrder />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
};

export default App;