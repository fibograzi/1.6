import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NFTPage from './pages/NFTPage';
import TokenomicsPage from './pages/TokenomicsPage';
import SpinRewardsPage from './pages/SpinRewardsPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="App bg-dark-bg min-h-screen flex flex-col">
        <div className="digital-noise">
          <div className="grid-bg min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nft" element={<NFTPage />} />
                <Route path="/tokenomics" element={<TokenomicsPage />} />
                <Route path="/spin-rewards" element={<SpinRewardsPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
