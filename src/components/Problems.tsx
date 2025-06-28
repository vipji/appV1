import React from 'react';
import { ChevronRight, Clock, Users, Star } from 'lucide-react';

const Problems = () => {
  const problemCategories = [
    {
      title: 'Arrays & Strings',
      problems: 124,
      difficulty: 'Easy to Hard',
      popular: true,
      description: 'Master fundamental data structures and string manipulation'
    },
    {
      title: 'Linked Lists',
      problems: 67,
      difficulty: 'Medium to Hard',
      popular: false,
      description: 'Practice pointer manipulation and list operations'
    },
    {
      title: 'Trees & Graphs',
      problems: 89,
      difficulty: 'Medium to Hard',
      popular: true,
      description: 'Explore tree traversals and graph algorithms'
    },
    {
      title: 'Dynamic Programming',
      problems: 78,
      difficulty: 'Hard',
      popular: false,
      description: 'Solve complex optimization problems step by step'
    },
    {
      title: 'System Design',
      problems: 45,
      difficulty: 'Hard',
      popular: true,
      description: 'Design scalable systems and architectures'
    },
    {
      title: 'Concurrency',
      problems: 34,
      difficulty: 'Medium to Hard',
      popular: false,
      description: 'Master Java threading and concurrent programming'
    }
  ];

  const recentProblems = [
    {
      title: 'Two Sum',
      difficulty: 'Easy',
      acceptance: '49.2%',
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Medium',
      acceptance: '74.3%',
      companies: ['Facebook', 'Apple', 'Netflix']
    },
    {
      title: 'LRU Cache',
      difficulty: 'Hard',
      acceptance: '41.8%',
      companies: ['Google', 'Uber', 'LinkedIn']
    }
  ];

  return (
    <section id="problems" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main Glass Container */}
        <div 
          className="problems-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
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
              0 0 0 1px rgba(249, 115, 22, 0.1)
            `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(249, 115, 22, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'orange-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium mb-4">
                Practice Problems
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Practice with Real
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Interview Problems
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Over 500+ carefully curated Java problems from actual technical interviews
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-white mb-8">Problem Categories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {problemCategories.map((category, index) => (
                    <div 
                      key={index}
                      className="problems-card p-6 rounded-xl transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                            {category.title}
                          </h4>
                          {category.popular && (
                            <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium border border-orange-400/30">
                              Popular
                            </div>
                          )}
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{category.problems} problems</span>
                        <span className="text-orange-400 font-medium">{category.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-8">Trending Problems</h3>
                <div className="space-y-4">
                  {recentProblems.map((problem, index) => (
                    <div 
                      key={index}
                      className="problems-card p-6 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-white hover:text-orange-400 transition-colors">
                          {problem.title}
                        </h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          problem.difficulty === 'Easy' 
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : problem.difficulty === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                            : 'bg-red-500/20 text-red-400 border border-red-400/30'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{problem.acceptance}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {problem.companies.slice(0, 2).map((company, idx) => (
                          <span key={idx} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/30">
                            {company}
                          </span>
                        ))}
                        {problem.companies.length > 2 && (
                          <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-600/30">
                            +{problem.companies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors text-lg font-medium shadow-lg">
                Browse All Problems
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;