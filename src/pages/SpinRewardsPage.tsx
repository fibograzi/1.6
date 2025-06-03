import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SpinRewardsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'MINIGAME | Spin & Rewards';
  }, []);

  // State for wheel animation
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [prize, setPrize] = useState<string | null>(null);

  // Wheel segments
  const wheelSegments = [
    { name: 'NFT', color: 'bg-neon-purple' },
    { name: '$SOLANA', color: 'bg-blue-500' },
    { name: '$ORBYS', color: 'bg-green-400' },
    { name: '$MINIGAME', color: 'bg-neon-green' },
    { name: 'NFT', color: 'bg-neon-purple' },
    { name: '$ORBYS', color: 'bg-green-400' },
    { name: '$MINIGAME', color: 'bg-neon-green' },
    { name: '$SOLANA', color: 'bg-blue-500' },
  ];

  // Function to spin the wheel
  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setPrize(null);
    
    // Random rotation between 1800 and 3600 degrees (5-10 full rotations)
    const newRotation = rotationDegrees + 1800 + Math.random() * 1800;
    setRotationDegrees(newRotation);
    
    // Calculate which segment will be selected
    setTimeout(() => {
      const segmentSize = 360 / wheelSegments.length;
      const normalizedRotation = newRotation % 360;
      const segmentIndex = Math.floor((360 - normalizedRotation) / segmentSize);
      const selectedSegment = wheelSegments[segmentIndex % wheelSegments.length];
      
      setPrize(selectedSegment.name);
      setIsSpinning(false);
    }, 5000); // Match this with the CSS transition duration
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
              <span className="neon-green">Spin</span> <span className="text-white">&</span> <span className="neon-purple">Rewards</span>
            </h1>
            <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use your $ORBYS to spin the loot wheel and win amazing prizes including NFTs, $SOLANA, and $MINIGAME tokens.
            </p>
          </motion.div>
        </section>

        {/* Loot Wheel Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Wheel */}
            <motion.div 
              className="cyberpunk-card p-8 rounded-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-orbitron font-bold mb-8 text-neon-purple">Loot Wheel</h2>
              
              {/* Wheel Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                {/* Wheel */}
                <div 
                  className="absolute inset-0 rounded-full border-4 border-neon-purple overflow-hidden"
                  style={{ 
                    transform: `rotate(${rotationDegrees}deg)`,
                    transition: 'transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)'
                  }}
                >
                  {/* Wheel Segments */}
                  {wheelSegments.map((segment, index) => {
                    const rotation = (index * 360) / wheelSegments.length;
                    return (
                      <div 
                        key={index}
                        className={`absolute top-0 left-0 right-0 bottom-0 ${segment.color} opacity-80`}
                        style={{ 
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((rotation + 45) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation + 45) * Math.PI / 180)}%, 50% 50%)`,
                          transform: `rotate(${rotation}deg)`
                        }}
                      >
                        <div 
                          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white font-bold"
                          style={{ transform: `translateX(-50%) rotate(${-rotation - rotationDegrees}deg)` }}
                        >
                          {segment.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-darker-bg border-2 border-neon-green z-10"></div>
                
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-12 z-10">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-neon-green"></div>
                </div>
              </div>
              
              {/* Spin Button */}
              <motion.button 
                className={`cyberpunk-button text-lg px-8 py-4 ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={spinWheel}
                disabled={isSpinning}
                whileHover={isSpinning ? {} : { scale: 1.05 }}
                whileTap={isSpinning ? {} : { scale: 0.95 }}
              >
                {isSpinning ? 'Spinning...' : 'Spin (100 $ORBYS)'}
              </motion.button>
              
              {/* Prize Display */}
              {prize && (
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl text-gray-300">You won:</p>
                  <p className="text-3xl font-orbitron font-bold text-neon-green mt-2">{prize}</p>
                </motion.div>
              )}
            </motion.div>
            
            {/* Rewards Info */}
            <motion.div 
              className="cyberpunk-card p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-orbitron font-bold mb-8 text-neon-green">Rewards System</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">How It Works</h3>
                  <p className="text-gray-300 mb-4">
                    The loot wheel gives you a chance to win valuable prizes using your earned $ORBYS tokens.
                    Each spin costs 100 $ORBYS and guarantees a prize from the wheel.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Built with WebGL spin animation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Prizes delivered directly to your wallet</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-neon-purple mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Transparent odds for all prizes</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">Possible Rewards</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-darker-bg rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-neon-purple bg-opacity-30 flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-neon-purple">NFT</span>
                        </div>
                        <h4 className="font-orbitron font-medium">NFT Character</h4>
                      </div>
                      <p className="text-sm text-gray-400">
                        Unique character with in-game abilities
                      </p>
                    </div>
                    
                    <div className="bg-darker-bg rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-blue-500">$</span>
                        </div>
                        <h4 className="font-orbitron font-medium">Bonus $SOLANA</h4>
                      </div>
                      <p className="text-sm text-gray-400">
                        Real cryptocurrency rewards
                      </p>
                    </div>
                    
                    <div className="bg-darker-bg rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-neon-green bg-opacity-30 flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-neon-green">$</span>
                        </div>
                        <h4 className="font-orbitron font-medium">Bonus $MINIGAME</h4>
                      </div>
                      <p className="text-sm text-gray-400">
                        Platform tokens for increased rewards
                      </p>
                    </div>
                    
                    <div className="bg-darker-bg rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-400 bg-opacity-30 flex items-center justify-center mr-3">
                          <span className="text-lg font-bold text-green-400">$</span>
                        </div>
                        <h4 className="font-orbitron font-medium">Extra $ORBYS</h4>
                      </div>
                      <p className="text-sm text-gray-400">
                        More in-game currency for future spins
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">Your Balance</h3>
                  <div className="bg-darker-bg rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="text-gray-400 text-sm">Current $ORBYS</p>
                      <p className="text-2xl font-orbitron font-bold text-neon-green">0</p>
                    </div>
                    <button className="cyberpunk-button">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reward History Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="neon-purple">Reward</span> <span className="text-white">History</span>
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto"></div>
          </motion.div>

          <motion.div 
            className="cyberpunk-card p-6 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="border-b border-neon-purple border-opacity-30">
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-purple">Date</th>
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-neon-green">Prize</th>
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-white">Amount</th>
                    <th className="py-4 px-6 text-left text-lg font-orbitron text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-4 px-6">--/--/----</td>
                    <td className="py-4 px-6">--</td>
                    <td className="py-4 px-6">--</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-sm">
                        Connect Wallet
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-6 text-gray-400 italic">
              Connect your wallet to view your reward history
            </div>
          </motion.div>
        </section>

        {/* $ORBYS Usage Section */}
        <section className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-orbitron font-bold mb-4">
              <span className="text-white">Use Your</span> <span className="neon-green">$ORBYS</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Spin the Loot Wheel</h3>
              <p className="text-gray-300 text-center">
                Use 100 $ORBYS to spin the wheel and win valuable prizes including NFTs and tokens.
              </p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-green">Buy Custom Avatars</h3>
              <p className="text-gray-300 text-center">
                Purchase unique in-game avatars to customize your appearance in the arena.
              </p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-orbitron font-bold text-center mb-4 text-neon-purple">Upgrade NFTs</h3>
              <p className="text-gray-300 text-center">
                Enhance your existing NFTs to unlock more powerful abilities and bonuses.
              </p>
            </motion.div>
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
              <span className="neon-green">Start</span> <span className="text-white">Earning</span> <span className="neon-purple">Today</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect your wallet, play games, and start earning $ORBYS to spin the wheel and win big.
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
                Play Now
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpinRewardsPage;
