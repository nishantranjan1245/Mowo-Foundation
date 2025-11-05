
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Calendar, Heart, Users, ArrowRight, Target, CheckCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function WateringMaintenance() {
  useEffect(() => {
    document.title = "Watering & Maintenance | Mowo Foundation";
  }, []);

  const careProcess = [
    { num: "1", title: "Scheduling & Mapping", desc: "Each plantation site is geo-mapped and assigned a watering schedule based on season and soil type." },
    { num: "2", title: "Volunteer Watering Teams", desc: "Local volunteers and community groups handle regular watering under Mowo supervision." },
    { num: "3", title: "Smart Watering Solutions", desc: "Use of drip irrigation, recycled water, and water-efficient tools to reduce wastage." },
    { num: "4", title: "Monitoring & Reporting", desc: "Tree health and growth are documented periodically using our tracking database." },
    { num: "5", title: "Replacements", desc: "If any tree fails to survive, it is replaced immediately with a new sapling." }
  ];

  const tools = [
    "Drip and sprinkler systems for efficient water use",
    "Organic fertilizers and compost",
    "Protective mesh to prevent damage by animals",
    "Mulching for moisture retention",
    "Rainwater harvesting during monsoon"
  ];

  const successStories = [
    { year: "2024", title: "Community Watering Drive – Hyderabad", desc: "Local volunteers maintained 800 saplings with a 95% survival rate over 12 months." },
    { year: "2023", title: "School Green Zone Program", desc: "Students took responsibility for watering 300 trees on campus, integrating into daily school routines." },
    { year: "2022", title: "Corporate Partnership – EcoWater Drive", desc: "CSR initiative by local businesses to sponsor 1-year maintenance for 1,000 trees." }
  ];

  const impactStats = [
    { value: "7,500+", label: "Trees Cared For since 2019" },
    { value: "15+", label: "Sites Maintained regularly" },
    { value: "800+", label: "Volunteers Engaged" },
    { value: "85-90%", label: "Average Survival Rate" }
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
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.4); }
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
        @keyframes water-drop {
          0%, 100% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(20px); opacity: 0.5; }
        }
        .hero-gradient {
          background: linear-gradient(-45deg, 
            rgba(6, 182, 212, 0.15), 
            rgba(14, 165, 233, 0.15), 
            rgba(59, 130, 246, 0.15), 
            rgba(16, 185, 129, 0.15),
            rgba(20, 184, 166, 0.15)
          );
          background-size: 400% 400%;
          animation: gradient-wave 15s ease infinite;
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
            #0891b2 0%, 
            #06b6d4 25%, 
            #0ea5e9 50%, 
            #06b6d4 75%, 
            #0891b2 100%
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
        .water-drop {
          animation: water-drop 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated Morphing Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full morph-shape blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-24 w-40 h-40 border-4 border-cyan-400 rounded-lg rotate-45 rotate-slow"></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border-4 border-blue-400 rounded-full rotate-slow" style={{animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-teal-400 rotate-12 rotate-slow" style={{animationDelay: '5s'}}></div>
        </div>

        {/* Floating Icons - Water themed */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-20 float-icon" style={{animationDelay: '0s'}}>
            <Droplets className="w-12 h-12 text-cyan-400/60 water-drop" />
          </div>
          <div className="absolute top-48 right-28 float-icon" style={{animationDelay: '1s'}}>
            <Heart className="w-10 h-10 text-pink-400/60" />
          </div>
          <div className="absolute bottom-40 left-1/4 float-icon" style={{animationDelay: '2s'}}>
            <Calendar className="w-14 h-14 text-blue-400/60" />
          </div>
          <div className="absolute bottom-32 right-1/3 float-icon" style={{animationDelay: '1.5s'}}>
            <Users className="w-11 h-11 text-green-400/60" />
          </div>
          <div className="absolute top-1/3 right-1/4 float-icon" style={{animationDelay: '0.7s'}}>
            <Target className="w-9 h-9 text-cyan-500/60" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 float-icon" style={{animationDelay: '2.5s'}}>
            <Award className="w-10 h-10 text-blue-400/60" />
          </div>
        </div>

        {/* Floating Water Droplets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-blue-400 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-teal-400 rounded-full floating-particle shadow-lg water-drop" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 bounce-smooth">
              <span className="glass-card text-cyan-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-cyan-300 shadow-2xl pulse-glow">
                💧 Our Initiative
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2 text-shimmer drop-shadow-2xl">
                Watering & Maintenance
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-600 italic font-bold mb-6 drop-shadow-lg">
              💧 "Planting is the beginning — caring keeps it alive."
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold"
            >
              True environmental impact comes from ensuring every tree survives and flourishes through regular care and community participation. 🌱
            </motion.p>

            {/* Key Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              <div className="glass-card px-6 py-3 rounded-full border-2 border-cyan-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-cyan-700 font-bold flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  7,500+ Trees Cared
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-blue-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-blue-700 font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  800+ Volunteers
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-teal-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-teal-700 font-bold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  85-90% Survival
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2 shadow-lg glass-card">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why It's Important */}
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
          >
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Why It's Important</h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                  Many plantation drives fail because saplings are left uncared for after planting. Without water, protection, and nourishment, they often don't survive beyond a few months.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">That's why our approach goes beyond plantation — we ensure:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {[
                    "Regular watering cycles",
                    "Monitoring of growth and health",
                    "Soil and root care",
                    "Replacement of damaged plants",
                    "Long-term survival audits"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-2xl text-center">
                  <Target className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-2xl font-bold">
                    🌿 Our goal is to achieve 90%+ survival rate for every tree planted under the Mowo Foundation banner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">How We Do It</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              🪣 Step-by-Step Tree Care Process:
            </p>
          </div>

          <div className="space-y-8">
            {careProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-3xl font-bold text-white">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Participation */}
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
              <CardContent className="p-12 text-center">
                <Heart className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Participation</h2>
                <p className="text-2xl text-emerald-700 italic mb-8 font-semibold">
                  🤝 "When people care, nature flourishes."
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                  We encourage citizens, schools, and corporates to participate through our "Adopt a Tree" initiative. Participants pledge to water and maintain a chosen number of trees for at least one year. This program not only sustains greenery but also builds a sense of ownership and environmental responsibility.
                </p>

                <div className="flex gap-6 justify-center">
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-10 py-6 rounded-full shadow-lg text-lg">
                      Adopt a Tree <Heart className="ml-2 w-6 h-6" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-6 rounded-full font-bold text-lg">
                      Volunteer for Watering
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tools & Techniques */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Tools & Techniques</h2>
            <p className="text-xl text-gray-700">🧰 Our maintenance teams use:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <Droplets className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{tool}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-xl">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation Highlight:</h3>
              <p className="text-lg text-gray-700">
                We are piloting IoT-based water scheduling systems for better monitoring and reduced resource waste.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      📍 {story.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{story.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">📈 Our Maintenance Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-white mb-3">{stat.value}</div>
                    <div className="text-lg text-green-100">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              💚 "Every drop you give, gives life to a tree."
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Join the Watering & Maintenance Program and be part of Mowo's mission to nurture every planted tree into a lasting legacy for future generations. 🌎🌿
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Volunteer <Users className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" variant="outline" className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 text-lg px-12 py-6 rounded-full font-bold">
                  Adopt a Tree
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-dark-green-600 hover:from-green-600 hover:to-dark-green-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
