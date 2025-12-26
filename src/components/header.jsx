"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Bell, User, Search, ChevronDown } from 'lucide-react';

export default function TradingAppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMarket, setActiveMarket] = useState('crypto');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markets = [
    { name: 'BTC/USD', price: '$96,847.32', change: '+2.4%', positive: true },
    { name: 'ETH/USD', price: '$3,345.18', change: '+1.8%', positive: true },
    { name: 'SOL/USD', price: '$189.43', change: '-0.5%', positive: false },
    { name: 'AAPL', price: '$195.71', change: '+0.3%', positive: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/20' 
          : 'bg-gradient-to-b from-slate-900 to-slate-900/95'
      }`}
    >
      {/* Top Bar - Market Ticker */}
      <div className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-6 min-w-max">
              {markets.map((market, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs group cursor-pointer">
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    {market.name}
                  </span>
                  <span className="text-white font-semibold">{market.price}</span>
                  <span className={`font-medium ${market.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {market.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">TradePro</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Markets', 'Trade', 'Portfolio', 'Learn', 'Earn'].map((item) => (
              <button
                key={item}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg px-4 py-2 w-64 transition-all duration-200">
                <Search className="w-4 h-4 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="bg-transparent text-sm text-white placeholder-slate-400 outline-none w-full"
                />
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </button>

            {/* User Profile */}
            <button className="hidden sm:flex items-center space-x-2 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 group">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* CTA Button */}
            <button className="hidden sm:block relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200">
                Deposit
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-slate-900/95 border-t border-slate-800/50">
          {['Markets', 'Trade', 'Portfolio', 'Learn', 'Earn'].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
            >
              {item}
            </button>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200">
            Deposit
          </button>
        </div>
      </div>
    </header>
  );
}