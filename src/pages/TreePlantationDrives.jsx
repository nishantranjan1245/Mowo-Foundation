
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees, MapPin, Users, Calendar, CheckCircle, Sprout, ArrowRight, Heart, Leaf, Shield, Target, Award, TrendingUp, Droplets, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function TreePlantationDrives() {
  useEffect(() => {
    document.title = "Tree Plantation Drives | Mowo Foundation";
  }, []);

  const workProcess = [
    { num: "1", title: "Site Identification", desc: "We collaborate with local bodies, schools, and communities to select safe, suitable, and sustainable locations." },
    { num: "2", title: "Sapling Selection", desc: "Native species are chosen for better survival and biodiversity balance." },
    { num: "3", title: "Community Engagement", desc: "Local residents, volunteers, and schools are involved to ensure continued care after planting." },
    { num: "4", title: "Plantation Day", desc: "We conduct guided drives with soil preparation, spacing, and protective measures." },
    { num: "5", title: "Post-Plantation Monitoring", desc: "Each tree is geo-tagged and periodically monitored for survival, watering, and growth." }
  ];

  const highlights = [
    { icon: Trees, value: "10,000+", label: "Trees Planted", desc: "across Telangana and nearby states", color: "from-green-500 to-emerald-600" },
    { icon: Users, value: "50+", label: "Schools Engaged", desc: "in eco-awareness programs", color: "from-blue-500 to-cyan-600" },
    { icon: Heart, value: "1,200+", label: "Volunteers", desc: "participated in field activities", color: "from-pink-500 to-rose-600" },
    { icon: Droplets, value: "80%+", label: "Survival Rate", desc: "through ongoing care", color: "from-cyan-500 to-blue-600" },
    { icon: Sparkles, value: "20+", label: "Local Partnerships", desc: "with communities and institutions", color: "from-purple-500 to-indigo-600" }
  ];

  const recentDrives = [
    { year: "2024", title: "Allwyn Colony Urban Green Belt", desc: "500 saplings planted in collaboration with local schools and volunteers.", icon: MapPin },
    { year: "2023", title: "Eco School Drive – Hyderabad", desc: "Students planted 300 native trees and adopted them for care.", icon: Leaf },
    { year: "2022", title: "Community Green Zone – Kukatpally", desc: "Reclaimed open area transformed into a mini forest with 1,000 saplings.", icon: Trees },
    { year: "2021", title: "Highway Plantation", desc: "3 km stretch of barren roadside converted into a green corridor.", icon: Target }
  ];

  const testimonials = [
    { quote: "It was my first time volunteering for a plantation drive — Mowo's team made it meaningful and educational!", author: "Srinivas", role: "Volunteer", avatar: "S" },
    { quote: "Our school's green initiative with Mowo changed how students view the environment.", author: "Principal", role: "Hyderabad Public School", avatar: "P" }
  ];

  const careProgram = [
    "Regular watering schedules",
    "Periodic growth monitoring",
    "Replacement of damaged plants",
    "Maintenance of protective fencing"
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.9; }
          75% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        @keyframes morph-shape {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(0deg); }
          50% { border-radius: 30% 70% 70% 30% / 70% 40% 60% 30%; transform: scale(1.1) rotate(180deg); }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: scale(1) rotate(360deg); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-15px) rotate(5deg); opacity: 1; }
          50% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          75% { transform: translateY(15px) rotate(-5deg); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4); }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          animation: gradient-wave 12s ease infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        .floating-particle {
          animation: float-particles 8s ease-in-out infinite;
        }
        .morph-shape {
          animation: morph-shape 10s ease-in-out infinite;
        }
        .float-icon {
          animation: float-icon 6s ease-in-out infinite;
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
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
        .rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        .bounce-smooth {
          animation: bounce-smooth 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced */}
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
            <Sprout className="w-14 h-14 text-green-400/60" />
          </div>
          <div className="absolute bottom-32 right-1/3 float-icon" style={{animationDelay: '1.5s'}}>
            <Heart className="w-11 h-11 text-pink-400/60" />
          </div>
          <div className="absolute top-1/3 right-1/4 float-icon" style={{animationDelay: '0.7s'}}>
            <Globe className="w-9 h-9 text-emerald-500/60" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 float-icon" style={{animationDelay: '2.5s'}}>
            <Sparkles className="w-10 h-10 text-yellow-400/60" />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-400 rounded-full floating-particle" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-teal-400 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full floating-particle" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-emerald-300 rounded-full floating-particle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-teal-300 rounded-full floating-particle" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 bounce-smooth">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl pulse-glow">
                🌳 Our Initiative
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2 text-shimmer drop-shadow-2xl">
                Tree Plantation Drives
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-600 italic font-bold mb-6 drop-shadow-lg">
              🌱 "Every tree we plant is a promise to the planet."
            </p>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
              Large-scale initiatives to restore green cover across India, one sapling at a time.
            </p>

            {/* Key Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              <div className="glass-card px-6 py-3 rounded-full border-2 border-emerald-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-emerald-700 font-bold flex items-center gap-2">
                  <Trees className="w-5 h-5" />
                  10,000+ Trees
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
                  <TrendingUp className="w-5 h-5" />
                  80%+ Survival
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

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Introduction</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              At Mowo Social Initiatives Foundation, our Tree Plantation Drives form the heart of our environmental mission. We organize large-scale, community-led plantation campaigns to increase green cover, improve air quality, and build sustainable ecosystems — one sapling at a time.
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
              Our goal is not just to plant trees, but to ensure they grow, survive, and thrive for years to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose of the Drive */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Purpose of the Drive</h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                  Deforestation, rapid urbanization, and pollution have drastically reduced tree cover in India. Our plantation drives aim to:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Trees, text: "Restore lost greenery in urban and rural areas" },
                    { icon: Globe, text: "Create natural habitats for birds and small animals" },
                    { icon: Droplets, text: "Improve soil quality and groundwater levels" },
                    { icon: Users, text: "Spread environmental awareness among citizens" },
                    { icon: Heart, text: "Encourage public participation and community ownership" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-green-50 p-6 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg pt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How Our Drives Work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">How Our Drives Work</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mowo's plantation drives are designed for impact — not just visibility.
            </p>
          </div>

          <div className="space-y-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-3xl font-bold text-white">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Highlights of Our Plantation Drives</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{highlight.value}</div>
                    <div className="text-lg text-green-100 font-semibold mb-1">{highlight.label}</div>
                    <div className="text-sm text-green-200">{highlight.desc}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Drives */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Recent Drives</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentDrives.map((drive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <drive.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                        📍 {drive.year}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{drive.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{drive.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-emerald-800 mb-4 text-center">Get Involved</h2>
                <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                  Be part of our upcoming tree plantation campaigns! You can:
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  {[
                    { icon: Users, title: "Volunteer", desc: "Join on-ground drives in your city", color: "from-green-500 to-emerald-600" },
                    { icon: Heart, title: "Adopt Trees", desc: "Sponsor saplings and receive regular updates", color: "from-pink-500 to-rose-600" },
                    { icon: Sparkles, title: "Partner with Us", desc: "Host plantation drives for your company or institution", color: "from-purple-500 to-indigo-600" }
                  ].map((item, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Join a Drive <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Adopt a Tree <Heart className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-bold">
                      CSR Partnership
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Post-Drive Tree Care Program */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-none shadow-xl">
              <CardContent className="p-12 text-center">
                <Droplets className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-emerald-800 mb-4">Post-Drive Tree Care Program</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  Our work doesn't end with planting. We ensure the long-term survival of every sapling through:
                </p>

                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                  {careProgram.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 font-semibold">
                  This approach ensures that each tree contributes effectively to environmental restoration.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Testimonials</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-none shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-10">
                    <div className="text-6xl text-emerald-600 mb-4">"</div>
                    <p className="text-xl text-gray-800 mb-8 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
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
        </div>
      </section>

      {/* Upcoming Drives */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 border-none text-white shadow-2xl">
              <CardContent className="p-12">
                <Calendar className="w-20 h-20 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Drives</h2>
                <p className="text-2xl mb-2 font-semibold">📅 Next Drive: December 2025</p>
                <p className="text-xl mb-8">Hyderabad Urban Forest Project</p>
                <p className="text-lg text-green-100 mb-10">📍 Location details will be shared soon</p>
                <Link to={createPageUrl("GetInvolved")}>
                  <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                    Register Now <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              🌍 "Together, we can turn empty lands into living forests."
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Join hands with Mowo Social Initiatives Foundation — let's make India greener, one tree at a time. 🌳💚
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join a Drive <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-gradient-green-600 hover:from-green-600 hover:to-gradient-green-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate Now <Heart className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Volunteer <Users className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
