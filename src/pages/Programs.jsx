
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees, Heart, Droplets, School, Users, Leaf, Shield, Sprout, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Programs() {
  useEffect(() => {
    document.title = "Programs | Mowo Foundation";
  }, []);

  const mainPrograms = [
    {
      icon: Trees,
      title: "Tree Plantation Drives",
      tagline: "Planting today for a better tomorrow.",
      description: "We organize large-scale plantation drives across schools, public spaces, and rural areas. Every sapling is planted with care, geo-tagged for tracking, and regularly monitored for survival. Our drives bring together students, volunteers, and local residents to create lasting green zones.",
      highlights: [
        "Native species selection for biodiversity balance",
        "Community-driven participation",
        "Post-plantation care and survival audits"
      ],
      cta: "Join a Plantation Drive",
      color: "from-green-500 to-emerald-600",
      bg: "from-green-50 to-emerald-50"
    },
    {
      icon: Shield,
      title: "Save Trees Campaign",
      tagline: "Stop the Cut — Protect What Already Exists.",
      description: "Deforestation and illegal tree cutting remain major threats to our ecosystem. Through our Save Trees Campaign, we raise awareness, advocate for legal protection, and take active steps to prevent tree loss in urban and rural regions.",
      highlights: [
        "Awareness and petition drives",
        "Tree tagging and monitoring in critical zones",
        "Collaboration with local authorities to prevent illegal cutting"
      ],
      cta: "Report Tree Cutting",
      color: "from-red-500 to-pink-600",
      bg: "from-red-50 to-pink-50"
    },
    {
      icon: Droplets,
      title: "Tree Care & Maintenance Program",
      tagline: "Because planting is just the beginning.",
      description: "Our tree care program ensures that every tree planted under Mowo's initiative receives continuous attention. We organize watering drives, mulching, soil enrichment, and tree health monitoring through a network of volunteers and local communities.",
      highlights: [
        "Regular watering and maintenance",
        "\"Adopt-a-Tree\" initiative for individuals and corporates",
        "Use of eco-friendly and sustainable care practices"
      ],
      cta: "Adopt a Tree",
      color: "from-blue-500 to-cyan-600",
      bg: "from-blue-50 to-cyan-50"
    },
    {
      icon: School,
      title: "Environmental Awareness & Education",
      tagline: "Knowledge is the root of change.",
      description: "We conduct awareness campaigns, school workshops, and training sessions to educate people about tree conservation and sustainable lifestyles. These sessions inspire young minds and create long-term advocates for environmental protection.",
      highlights: [
        "School outreach programs",
        "Eco-education workshops",
        "Tree awareness events and exhibitions"
      ],
      cta: "Book a Workshop",
      color: "from-purple-500 to-indigo-600",
      bg: "from-purple-50 to-indigo-50"
    },
    {
      icon: Users,
      title: "Community & Volunteer Engagement",
      tagline: "Together, we grow.",
      description: "Our strength lies in our volunteers — citizens who dedicate time and energy to make a difference. We engage local communities, students, and partner organizations to support all our activities.",
      highlights: [
        "Volunteer for plantation or watering drives",
        "Partner through CSR or institutional programs",
        "Sponsor community initiatives"
      ],
      cta: "Get Involved",
      color: "from-orange-500 to-amber-600",
      bg: "from-orange-50 to-amber-50"
    }
  ];

  const impactMetrics = [
    { icon: Trees, label: "Trees Planted", value: "10,000+", description: "and their survival rate" },
    { icon: Users, label: "Volunteers", value: "1,200+", description: "engaged in drives" },
    { icon: School, label: "Communities", value: "50+", description: "and schools impacted" },
    { icon: Leaf, label: "Land Area", value: "Multiple", description: "hectares restored" }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes glow-border {
          0%, 100% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 60px rgba(16, 185, 129, 0.8), 0 0 90px rgba(16, 185, 129, 0.5); }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.9; }
          75% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        .hero-gradient {
          background: linear-gradient(-45deg, 
            rgba(16, 185, 129, 0.15), 
            rgba(20, 184, 166, 0.15), 
            rgba(6, 182, 212, 0.15), 
            rgba(5, 150, 105, 0.15),
            rgba(59, 130, 246, 0.15)
          );
          background-size: 400% 400%;
          animation: gradient-wave 12s ease infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        .floating-particle {
          animation: float-particles 8s ease-in-out infinite;
        }
        .float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
        .ripple-effect {
          position: relative;
        }
        .ripple-effect::before,
        .ripple-effect::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 3px solid rgba(16, 185, 129, 0.6);
          animation: ripple 2s infinite;
        }
        .ripple-effect::after {
          animation-delay: 1s;
        }
        .glow-border {
          animation: glow-border 3s ease-in-out infinite;
        }
        .slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        .slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        .bounce-smooth {
          animation: bounce-smooth 3s ease-in-out infinite;
        }
        .spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

      {/* Hero Section - Enhanced with Icons & Ripples */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Decorative Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-400 rounded-lg spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-teal-400 rounded-full spin-slow" style={{animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-cyan-400 rotate-45 spin-slow" style={{animationDelay: '5s'}}></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Trees className="absolute top-32 left-16 w-12 h-12 text-green-400 opacity-40 float-icon" style={{animationDelay: '0s'}} />
          <Droplets className="absolute top-48 right-24 w-10 h-10 text-blue-400 opacity-40 float-icon" style={{animationDelay: '1s'}} />
          <Users className="absolute bottom-40 left-1/4 w-14 h-14 text-teal-400 opacity-40 float-icon" style={{animationDelay: '2s'}} />
          <Heart className="absolute bottom-32 right-1/3 w-12 h-12 text-pink-400 opacity-40 float-icon" style={{animationDelay: '1.5s'}} />
          <Leaf className="absolute top-1/3 right-1/4 w-10 h-10 text-emerald-400 opacity-40 float-icon" style={{animationDelay: '2.5s'}} />
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
            <div className="inline-block mb-8 ripple-effect">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl glow-border">
                🌳 Our Programs
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mb-8 drop-shadow-2xl bounce-smooth">
              Programs
            </h1>
            <p className="text-2xl md:text-3xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold mb-12">
              At Mowo Social Initiatives Foundation, our programs are centered around one mission — to protect and expand India's green cover through practical, community-led environmental activities.
            </p>

            {/* Program Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mt-16">
              {[
                { icon: Trees, label: 'Plantation', color: 'from-green-500 to-emerald-600', delay: '0s' },
                { icon: Shield, label: 'Protection', color: 'from-red-500 to-pink-600', delay: '0.2s' },
                { icon: Droplets, label: 'Care', color: 'from-blue-500 to-cyan-600', delay: '0.4s' },
                { icon: School, label: 'Education', color: 'from-purple-500 to-indigo-600', delay: '0.6s' },
                { icon: Users, label: 'Community', color: 'from-orange-500 to-amber-600', delay: '0.8s' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }} // Added base delay to occur after hero text
                  className="glass-card p-6 rounded-3xl glow-border"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl float-icon`} style={{animationDelay: item.delay}}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-800">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 64L48 58.7C96 53 192 43 288 42.7C384 43 480 53 576 58.7C672 64 768 64 864 58.7C960 53 1056 43 1152 42.7C1248 43 1344 53 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V64Z" fill="rgba(240, 253, 244, 0.8)"/>
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
              We focus on practical, community-led environmental activities that ensure every planted tree is cared for and sustained. Our initiatives combine on-ground action, education, and collaboration for a long-term impact on both people and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Programs - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16">
            {mainPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`border-none shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${program.bg}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-10 lg:p-12">
                        <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                          <program.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{program.title}</h3>
                        <p className="text-xl text-green-700 italic mb-6 font-semibold">
                          {program.tagline}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                          {program.description}
                        </p>
                        
                        <div className="mb-8">
                          <p className="font-bold text-gray-900 mb-4 text-lg">Highlights:</p>
                          <ul className="space-y-3">
                            {program.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className={`w-2 h-2 bg-gradient-to-br ${program.color} rounded-full mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={createPageUrl("GetInvolved")}>
                          <Button className={`bg-gradient-to-r ${program.color} text-white rounded-full px-8 shadow-lg hover:scale-105 transition-all`}>
                            {program.cta} <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                      </div>

                      <div className={`bg-gradient-to-br ${program.color} p-10 lg:p-12 flex items-center justify-center`}>
                        <div className="text-center">
                          <program.icon className="w-48 h-48 text-white/20 mx-auto mb-6" />
                          <p className="text-white text-2xl font-bold">{program.title}</p>
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

      {/* Sustainable Impact */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border-2 border-yellow-300">
                Impact Measurement
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sustainable Impact</h2>
            <p className="text-xl text-teal-300 max-w-3xl mx-auto leading-relaxed font-semibold">
              Every initiative we take is measured for real, long-term impact. This data-driven approach ensures transparency and effectiveness in all our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-lg text-green-100 font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-green-200">{metric.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to={createPageUrl("Impact")}>
              <Button size="lg" className="bg-white text-emerald-800 hover:bg-teal-300 hover:text-emerald-900 rounded-full px-8 shadow-2xl border-none font-bold">
                View Detailed Impact <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Soft gradient */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
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
            <div className="inline-block mb-6">
              <span className="bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full text-sm font-semibold border-2 border-yellow-400">
                Get Started
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1A4314'}}>
              Be Part of Our Green Journey
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{color: '#555555'}}>
              Join hands with Mowo Social Initiatives Foundation and make every tree count. Together, we can create lasting environmental change.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all border-none font-bold">
                  Join Us
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-gradient-600 hover:from-green-600 hover:to-gradient-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate Now
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" variant="outline" className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 text-lg px-10 py-6 rounded-full font-bold">
                  Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
