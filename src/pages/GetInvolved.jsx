
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Leaf, Heart, Building2, Calendar, Share2, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInvolved() {
  useEffect(() => {
    document.title = "Get Involved | Mowo Foundation";
  }, []);

  const opportunities = [
    {
      icon: Users,
      title: "Volunteer With Us",
      tagline: "Be the change — grow a tree, grow hope.",
      description: "Volunteers are the heart of our foundation. From planting trees to organizing awareness drives, your efforts directly contribute to protecting the environment.",
      actions: [
        "Join our local tree plantation or watering drives",
        "Help with awareness programs and events",
        "Support documentation, photography, or community outreach"
      ],
      cta: "Become a Volunteer",
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50"
    },
    {
      icon: Leaf,
      title: "Adopt a Tree",
      tagline: "One Tree. One Life. One Promise.",
      description: "Adopt a tree and take responsibility for its growth and care. Through our Adopt-a-Tree Program, individuals and organizations can sponsor saplings and track their progress.",
      actions: [
        "A personalized adoption certificate",
        "Location and growth updates",
        "The joy of contributing to a living legacy"
      ],
      cta: "Adopt a Tree",
      color: "from-blue-500 to-cyan-600",
      bg: "from-blue-50 to-cyan-50"
    },
    {
      icon: Building2,
      title: "Partner With Us (Corporate / CSR)",
      tagline: "Together for a sustainable tomorrow.",
      description: "We collaborate with companies, schools, and institutions that share our vision for a greener future. Through CSR partnerships, we organize customized programs.",
      actions: [
        "End-to-end drive management",
        "Branding & visibility opportunities",
        "CSR reporting & documentation support"
      ],
      cta: "Partner With Us",
      color: "from-purple-500 to-indigo-600",
      bg: "from-purple-50 to-indigo-50"
    },
    {
      icon: Heart,
      title: "Donate for the Cause",
      tagline: "Your contribution plants a future.",
      description: "Every donation, big or small, helps us plant more trees and care for existing ones. Your funds directly support plantation materials, water supply, and awareness programs.",
      actions: [
        "One-time contribution",
        "Monthly support",
        "Corporate or group sponsorships"
      ],
      cta: "Donate Now",
      color: "from-red-500 to-pink-600",
      bg: "from-red-50 to-pink-50"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes card-float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-15px) rotateY(5deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(0.9); opacity: 1; }
        }
        @keyframes hand-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
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
        .card-float {
          animation: card-float 5s ease-in-out infinite;
        }
        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .hand-wave {
          animation: hand-wave 2s ease-in-out infinite;
        }
        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
        }
      `}</style>

      {/* Hero Section - Enhanced with Interactive Cards */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Floating Interactive Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-16 glass-card px-6 py-3 rounded-full shadow-xl card-float">
            <span className="text-2xl hand-wave inline-block">👋</span>
          </div>
          <div className="absolute top-40 right-24 glass-card px-6 py-3 rounded-full shadow-xl card-float" style={{animationDelay: '1s'}}>
            <span className="text-2xl heartbeat inline-block">💚</span>
          </div>
          <div className="absolute bottom-40 left-1/4 glass-card px-6 py-3 rounded-full shadow-xl card-float" style={{animationDelay: '2s'}}>
            <span className="text-2xl">🌱</span>
          </div>
          <div className="absolute bottom-32 right-1/3 glass-card px-6 py-3 rounded-full shadow-xl card-float" style={{animationDelay: '1.5s'}}>
            <span className="text-2xl">🤝</span>
          </div>
        </div>

        {/* Sparkle Effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

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
            <div className="inline-block mb-8 pulse-ring">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl">
                🤝 Get Involved
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mb-8 drop-shadow-2xl">
              Get Involved
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold mb-12">
              Your small action can make a big difference. At Mowo Social Initiatives Foundation, we believe that change starts with people like you. 🌟
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
              {[
                { icon: Users, label: 'Volunteer', color: 'from-green-500 to-emerald-600', emoji: '🙋', delay: '0s' },
                { icon: Leaf, label: 'Adopt Tree', color: 'from-blue-500 to-cyan-600', emoji: '🌳', delay: '0.2s' },
                { icon: Building2, label: 'Partner', color: 'from-purple-500 to-indigo-600', emoji: '🤝', delay: '0.4s' },
                { icon: Heart, label: 'Donate', color: 'from-red-500 to-pink-600', emoji: '💝', delay: '0.6s' }
              ].map((item, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl hover-lift cursor-pointer" style={{animationDelay: item.delay}}>
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-lg font-bold text-gray-800">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48L60 42.7C120 37 240 27 360 26.7C480 27 600 37 720 42.7C840 48 960 48 1080 42.7C1200 37 1320 27 1380 21.3L1440 16V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V48Z" fill="rgba(240, 253, 244, 0.8)"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
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
              Whether you have time to volunteer, resources to donate, or ideas to share — your involvement helps us nurture a greener planet for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`border-none shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${opportunity.bg}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-10 lg:p-12">
                        <div className={`w-20 h-20 bg-gradient-to-br ${opportunity.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                          <opportunity.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                        <p className="text-xl text-green-700 italic mb-6 font-semibold">
                          {opportunity.tagline}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          {opportunity.description}
                        </p>
                        
                        <div className="mb-8">
                          <p className="font-bold text-gray-900 mb-4 text-lg">
                            {opportunity.title.includes("Donate") || opportunity.title.includes("Adopt") ? "What You Get:" : "You Can:"}
                          </p>
                          <ul className="space-y-3">
                            {opportunity.actions.map((action, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={opportunity.title.includes("Donate") ? createPageUrl("Donate") : createPageUrl("Contact")}>
                          <Button className={`bg-gradient-to-r ${opportunity.color} text-white rounded-full px-8 shadow-lg hover:scale-105 transition-all`}>
                            {opportunity.cta} <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                      </div>

                      <div className={`bg-gradient-to-br ${opportunity.color} p-10 lg:p-12 flex items-center justify-center`}>
                        <div className="text-center">
                          <opportunity.icon className="w-48 h-48 text-white/20 mx-auto mb-6" />
                          <p className="text-white text-2xl font-bold">{opportunity.title}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Events */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
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
            <Card className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border-none text-white shadow-2xl">
              <CardContent className="p-12 text-center">
                <Calendar className="w-20 h-20 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Events</h2>
                <p className="text-xl md:text-2xl text-yellow-300 italic mb-6 font-semibold">
                  "Make your weekends meaningful."
                </p>
                <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                  We organize regular tree plantation drives, awareness sessions, and clean-up events across India. Stay connected and participate in upcoming activities near you.
                </p>
                <Link to={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-white text-emerald-800 hover:bg-teal-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                    View Upcoming Events <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Share & Inspire */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
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
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Spread the Word
              </span>
            </div>
            <Share2 className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#004D40'}}>Share & Inspire</h2>
            <p className="text-xl text-yellow-600 italic mb-6 font-semibold">
              "Spread the green word!"
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed" style={{color: '#555555'}}>
              Raise awareness on social media by sharing Mowo's initiatives, volunteering stories, or eco-tips. Use our hashtag <span className="font-bold text-emerald-700">#MowoForNature</span> and help us reach more changemakers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Follow on Instagram
              </Button>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full">
                Follow on LinkedIn
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Follow on Facebook
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
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
              Be That Someone 🌳
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Every tree we plant, every volunteer we train, and every awareness session we conduct — begins with someone stepping forward. Be that someone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join Us
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Volunteer Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
