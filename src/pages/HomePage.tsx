import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'MINIGAME | Play. Earn. Dominate.';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        {/* Animated Scanner Line */}
        <div className="scanner-line"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="glitch-effect neon-purple" data-text="Play.">Play.</span>{' '}
              <span className="glitch-effect neon-green" data-text="Earn.">Earn.</span>{' '}
              <span className="glitch-effect text-white" data-text="Dominate.">Dominate.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-rajdhani text-gray-300 mb-10 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join the ultimate Web3 PvP Arena where battles win you real crypto.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="cyberpunk-button text-lg px-8 py-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect Wallet & Play
              </motion.button>
              
              <motion.button 
                className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-lg px-8 py-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Whitepaper
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Animated Floating Elements */}
        <motion.div 
          className="absolute -right-20 top-1/4 w-64 h-64 bg-neon-purple rounded-full filter blur-3xl opacity-20"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -left-20 bottom-1/4 w-80 h-80 bg-neon-green rounded-full filter blur-3xl opacity-20"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* Token Overview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="neon-purple">Token</span> <span className="text-white">Overview</span>
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* MINIGAME Token */}
            <motion.div 
              className="cyberpunk-card p-8 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-neon-purple">$</span>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-neon-purple">MINIGAME</h3>
                  <p className="text-gray-400">Main Token</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Tradable token used for game entry, boosts, NFT purchases, and future governance.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Game entry fees</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Reward multipliers</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>NFT purchases</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Future governance</span>
                </li>
              </ul>
            </motion.div>
            
            {/* ORBYS Token */}
            <motion.div 
              className="cyberpunk-card p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-neon-green bg-opacity-30 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-neon-green">$</span>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold text-neon-green">ORBYS</h3>
                  <p className="text-gray-400">Reward Token</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                In-game reward currency earned by playing. Can be used in loot wheels, power-ups, and NFT upgrades.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Spin the loot wheel</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Purchase power-ups</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Buy custom avatars</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>NFT upgrades</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-darker-bg relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-white">How It</span> <span className="neon-green">Works</span>
            </h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast-Paced PvP Battles */}
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Fast-Paced PvP Battles</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Play PvP matches in one of our three 3D cyberpunk arenas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>3 custom games, inspired by Agar.io, Slither.io, and Paper.io mechanics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Compete live for on-chain rewards</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Game Engine */}
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-green bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-green">Game Engine</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-green mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Built in Unity 3D</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-green mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>WebGL Export: fully browser-based</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-green mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Wallet integration: Solana Unity SDK (Phantom supported)</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Wallet & Rewards */}
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Wallet & Rewards</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Secure login via Phantom wallet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Earn $ORBYS tokens directly into your wallet after every match</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Use $ORBYS to spin the loot wheel or buy custom avatars</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NFT Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="neon-green">NFT</span> <span className="text-white">Characters</span>
            </h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Meme-inspired NFT avatars with special powers. Each NFT unlocks unique in-game abilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* NFT Card 1 */}
            <motion.div 
              className="cyberpunk-card p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(184, 41, 247, 0.8)' }}
            >
              <div className="bg-gradient-to-br from-neon-purple to-neon-green bg-opacity-20 rounded-lg p-1">
                <div className="bg-darker-bg rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="text-6xl">🐱</div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-orbitron font-bold text-neon-purple">Cyber Cat</h3>
                <p className="text-sm text-gray-400">+0.2 Speed Boost</p>
              </div>
            </motion.div>
            
            {/* NFT Card 2 */}
            <motion.div 
              className="cyberpunk-card p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(184, 41, 247, 0.8)' }}
            >
              <div className="bg-gradient-to-br from-neon-purple to-neon-green bg-opacity-20 rounded-lg p-1">
                <div className="bg-darker-bg rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="text-6xl">🐶</div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-orbitron font-bold text-neon-green">Doge Warrior</h3>
                <p className="text-sm text-gray-400">+15% $ORBYS Bonus</p>
              </div>
            </motion.div>
            
            {/* NFT Card 3 */}
            <motion.div 
              className="cyberpunk-card p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(184, 41, 247, 0.8)' }}
            >
              <div className="bg-gradient-to-br from-neon-purple to-neon-green bg-opacity-20 rounded-lg p-1">
                <div className="bg-darker-bg rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="text-6xl">🦊</div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-orbitron font-bold text-neon-purple">Fox Ninja</h3>
                <p className="text-sm text-gray-400">+10% Attack Power</p>
              </div>
            </motion.div>
            
            {/* NFT Card 4 */}
            <motion.div 
              className="cyberpunk-card p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(184, 41, 247, 0.8)' }}
            >
              <div className="bg-gradient-to-br from-neon-purple to-neon-green bg-opacity-20 rounded-lg p-1">
                <div className="bg-darker-bg rounded-lg p-4 aspect-square flex items-center justify-center">
                  <div className="text-6xl">🐸</div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-orbitron font-bold text-neon-green">Pepe Hacker</h3>
                <p className="text-sm text-gray-400">+5% Size Increase</p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/nft">
              <motion.button 
                className="cyberpunk-button text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All NFTs
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Boost Multiplier System */}
      <section className="py-20 bg-darker-bg relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-4">
              <span className="text-white">Earn More With</span> <span className="neon-purple">$MINIGAME</span>
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              The more $MINIGAME you hold in your wallet, the more $ORBYS you earn.
            </p>
          </motion.div>
          
          <motion.div 
            className="cyberpunk-card p-6 rounded-lg overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b border-neon-purple border-opacity-30">
                  <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-purple">Held $MINIGAME</th>
                  <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-green">Reward Multiplier</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">0 — 99,999</td>
                  <td className="py-4 px-6 text-neon-green">0.1×</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">100,000 — 499,999</td>
                  <td className="py-4 px-6 text-neon-green">2×</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">500,000 — 1,499,999</td>
                  <td className="py-4 px-6 text-neon-green">3×</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">1.5M — 4.9M</td>
                  <td className="py-4 px-6 text-neon-green">4×</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">5M — 24.9M</td>
                  <td className="py-4 px-6 text-neon-green">5×</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">≥ 25M</td>
                  <td className="py-4 px-6 text-neon-green">8×</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6 italic">
              Wallet-based balance check will auto-apply the multiplier after every match.
            </p>
            <Link to="/tokenomics">
              <motion.button 
                className="cyberpunk-button text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Tokenomics
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        
        {/* Animated Elements */}
        <motion.div 
          className="absolute -right-40 top-1/3 w-80 h-80 bg-neon-purple rounded-full filter blur-3xl opacity-10"
          animate={{ 
            x: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -left-40 bottom-1/3 w-96 h-96 bg-neon-green rounded-full filter blur-3xl opacity-10"
          animate={{ 
            x: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="neon-purple">Ready to</span> <span className="neon-green">Play & Earn?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the ultimate Web3 gaming experience today and start earning real crypto rewards.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="cyberpunk-button text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect Wallet & Play
              </motion.button>
              
              <motion.button 
                className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy $MINIGAME
              </motion.button>
              
              <motion.button 
                className="cyberpunk-button bg-neon-green bg-opacity-20 border-neon-green text-neon-green text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mint NFT
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
