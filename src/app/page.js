
"use client"
import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, ArrowRight, Star, Globe, Award, ChevronRight, Sparkles, Play } from 'lucide-react';

export default function TradingHomePage() {
  const [activeTab, setActiveTab] = useState('crypto');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const cryptoAssets = [
    { symbol: 'BTC', name: 'Bitcoin', price: '96,847.32', change: '+2.4%', positive: true, chart: '📈' },
    { symbol: 'ETH', name: 'Ethereum', price: '3,345.18', change: '+1.8%', positive: true, chart: '📈' },
    { symbol: 'SOL', name: 'Solana', price: '189.43', change: '-0.5%', positive: false, chart: '📉' },
    { symbol: 'BNB', name: 'Binance', price: '612.84', change: '+3.2%', positive: true, chart: '📈' },
  ];

  const stats = [
    { label: 'Trading Volume', value: '$2.4B', suffix: '+' },
    { label: 'Active Traders', value: '500K', suffix: '+' },
    { label: 'Assets Listed', value: '350', suffix: '+' },
    { label: 'Countries', value: '180', suffix: '+' },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Execute trades in milliseconds with our advanced matching engine'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bank-Level Security',
      description: 'Your assets are protected with institutional-grade security'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Charts',
      description: 'Professional trading tools and real-time market analysis'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Access',
      description: 'Trade from anywhere, anytime with 24/7 support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">Trusted by 500K+ traders worldwide</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Trade Smarter,
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Grow Faster
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl">
                Experience the future of trading with lightning-fast execution, advanced analytics, and institutional-grade security. Start your journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <button className="group px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Trading Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
                {/* Tabs */}
                <div className="flex space-x-2 mb-6 bg-slate-800/50 p-1 rounded-xl">
                  {['crypto', 'stocks', 'forex'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Asset List */}
                <div className="space-y-3">
                  {cryptoAssets.map((asset, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-xl cursor-pointer transition-all duration-200 group border border-transparent hover:border-slate-700"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-white">
                          {asset.symbol.slice(0, 1)}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{asset.name}</div>
                          <div className="text-sm text-slate-400">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">${asset.price}</div>
                        <div className={`text-sm font-medium ${asset.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {asset.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center group">
                  View All Markets
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for Modern Traders
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to succeed in today's markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-12 shadow-2xl">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders. Open your account in minutes and get access to premium features.
            </p>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center">
                Create Free Account
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <p className="text-sm text-slate-500 mt-4">No credit card required • Start with $100K virtual funds</p>
          </div>
        </div>
      </section>
    </div>
  );
}