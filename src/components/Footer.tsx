import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker-bg py-12 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Scanner Line Effect */}
      <div className="scanner-line"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-4">
              <div className="text-3xl font-orbitron font-bold">
                <span className="neon-purple">MINI</span>
                <span className="neon-green">GAME</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              The ultimate Web3 PvP Arena where battles win you real crypto.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://t.me/MINIGAME_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.336 1.301-.574 1.732-.238.43-.545.729-.88.729-.336 0-1.055-.244-1.633-.478-.863-.41-1.725-.82-2.588-1.23-.575-.244-1.633-.82-1.633-1.23 0-.41.575-.575 1.15-1.149.287-.287 1.633-1.516 1.633-1.516s2.87-2.665 2.988-2.97c.029-.077-.033-.115-.094-.077-.041.024-1.524.973-4.45 2.847-1.633.82-2.296 1.15-2.87 1.15-.575 0-1.633-.244-2.296-.41-.663-.167-1.15-.244-1.15-.575 0-.167.287-.41.862-.575.575-.167 1.438-.41 1.438-.41s3.266-.82 6.533-1.639c.575-.167 1.15-.244 1.725-.41.575-.168 1.15-.244 1.725-.244.574 0 1.15.244 1.15.82 0 .167 0 .41-.168.82z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://x.com/MINIGAME_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-neon-green transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neon-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/nft" className="text-gray-300 hover:text-neon-green transition-colors">NFT Marketplace</Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-gray-300 hover:text-neon-green transition-colors">Tokenomics</Link>
              </li>
              <li>
                <Link to="/spin-rewards" className="text-gray-300 hover:text-neon-green transition-colors">Spin & Rewards</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-neon-green transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-neon-green mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-neon-green transition-colors">Whitepaper</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-neon-green transition-colors">Wallet Help</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-neon-green transition-colors">Reward System</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-neon-green transition-colors">Solana Network</Link>
              </li>
            </ul>
          </div>
          
          {/* Call to Action */}
          <div className="col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-4">Join the Battle</h3>
            <div className="space-y-4">
              <motion.button 
                className="cyberpunk-button w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect Wallet
              </motion.button>
              <motion.button 
                className="cyberpunk-button w-full bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy $MINIGAME
              </motion.button>
              <motion.button 
                className="cyberpunk-button w-full bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mint NFT
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MINIGAME. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/faq" className="text-gray-400 text-sm hover:text-neon-green transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-gray-400 text-sm hover:text-neon-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
