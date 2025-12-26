"use client"
import React, { useState } from 'react';
import { TrendingUp, Mail, Send, ArrowRight, Twitter, Linkedin, Instagram, Youtube, Globe, Shield, Award, Zap, ChevronUp } from 'lucide-react';

export default function TradingFooter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Products: ['Trade', 'Markets', 'Portfolio', 'Analytics', 'API', 'Mobile App'],
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partnerships', 'Affiliates'],
    Resources: ['Help Center', 'Tutorials', 'Documentation', 'Status', 'Fees', 'Legal'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer', 'Licenses', 'Compliance']
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const badges = [
    { icon: <Shield className="w-5 h-5" />, text: 'SSL Secured' },
    { icon: <Award className="w-5 h-5" />, text: 'Licensed' },
    { icon: <Zap className="w-5 h-5" />, text: '24/7 Support' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-800/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Stay Ahead of the Market
              </h3>
              <p className="text-slate-400">
                Get exclusive trading insights, market analysis, and updates delivered to your inbox.
              </p>
            </div>
            
            <div className="relative">
              {isSubscribed ? (
                <div className="flex items-center justify-center p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-xl">
                  <div className="flex items-center space-x-2 text-emerald-400">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold">Successfully subscribed!</span>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden focus-within:border-emerald-500/50 transition-all duration-200">
                    <Mail className="w-5 h-5 text-slate-400 ml-4" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-4 bg-transparent text-white placeholder-slate-500 outline-none"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="m-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-200 flex items-center space-x-2"
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-2.5 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">TradePro</span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner in global financial markets. Trade with confidence, backed by institutional-grade technology and security.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 text-sm"
                >
                  <div className="text-emerald-400">{badge.icon}</div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-slate-400" />
              <select className="bg-slate-800/50 border border-slate-700 text-slate-300 rounded-lg px-3 py-2 outline-none focus:border-emerald-500/50 transition-colors cursor-pointer">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
                <option>日本語</option>
                <option>中文</option>
              </select>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-slate-400 hover:text-emerald-400 transition-colors text-sm group flex items-center">
                      <span>{link}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-500 text-sm text-center md:text-left">
              © 2024 TradePro. All rights reserved. Trading involves risk.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, idx) => (
                <button
                  key={idx}
                  className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pb-6">
          <div className="p-4 bg-slate-800/30 border border-slate-800/50 rounded-xl">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-400">Risk Warning:</strong> Trading in financial instruments carries a high level of risk and may not be suitable for all investors. Past performance is not indicative of future results. Please ensure you fully understand the risks involved and seek independent advice if necessary.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </footer>
  );
}