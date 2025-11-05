
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Users, FileText, ArrowRight, MessageCircle, TreeDeciduous, Award, CheckCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function SaveTreesCampaign() {
  useEffect(() => {
    document.title = "Save Trees Campaign | Mowo Foundation";
  }, []);

  const approaches = [
    { icon: Users, title: "🌍 Awareness", desc: "Conducting workshops, school sessions, and social media campaigns about the importance of saving trees." },
    { icon: AlertTriangle, title: "🪓 Action", desc: "Working with citizens and authorities to stop unlawful cutting and rescue endangered trees through transplanting." },
    { icon: FileText, title: "📜 Advocacy", desc: "Collaborating with local municipalities to ensure better implementation of green protection policies." }
  ];

  const successStories = [
    { year: "2023", title: "Urban Rescue (Hyderabad)", desc: "Residents, along with Mowo volunteers, prevented the felling of 40 old banyan trees during road widening. The trees were transplanted and 90% survived." },
    { year: "2022", title: "School Tree Awareness Week", desc: "Over 5,000 students participated in 'Save Our Trees' poster and pledge drives." },
    { year: "2021", title: "Green Belt Protection", desc: "Collaborated with local authorities to protect a 2-acre public park from unauthorized construction." }
  ];

  const impactStats = [
    { value: "2,500+", label: "Trees Saved from being cut" },
    { value: "30+", label: "Educational Institutions engaged" },
    { value: "900+", label: "Tree Guardians active" },
    { value: "1,00,000+", label: "Citizens Reached through awareness" }
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
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8), 0 0 60px rgba(239, 68, 68, 0.4); }
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
            rgba(239, 68, 68, 0.15), 
            rgba(249, 115, 22, 0.15), 
            rgba(234, 179, 8, 0.15), 
            rgba(22, 163, 74, 0.15),
            rgba(220, 38, 38, 0.15)
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
            #dc2626 0%, 
            #ef4444 25%, 
            #f97316 50%, 
            #ef4444 75%, 
            #dc2626 100%
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
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-red-400/30 to-orange-500/30 rounded-full morph-shape blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-full morph-shape blur-3xl" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-24 w-40 h-40 border-4 border-red-400 rounded-lg rotate-45 rotate-slow"></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border-4 border-orange-400 rounded-full rotate-slow" style={{animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-yellow-400 rotate-12 rotate-slow" style={{animationDelay: '5s'}}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-20 float-icon" style={{animationDelay: '0s'}}>
            <Shield className="w-12 h-12 text-red-400/60" />
          </div>
          <div className="absolute top-48 right-28 float-icon" style={{animationDelay: '1s'}}>
            <TreeDeciduous className="w-10 h-10 text-green-400/60" />
          </div>
          <div className="absolute bottom-40 left-1/4 float-icon" style={{animationDelay: '2s'}}>
            <AlertTriangle className="w-14 h-14 text-orange-400/60" />
          </div>
          <div className="absolute bottom-32 right-1/3 float-icon" style={{animationDelay: '1.5s'}}>
            <Users className="w-11 h-11 text-blue-400/60" />
          </div>
          <div className="absolute top-1/3 right-1/4 float-icon" style={{animationDelay: '0.7s'}}>
            <FileText className="w-9 h-9 text-purple-500/60" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 float-icon" style={{animationDelay: '2.5s'}}>
            <Heart className="w-10 h-10 text-pink-400/60" />
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-red-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-yellow-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-red-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-300 rounded-full floating-particle shadow-lg" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full floating-particle shadow-lg" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 bounce-smooth">
              <span className="glass-card text-red-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-red-300 shadow-2xl pulse-glow">
                🛡️ Our Initiative
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2 text-shimmer drop-shadow-2xl">
                Save Trees Campaign
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-yellow-600 italic font-bold mb-6 drop-shadow-lg">
              🚫 "When we lose trees, we lose life."
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold"
            >
              Our continuous effort to prevent unnecessary tree cutting, protect existing green zones, and educate citizens about the value of preserving mature trees. 🌱
            </motion.p>

            {/* Key Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              <div className="glass-card px-6 py-3 rounded-full border-2 border-red-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-red-700 font-bold flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  2,500+ Trees Saved
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-orange-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-orange-700 font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  900+ Tree Guardians
                </span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border-2 border-yellow-200 shadow-lg hover:scale-105 transition-transform hover:shadow-xl">
                <span className="text-yellow-700 font-bold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  1L+ Citizens Reached
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <div className="w-8 h-12 border-2 border-red-400 rounded-full flex items-start justify-center p-2 shadow-lg glass-card">
            <div className="w-1 h-3 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
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
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Why It Matters</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Trees are the lungs of our planet. They clean the air, conserve water, prevent soil erosion, and provide shade, food, and shelter. Yet, urban expansion and careless cutting threaten our cities and ecosystems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Tree Protection", desc: "Preventing illegal and unnecessary tree felling" },
              { icon: TreeDeciduous, title: "Heritage Trees", desc: "Protecting heritage and roadside trees" },
              { icon: Users, title: "Tree Transplantation", desc: "Promoting transplantation instead of removal" },
              { icon: FileText, title: "Tree Laws", desc: "Educating citizens on local tree laws and rights" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Our Approach</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Mowo's Save Trees Campaign combines awareness, action, and advocacy:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full bg-gradient-to-br from-red-50 to-pink-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <approach.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{approach.desc}</p>
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
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Community Participation</h2>
                <p className="text-2xl text-emerald-700 italic mb-8 font-semibold text-center">
                  🤝 "When communities protect trees, cities breathe easier."
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
                  We encourage residents, students, and corporates to become Tree Guardians — individuals or groups who monitor and protect trees in their neighborhood.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How You Can Help:</h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {[
                    "Report illegal tree cutting immediately",
                    "Raise awareness in your colony or school",
                    "Adopt nearby trees for care and maintenance",
                    "Join our street-wise Tree Guardian Network"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 justify-center mt-10">
                  <Link to={createPageUrl("Contact")}>
                    <Button className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-10 py-6 rounded-full shadow-lg">
                      Join the Campaign
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-10 py-6 rounded-full font-bold">
                      Report a Tree Issue
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      🌳 {story.year}
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
            <h2 className="text-4xl font-bold text-white mb-4">📈 Our Impact (So Far)</h2>
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
      <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🌿 "Saving one tree might not change the world, but it changes the world for that tree."
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Join hands with Mowo Social Initiatives Foundation — together we can protect the green legacy that nature has trusted us with. 💚
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join the Campaign <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" variant="outline" className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 text-lg px-12 py-6 rounded-full font-bold">
                  Volunteer
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
