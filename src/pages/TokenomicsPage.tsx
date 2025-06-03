import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TokenomicsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'MINIGAME | Tokenomics';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="neon-green">Tokenomics</span>
            </h1>
            <div className="w-24 h-1 bg-neon-purple mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the economic model behind MINIGAME's dual token system.
            </p>
          </motion.div>
        </section>

        {/* Token Overview Section */}
        <section className="mb-20">
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
                $MINIGAME is the primary tradable token used for game entry, boosts, NFT purchases, and future governance.
              </p>
              
              <h4 className="text-lg font-orbitron font-semibold mb-4 text-white">Token Utility:</h4>
              <ul className="space-y-3 mb-6">
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
              
              <div className="bg-darker-bg rounded-lg p-4">
                <h4 className="text-lg font-orbitron font-semibold mb-2 text-white">Token Details:</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Total Supply:</span>
                    <span className="text-neon-purple font-medium">1,000,000,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Network:</span>
                    <span className="text-white">Solana</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Launch:</span>
                    <span className="text-white">Pump.fun with instant liquidity on PumpSwap</span>
                  </li>
                </ul>
              </div>
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
                $ORBYS is the in-game reward currency earned by playing. It can be used in loot wheels, power-ups, and NFT upgrades.
              </p>
              
              <h4 className="text-lg font-orbitron font-semibold mb-4 text-white">Token Utility:</h4>
              <ul className="space-y-3 mb-6">
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
              
              <div className="bg-darker-bg rounded-lg p-4">
                <h4 className="text-lg font-orbitron font-semibold mb-2 text-white">Earning Mechanism:</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Earning Method:</span>
                    <span className="text-white">PvP gameplay</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Distribution:</span>
                    <span className="text-white">Automatic via smart contracts</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Claim Method:</span>
                    <span className="text-white">$ORBYS claim button</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Token Allocation Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-purple">Token</span> <span className="text-white">Allocation</span>
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </motion.div>

          <motion.div 
            className="cyberpunk-card p-8 rounded-lg mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-neon-purple border-opacity-30">
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-purple">Purpose</th>
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-green">% Allocation</th>
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-white">Token Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">Public Launch (Pump.fun)</td>
                    <td className="py-4 px-6 text-neon-green">85%</td>
                    <td className="py-4 px-6">850,000,000</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">Development</td>
                    <td className="py-4 px-6 text-neon-green">5%</td>
                    <td className="py-4 px-6">50,000,000</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">Marketing</td>
                    <td className="py-4 px-6 text-neon-green">5%</td>
                    <td className="py-4 px-6">50,000,000</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">Team</td>
                    <td className="py-4 px-6 text-neon-green">5%</td>
                    <td className="py-4 px-6">50,000,000</td>
                  </tr>
                  <tr className="border-b border-gray-800 font-bold">
                    <td className="py-4 px-6">TOTAL</td>
                    <td className="py-4 px-6 text-neon-green">100%</td>
                    <td className="py-4 px-6">1,000,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-300 mt-6 text-center italic">
              Launch via Pump.fun with instant liquidity on PumpSwap. No Raydium migration needed.
            </p>
          </motion.div>

          {/* Token Allocation Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-6 text-center text-neon-purple">Token Distribution</h3>
              
              <div className="relative aspect-square">
                {/* This would be a chart in a real implementation */}
                <div className="absolute inset-0 rounded-full border-8 border-neon-purple opacity-20"></div>
                
                {/* Public Launch Segment - 85% */}
                <div className="absolute inset-0 bg-neon-purple opacity-60" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)' }}></div>
                
                {/* Development Segment - 5% */}
                <div className="absolute inset-0 bg-neon-green opacity-60" style={{ clipPath: 'polygon(50% 50%, 50% 0, 68% 0, 50% 0)' }}></div>
                
                {/* Marketing Segment - 5% */}
                <div className="absolute inset-0 bg-cyberpunk-blue opacity-60" style={{ clipPath: 'polygon(50% 50%, 68% 0, 86% 0, 68% 0)' }}></div>
                
                {/* Team Segment - 5% */}
                <div className="absolute inset-0 bg-cyberpunk-pink opacity-60" style={{ clipPath: 'polygon(50% 50%, 86% 0, 100% 0, 86% 0)' }}></div>
                
                {/* Center Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-darker-bg border-4 border-neon-purple flex items-center justify-center">
                  <span className="text-neon-purple font-orbitron font-bold">$MINIGAME</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-neon-purple mr-2"></div>
                  <span>Public Launch (85%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-neon-green mr-2"></div>
                  <span>Development (5%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyberpunk-blue mr-2"></div>
                  <span>Marketing (5%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyberpunk-pink mr-2"></div>
                  <span>Team (5%)</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-orbitron font-bold mb-6 text-center text-neon-green">Boost Multiplier System</h3>
              
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neon-green border-opacity-30">
                    <th className="py-3 px-4 text-left text-neon-green">Held $MINIGAME</th>
                    <th className="py-3 px-4 text-right text-neon-green">Reward Multiplier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">0 — 99,999</td>
                    <td className="py-3 px-4 text-right text-neon-green">0.1×</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">100,000 — 499,999</td>
                    <td className="py-3 px-4 text-right text-neon-green">2×</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">500,000 — 1,499,999</td>
                    <td className="py-3 px-4 text-right text-neon-green">3×</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">1.5M — 4.9M</td>
                    <td className="py-3 px-4 text-right text-neon-green">4×</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">5M — 24.9M</td>
                    <td className="py-3 px-4 text-right text-neon-green">5×</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">≥ 25M</td>
                    <td className="py-3 px-4 text-right text-neon-green">8×</td>
                  </tr>
                </tbody>
              </table>
              
              <p className="text-gray-300 mt-6 text-center italic">
                Wallet-based balance check will auto-apply the multiplier after every match.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Launch Timeline Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="text-white">Launch</span> <span className="neon-green">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-purple bg-opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24">
              {/* Phase 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center z-10">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                
                <div className="cyberpunk-card p-6 rounded-lg max-w-lg mx-auto">
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-neon-purple">Initial Launch</h3>
                  <p className="text-gray-300 mb-4">
                    Public launch on Pump.fun with instant liquidity on PumpSwap. 85% of total supply available.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-neon-green">Upcoming</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center z-10">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                
                <div className="cyberpunk-card p-6 rounded-lg max-w-lg mx-auto">
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-neon-green">NFT Collection Release</h3>
                  <p className="text-gray-300 mb-4">
                    Launch of the initial NFT collection with in-game abilities and special powers.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-neon-green">Upcoming</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 3 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center z-10">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                
                <div className="cyberpunk-card p-6 rounded-lg max-w-lg mx-auto">
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-neon-purple">Game Launch</h3>
                  <p className="text-gray-300 mb-4">
                    Full release of the MINIGAME platform with all three game modes and reward system.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-neon-green">Upcoming</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Phase 4 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-green flex items-center justify-center z-10">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                
                <div className="cyberpunk-card p-6 rounded-lg max-w-lg mx-auto">
                  <h3 className="text-xl font-orbitron font-bold mb-2 text-neon-green">Governance Implementation</h3>
                  <p className="text-gray-300 mb-4">
                    Introduction of governance features allowing $MINIGAME holders to vote on future developments.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-neon-green">Upcoming</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-darker-bg rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <div className="scanner-line"></div>
          
          <div className="relative z-10 text-center px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-orbitron font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="neon-purple">Ready to</span> <span className="text-white">Join?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Be part of the MINIGAME ecosystem and start earning rewards today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="cyberpunk-button text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy $MINIGAME
              </motion.button>
              
              <motion.button 
                className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Whitepaper
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TokenomicsPage;
