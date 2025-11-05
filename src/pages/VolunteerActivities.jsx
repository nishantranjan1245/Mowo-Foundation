
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Handshake, Calendar, Trophy, Star, CheckCircle, ArrowRight, Sparkles, Award, Trees, School, Globe, Share2, Droplets, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function VolunteerActivities() {
  useEffect(() => {
    document.title = "Volunteer Activities | Mowo Foundation";
  }, []);

  const benefits = [
    "Hands-on contribution to nature conservation",
    "Learning sustainable practices and leadership",
    "Certificates of appreciation for active participation",
    "Real-world impact — seeing the trees you planted grow",
    "Opportunities for collaboration and CSR exposure"
  ];

  const activityTypes = [
    {
      icon: Trees,
      title: "Tree Plantation Drives",
      desc: "Help prepare soil, plant saplings, and protect young trees during community drives.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Droplets,
      title: "Tree Care & Watering",
      desc: "Take part in post-plantation watering schedules, mulching, and maintenance.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Awareness Campaigns",
      desc: "Educate others through street plays, poster events, and online awareness sessions.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: School,
      title: "School Programs",
      desc: "Engage students with eco-workshops, green lessons, and environmental competitions.",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Globe,
      title: "Clean-up Drives",
      desc: "Support waste segregation and beautification of local parks and open spaces.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Share2,
      title: "Social Media Volunteering",
      desc: "Help spread awareness online using #MowoForNature and share our updates with your circle.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const whoCanJoin = [
    { icon: Heart, title: "Individual Volunteer", desc: "Participate in on-ground activities", color: "from-emerald-500 to-teal-600" },
    { icon: School, title: "Student Volunteer", desc: "Take part through your school/college", color: "from-blue-500 to-cyan-600" },
    { icon: Users, title: "Corporate Volunteer", desc: "Represent your organization in CSR events", color: "from-purple-500 to-indigo-600" },
    { icon: Globe, title: "Community Group Volunteer", desc: "Work with your neighborhood teams", color: "from-green-500 to-emerald-600" }
  ];

  const testimonials = [
    { quote: "I planted my first tree with Mowo, and now I've adopted five. The joy is beyond words.", author: "Arun", role: "Hyderabad", avatar: "A" },
    { quote: "Our team joined Mowo's drive as part of CSR. It was the most meaningful weekend we've had.", author: "EcoTech Pvt. Ltd.", role: "Corporate Partner", avatar: "E" },
    { quote: "It's not just volunteering — it's connecting with nature.", author: "Nisha", role: "Student Volunteer", avatar: "N" }
  ];

  const impactStats = [
    { value: "1,200+", label: "Volunteers Engaged" },
    { value: "10,000+", label: "Trees Planted and Cared For" },
    { value: "50+", label: "Awareness Events Conducted" },
    { value: "7,500+", label: "Trees Maintained Regularly" }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-gray-100">
      <style>{`
        @keyframes gradient-wave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
        @keyframes star-twinkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(1.2) rotate(180deg); }
        }
        @keyframes trophy-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes confetti-fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-10px); opacity: 0.9; }
          75% { transform: translateY(-30px) translateX(10px); opacity: 0.6; }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4); }
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
        .hand-wave {
          animation: hand-wave 2s ease-in-out infinite;
        }
        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        .star-twinkle {
          animation: star-twinkle 2s ease-in-out infinite;
        }
        .trophy-bounce {
          animation: trophy-bounce 3s ease-in-out infinite;
        }
        .confetti {
          animation: confetti-fall 3s linear infinite;
        }
        .glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Confetti Effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 confetti"
            style={{
              left: `${Math.random() * 100}%`,
              background: ['#10b981', '#14b8a6', '#fbbf24', '#34d399', '#60a5fa'][Math.floor(Math.random() * 5)],
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Floating Interactive Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-16 glass-card px-6 py-3 rounded-full shadow-xl">
            <span className="text-3xl hand-wave inline-block">👋</span>
          </div>
          <div className="absolute top-40 right-24 glass-card px-6 py-3 rounded-full shadow-xl heartbeat">
            <span className="text-3xl">💖</span>
          </div>
          <div className="absolute bottom-40 left-1/4 glass-card px-6 py-3 rounded-full shadow-xl">
            <span className="text-3xl star-twinkle">🌟</span>
          </div>
          <div className="absolute bottom-32 right-1/3 glass-card px-6 py-3 rounded-full shadow-xl">
            <span className="text-3xl trophy-bounce">🏆</span>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-32 left-24 w-14 h-14 text-emerald-400 opacity-40 heartbeat" />
          <Star className="absolute top-48 right-20 w-12 h-12 text-yellow-400 opacity-40 star-twinkle" style={{animationDelay: '1s'}} />
          <Trophy className="absolute bottom-48 left-1/3 w-16 h-16 text-teal-400 opacity-40 trophy-bounce" />
          <Sparkles className="absolute bottom-40 right-1/4 w-12 h-12 text-cyan-400 opacity-40 star-twinkle" style={{animationDelay: '1.5s'}} />
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-8 glow-pulse">
              <span className="glass-card text-emerald-800 px-8 py-4 rounded-full text-lg font-bold border-2 border-emerald-300 shadow-2xl">
                🤝 Join Us
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 mb-8 drop-shadow-2xl">
              Volunteer Activities
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-600 italic font-bold mb-6 drop-shadow-lg">
              💫 "Alone we can do so little; together we can do so much."
            </p>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold mb-12">
              Your time and energy can create real impact! Join our vibrant volunteer community and be part of meaningful environmental action. 🌿
            </p>

            {/* Action Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
              {[
                { icon: Users, label: 'Join Team', color: 'from-emerald-500 to-teal-600', emoji: '🙋', delay: '0s' },
                { icon: Calendar, label: 'Events', color: 'from-teal-500 to-cyan-600', emoji: '📅', delay: '0.2s' },
                { icon: Trophy, label: 'Rewards', color: 'from-cyan-500 to-blue-600', emoji: '🏆', delay: '0.4s' },
                { icon: Heart, label: 'Make Impact', color: 'from-green-500 to-emerald-600', emoji: '💚', delay: '0.6s' }
              ].map((item, index) => (
                <div key={index} className="glass-card p-8 rounded-3xl glow-pulse cursor-pointer hover:scale-105 transition-all" style={{animationDelay: item.delay}}>
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
            <path d="M0 64L48 69.3C96 75 192 85 288 85.3C384 85 480 75 576 69.3C672 64 768 64 864 69.3C960 75 1056 85 1152 85.3C1248 85 1344 75 1392 69.3L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V64Z" fill="rgba(236, 253, 245, 0.8)"/>
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Introduction</h2>
            <p className="text-2xl text-yellow-600 italic font-bold mb-6">👩‍🌾 "Volunteers don't just plant trees — they plant hope."</p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              At Mowo Social Initiatives Foundation, our volunteers are the driving force behind every tree planted, every awareness drive conducted, and every green dream realized.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Through the Volunteer Activities Program, we provide individuals, students, and organizations the opportunity to take direct action for the environment — one activity, one weekend, one community at a time. 🌱
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-12">
                <h2 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Why Volunteer with Mowo</h2>
                <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                  Volunteering with Mowo means becoming part of a growing movement that believes in doing, not just talking.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-6 text-center">Benefits of Volunteering:</p>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
                      <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Types of Activities */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Types of Volunteer Activities</h2>
            <p className="text-xl text-gray-700 font-semibold">🌿 Our Volunteers Participate In:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activityTypes.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full bg-white">
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

      {/* Who Can Join */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
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
                <h2 className="text-4xl font-bold text-emerald-800 mb-6 text-center">Who Can Join</h2>
                <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                  Mowo welcomes everyone who wishes to make a difference — no age, background, or skill restriction.
                </p>
                <p className="text-lg font-semibold text-gray-800 mb-8 text-center">You can join as:</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {whoCanJoin.map((type, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                          <type.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                        <p className="text-gray-700 text-sm">{type.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  <Link to={createPageUrl("Contact")}>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-6 rounded-full shadow-lg text-lg">
                      Join as Volunteer <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-bold">
                      Group Sign-Up
                    </Button>
                  </Link>
                  <Link to={createPageUrl("Contact")}>
                    <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 rounded-full text-lg font-bold">
                      Corporate Inquiry
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Volunteer Stories</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-none shadow-xl hover:shadow-2xl transition-all">
                  <CardContent className="p-8">
                    <div className="text-6xl text-emerald-600 mb-4">"</div>
                    <p className="text-lg text-gray-800 mb-6 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-700">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Target className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">How It Works</h2>
            <p className="text-xl text-gray-700 font-semibold mb-10">🌎 Simple 3-Step Process:</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { num: "1", title: "Sign Up", desc: "Fill out our volunteer form" },
                { num: "2", title: "Get Assigned", desc: "We'll connect you to drives or activities near your location" },
                { num: "3", title: "Make an Impact", desc: "Join, participate", desc: "Join, participate, and receive recognition for your contribution" }
              ].map((step, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <span className="text-white font-bold text-2xl">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="w-20 h-20 text-orange-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Volunteer Recognition</h2>
            <p className="text-2xl text-yellow-600 italic font-bold mb-8">🏅 We celebrate our changemakers!</p>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Active volunteers receive digital certificates, appreciation badges, and are featured in our "Volunteer of the Month" spotlight on social media. We also issue community service letters for students and corporate participants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Impact of Our Volunteers</h2>
            <p className="text-xl text-yellow-300 font-semibold">📈 Since 2019:</p>
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
                    <div className="text-lg text-yellow-300 font-semibold">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xl text-white mt-12 font-semibold">
            Every milestone achieved is because of passionate people like you. 💚
          </p>
        </div>
      </section>

      {/* Upcoming Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">Upcoming Volunteer Opportunities</h2>
            <p className="text-xl text-gray-700 font-semibold mb-8">📅 Upcoming Drives:</p>

            <div className="space-y-4 mb-10">
              {[
                "Tree Plantation – December 2025 (Hyderabad)",
                "Community Clean-up – January 2026 (Kukatpally)",
                "School Awareness Program – February 2026 (Warangal)"
              ].map((drive, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-800 font-semibold">{drive}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-12 py-6 rounded-full shadow-xl text-lg">
                Register Now <ArrowRight className="ml-2 w-6 h-6" />
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
              💚 "Be the reason our planet breathes better."
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Join hands with Mowo Social Initiatives Foundation as a volunteer and become part of a living, growing legacy that gives back to nature every single day. 🌎🌿
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Join Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("GetInvolved")}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
                  Adopt a Tree <Trees className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to={createPageUrl("Donate")}>
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-green-300 hover:text-emerald-900 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold">
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
