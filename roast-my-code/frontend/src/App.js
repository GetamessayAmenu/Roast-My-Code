import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [code, setCode] = useState("");
  const [roast, setRoast] = useState("");
  const [loading, setLoading] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles for background animation
  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 0.5,
    }));
    setParticles(particleArray);
  }, []);

  const handleRoast = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setRoast("");

    try {
      const res = await axios.post(process.env.NODE_ENV === 'production' ? '/api/roast' : 'http://127.0.0.1:8000/roast', { code });
      setRoast(res.data.roast);
    } catch (error) {
      setRoast("🔥 The AI is too stunned to roast this... Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 via-purple-900 to-gray-900'>
        {/* Top Background Animation */}
        <div className='absolute top-0 left-0 w-full h-1/4 overflow-hidden pointer-events-none'>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`top-${i}`}
              className={`absolute rounded-full ${i % 2 === 0 ? 'bg-gradient-to-br from-red-400/6 to-orange-400/6' : 'bg-gradient-to-br from-blue-400/6 to-purple-400/6'}`}
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 80}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 200, 0],
                y: [0, Math.random() * 50, 0],
                opacity: [0, 0.4, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Top gradient wave */}
          <motion.div
            className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/8 via-transparent to-transparent'
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Bottom Background Animation */}
        <div className='absolute bottom-0 left-0 w-full h-1/4 overflow-hidden pointer-events-none'>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              className={`absolute rounded-full ${i % 2 === 0 ? 'bg-gradient-to-tl from-orange-400/6 to-yellow-400/6' : 'bg-gradient-to-tl from-purple-400/6 to-cyan-400/6'}`}
              style={{
                width: Math.random() * 5 + 2,
                height: Math.random() * 5 + 2,
                left: `${Math.random() * 95}%`,
                bottom: `${Math.random() * 70}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * -150, 0],
                y: [0, -Math.random() * 40, 0],
                opacity: [0, 0.5, 0],
                scale: [0.3, 1.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 7 + 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Bottom gradient wave */}
          <motion.div
            className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-purple-900/8 via-transparent to-transparent'
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scaleY: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Enhanced Center Background Glow */}
        <motion.div
          className='absolute inset-0 bg-gradient-radial from-red-900/5 via-transparent to-transparent'
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Animated Background Elements - Left Side */}
        <div className='absolute left-0 top-0 w-1/4 h-full overflow-hidden pointer-events-none'>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className={`absolute rounded-full ${i % 3 === 0 ? 'bg-red-400/8' : i % 3 === 1 ? 'bg-orange-400/8' : 'bg-yellow-400/8'}`}
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, (Math.random() - 0.5) * 100, 0],
                opacity: [0, 0.8, 0],
                scale: [0.3, 1.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Left side flowing lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`left-line-${i}`}
              className='absolute w-px bg-gradient-to-b from-red-500/20 via-orange-500/10 to-transparent'
              style={{
                height: '200px',
                left: `${20 + i * 25}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleY: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Left side gradient animation */}
          <motion.div
            className='absolute left-0 top-0 w-full h-full bg-gradient-to-r from-red-900/15 via-orange-900/10 to-transparent'
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Left side corner accent */}
          <motion.div
            className='absolute top-1/4 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/20'
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Background Elements - Right Side */}
        <div className='absolute right-0 top-0 w-1/4 h-full overflow-hidden pointer-events-none'>
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className={`absolute rounded-full ${i % 3 === 0 ? 'bg-blue-400/8' : i % 3 === 1 ? 'bg-purple-400/8' : 'bg-cyan-400/8'}`}
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                right: `${Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, (Math.random() - 0.5) * -80, 0],
                opacity: [0, 0.9, 0],
                scale: [0.2, 2.0, 0.2],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: Math.random() * 7 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Right side flowing lines */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`right-line-${i}`}
              className='absolute w-px bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent'
              style={{
                height: '180px',
                right: `${15 + i * 30}%`,
                top: `${Math.random() * 60}%`,
              }}
              animate={{
                opacity: [0.1, 0.9, 0.1],
                scaleY: [0.3, 1.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Right side gradient animation */}
          <motion.div
            className='absolute right-0 top-0 w-full h-full bg-gradient-to-l from-blue-900/15 via-purple-900/10 to-transparent'
            animate={{
              opacity: [0.15, 0.6, 0.15],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Right side corner accent */}
          <motion.div
            className='absolute top-1/3 right-0 w-12 h-12 border-r-2 border-t-2 border-blue-500/20'
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className='absolute rounded-full bg-red-500/20'
            style={{
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.speed * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content - Perfectly Centered */}
      <div className='relative z-10 min-h-screen flex items-center justify-center p-4'>
        <motion.div
          className='text-center mb-8 max-w-4xl'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent'
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥 Roast My Code
          </motion.h1>
          <motion.p
            className='text-xl text-gray-300 mb-2 font-medium'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "Where bad code meets brutal honesty."
          </motion.p>
          <motion.p
            className='text-gray-400 text-base'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
          </motion.p>
        </motion.div>

        {/* Two Column Layout - Input Centered, Results on Right */}
        <div className='w-full max-w-7xl grid lg:grid-cols-2 gap-6'>
          {/* Code Input Section - Centered */}
          <div className='flex justify-center'>
            <motion.div
              className='w-full max-w-2xl space-y-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.textarea
                  rows='12'
                  placeholder='Paste your "masterpiece" here... 😏'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className='w-full p-4 bg-gray-800/80 backdrop-blur-sm border-2 border-red-500/50 rounded-xl text-white placeholder-gray-400 focus:border-red-400 focus:outline-none resize-none text-base font-mono shadow-2xl'
                  whileFocus={{ scale: 1.02, borderColor: "#f87171" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>

              {/* Roast Button */}
              <motion.button
                onClick={handleRoast}
                disabled={loading}
                className='w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-500 hover:via-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl text-xl transition-all duration-300 shadow-2xl hover:shadow-red-500/50 disabled:cursor-not-allowed'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={loading ? {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 25px rgba(239, 68, 68, 0.5)",
                    "0 15px 35px rgba(239, 68, 68, 0.7)",
                    "0 10px 25px rgba(239, 68, 68, 0.5)"
                  ]
                } : {}}
                transition={{ duration: 0.6, repeat: loading ? Infinity : 0 }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2 text-xl"
                    >
                      🔥
                    </motion.span>
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Roasting...
                    </motion.span>
                  </span>
                ) : (
                  <motion.span
                    className="flex items-center justify-center"
                    whileTap={{
                      scale: [1, 0.9, 1.1, 1],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 0.4,
                      times: [0, 0.3, 0.7, 1],
                      ease: "easeInOut"
                    }}
                  >
                    🔥 Roast Me
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      whileTap={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 0.8, 1],
                      }}
                    >
                      💀
                    </motion.span>
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Roast Results Section - Right Side */}
          <div className='lg:sticky lg:top-4'>
            <AnimatePresence>
              {roast && (
                <motion.div
                  className='min-h-[400px] p-6 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-xl border-2 border-red-500/50 shadow-2xl relative overflow-hidden'
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  {/* Animated border glow */}
                  <motion.div
                    className='absolute inset-0 rounded-xl'
                    animate={{
                      boxShadow: [
                        "inset 0 0 0 2px rgba(239, 68, 68, 0.5)",
                        "inset 0 0 0 2px rgba(239, 68, 68, 1)",
                        "inset 0 0 0 2px rgba(239, 68, 68, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Floating decorations */}
                  <motion.div
                    className="absolute -top-3 -right-3 text-4xl opacity-30"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    💀
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-3 -left-3 text-3xl opacity-20"
                    animate={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🔥
                  </motion.div>

                  <div className='relative z-10'>
                    <motion.h3
                      className='text-xl font-bold text-red-400 mb-4 flex items-center'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.span
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mr-2"
                      >
                        💀
                      </motion.span>
                      Roast Results
                    </motion.h3>

                    <motion.div
                      className='text-base text-gray-200 leading-relaxed mb-4'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {roast}
                    </motion.div>

                    <motion.div
                      className="text-sm text-red-400/75 flex items-center justify-between"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span>🔥 Share your pain</span>
                      <motion.button
                        className="text-xs bg-red-600/20 hover:bg-red-600/30 px-3 py-1 rounded-full transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // Copy roast text to clipboard
                          if (navigator.clipboard && window.isSecureContext) {
                            // Use modern clipboard API for HTTPS sites
                            navigator.clipboard.writeText(roast).then(() => {
                              showCopySuccess();
                            }).catch(err => {
                              console.error('Clipboard API failed:', err);
                              fallbackCopy();
                            });
                          } else {
                            // Fallback for non-HTTPS or older browsers
                            fallbackCopy();
                          }

                          function showCopySuccess() {
                            const button = document.activeElement;
                            const originalText = button.textContent;
                            button.textContent = 'Copied! ✓';
                            button.classList.remove('bg-red-600/20', 'hover:bg-red-600/30');
                            button.classList.add('bg-green-600/30');

                            setTimeout(() => {
                              button.textContent = originalText;
                              button.classList.remove('bg-green-600/30');
                              button.classList.add('bg-red-600/20', 'hover:bg-red-600/30');
                            }, 1500);
                          }

                          function fallbackCopy() {
                            const textArea = document.createElement('textarea');
                            textArea.value = roast;
                            textArea.style.position = 'fixed';
                            textArea.style.left = '-999999px';
                            textArea.style.top = '-999999px';
                            document.body.appendChild(textArea);
                            textArea.focus();
                            textArea.select();

                            try {
                              const successful = document.execCommand('copy');
                              if (successful) {
                                showCopySuccess();
                              } else {
                                alert('Copy failed. Please manually select and copy the roast text.');
                              }
                            } catch (err) {
                              console.error('Fallback copy failed:', err);
                              alert('Copy failed. Please manually select and copy the roast text.');
                            }

                            document.body.removeChild(textArea);
                          }
                        }}
                      >
                        Copy Roast
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
