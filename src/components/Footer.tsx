import React from 'react';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  // Custom geometric logo component
  const GeometricLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L12 3L21 3L21 12L12 12L12 21L3 21L3 12L3 3Z" fill="currentColor" fillOpacity="0.9"/>
      <path d="M6 6L9 6L9 9L6 9L6 6Z" fill="currentColor" fillOpacity="0.7"/>
      <path d="M15 6L18 6L18 9L15 9L15 6Z" fill="currentColor" fillOpacity="0.7"/>
      <path d="M6 15L9 15L9 18L6 18L6 15Z" fill="currentColor" fillOpacity="0.7"/>
      <path d="M12 9L15 9L15 12L12 12L12 9Z" fill="currentColor"/>
    </svg>
  );

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Problems', href: '#problems' },
      { name: 'Mock Interviews', href: '#' },
      { name: 'Progress Tracking', href: '#' },
      { name: 'Pricing', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-16">
        {/* Main Glass Container */}
        <div 
          className="footer-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
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
              0 0 0 1px rgba(20, 184, 166, 0.1)
            `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'teal-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-16 w-full z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <GeometricLogo />
                  </div>
                  <span className="text-xl font-bold text-white">ConnoisseurCode</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  The ultimate platform for mastering Java interview coding. Practice with real problems, 
                  get instant feedback, and land your dream job.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="footer-social-card p-2 rounded-lg transition-colors">
                    <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a href="#" className="footer-social-card p-2 rounded-lg transition-colors">
                    <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a href="#" className="footer-social-card p-2 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a href="#" className="footer-social-card p-2 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-gray-300 hover:text-white" />
                  </a>
                </div>
              </div>

              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-4 text-white">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-gray-400 hover:text-teal-300 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ConnoisseurCode. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-teal-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-teal-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-teal-300 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;