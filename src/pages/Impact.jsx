
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees, Users, School, MapPin, Droplets, Heart, Award, TrendingUp, Image as ImageIcon, ArrowRight, Calendar } from "lucide-react"; // Added Calendar import
import { motion } from "framer-motion";

export default function Impact() {
  useEffect(() => {
    document.title = "Impact | Mowo Foundation";
  }, []);

  const mainStats = [
    { icon: Trees, value: "10,000+", label: "Trees Planted", color: "from-green-500 to-emerald-600" },
    { icon: Users, value: "1,200+", label: "Volunteers Engaged", color: "from-blue-500 to-cyan-600" },
    { icon: School, value: "50+", label: "Awareness Events", color: "from-purple-500 to-indigo-600" },
    { icon: MapPin, value: "5", label: "States Active", color: "from-orange-500 to-amber-600" }
  ];

  const greenFootprint = [
    { label: "Trees Planted", value: "10,000+", description: "across Telangana and neighboring states" },
    { label: "Tree Care & Maintenance", value: "7,500+", description: "trees nurtured and watered regularly" },
    { label: "Volunteers Engaged", value: "1,200+", description: "active members" },
    { label: "Awareness Programs", value: "50+", description: "in schools, colleges, and communities" },
    { label: "Adopted Green Zones", value: "20+", description: "urban and rural locations maintained" },
    { label: "Communities Impacted", value: "15,000+", description: "people reached through campaigns" }
  ];

  const successStories = [
    {
      title: "Allwyn Colony Drive, Telangana (2022)",
      description: "500+ saplings planted; 90% survival rate.",
      icon: Trees
    },
    {
      title: "Green School Program",
      description: "Students planted and cared for 100 trees within their campus.",
      icon: School
    },
    {
      title: "Highway Belt Plantation",
      description: "Trees planted along 3 km stretch to reduce air and noise pollution.",
      icon: MapPin
    }
  ];

  const futureGoals = [
    { value: "50,000", label: "New Trees to Plant & Sustain" },
    { value: "100", label: "Green Clubs in Schools" },
    { value: "10,000", label: "New Volunteers to Engage" },
    { value: "95%", label: "Target Survival Rate" }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes counter-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes glow-pulse-strong {
          0%, 100% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 80px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 60px rgba(16, 185, 129, 0.8), 0 0 120px rgba(16, 185, 129, 0.5); }
        }
        @keyframes chart-rise {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes trophy-bounce {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        @keyframes stat-pop {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.9; }
          75% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        .hero-gradient {
          background: linear-gradient(-45deg, 
            rgba(16, 185, 129, 0.1), 
            rgba(20, 184, 166, 0.1), 
            rgba(6, 182, 212, 0.1), 
            rgba(5, 150, 105, 0.1)
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
        .counter-up {
          animation: counter-up 0.8s ease-out;
        }
        .glow-pulse-strong {
          animation: glow-pulse-strong 2s ease-in-out infinite;
        }
        .chart-rise {
          animation: chart-rise 1.5s ease-out;
        }
        .trophy-bounce {
          animation: trophy-bounce 3s ease-in-out infinite;
        }
        .stat-pop {
          animation: stat-pop 0.6s ease-out;
        }
        .impact-bar {
          height: 8px;
          background: linear-gradient(90deg, #10b981, #14b8a6, #06b6d4);
          border-radius: 999px;
          animation: chart-rise 1.5s ease-out;
        }
      `}</style>

      {/* Hero Section - Enhanced with Statistics Animation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated Chart Bars in Background */}
        <div className="absolute inset-0 opacity-10">
          {[60, 80, 90, 70, 95, 85].map((height, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-emerald-500 to-teal-500 chart-rise"
              style={{
                left: `${10 + i * 15}%`,
                width: '8%',
                height: `${height}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Trophy Icon */}
        <div className="absolute top-20 right-20">
          <Award className="w-24 h-24 text-yellow-400 opacity-40 trophy-bounce" />
        </div>
        <div className="absolute bottom-32 left-20">
          <TrendingUp className="w-20 h-20 text-green-400 opacity-40 trophy-bounce" style={{animationDelay: '1s'}} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-400 rounded-full floating-particle" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-teal-400 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full floating-particle" style={{animationDelay: '1.5s'}}></div>
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
            <div className="inline-block mb-8 glow-pulse-strong">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl">
                📊 Our Impact
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mb-8 drop-shadow-2xl">
              Our Impact
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-600 italic mb-6 font-bold drop-shadow-lg">
              "Every tree tells a story of hope." 🌳
            </p>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold mb-12">
              Since our inception in 2019, Mowo Social Initiatives Foundation has been working to protect and expand India's green cover through sustainable and community-driven actions.
            </p>

            {/* Live Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
              {[
                { value: '10,000+', label: 'Trees Planted', icon: Trees, color: 'from-green-500 to-emerald-600', delay: '0s' },
                { value: '1,200+', label: 'Volunteers', icon: Users, color: 'from-blue-500 to-cyan-600', delay: '0.2s' },
                { value: '50+', label: 'Events', icon: Calendar, color: 'from-purple-500 to-indigo-600', delay: '0.4s' },
                { value: '5', label: 'States', icon: MapPin, color: 'from-orange-500 to-amber-600', delay: '0.6s' }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl glow-pulse-strong stat-pop" style={{animationDelay: stat.delay}}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 counter-up">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                  <div className="impact-bar mt-4" style={{animationDelay: `${index * 0.3}s`}}></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 74.7C120 69 240 59 360 58.7C480 59 600 69 720 74.7C840 80 960 80 1080 74.7C1200 69 1320 59 1380 53.3L1440 48V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="rgba(240, 253, 244, 0.8)"/>
          </svg>
        </div>
      </section>

      {/* Introduction - Soft gradient */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed" style={{color: '#555555'}}>
              Our impact is visible not just in the number of trees planted, but in the lives we've touched, the communities we've educated, and the ecosystems we've helped restore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Statistics - Soft gradient */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-lg text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Green Footprint Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Green Footprint 📊</h3>
                <div className="space-y-4">
                  {greenFootprint.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-green-200 last:border-0">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-lg">{item.label}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <div className="text-3xl font-bold text-green-700">{item.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6 text-center italic">
                  (Data continuously updated based on verified activities and reports.)
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#1A4314'}}>Tree Plantation Success Stories</h2>
            <p className="text-xl text-yellow-600 italic font-semibold">
              "From barren land to breathing space."
            </p>
            <p className="text-lg max-w-3xl mx-auto mt-4" style={{color: '#555555'}}>
              We've transformed open plots, school grounds, and community areas into thriving green spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-none bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                      <story.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full px-8 shadow-lg">
                View Plantation Gallery <ImageIcon className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community & Women Impact - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-xl h-full">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Community Impact</h3>
                  <p className="text-xl text-blue-700 italic mb-6 font-semibold">
                    "Building environmental ownership, one citizen at a time."
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our greatest success is seeing people take responsibility for nature. Through our awareness programs and volunteer networks, communities have started self-organizing.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Residents adopting trees in housing colonies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Students participating in eco workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">Local vendors switching to reusable materials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-xl h-full">
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Women & Youth Involvement</h3>
                  <p className="text-xl text-purple-700 italic mb-6 font-semibold">
                    "Empowering changemakers through nature."
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We actively engage women and young people in every plantation and awareness drive. This inclusive model ensures long-term sustainability.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                      <div className="text-4xl font-bold text-purple-700 mb-2">60%</div>
                      <p className="text-sm text-gray-600">Women Volunteers</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                      <div className="text-4xl font-bold text-purple-700 mb-2">40+</div>
                      <p className="text-sm text-gray-600">Youth Ambassadors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4" style={{color: '#004D40'}}>Recognition & Support</h2>
            <p className="text-xl text-yellow-600 italic mb-6 font-semibold">
              "Recognized for grassroots environmental work"
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{color: '#555555'}}>
              Mowo Foundation's commitment to tree protection and community engagement has earned acknowledgment from local authorities, schools, and environmental networks. Our growing partnerships enable us to expand our reach and maintain transparency in our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Future Goals - Keep vibrant */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-20 h-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Looking Ahead</h2>
            <p className="text-xl text-yellow-300 italic mb-6 font-semibold">
              "The journey has just begun."
            </p>
            <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
              Our goal for the next 3 years:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {futureGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all">
                    <div className="text-5xl font-bold text-white mb-3">{goal.value}</div>
                    <div className="text-green-100">{goal.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xl text-white mb-10">Together, we can make it happen.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join the Movement
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-gradient-green-600 hover:to-green-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate Now
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl leading-relaxed font-light" style={{color: '#555555'}}>
              At Mowo Social Initiatives Foundation, impact is not just measured in numbers — it's measured in roots, lives, and change.
            </p>
            <p className="text-3xl mt-6 font-semibold text-emerald-700">
              Every planted tree is a promise to our planet. 🌎💚
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
