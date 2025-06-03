import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NFTPage: React.FC = () => {
  useEffect(() => {
    document.title = 'MINIGAME | NFT Marketplace';
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');

  const nftCategories = [
    { id: 'all', name: 'All NFTs' },
    { id: 'common', name: 'Common' },
    { id: 'rare', name: 'Rare' },
    { id: 'epic', name: 'Epic' },
    { id: 'legendary', name: 'Legendary' }
  ];

  const nfts = [
    {
      id: 1,
      name: 'Cyber Cat',
      emoji: '🐱',
      rarity: 'common',
      ability: '+0.2 Speed Boost',
      description: 'A cybernetically enhanced feline with lightning-fast reflexes and glowing purple eyes.',
      color: 'from-neon-purple to-cyberpunk-blue'
    },
    {
      id: 2,
      name: 'Doge Warrior',
      emoji: '🐶',
      rarity: 'rare',
      ability: '+15% $ORBYS Bonus',
      description: 'The legendary Shiba Inu warrior, bringing good fortune and extra rewards to its owner.',
      color: 'from-neon-green to-neon-purple'
    },
    {
      id: 3,
      name: 'Fox Ninja',
      emoji: '🦊',
      rarity: 'epic',
      ability: '+10% Attack Power',
      description: 'A stealthy fox assassin that enhances your offensive capabilities in the arena.',
      color: 'from-cyberpunk-pink to-neon-purple'
    },
    {
      id: 4,
      name: 'Pepe Hacker',
      emoji: '🐸',
      rarity: 'legendary',
      ability: '+5% Size Increase',
      description: 'The rarest of digital amphibians, granting increased presence and dominance in the game.',
      color: 'from-neon-green to-cyberpunk-blue'
    },
    {
      id: 5,
      name: 'Robo Rabbit',
      emoji: '🐰',
      rarity: 'common',
      ability: '+5% Jump Height',
      description: 'A mechanically enhanced rabbit with powerful spring-loaded legs for superior mobility.',
      color: 'from-neon-purple to-cyberpunk-blue'
    },
    {
      id: 6,
      name: 'Panda Monk',
      emoji: '🐼',
      rarity: 'rare',
      ability: '+8% Defense',
      description: 'A zen-like panda that provides enhanced protection against enemy attacks.',
      color: 'from-neon-green to-neon-purple'
    },
    {
      id: 7,
      name: 'Laser Lion',
      emoji: '🦁',
      rarity: 'epic',
      ability: '+12% Critical Hit',
      description: 'A majestic lion with cybernetic enhancements that increase your chance of landing devastating blows.',
      color: 'from-cyberpunk-pink to-neon-purple'
    },
    {
      id: 8,
      name: 'Dragon Byte',
      emoji: '🐉',
      rarity: 'legendary',
      ability: '+20% Special Ability Cooldown',
      description: 'A digital dragon that manipulates the code of the game itself, reducing your ability cooldowns.',
      color: 'from-neon-green to-cyberpunk-blue'
    }
  ];

  const filteredNFTs = activeFilter === 'all' 
    ? nfts 
    : nfts.filter(nft => nft.rarity === activeFilter);

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'text-gray-300';
      case 'rare': return 'text-neon-green';
      case 'epic': return 'text-neon-purple';
      case 'legendary': return 'text-cyberpunk-pink';
      default: return 'text-white';
    }
  };

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
              <span className="neon-purple">NFT</span> <span className="text-white">Marketplace</span>
            </h1>
            <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collect meme-inspired NFT avatars with special powers. Each NFT unlocks unique in-game abilities that give you an edge in the arena.
            </p>
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {nftCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all ${
                  activeFilter === category.id 
                    ? 'bg-neon-purple bg-opacity-30 text-neon-purple border border-neon-purple shadow-neon-purple' 
                    : 'bg-darker-bg text-gray-400 border border-gray-700 hover:border-neon-green hover:text-neon-green'
                }`}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </section>

        {/* NFT Gallery */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNFTs.map((nft) => (
              <motion.div
                key={nft.id}
                className="cyberpunk-card rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: nft.rarity === 'legendary' 
                    ? '0 0 30px rgba(255, 0, 255, 0.6)' 
                    : '0 0 25px rgba(184, 41, 247, 0.6)' 
                }}
              >
                {/* NFT Image */}
                <div className={`bg-gradient-to-br ${nft.color} p-1 rounded-t-lg`}>
                  <div className="bg-darker-bg rounded-lg p-6 aspect-square flex items-center justify-center">
                    <div className="text-8xl">{nft.emoji}</div>
                  </div>
                </div>
                
                {/* NFT Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-orbitron font-bold text-white">{nft.name}</h3>
                    <span className={`text-sm font-medium uppercase ${getRarityColor(nft.rarity)}`}>
                      {nft.rarity}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm">{nft.description}</p>
                  
                  <div className="bg-darker-bg rounded-lg p-3 mb-6">
                    <p className="text-neon-green font-medium">Ability: {nft.ability}</p>
                  </div>
                  
                  <motion.button
                    className="cyberpunk-button w-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Mint NFT
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NFT Benefits Section */}
        <section className="mt-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="text-white">NFT</span> <span className="neon-green">Benefits</span>
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
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">Enhanced Abilities</h3>
              <p className="text-gray-300">
                Each NFT provides unique in-game boosts like increased speed, attack power, or reward multipliers.
              </p>
            </motion.div>

            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-green bg-opacity-30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-green">Increased Earnings</h3>
              <p className="text-gray-300">
                Holding NFTs can significantly boost your $ORBYS earnings during gameplay sessions.
              </p>
            </motion.div>

            <motion.div 
              className="cyberpunk-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-purple">Verified Ownership</h3>
              <p className="text-gray-300">
                NFTs are verified in real-time using Solana wallet NFT lookup via Metaplex, ensuring secure ownership.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 py-16 bg-darker-bg rounded-lg relative overflow-hidden">
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
              <span className="neon-green">Ready to</span> <span className="text-white">Power Up?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mint your first NFT today and gain the competitive edge in the MINIGAME arena.
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
                Connect Wallet
              </motion.button>
              
              <motion.button 
                className="cyberpunk-button bg-neon-purple bg-opacity-20 border-neon-purple text-neon-purple text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Collection
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NFTPage;
