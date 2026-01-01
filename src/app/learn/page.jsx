"use client"
import React, { useState } from 'react';
import { BookOpen, TrendingUp, Shield, Zap, ChevronRight, Play, Clock, Users, Award } from 'lucide-react';

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'beginner', name: 'Beginner', icon: Users },
    { id: 'intermediate', name: 'Intermediate', icon: TrendingUp },
    { id: 'advanced', name: 'Advanced', icon: Award },
  ];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Cryptocurrency Trading',
      category: 'beginner',
      duration: '2h 30m',
      lessons: 12,
      students: '15.2K',
      description: 'Learn the fundamentals of crypto trading, from setting up your first wallet to making your first trade.',
      image: '📚',
      progress: 0,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      category: 'intermediate',
      duration: '4h 15m',
      lessons: 24,
      students: '12.8K',
      description: 'Master chart patterns, indicators, and trading strategies used by professional traders.',
      image: '📈',
      progress: 35,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Risk Management Essentials',
      category: 'beginner',
      duration: '1h 45m',
      lessons: 8,
      students: '18.5K',
      description: 'Protect your investments with proven risk management techniques and strategies.',
      image: '🛡️',
      progress: 0,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      title: 'Advanced Trading Strategies',
      category: 'advanced',
      duration: '6h 20m',
      lessons: 32,
      students: '8.3K',
      description: 'Explore advanced trading techniques including algorithmic trading and market making.',
      image: '🚀',
      progress: 0,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'DeFi & Yield Farming Guide',
      category: 'intermediate',
      duration: '3h 10m',
      lessons: 16,
      students: '10.1K',
      description: 'Discover decentralized finance opportunities and learn how to maximize your yields.',
      image: '🌾',
      progress: 60,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 6,
      title: 'Market Psychology & Trading Mindset',
      category: 'intermediate',
      duration: '2h 50m',
      lessons: 14,
      students: '14.2K',
      description: 'Develop the mental discipline and emotional control needed for successful trading.',
      image: '🧠',
      progress: 0,
      color: 'from-indigo-500 to-purple-600'
    },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const stats = [
    { label: '50+ Courses', value: '50+', icon: BookOpen },
    { label: 'Expert Instructors', value: '25', icon: Users },
    { label: 'Students Enrolled', value: '100K+', icon: TrendingUp },
    { label: 'Completion Rate', value: '87%', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">TradePro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-300 hover:text-white transition">Markets</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Trade</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Portfolio</a>
            <a href="#" className="text-white font-semibold">Learn</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Earn</a>
          </nav>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Master Crypto Trading
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Learn from industry experts and take your trading skills to the next level with our comprehensive courses
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition">
              <stat.icon className="w-8 h-8 text-emerald-400 mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition overflow-hidden group"
            >
              {/* Course Header */}
              <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center text-6xl`}>
                {course.image}
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-semibold text-emerald-400 uppercase">
                    {course.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition">
                  {course.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>

                {/* Progress Bar */}
                {course.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Progress</span>
                      <span className="text-emerald-400 font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button className="w-full bg-slate-700/50 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition group">
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-700/50">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Learn with TradePro?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-slate-400">Learn from professional traders with years of experience in the crypto markets</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Practical Learning</h3>
            <p className="text-slate-400">Apply your knowledge immediately with hands-on exercises and real trading scenarios</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Certifications</h3>
            <p className="text-slate-400">Earn certificates upon completion to showcase your trading expertise</p>
          </div>
        </div>
      </section>
    </div>
  );
}