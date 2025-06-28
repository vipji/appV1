import React from 'react';
import { Play, Code, ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      
      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        {/* Main Glass Container */}
        <div 
          className="hero-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 50%, 
                rgba(255, 255, 255, 0.02) 100%
              )
            `,
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 8px 32px 0 rgba(31, 38, 135, 0.37),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 1px rgba(59, 130, 246, 0.1)
            `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'blue-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Trusted by 50,000+ developers
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Master Java
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Interview Coding
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    Practice with real Java interview problems from top tech companies. 
                    Build confidence, improve your skills, and land your dream job.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="hero-button bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg">
                    <Play className="w-5 h-5" />
                    <span>Start Coding Now</span>
                  </button>
                  <button className="hero-button-secondary border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-xl hover:border-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold">
                    <span>View Problems</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-8 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>500+ Java Problems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Real Interview Experience</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="hero-code-container bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-600/50 transition-all duration-300">
                  <div className="bg-gray-700/80 px-6 py-4 flex items-center space-x-3 border-b border-gray-600/50">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-gray-300 text-sm font-medium">ConnoisseurCode - Two Sum Problem</div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 text-sm font-mono">
                      <div className="text-gray-400">// Find two numbers that add up to target</div>
                      <div className="text-blue-400">public class <span className="text-yellow-400">Solution</span> {'{'}</div>
                      <div className="ml-4 text-blue-400">public <span className="text-purple-400">int[]</span> <span className="text-green-400">twoSum</span>(<span className="text-purple-400">int[]</span> nums, <span className="text-purple-400">int</span> target) {'{'}</div>
                      <div className="ml-8 text-blue-400">Map&lt;<span className="text-purple-400">Integer</span>, <span className="text-purple-400">Integer</span>&gt; map = <span className="text-blue-400">new</span> HashMap&lt;&gt;();</div>
                      <div className="ml-8 text-blue-400">for (<span className="text-purple-400">int</span> i = <span className="text-orange-400">0</span>; i &lt; nums.length; i++) {'{'}</div>
                      <div className="ml-12 text-purple-400">int <span className="text-gray-300">complement</span> = target - nums[i];</div>
                      <div className="ml-12 text-blue-400">if (map.containsKey(complement)) {'{'}</div>
                      <div className="ml-16 text-blue-400">return <span className="text-blue-400">new</span> <span className="text-purple-400">int[]</span>{'{'}<span className="text-blue-400">map.get(complement)</span>, <span className="text-gray-300">i</span>{'}'};
                      </div>
                      <div className="ml-12 text-gray-300">{'}'}</div>
                      <div className="ml-12 text-gray-300">map.put(nums[i], i);</div>
                      <div className="ml-8 text-gray-300">{'}'}</div>
                      <div className="ml-8 text-blue-400">return <span className="text-blue-400">new</span> <span className="text-purple-400">int[]</span>{'{'}{'}'};</div>
                      <div className="ml-4 text-gray-300">{'}'}</div>
                      <div className="text-gray-300">{'}'}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">Tests Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;