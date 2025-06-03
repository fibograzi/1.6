import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'MINIGAME | FAQ';
  }, []);

  // FAQ items with expanded state
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(item => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const faqItems = [
    {
      question: "What is MINIGAME?",
      answer: "MINIGAME is a Web3 PvP gaming platform where players can compete in fast-paced battles inspired by Agar.io, Slither.io, and Paper.io mechanics. Players earn real crypto rewards ($ORBYS) by playing and can enhance their gameplay with NFTs that provide special abilities."
    },
    {
      question: "How do I connect my wallet?",
      answer: "MINIGAME supports Phantom wallet on the Solana blockchain. To connect, click the 'Connect Wallet' button in the top right corner of the website, select Phantom from the available options, and approve the connection request in your wallet. Make sure you have the Phantom wallet extension installed in your browser."
    },
    {
      question: "What are the two tokens used in MINIGAME?",
      answer: "$MINIGAME is the primary tradable token used for game entry, boosts, NFT purchases, and future governance. $ORBYS is the in-game reward currency earned by playing, which can be used for the loot wheel, power-ups, and NFT upgrades."
    },
    {
      question: "How do I earn rewards?",
      answer: "You earn $ORBYS tokens by playing PvP matches in the game. Every game action (e.g., kill, top 3 placement) triggers automatic $ORBYS rewards via smart contracts. The more $MINIGAME tokens you hold in your wallet, the higher your reward multiplier will be, up to 8x for holders with 25M+ tokens."
    },
    {
      question: "What can I do with $ORBYS tokens?",
      answer: "You can use $ORBYS tokens to spin the loot wheel for a chance to win NFTs, bonus $SOLANA, or bonus $MINIGAME tokens. You can also use $ORBYS to buy custom avatars or upgrade your existing NFTs."
    },
    {
      question: "What are NFT characters?",
      answer: "NFT characters are meme-inspired avatars with special powers that give you advantages in the game. Each NFT unlocks unique in-game abilities such as increased speed, attack power, or $ORBYS earning bonuses. They are verified in real-time using Solana wallet NFT lookup via Metaplex."
    },
    {
      question: "How does the loot wheel work?",
      answer: "The loot wheel is a chance-based reward system where you can spend your $ORBYS tokens for a chance to win valuable prizes. Each spin costs 100 $ORBYS and can reward you with NFTs, bonus $SOLANA, or bonus $MINIGAME tokens. The wheel uses WebGL spin animation for a fair and transparent experience."
    },
    {
      question: "What games can I play on MINIGAME?",
      answer: "MINIGAME features three custom games inspired by popular .io mechanics: one similar to Agar.io, one to Slither.io, and one to Paper.io. All games are built in Unity 3D with WebGL export, making them fully browser-based with no downloads required."
    },
    {
      question: "How do I get started?",
      answer: "To get started, connect your Phantom wallet, purchase some $MINIGAME tokens to increase your reward multiplier, and jump into one of our three game modes. As you play, you'll earn $ORBYS which you can use to spin the loot wheel or purchase NFTs for enhanced gameplay."
    },
    {
      question: "Is MINIGAME secure?",
      answer: "Yes, MINIGAME uses secure wallet integration via the Solana Unity SDK and all transactions are processed on the Solana blockchain. NFT verification is done in real-time using Metaplex, and smart contracts handle all reward distributions automatically."
    },
    {
      question: "What is the boost multiplier system?",
      answer: "The boost multiplier system increases your $ORBYS earnings based on how many $MINIGAME tokens you hold in your wallet. The multipliers range from 0.1x (for holders with 0-99,999 tokens) up to 8x (for holders with 25M+ tokens). Your wallet balance is automatically checked after each match to apply the appropriate multiplier."
    },
    {
      question: "Where can I buy $MINIGAME tokens?",
      answer: "You can buy $MINIGAME tokens on Pump.fun with instant liquidity on PumpSwap. No Raydium migration is needed. The token launch will make 85% of the total supply (850,000,000 tokens) available to the public."
    }
  ];

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
              <span className="neon-purple">FAQ</span> <span className="text-white">& Support</span>
            </h1>
            <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to frequently asked questions about MINIGAME, wallet connections, rewards, and gameplay.
            </p>
          </motion.div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`cyberpunk-card rounded-lg overflow-hidden ${expandedItems.includes(index) ? 'border-2 border-neon-green' : ''}`}
                >
                  <button 
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {item.question}
                    </h3>
                    <svg 
                      className={`w-6 h-6 text-neon-green transition-transform ${expandedItems.includes(index) ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedItems.includes(index) && (
                    <motion.div 
                      className="px-6 pb-6 text-gray-300"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-700 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Categories */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="text-white">Support</span> <span className="neon-green">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Wallet Help</h3>
              <p className="text-gray-300 text-center mb-6">
                Get assistance with wallet connections, transactions, and balance issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Phantom wallet setup</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Connection troubleshooting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Transaction issues</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-green bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-green">Game Support</h3>
              <p className="text-gray-300 text-center mb-6">
                Get help with gameplay issues, controls, and technical problems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Game controls</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Performance issues</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-green mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Game mechanics</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Reward System</h3>
              <p className="text-gray-300 text-center mb-6">
                Learn about the reward system, token earnings, and multipliers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>$ORBYS earnings</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Multiplier system</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-neon-purple mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Loot wheel prizes</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Solana Network Info */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-green">Solana</span> <span className="text-white">Network Info</span>
            </h2>
            <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          </motion.div>

          <motion.div 
            className="cyberpunk-card p-8 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-green">About Solana</h3>
                <p className="text-gray-300 mb-4">
                  Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. MINIGAME is built on Solana to provide fast, low-cost transactions and a seamless gaming experience.
                </p>
                <p className="text-gray-300">
                  With Solana's high throughput and low transaction fees, MINIGAME can deliver instant rewards and smooth gameplay without the lag or high gas fees found on other blockchains.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">Phantom Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Phantom is a digital wallet reimagined for DeFi and the preferred wallet for MINIGAME. Phantom makes it safe and easy to store, send, receive, collect, and swap tokens on the Solana blockchain.
                </p>
                <div className="flex flex-col space-y-4 mt-6">
                  <a 
                    href="https://phantom.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cyberpunk-button text-center"
                  >
                    Get Phantom Wallet
                  </a>
                  <a 
                    href="https://solana.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-center"
                  >
                    Learn About Solana
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
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
              <span className="text-white">Still Have</span> <span className="neon-purple">Questions?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join our community channels for direct support and updates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="https://t.me/MINIGAME_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyberpunk-button text-lg px-8 py-4 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.336 1.301-.574 1.732-.238.43-.545.729-.88.729-.336 0-1.055-.244-1.633-.478-.863-.41-1.725-.82-2.588-1.23-.575-.244-1.633-.82-1.633-1.23 0-.41.575-.575 1.15-1.149.287-.287 1.633-1.516 1.633-1.516s2.87-2.665 2.988-2.97c.029-.077-.033-.115-.094-.077-.041.024-1.524.973-4.45 2.847-1.633.82-2.296 1.15-2.87 1.15-.575 0-1.633-.244-2.296-.41-.663-.167-1.15-.244-1.15-.575 0-.167.287-.41.862-.575.575-.167 1.438-.41 1.438-.41s3.266-.82 6.533-1.639c.575-.167 1.15-.244 1.725-.41.575-.168 1.15-.244 1.725-.244.574 0 1.15.244 1.15.82 0 .167 0 .41-.168.82z"/>
                </svg>
                Join Telegram
              </a>
              
              <a 
                href="https://x.com/MINIGAME_sol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-lg px-8 py-4 flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on Twitter
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQPage;
