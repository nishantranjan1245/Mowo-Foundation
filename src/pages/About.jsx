
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Award, Leaf, Heart, Droplets, Globe, Shield, Calendar, MapPin, Trees, Sprout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  useEffect(() => {
    document.title = "About | Mowo Foundation";
  }, []);

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Long-term commitment to caring for planted trees.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Community",
      description: "Involving people in every stage of environmental protection.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Droplets,
      title: "Responsibility",
      description: "Respecting nature's resources and reducing waste.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Transparency",
      description: "Maintaining openness in operations and impact reporting.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Caring for the planet and all living beings that depend on it.",
      color: "from-red-500 to-pink-600"
    }
  ];

  const directors = [
    { name: "Namratha Rai", role: "Director", initial: "N" },
    { name: "Jai Bharathi Addepalli", role: "Director", initial: "J" }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes hero-gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hero-gradient {
          background: linear-gradient(-45deg, 
            rgba(16, 185, 129, 0.15), 
            rgba(20, 184, 166, 0.15), 
            rgba(6, 182, 212, 0.15), 
            rgba(5, 150, 105, 0.15),
            rgba(52, 211, 153, 0.15)
          );
          background-size: 400% 400%;
          animation: hero-gradient-animation 12s ease infinite;
        }

        @keyframes morph-shape {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(0deg); }
          50% { border-radius: 30% 70% 70% 30% / 70% 40% 60% 30%; transform: scale(1.1) rotate(180deg); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(360deg); }
        }
        
        .morph-shape {
          animation: morph-shape 10s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          75% { transform: translateY(15px) rotate(-5deg); opacity: 1; }
        }
        
        .float-icon {
          animation: float-icon 6s ease-in-out infinite;
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-25px) translateX(15px); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(-15px); opacity: 1; }
          75% { transform: translateY(-25px) translateX(15px); opacity: 0.8; }
        }
        
        .floating-particle {
          animation: float-particle 7s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4); }
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, 
            #10b981 0%, 
            #34d399 25%, 
            #14b8a6 50%, 
            #34d399 75%, 
            #10b981 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: text-shimmer 4s linear infinite;
        }

        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .bounce-smooth {
          animation: bounce-smooth 3s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3); }
        }
        .shimmer-card {
          position: relative;
        }
        .shimmer-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer-slide 3s infinite;
          pointer-events: none;
          z-index: 10;
          border-radius: 1.5rem;
        }
        .glow-hover:hover {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced with Animations */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated Morphing Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full morph-shape blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-24 w-40 h-40 border-4 border-emerald-400 rounded-lg rotate-45 rotate-slow"></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border-4 border-teal-400 rounded-full rotate-slow" style={{animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-cyan-400 rotate-12 rotate-slow" style={{animationDelay: '5s'}}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-20 float-icon" style={{animationDelay: '0s'}}>
            <Trees className="w-12 h-12 text-emerald-400/60" />
          </div>
          <div className="absolute top-48 right-28 float-icon" style={{animationDelay: '1s'}}>
            <Leaf className="w-10 h-10 text-teal-400/60" />
          </div>
          <div className="absolute bottom-40 left-1/4 float-icon" style={{animationDelay: '2s'}}>
            <Globe className="w-14 h-14 text-green-400/60" />
          </div>
          <div className="absolute bottom-32 right-1/3 float-icon" style={{animationDelay: '1.5s'}}>
            <Heart className="w-11 h-11 text-pink-400/60" />
          </div>
          <div className="absolute top-1/3 right-1/4 float-icon" style={{animationDelay: '0.7s'}}>
            <Sprout className="w-9 h-9 text-emerald-500/60" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 float-icon" style={{animationDelay: '2.5s'}}>
            <Sparkles className="w-10 h-10 text-yellow-400/60" />
          </div>
          <div className="absolute top-2/3 left-16 float-icon" style={{animationDelay: '3s'}}>
            <Award className="w-11 h-11 text-orange-400/60" />
          </div>
          <div className="absolute top-1/4 left-1/2 float-icon" style={{animationDelay: '1.8s'}}>
            <Shield className="w-10 h-10 text-blue-400/60" />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-12 w-3 h-3 bg-emerald-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-48 right-24 w-2 h-2 bg-teal-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-36 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-24 right-1/3 w-3 h-3 bg-green-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full floating-particle shadow-lg" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-teal-300 rounded-full floating-particle shadow-lg" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-amber-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-400/50 to-emerald-400/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/50 to-teal-400/50 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 bounce-smooth">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl pulse-glow">
                🌿 About Us
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2 text-shimmer drop-shadow-2xl">
                About Mowo Foundation
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 leading-relaxed font-semibold drop-shadow-lg max-w-4xl mx-auto"
              style={{
                color: '#374151',
                textShadow: '0 2px 10px rgba(255, 255, 255, 0.8)'
              }}
            >
              Dedicated to environmental preservation and community-driven sustainability since 2019 🌱
            </motion.p>

            {/* Key Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              <div className="glass-card px-6 py-3 rounded-full border-2 border-emerald-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-emerald-700 font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Since 2019
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-teal-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-teal-700 font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  1,200+ Volunteers
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-cyan-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-cyan-700 font-bold flex items-center gap-2">
                  <Trees className="w-5 h-5" />
                  10,000+ Trees
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <div className="w-8 h-12 border-2 border-emerald-400 rounded-full flex items-start justify-center p-2 shadow-lg glass-card">
            <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Who We Are - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="float-gentle"
            >
              <div className="inline-block mb-6">
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400 glow-hover">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: '#1A4314'}}>
                Protecting Our Planet's <span className="text-yellow-600">Green Cover</span>
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{color: '#555555'}}>
                Mowo Social Initiatives Foundation is a non-profit organization founded in 2019 with a mission to protect, preserve, and promote the green cover of our planet.
              </p>
              <p className="text-lg mb-4 leading-relaxed" style={{color: '#555555'}}>
                We work tirelessly to stop tree cutting, plant new saplings, and care for existing trees — ensuring every seed we plant grows into a symbol of hope for future generations.
              </p>
              <p className="text-lg leading-relaxed" style={{color: '#555555'}}>
                Our work combines on-ground action with community education, encouraging citizens, schools, and organizations to take part in building a sustainable and eco-friendly future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative shimmer-card overflow-hidden rounded-3xl">
                <img
                  src="public/image/image.avif"
                  alt="Community planting"
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl -z-10 opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border-none shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-xl text-green-700 italic mb-4 font-semibold">
                    "A world where people and nature thrive together."
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We envision a future where every community contributes actively to restoring the balance of nature — through mindful planting, responsible living, and collective care for the environment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-none shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700 mb-4 font-semibold">
                    To conserve and expand green spaces by:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Preventing deforestation and illegal tree cutting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Conducting large-scale plantation and care drives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Engaging local communities in tree maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Promoting environmental education in schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Building partnerships for sustainable development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Story
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Every Tree Matters</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Mowo Social Initiatives Foundation was born from a simple belief — every tree matters.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a small local campaign in Telangana has now grown into a state-wide movement for green living. With the support of volunteers, local bodies, and eco-conscious citizens, we've planted and maintained thousands of trees while spreading awareness about the urgent need for climate action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#004D40'}}>Core Values</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#555555'}}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1A4314'}}>Our Leadership Team</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#555555'}}>
              Leading with vision to combine social innovation and community service for environmental betterment across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-none bg-white">
                  <CardContent className="p-10 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <span className="text-white font-bold text-5xl">{director.initial}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                    <p className="text-lg text-green-700 font-semibold">{director.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Legal Information
              </span>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-white border-green-200 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Registered Date</p>
                    <p className="font-bold text-gray-900 text-lg">February 27, 2019</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">CIN</p>
                    <p className="font-bold text-gray-900">U85300TG2019NPL130996</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">FCRA Registration No.</p>
                    <p className="font-bold text-gray-900">368140142</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="font-bold text-gray-900">Telangana, India</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 mb-2 font-semibold">Registered Address:</p>
                <p className="text-gray-700 leading-relaxed">
                  2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                  Shamshiguda, Kukatpally-Balanagar,<br />
                  Telangana – 500072, India
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section - Keep vibrant */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Movement
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Together, we can make every corner of our world greener and cleaner. Be part of the change — plant a tree, volunteer, or support a local drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join Us
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-gradient-600 hover:from-green-600 hover:to-gradient-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Contact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
