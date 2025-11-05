
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Droplets, Heart, Trees, School, MapPin, Calendar, ArrowRight, Shield, Sprout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    document.title = "Mowo Foundation | Nurturing Nature, Empowering Communities";
    
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    {
      icon: Trees,
      title: "Tree Plantation Drives",
      description: "Large-scale plantation initiatives in public and rural areas across India.",
      gradient: "from-[#4CAF50] via-[#66BB6A] to-[#009688]",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      iconColor: "text-[#1B5E20]",
      bgPattern: "from-emerald-500/5 via-teal-500/5 to-green-600/5"
    },
    {
      icon: Shield,
      title: "Save Trees Campaign",
      description: "Preventing illegal cutting through awareness and action to protect our environment.",
      gradient: "from-orange-500 via-[#FF9800] to-[#F57C00]",
      iconBg: "bg-gradient-to-br from-orange-100 to-amber-100",
      iconColor: "text-orange-700",
      bgPattern: "from-orange-500/5 via-amber-500/5 to-yellow-600/5"
    },
    {
      icon: Droplets,
      title: "Tree Care & Watering",
      description: "Ensuring every planted tree survives and thrives with regular maintenance.",
      gradient: "from-[#00BCD4] via-[#26C6DA] to-[#00ACC1]",
      iconBg: "bg-gradient-to-br from-cyan-100 to-blue-100",
      iconColor: "text-[#006064]",
      bgPattern: "from-cyan-500/5 via-blue-500/5 to-indigo-600/5"
    },
    {
      icon: School,
      title: "Community Engagement",
      description: "Educating citizens and schools about sustainability and environmental care.",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-600",
      iconBg: "bg-gradient-to-br from-purple-100 to-violet-100",
      iconColor: "text-purple-700",
      bgPattern: "from-purple-500/5 via-violet-500/5 to-fuchsia-600/5"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Trees Planted", icon: Trees, color: "from-[#4CAF50] to-[#009688]" },
    { value: "1,200+", label: "Volunteers Engaged", icon: Users, color: "from-[#00BCD4] to-[#00ACC1]" },
    { value: "50+", label: "Awareness Events", icon: School, color: "from-purple-400 to-violet-500" },
    { value: "5", label: "States Active", icon: MapPin, color: "from-[#FF9800] to-[#F57C00]" }
  ];

  const testimonials = [
    {
      quote: "Planting a tree with Mowo gave me a sense of purpose. I feel I'm truly giving back to nature.",
      author: "Ananya",
      role: "Volunteer",
      avatar: "A",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      quote: "The dedication of the Mowo team is incredible. They don't just plant trees, they nurture communities and create lasting change.",
      author: "Rajesh Kumar",
      role: "Corporate Partner",
      avatar: "R",
      gradient: "from-[#00BCD4] to-[#00ACC1]"
    }
  ];

  const galleryImages = [
    "/image/image2.png",
    "/image/image3.png",
    "/image/image4.png",
    "/image/image5.png",
    "/image/image-6.png",
    "/image/image7.png"
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        /* Original animations keeping */
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .wave-animation { animation: wave 3s ease-in-out infinite; }

        .gradient-overlay {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(20, 184, 166, 0.95) 50%, rgba(6, 182, 212, 0.95) 100%);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(16, 185, 129, 0.3) 100%);
        }

        .hero-pattern {
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%);
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #fef9c3 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes rotateScale {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(67, 175, 177, 0.5); }
          50% { box-shadow: 0 0 40px rgba(67, 175, 177, 0.8), 0 0 60px rgba(67, 175, 177, 0.6); }
        }

        .slide-down { animation: slideDown 1s ease-out forwards; }
        .slide-up { animation: slideUp 1s ease-out forwards; }
        .zoom-in { animation: zoomIn 1s ease-out forwards; }
        .fade-in { animation: fadeIn 1.5s ease-out forwards; }
        .float-up-down { animation: floatUpDown 4s ease-in-out infinite; }
        .rotate-scale { animation: rotateScale 10s ease-in-out infinite; }
        .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }

        .hero-overlay {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(20, 184, 166, 0.85) 50%, rgba(6, 182, 212, 0.9) 100%);
        }

        .gradient-text {
          background: linear-gradient(90deg, #fff, #fef9c3, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        /* NEW UNIQUE DESIGN ANIMATIONS */
        @keyframes hexFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        @keyframes lineGrow {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        @keyframes gridSlide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
        }

        @keyframes waveFlow {
          0% { d: path("M0,50 Q25,40 50,50 T100,50"); }
          50% { d: path("M0,50 Q25,60 50,50 T100,50"); }
          100% { d: path("M0,50 Q25,40 50,50 T100,50"); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(19, 178, 161, 0.3),
                         0 0 20px rgba(19, 178, 161, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(19, 178, 161, 0.6),
                         0 0 40px rgba(19, 178, 161, 0.4),
                         0 0 60px rgba(19, 178, 161, 0.3);
          }
        }

        @keyframes waveAnimation {
          0% { transform: translateY(0) scaleX(1); }
          25% { transform: translateY(-5px) scaleX(1.02); }
          50% { transform: translateY(0) scaleX(1); }
          75% { transform: translateY(5px) scaleX(0.98); }
          100% { transform: translateY(0) scaleX(1); }
        }

        .fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .slide-in-left { animation: slideInLeft 1s ease-out forwards; }
        .slide-in-right { animation: slideInRight 1s ease-out forwards; }
        .scale-in { animation: scaleIn 1s ease-out forwards; }
        .text-glow { animation: textGlow 3s ease-in-out infinite; }
        .wave-text { animation: waveAnimation 2s ease-in-out infinite; }

        .hex-float { animation: hexFloat 8s ease-in-out infinite; }
        .line-grow { animation: lineGrow 2s ease-out forwards; }
        .dot-pulse { animation: dotPulse 3s ease-in-out infinite; }
        .grid-slide { animation: gridSlide 20s linear infinite; }

        /* Hexagon Shape */
        .hexagon {
          width: 100px;
          height: 57.735px;
          position: relative;
        }
        .hexagon::before,
        .hexagon::after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
        }
        .hexagon::before {
          bottom: 100%;
          border-bottom: 28.8675px solid;
        }
        .hexagon::after {
          top: 100%;
          border-top: 28.8675px solid;
        }

        /* Network Lines */
        .network-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent);
          transform-origin: left;
        }
      `}</style>

      {/* Hero Section - UNIQUE NEW DESIGN */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E0F2F7] via-[#E8F5E9] to-[#F1F8E9]">
        
        {/* Animated Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full grid-slide" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hexagonal Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="hexagon hex-float absolute"
              style={{
                top: `${10 + (i % 3) * 30}%`,
                left: `${10 + (i % 4) * 25}%`,
                opacity: 0.15,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Network Connection Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" className="line-grow" style={{animationDelay: '0.5s'}} />
            <line x1="70%" y1="30%" x2="85%" y2="60%" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="2" className="line-grow" style={{animationDelay: '1s'}} />
            <line x1="20%" y1="70%" x2="50%" y2="80%" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="2" className="line-grow" style={{animationDelay: '1.5s'}} />
            <line x1="60%" y1="20%" x2="40%" y2="50%" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" className="line-grow" style={{animationDelay: '2s'}} />
          </svg>
        </div>

        {/* Floating Dots Network */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-emerald-400 rounded-full dot-pulse shadow-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Organic Wave Shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="3">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M0,500 Q250,400 500,500 T1000,500;
                        M0,500 Q250,600 500,500 T1000,500;
                        M0,500 Q250,400 500,500 T1000,500" />
            </path>
            <path d="M0,300 Q250,200 500,300 T1000,300" fill="none" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="2">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,300 Q250,200 500,300 T1000,300;
                        M0,300 Q250,400 500,300 T1000,300;
                        M0,300 Q250,200 500,300 T1000,300" />
            </path>
            <path d="M0,700 Q250,600 500,700 T1000,700" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2">
              <animate attributeName="d" dur="14s" repeatCount="indefinite"
                values="M0,700 Q250,600 500,700 T1000,700;
                        M0,700 Q250,800 500,700 T1000,700;
                        M0,700 Q250,600 500,700 T1000,700" />
            </path>
          </svg>
        </div>

        {/* Geometric Diamond Shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 border-2 border-teal-400 transform rotate-45 hex-float"
              style={{
                top: `${15 + i * 15}%`,
                right: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        {/* Star/Plus Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute hex-float"
              style={{
                top: `${10 + (i * 10)}%`,
                left: `${5 + (i % 5) * 20}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-emerald-400">
                <path d="M16 0 L18 14 L32 16 L18 18 L16 32 L14 18 L0 16 L14 14 Z" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Triangular Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,50 125,100 75,100" fill="rgba(16, 185, 129, 0.5)" className="hex-float" style={{animationDelay: '0s'}} />
            <polygon points="900,200 925,250 875,250" fill="rgba(20, 184, 166, 0.5)" className="hex-float" style={{animationDelay: '1s'}} />
            <polygon points="200,700 225,750 175,750" fill="rgba(6, 182, 212, 0.5)" className="hex-float" style={{animationDelay: '2s'}} />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading with Animations */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              <div className="slide-in-left" style={{color: '#1a4c3d', animationDelay: '0.2s'}}>
                Nurturing Nature,
              </div>
              <div className="text-glow wave-text slide-in-right mt-4" style={{color: '#13b2a1', animationDelay: '0.4s'}}>
                One Tree at a Time
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl lg:text-4xl mb-12 max-w-3xl mx-auto leading-relaxed mt-8 px-4 font-medium fade-in-up" style={{color: '#394353', animationDelay: '0.6s'}}>
              Together, we can restore our planet's green cover through tree plantation, care, and awareness programs that empower communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 scale-in" style={{animationDelay: '0.8s'}}>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-[#009688] hover:bg-gray-50 text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border-2 border-[#009688]/20 font-bold min-w-[160px]">
                  Join Us →
                </Button>
              </Link>
              
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-[#43afb1] to-[#38999b] hover:from-[#38999b] hover:to-[#2d8587] text-white text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border-none font-bold min-w-[160px]">
                  Donate Now ♥
                </Button>
              </Link>
            </div>

            {/* Stats Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 fade-in-up" style={{animationDelay: '1s'}}>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-[#009688]/10 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2">
                  <Trees className="w-5 h-5 text-[#009688]" />
                  <span className="text-gray-800 font-semibold text-sm md:text-mowo">10,000+ Trees Planted</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-[#00BCD4]/10 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00BCD4]" />
                  <span className="text-gray-800 font-semibold text-sm md:text-mowo">1,200+ Volunteers</span>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-[#26A69A]/10 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#26A69A]" />
                  <span className="text-gray-800 font-semibold text-sm md:text-mowo">Since 2019</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64 L48,58.7 C96,53,192,43,288,48 C384,53,480,75,576,80 C672,85,768,75,864,64 C960,53,1056,43,1152,48 C1248,53,1344,75,1392,85.3 L1440,96 L1440,120 L0,120 Z" fill="rgba(248, 250, 252, 1)"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative shimmer-effect overflow-hidden rounded-3xl">
                <img
                  src="public/image/image.avif"
                  alt="Community tree planting"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl -z-10 opacity-50 blur-xl animate-pulse"></div>
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl border-2 border-yellow-300">
                  <p className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">2019</p>
                  <p className="text-sm text-teal-800 mb-1 font-bold">Established</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-5 py-3 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-400">
                  About Mowo Foundation
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: '#1A4D2E'}}>
                Protecting India's <span className="text-yellow-600">Green Cover</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed font-medium" style={{color: '#333333'}}>
                Founded in 2019, Mowo Social Initiatives Foundation is a non-profit organization dedicated to protecting and expanding India's green cover.
              </p>
              <p className="text-lg mb-8 leading-relaxed font-medium" style={{color: '#333333'}}>
                We work to prevent illegal tree cutting, conduct plantation drives, and ensure long-term maintenance through regular watering and community participation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/95 p-5 rounded-2xl shadow-lg border-2 border-yellow-300 hover:shadow-2xl transition-all hover:scale-105">
                  <Calendar className="w-7 h-7 text-teal-700 mb-2" />
                  <p className="text-xs text-teal-600 mb-1 font-bold">Registered</p>
                  <p className="font-bold text-teal-800">Feb 27, 2019</p>
                </div>
                <div className="bg-white/95 p-5 rounded-2xl shadow-lg border-2 border-orange-300 hover:shadow-2xl transition-all hover:scale-105">
                  <p className="text-xs text-orange-600 mb-1 font-bold">CIN</p>
                  <p className="font-bold text-orange-800 text-xs">U85300TG2019NPL130996</p>
                </div>
                <div className="bg-white/95 p-5 rounded-2xl shadow-lg border-2 border-pink-300 hover:shadow-2xl transition-all hover:scale-105">
                  <p className="text-xs text-pink-600 mb-1 font-bold">FCRA</p>
                  <p className="font-bold text-pink-800">368140142</p>
                </div>
              </div>

              <Link to={createPageUrl("About")}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-none font-bold">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-800 px-5 py-3 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-400">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#004D40'}}>Our Key Programs</h2>
            <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#555555'}}>
              Comprehensive initiatives designed to create lasting environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-yellow-300 bg-white group cursor-pointer overflow-hidden relative">
                  <CardContent className="p-8 relative z-10">
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`w-20 h-20 ${program.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10 border-2 border-yellow-300`}>
                      <program.icon className={`w-10 h-10 ${program.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{program.title}</h3>
                    <p className="text-gray-700 leading-relaxed relative z-10 font-medium">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Programs")}>
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-none font-bold">
                Explore All Programs <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="stats-section" className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-white/95 text-emerald-800 px-5 py-3 rounded-full text-sm font-bold border-2 border-yellow-300 shadow-xl">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Impact Highlights</h2>
            <p className="text-xl text-yellow-300 font-bold drop-shadow-md">Making a real difference, one tree at a time</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 hover:bg-white/30 transition-all duration-300 group cursor-pointer border-2 border-white/30 shadow-2xl hover:shadow-3xl hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl relative z-10 border-2 border-yellow-300`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white mb-3 drop-shadow-lg">{stat.value}</div>
                  <div className="text-lg text-yellow-300 font-bold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Impact")}>
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-yellow-300 hover:text-emerald-900 rounded-full px-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-none font-bold">
                View Our Impact <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 relative overflow-hidden">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-800 px-5 py-3 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-400">
                Get Involved
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1A4314'}}>
              Be a Part of the Green Movement 🌎
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#555555'}}>
              Whether you're an individual, school, or organization — you can make a real impact. Join our volunteer team, adopt a tree, or support a drive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 bg-white group overflow-hidden relative hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-[#009688]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-[#4CAF50] to-[#009688] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl relative z-10 border-2 border-yellow-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Volunteer Now</h3>
                <p className="text-gray-700 mb-6 relative z-10 font-medium">Join our team and make hands-on impact in your community through tree plantation drives</p>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button className="bg-gradient-to-r from-[#4CAF50] to-[#009688] hover:from-[#388E3C] hover:to-[#00796B] rounded-full relative z-10 border-none text-white shadow-lg hover:shadow-xl transition-all font-bold">
                    Become a Volunteer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 bg-white group overflow-hidden relative hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BCD4]/5 to-[#00ACC1]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-[#00BCD4] to-[#00ACC1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl relative z-10 border-2 border-yellow-300">
                  <Sprout className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Adopt a Tree</h3>
                <p className="text-gray-700 mb-6 relative z-10 font-medium">Take responsibility for nurturing a tree and watch it grow under your care</p>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button className="bg-gradient-to-r from-[#00BCD4] to-[#00ACC1] hover:from-[#00ACC1] hover:to-[#0097A7] rounded-full relative z-10 border-none text-white shadow-lg hover:shadow-xl transition-all font-bold">
                    Adopt Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300 bg-white group overflow-hidden relative hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl relative z-10 border-2 border-yellow-300">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Corporate Partnership</h3>
                <p className="text-gray-700 mb-6 relative z-10 font-medium">Partner with us for CSR and sustainability initiatives that create lasting impact</p>
                <Link to={createPageUrl("Contact")}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full relative z-10 border-none text-white shadow-lg hover:shadow-xl transition-all font-bold">
                    Partner With Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials & Gallery */}
      <section className="py-24 bg-gradient-to-br from-cyan-50 via-sky-100 to-blue-50 relative overflow-hidden">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-cyan-100 text-cyan-800 px-5 py-3 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-400">
                Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#004D40'}}>Moments that Inspire</h2>
            <p className="text-xl text-yellow-600 font-bold">Stories from our community of changemakers</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-2 border-yellow-300 hover:shadow-2xl transition-all hover:scale-105">
                  <CardContent className="p-10">
                    <div className="text-7xl bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4 font-serif">"</div>
                    <p className="text-xl text-gray-800 mb-8 italic leading-relaxed font-medium">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-xl border-2 border-yellow-300`}>
                        <span className="text-white font-bold text-2xl">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                        <p className="text-sm text-gray-700 font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-yellow-300"
              >
                <img
                  src={image}
                  alt={`Plantation activity ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Drive CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <span className="bg-white/95 text-emerald-800 px-6 py-3 rounded-full text-sm font-bold border-2 border-yellow-300 shadow-xl">
                Upcoming Event
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Join Our Next Tree Plantation Drive!
            </h2>
            <p className="text-xl md:text-2xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-bold drop-shadow-lg">
              Our next community event is scheduled soon — register now and be part of the change.
            </p>
            <Link to={createPageUrl("GetInvolved")}>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-green-300 hover:text-emerald-800 text-xl px-12 py-7 shadow-2xl rounded-full font-bold hover:scale-105 transition-all border-none">
                Register Now <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
