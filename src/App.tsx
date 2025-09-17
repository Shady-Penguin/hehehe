
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showReaction, setShowReaction] = useState(false)

  const handleClick = (option: string) => {
    setSelectedOption(option)
    setShowReaction(true)
    setTimeout(() => setShowReaction(false), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="text-center"
      >
        <img 
          src="https://i.pinimg.com/originals/d4/ea/71/d4ea718b67ee7f3f24f722858840604d.jpg" 
          alt="Cute hamster" 
          className="w-48 h-48 mx-auto rounded-full border-4 border-pink-500 mb-6"
        />
        
        <h1 className="text-3xl font-bold text-pink-600 mb-8">
          Does this poor little thing need help? 
          <br />
          <span className="text-xl text-blue-600">
            If you press YES you're a poor little thing, 
            <br />
            press NO if you're a fine lady. Choose wisely according to your status!
          </span>
        </h1>

        <div className="flex gap-8 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick('yes')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-2xl flex items-center gap-2"
          >
            YES 🥺👉👈
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick('no')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full text-2xl flex items-center gap-2"
          >
            NO 💅✨
          </motion.button>
        </div>

        <AnimatePresence>
          {showReaction && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              {selectedOption === 'yes' ? (
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 p-8 rounded-2xl shadow-lg"
                >
                  <img 
                    src="https://media.tenor.com/9XgWgruYwGQAAAAM/hamtaro.gif" 
                    alt="Happy hamster" 
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <p className="text-3xl font-bold text-white">
                    Congratulations! 🎉
                  </p>
                  <p className="text-2xl font-bold text-white mt-2">
                    The Poor Little Thing is you! 🥹
                  </p>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-4xl mt-4"
                  >
                    🎊
                  </motion.div>
                </motion.div>
              ) : (
                <div className="text-center">
                  <img 
                    src="https://media.tenor.com/XEgDa5wL6BAAAAAm/hamtaro-dancing.webp" 
                    alt="Dancing hamster" 
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <p className="text-2xl font-bold text-blue-600">
                    Yass queen! Slay! 💃✨
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
  