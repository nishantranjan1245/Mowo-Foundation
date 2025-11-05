
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, School, BookOpen, Lightbulb, Target, CheckCircle, ArrowRight, Award, Globe, Share2, TrendingUp, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CommunityAwarenessPrograms() {
  useEffect(() => {
    document.title = "Community Awareness Programs | Mowo Foundation";
  }, []);

  const objectives = [
    "Educate people about the benefits of trees and biodiversity",
    "Encourage responsible behavior toward nature",
    "Motivate collective participation in plantation and care activities",
    "Build long-term commitment to sustainability"
  ];

  const keyActivities = [
    {
      icon: School,
      title: "School & College Programs",
      desc: "Interactive workshops, quizzes, and plantation events that teach young minds about tree protection and environmental responsibility.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Public Awareness Campaigns",
      desc: "Street rallies, poster drives, and eco-talks conducted in markets, colonies, and community centers.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Share2,
      title: "Digital Awareness Drives",
      desc: "Use of social media and online challenges (like #MowoForNature) to spread green messages and inspire action.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Corporate Awareness Sessions",
      desc: "Eco-training programs for employees to integrate sustainability into workplace culture.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Globe,
      title: "Clean & Green Events",
      desc: "Collaborative events promoting waste segregation, recycling, and clean community zones.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const impactStats = [
    { value: "50+", label: "Educational Workshops", desc: "in schools and colleges" },
    { value: "15,000+", label: "Participants Engaged", desc: "through on-ground events" },
    { value: "1,00,000+", label: "People Reached", desc: "via digital campaigns" },
    { value: "95%", label: "Satisfaction Rate", desc: "positive feedback" }
  ];

  const successStories = [
    {
      year: "2023",
      title: "Green School Initiative",
      desc: "In partnership with 10 schools in Telangana, students pledged to plant and maintain trees in their neighborhoods."
    },
    {
      year: "2022",
      title: "Clean Colony Drive",
      desc: "Residents joined hands to create a 'Zero Plastic Zone' with support from Mowo volunteers."
    },
    {
      year: "2023",
      title: "Online Campaign – #MyTreeMyPride",
      desc: "A viral social media campaign where citizens shared photos of trees they planted or protected."
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
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes book-flip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(20deg); }
        }
        @keyframes lightbulb-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5)); }
          50% { filter: drop-shadow(0 0 30px rgba(251, 191, 36, 1)); }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.9; }
          75% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        .hero-gradient {
          background: linear-gradient(-45deg, 
            rgba(16, 185, 129, 0.15), 
            rgba(20, 184, 166, 0.15), 
            rgba(6, 182, 212, 0.15), 
            rgba(5, 150, 105, 0.15),
            rgba(251, 191, 36, 0.15)
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
        .float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
        .book-flip {
          animation: book-flip 3s ease-in-out infinite;
        }
        .lightbulb-glow {
          animation: lightbulb-glow 2s ease-in-out infinite;
        }
        .orbit-icon {
          position: absolute;
          animation: orbit 20s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Orbiting Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <BookOpen className="orbit-icon w-12 h-12 text-purple-400 opacity-40" style={{animationDelay: '0s'}} />
            <GraduationCap className="orbit-icon w-10 h-10 text-blue-400 opacity-40" style={{animationDelay: '5s'}} />
            <School className="orbit-icon w-14 h-14 text-green-400 opacity-40" style={{animationDelay: '10s'}} />
            <Globe className="orbit-icon w-12 h-12 text-cyan-400 opacity-40" style={{animationDelay: '15s'}} />
          </div>
        </div>

        {/* Floating Books & Lightbulbs */}
        <div className="absolute inset-0 pointer-events-none">
          <BookOpen className="absolute top-24 left-16 w-16 h-16 text-purple-400 opacity-40 float-icon book-flip" style={{animationDelay: '0s'}} />
          <Lightbulb className="absolute top-32 right-24 w-14 h-14 text-yellow-400 opacity-60 lightbulb-glow" style={{animationDelay: '1s'}} />
          <GraduationCap className="absolute bottom-40 left-1/4 w-12 h-12 text-indigo-400 opacity-40 float-icon" style={{animationDelay: '2s'}} />
          <Target className="absolute bottom-32 right-1/3 w-14 h-14 text-orange-400 opacity-40 float-icon" style={{animationDelay: '1.5s'}} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-400 rounded-full floating-particle" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-blue-400 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-green-400 rounded-full floating-particle" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 pulse-ring">
              <span className="glass-card text-teal-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-green-300 shadow-2xl">
                📚 Our Initiative
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 mb-8 drop-shadow-2xl">
              Community Awareness Programs
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-600 italic font-bold mb-6 drop-shadow-lg">
              💡 "Knowledge plants the seeds of change."
            </p>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold mb-12">
              Education and awareness are at the heart of every sustainable initiative. Our programs empower communities with the knowledge to protect, preserve, and nurture nature.
            </p>

            {/* Program Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
              {[
                { icon: School, label: 'School Programs', color: 'from-purple-500 to-indigo-600', delay: '0s' },
                { icon: Users, label: 'Workshops', color: 'from-blue-500 to-cyan-600', delay: '0.2s' },
                { icon: BookOpen, label: 'Campaigns', color: 'from-green-500 to-emerald-600', delay: '0.4s' },
                { icon: Globe, label: 'Outreach', color: 'from-orange-500 to-yellow-600', delay: '0.6s' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                >
                  <div className="glass-card p-6 rounded-3xl pulse-ring" style={{animationDelay: item.delay}}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl float-icon`} style={{animationDelay: item.delay}}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-800">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48L60 53.3C120 59 240 69 360 74.7C480 80 600 80 720 74.7C840 69 960 59 1080 53.3C1200 48 1320 48 1380 48H1440V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V48Z" fill="rgba(240, 253, 244, 0.8)"/>
          </svg>
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
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Introduction</h2>
            <p className="text-2xl text-yellow-600 italic font-bold mb-4">📢 "Awareness creates action — and action creates change."</p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              At Mowo Social Initiatives Foundation, we believe that protecting the environment begins with awareness. Our Community Awareness Programs inspire citizens, schools, and organizations to take part in environmental protection through knowledge, participation, and leadership.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              We focus on spreading awareness about tree conservation, climate change, waste management, and sustainable living — turning awareness into measurable community impact. 🌱
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
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
                <h2 className="text-4xl font-bold text-teal-800 mb-6 text-center">Objective of the Program</h2>
                <p className="text-xl text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                  The goal of our awareness initiatives is to create eco-conscious communities that understand the importance of trees and environmental balance.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6 text-center">Our programs aim to:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-4 bg-purple-50 p-6 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Our Key Awareness Activities</h2>
            <p className="text-xl text-gray-700 font-semibold">🌍 What We Do:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{activity.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Impact Highlights</h2>
            <p className="text-xl text-yellow-300 font-semibold">📈 Our Awareness Efforts So Far:</p>
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
                    <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg text-yellow-300 font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-green-200">{stat.desc}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration & Partnerships */}
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
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-12 text-center">
                <Globe className="w-20 h-20 text-teal-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-teal-800 mb-6">Collaboration & Partnerships</h2>
                <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                  🤝 We collaborate with schools, resident welfare associations, corporate CSR teams, and civic bodies to maximize our reach and effectiveness. Each partnership helps expand our message and create lasting behavioral change.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6">You Can Partner With Us To:</p>
                <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
                  {[
                    "Host awareness sessions in your community",
                    "Sponsor educational materials and workshops",
                    "Support environmental campaigns for youth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-purple-50 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to={createPageUrl("Contact")}>
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg font-bold">
                      Host a Workshop
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-800 mb-4">Success Stories</h2>
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
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full bg-white">
                  <CardContent className="p-8">
                    <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      🌿 {story.year}
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

      {/* Volunteer & Participate */}
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
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 shadow-2xl">
              <CardContent className="p-12 text-center">
                <Users className="w-20 h-20 text-teal-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-teal-800 mb-4">Volunteer & Participate</h2>
                <p className="text-2xl text-yellow-600 italic font-bold mb-8">👩‍🌾 "Every voice matters — let yours inspire change."</p>
                <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                  Become a community ambassador or volunteer to help spread environmental awareness in your area.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6">Ways to Contribute:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                  {[
                    "Join upcoming awareness events",
                    "Become a Mowo volunteer educator",
                    "Help organize school eco-programs",
                    "Spread our digital campaigns online"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Join the Awareness Drive <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("GetInvolved")}>
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Volunteer Now <Heart className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Donate")}>
                    <Button variant="outline" className="border-2 border-green-600 text-teal-600 hover:bg-green-50 px-8 py-6 rounded-full text-lg font-bold">
                      Donate for Education Materials
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-green-800 mb-6">Educational Resources</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              📚 Mowo provides free access to eco-learning resources, posters, and handbooks to schools and NGOs interested in promoting sustainability. You can download or request customized kits for your institution.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-6 rounded-full shadow-xl">
                Request Resource Kit <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
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
              🌎 "Change begins when we understand our role in nature."
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Through Community Awareness Programs, Mowo Foundation continues to inspire individuals and communities to think green, live consciously, and act responsibly. Together, we're not just spreading awareness — we're building a generation of changemakers. 💚
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-300 hover:text-green-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join a Program <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Partner With Us <Users className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-white text-green-800 hover:bg-green-300 hover:text-green-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Donate <Heart className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
