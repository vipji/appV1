import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, ChevronDown, Home, BookOpen, Play, Map, FileText, Building2, Newspaper, GraduationCap, Code, Clipboard, Cpu, Zap, MessageCircle, HelpCircle, Settings, Moon, Sun, Compass, Phone } from 'lucide-react';
import Logo from './Logo';
import LoginModal from './LoginModal';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const DropdownMenu = ({ title, items, isActive, onToggle }: {
    title: string;
    items: { name: string; href: string }[];
    isActive: boolean;
    onToggle: () => void;
  }) => (
    <div className="relative group">
      <button 
        onClick={onToggle}
        className={`flex items-center transition-all duration-200 font-medium text-sm touch-manipulation py-2 px-1 ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
        }`}
        aria-expanded={isActive}
      >
        {title}
        <ChevronDown 
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isActive ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {/* Desktop Dropdown */}
      <div className={`
        absolute top-full left-0 mt-2 w-48 rounded-xl shadow-2xl
        transform transition-all duration-200 origin-top
        ${isActive 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }
        hidden lg:block
      `}
      style={{
        background: isDarkMode 
          ? 'rgba(31, 41, 55, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}>
        <div className="py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  const sidebarMenuItems = [
    { icon: Home, label: 'Home', href: '#home', color: 'blue' },
    { icon: BookOpen, label: 'All Courses', href: '#courses', color: 'green' },
    { icon: Play, label: 'Playground', href: '#playground', color: 'purple' },
    { icon: Map, label: 'Guided Paths', href: '#paths', color: 'indigo' },
    { icon: FileText, label: 'Mock Tests', href: '#tests', color: 'orange' },
    { icon: Building2, label: 'Company Wise Preparation', href: '#company', color: 'red' },
    { icon: Newspaper, label: 'Articles', href: '#articles', color: 'teal' },
    { icon: GraduationCap, label: 'Tutorials', href: '#tutorials', color: 'pink' },
    { icon: Code, label: 'Practice Problems', href: '#problems', color: 'cyan' },
    { icon: Clipboard, label: 'Paste', href: '#paste', color: 'yellow' },
    { icon: Cpu, label: 'Core Subject', href: '#core', color: 'emerald' },
    { icon: Zap, label: 'Quick Compiler', href: '#compiler', color: 'violet' },
    { icon: Zap, label: 'Flex Fruit Box', href: '#flex', color: 'rose' },
    { icon: MessageCircle, label: 'Interview Experience', href: '#interview', color: 'amber' },
    { icon: HelpCircle, label: 'Need Help ?', href: '#help', color: 'lime' },
    { icon: Settings, label: 'Settings', href: '#settings', color: 'slate' },
  ];

  const getHoverColors = (color: string) => {
    const colorMap = {
      blue: 'hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-blue-300',
      green: 'hover:bg-green-500/20 hover:border-green-400/30 hover:text-green-300',
      purple: 'hover:bg-purple-500/20 hover:border-purple-400/30 hover:text-purple-300',
      indigo: 'hover:bg-indigo-500/20 hover:border-indigo-400/30 hover:text-indigo-300',
      orange: 'hover:bg-orange-500/20 hover:border-orange-400/30 hover:text-orange-300',
      red: 'hover:bg-red-500/20 hover:border-red-400/30 hover:text-red-300',
      teal: 'hover:bg-teal-500/20 hover:border-teal-400/30 hover:text-teal-300',
      pink: 'hover:bg-pink-500/20 hover:border-pink-400/30 hover:text-pink-300',
      cyan: 'hover:bg-cyan-500/20 hover:border-cyan-400/30 hover:text-cyan-300',
      yellow: 'hover:bg-yellow-500/20 hover:border-yellow-400/30 hover:text-yellow-300',
      emerald: 'hover:bg-emerald-500/20 hover:border-emerald-400/30 hover:text-emerald-300',
      violet: 'hover:bg-violet-500/20 hover:border-violet-400/30 hover:text-violet-300',
      rose: 'hover:bg-rose-500/20 hover:border-rose-400/30 hover:text-rose-300',
      amber: 'hover:bg-amber-500/20 hover:border-amber-400/30 hover:text-amber-300',
      lime: 'hover:bg-lime-500/20 hover:border-lime-400/30 hover:text-lime-300',
      slate: 'hover:bg-slate-500/20 hover:border-slate-400/30 hover:text-slate-300',
    };
    return colorMap[color as keyof typeof colorMap] || 'hover:bg-gray-500/20 hover:border-gray-400/30 hover:text-gray-300';
  };

  const getIconHoverColor = (color: string) => {
    const iconColorMap = {
      blue: 'group-hover:text-blue-400',
      green: 'group-hover:text-green-400',
      purple: 'group-hover:text-purple-400',
      indigo: 'group-hover:text-indigo-400',
      orange: 'group-hover:text-orange-400',
      red: 'group-hover:text-red-400',
      teal: 'group-hover:text-teal-400',
      pink: 'group-hover:text-pink-400',
      cyan: 'group-hover:text-cyan-400',
      yellow: 'group-hover:text-yellow-400',
      emerald: 'group-hover:text-emerald-400',
      violet: 'group-hover:text-violet-400',
      rose: 'group-hover:text-rose-400',
      amber: 'group-hover:text-amber-400',
      lime: 'group-hover:text-lime-400',
      slate: 'group-hover:text-slate-400',
    };
    return iconColorMap[color as keyof typeof iconColorMap] || 'group-hover:text-gray-400';
  };

  // Updated navigation items to match your requirements
  const exploreItems = [
    { name: 'Practice Problems', href: '#problems' },
    { name: 'Mock Interviews', href: '#tests' },
    { name: 'Company Preparation', href: '#company' },
    { name: 'Coding Playground', href: '#playground' }
  ];

  const coursesItems = [
    { name: 'Java Fundamentals', href: '#courses' },
    { name: 'Data Structures', href: '#courses' },
    { name: 'Algorithms', href: '#courses' },
    { name: 'System Design', href: '#courses' }
  ];

  return (
    <>
      <header 
        ref={headerRef}
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-out
        `}
        style={{
          background: isDarkMode
            ? scrolled 
              ? 'rgba(17, 24, 39, 0.95)' 
              : 'rgba(17, 24, 39, 0.90)'
            : scrolled
              ? 'rgba(255, 255, 255, 0.95)'
              : 'rgba(255, 255, 255, 0.90)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          boxShadow: scrolled 
            ? isDarkMode 
              ? '0 8px 32px 0 rgba(0, 0, 0, 0.3)' 
              : '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            : 'none',
        }}
      >
        {/* Reduced max-width and padding for more compact layout */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14">
            
            {/* Left Side - Hamburger Menu + Logo */}
            <div className="flex items-center space-x-3">
              {/* Hamburger Menu Button */}
              <button
                className={`p-2 transition-all duration-200 rounded-lg touch-manipulation ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
                onMouseEnter={() => setIsSidebarOpen(true)}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle sidebar menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Logo */}
              <Logo size="md" isDarkMode={isDarkMode} />
            </div>

            {/* Desktop Navigation - Updated with correct tabs */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a 
                href="#home" 
                className={`transition-all duration-200 font-medium text-sm relative group py-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <DropdownMenu
                title="Courses"
                items={coursesItems}
                isActive={activeDropdown === 'courses'}
                onToggle={() => setActiveDropdown(activeDropdown === 'courses' ? null : 'courses')}
              />

              <DropdownMenu
                title="Explore"
                items={exploreItems}
                isActive={activeDropdown === 'explore'}
                onToggle={() => setActiveDropdown(activeDropdown === 'explore' ? null : 'explore')}
              />

              <a 
                href="#contact" 
                className={`transition-all duration-200 font-medium text-sm relative group py-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#articles" 
                className={`transition-all duration-200 font-medium text-sm relative group py-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Articles
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#tutorials" 
                className={`transition-all duration-200 font-medium text-sm relative group py-2 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Tutorials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Action Buttons - More compact */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className={`relative p-2 transition-all duration-200 rounded-lg touch-manipulation ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              {/* Cart Icon with Badge */}
              <button className={`relative p-2 transition-all duration-200 rounded-lg touch-manipulation ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              }`}>
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium text-[10px] shadow-lg">
                  0
                </span>
              </button>

              {/* Login Button */}
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className={`
                  px-5 py-2 rounded-full font-medium text-sm 
                  transition-all duration-200 shadow-md hover:shadow-lg
                  transform hover:scale-105 active:scale-95
                  touch-manipulation
                  ${isDarkMode
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  }
                `}
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-all duration-200 rounded-lg touch-manipulation ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`
                  absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out
                  ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `}></span>
                <span className={`
                  absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out
                  ${isMenuOpen ? 'opacity-0' : ''}
                `}></span>
                <span className={`
                  absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out
                  ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation - Updated with correct tabs */}
          <div className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className={`py-4 border-t ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
              <nav className="space-y-1">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'Articles', href: '#articles' },
                  { name: 'Tutorials', href: '#tutorials' }
                ].map((item, index) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className={`
                      block py-3 px-4 rounded-lg font-medium
                      touch-manipulation transform hover:translate-x-1
                      transition-all duration-200
                      ${isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                      }
                    `}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className={`pt-4 space-y-3 border-t mt-4 ${isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'}`}>
                  <div className="flex items-center justify-between px-4">
                    <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</span>
                    <button 
                      onClick={toggleTheme}
                      className={`relative p-2 transition-all duration-200 rounded-lg touch-manipulation ${
                        isDarkMode 
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                      }`}
                    >
                      {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </button>
                  </div>
                  <div className="px-4">
                    <button 
                      onClick={() => setIsLoginModalOpen(true)}
                      className={`
                        w-full px-6 py-3 rounded-xl font-medium 
                        transition-all duration-200 shadow-md hover:shadow-lg
                        transform hover:scale-[1.02] active:scale-[0.98]
                        touch-manipulation
                        ${isDarkMode
                          ? 'bg-white text-gray-900 hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                        }
                      `}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hidden Sidebar Navigation */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 h-full w-80 z-40
          transform transition-all duration-500 ease-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          background: isDarkMode
            ? `
              radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(17, 24, 39, 0.98) 0%, 
                rgba(31, 41, 55, 0.98) 30%,
                rgba(17, 24, 39, 0.98) 70%,
                rgba(31, 41, 55, 0.98) 100%
              )
            `
            : `
              radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.98) 0%, 
                rgba(248, 250, 252, 0.98) 30%,
                rgba(255, 255, 255, 0.98) 70%,
                rgba(248, 250, 252, 0.98) 100%
              )
            `,
          backdropFilter: 'blur(25px) saturate(200%)',
          WebkitBackdropFilter: 'blur(25px) saturate(200%)',
          border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          borderLeft: 'none',
          boxShadow: isDarkMode
            ? `
              0 25px 50px -12px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(99, 102, 241, 0.1),
              inset 1px 0 0 rgba(255, 255, 255, 0.1)
            `
            : `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(99, 102, 241, 0.1),
              inset 1px 0 0 rgba(255, 255, 255, 0.8)
            `,
        }}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        {/* Enhanced Sidebar Header */}
        <div 
          className={`p-6 border-b relative overflow-hidden ${
            isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}
          style={{
            background: isDarkMode
              ? `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`
              : `linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
          }}
        >
          <div className="flex items-center justify-between relative z-10">
            <Logo size="md" isDarkMode={isDarkMode} />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={`p-2 transition-all duration-300 rounded-lg hover:scale-110 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Enhanced Sidebar Menu Items */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-2 px-4">
            {sidebarMenuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  flex items-center space-x-4 px-4 py-3.5 rounded-xl
                  transition-all duration-300 group
                  transform hover:translate-x-2 hover:scale-105
                  border border-transparent
                  ${isDarkMode ? getHoverColors(item.color) : getHoverColors(item.color).replace('text-', 'text-gray-700 hover:text-')}
                  relative overflow-hidden
                `}
                style={{ 
                  animationDelay: `${index * 40}ms`,
                  background: isDarkMode
                    ? `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`
                    : `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)`,
                  backdropFilter: 'blur(10px)',
                }}
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode 
                    ? `text-gray-400 ${getIconHoverColor(item.color)}` 
                    : `text-gray-600 ${getIconHoverColor(item.color)}`
                }`} />
                <span className={`font-medium text-sm group-hover:font-semibold transition-all duration-300 relative z-10 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Enhanced Sidebar Footer */}
        <div 
          className={`p-6 border-t space-y-4 relative overflow-hidden ${
            isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}
          style={{
            background: isDarkMode
              ? `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`
              : `linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
          }}
        >
          <div className="relative z-10">
            {/* Enhanced Dark Mode Toggle */}
            <div className={`flex items-center justify-between p-3 rounded-xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700/30' 
                : 'bg-white/50 border-gray-300/30'
            }`}>
              <span className={`font-medium text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</span>
              <button 
                onClick={toggleTheme}
                className={`
                  relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300
                  ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'}
                  hover:scale-110 hover:shadow-lg
                `}
              >
                <span
                  className={`
                    inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                    ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}
                    shadow-lg
                  `}
                />
              </button>
            </div>

            {/* Enhanced Login Button */}
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="
                w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white 
                px-6 py-3.5 rounded-xl font-semibold text-sm
                hover:from-purple-700 hover:via-blue-700 hover:to-purple-700
                transition-all duration-300 shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                relative overflow-hidden group
              "
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease-in-out infinite',
              }}
            >
              <span className="relative z-10">Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-30 transition-all duration-500"
          style={{
            background: isDarkMode
              ? `radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)`
              : `radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;