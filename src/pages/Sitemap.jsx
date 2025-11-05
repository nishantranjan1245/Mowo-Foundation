import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Map, ArrowRight, Home, Info, FileText, Heart, Phone, Shield, TreePine, Users, Droplets, School, Calendar, BarChart, Facebook, Instagram, Linkedin, Youtube, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap | Mowo Foundation";
  }, []);

  const sections = [
    {
      title: "Main Pages",
      icon: Home,
      color: "from-green-500 to-emerald-600",
      links: [
        { name: "Home", path: "Home", desc: "Overview of our mission, impact, and key initiatives" },
        { name: "About Us", path: "About", desc: "Learn about our story, mission, team, and values" },
        { name: "Programs", path: "Programs", desc: "Explore all our environmental and social initiatives" },
        { name: "Get Involved", path: "GetInvolved", desc: "Volunteer, partner, or contribute to our mission" },
        { name: "Impact", path: "Impact", desc: "See our measurable results and success stories" },
        { name: "Contact Us", path: "Contact", desc: "Reach out for queries, partnerships, or event participation" },
        { name: "Donate", path: "Donate", desc: "Support our work through secure online contributions" }
      ]
    },
    {
      title: "Our Core Initiatives",
      icon: TreePine,
      color: "from-blue-500 to-cyan-600",
      links: [
        { name: "Tree Plantation Drives", path: "TreePlantationDrives", desc: "Participate in community-led plantation events" },
        { name: "Save Trees Campaign", path: "SaveTreesCampaign", desc: "Prevent illegal tree cutting and promote conservation" },
        { name: "Watering & Maintenance", path: "WateringMaintenance", desc: "Support ongoing care and survival of planted trees" },
        { name: "Community Awareness Programs", path: "CommunityAwarenessPrograms", desc: "Spreading education and eco-awareness" },
        { name: "Volunteer Activities", path: "VolunteerActivities", desc: "Join hands-on green actions and local drives" }
      ]
    },
    {
      title: "Legal & Policy Pages",
      icon: Shield,
      color: "from-purple-500 to-indigo-600",
      links: [
        { name: "Privacy Policy", path: "PrivacyPolicy", desc: "How we collect, store, and protect your data" },
        { name: "Terms of Service", path: "TermsOfService", desc: "Rules governing website and program use" },
        { name: "Refund Policy", path: "RefundPolicy", desc: "Guidelines for donation refund requests" },
        { name: "Disclaimer", path: "Disclaimer", desc: "Legal disclaimer and information limits" }
      ]
    }
  ];

  const quickActions = [
    { name: "💧 Adopt a Tree", path: "GetInvolved" },
    { name: "🌱 Volunteer Signup", path: "GetInvolved" },
    { name: "💼 CSR Partnership", path: "Contact" },
    { name: "📆 Upcoming Drives", path: "GetInvolved" },
    { name: "🪴 Join as Tree Guardian", path: "GetInvolved" }
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
        .floating-particle {
          animation: float-particles 8s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-400 rounded-full floating-particle"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-teal-400 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Map className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 drop-shadow-2xl">🌳 Mowo Social Initiatives Foundation – Sitemap</h1>
            <p className="text-lg text-gray-700 mb-2 font-semibold">Last Updated: November 2025</p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to the official sitemap of Mowo Social Initiatives Foundation. This page provides a structured overview of all active and publicly accessible pages on our website — helping visitors explore our environmental programs, initiatives, and support options with ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">1️⃣ Overview</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Welcome to the official sitemap of Mowo Social Initiatives Foundation. This page provides a structured overview of all active and publicly accessible pages on our website — helping visitors explore our environmental programs, initiatives, and support options with ease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl h-full hover:shadow-2xl transition-all">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-emerald-800 mb-6">{section.title}</h2>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={createPageUrl(link.path)}
                            className="group"
                          >
                            <div className="flex items-start gap-3 text-gray-700 hover:text-emerald-600 transition-colors">
                              <ArrowRight className="w-5 h-5 mt-0.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                              <div>
                                <div className="font-semibold">{link.name}</div>
                                <div className="text-sm text-gray-500">{link.desc}</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">6️⃣ Quick Action Links</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={createPageUrl(action.path)}>
                      <Card className="border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="p-6 text-center">
                          <p className="text-lg font-semibold text-gray-800">{action.name}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-10 text-center">
                <h2 className="text-3xl font-bold text-emerald-800 mb-6">8️⃣ Social Media</h2>
                <p className="text-xl text-gray-700 mb-8">🌐 Stay connected with Mowo Foundation online:</p>
                <div className="flex justify-center gap-6 flex-wrap">
                  <a href="#" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all hover:scale-105">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all hover:scale-105">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all hover:scale-105">
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">9️⃣ Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">📍 Address:</p>
                      <p className="text-gray-700 leading-relaxed">
                        2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                        Shamshiguda, Kukatpally-Balanagar,<br />
                        Telangana – 500072, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">📧 Email:</p>
                      <a href="mailto:info@mowo.foundation" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        info@mowo.foundation
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 mb-1">📞 Phone:</p>
                      <a href="tel:+918685735698" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                        +91 86857 35698
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
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
            <h2 className="text-4xl font-bold text-white mb-6">✅ Closing Note</h2>
            <p className="text-xl text-yellow-300 mb-4 max-w-3xl mx-auto leading-relaxed font-semibold">
              The Mowo Social Initiatives Foundation website is designed to be fully transparent and user-friendly.
            </p>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              We encourage everyone — individuals, corporates, and communities — to explore, engage, and contribute to our mission of creating a greener, sustainable future for all. 🌳💚
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}