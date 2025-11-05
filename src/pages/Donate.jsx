
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Trees, Droplets, Users, CheckCircle, ArrowRight, Gift, Star, Shield, TrendingUp, Award, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Donate() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    document.title = "Donate | Mowo Foundation";
  }, []);

  const donationOptions = [
    { amount: 100, impact: "Waters and maintains a tree for 1 month", icon: Droplets },
    { amount: 500, impact: "Plants and cares for 3 saplings", icon: Trees },
    { amount: 1000, impact: "Supports a small community plantation drive", icon: Users },
    { amount: 5000, impact: "Sponsors an entire tree care event", icon: Gift },
    { amount: 10000, impact: "Enables corporate-level or CSR partnership programs", icon: Building2 }
  ];

  const impactData = [
    { icon: Trees, title: "More Trees Planted", desc: "and nurtured" },
    { icon: Shield, title: "Reduced Deforestation", desc: "in urban belts" },
    { icon: Users, title: "Community Awareness", desc: "about climate protection" },
    { icon: Heart, title: "Greener Neighborhoods", desc: "for future generations" }
  ];

  const testimonials = [
    {
      text: "I donated for 10 trees last year, and Mowo shared their growth updates. It feels amazing to see real change!",
      author: "Aarav, Hyderabad"
    },
    {
      text: "Transparent and genuine. My company partnered with Mowo, and the execution was flawless.",
      author: "EcoCSR Pvt. Ltd."
    }
  ];

  return (
    <div className="w-full">
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.4); }
        }
        @keyframes shimmer-gold {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.3); }
          20% { transform: scale(1); }
          30% { transform: scale(1.2); }
          40% { transform: scale(1); }
        }
        @keyframes coin-fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes sparkle-pop {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        .glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .shimmer-gold {
          background: linear-gradient(90deg, 
            rgba(251, 191, 36, 0.2) 0%, 
            rgba(245, 158, 11, 0.4) 50%, 
            rgba(251, 191, 36, 0.2) 100%
          );
          background-size: 200% 100%;
          animation: shimmer-gold 3s linear infinite;
        }
        .bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
        .coin-fall {
          animation: coin-fall 8s linear infinite;
        }
        .sparkle-pop {
          animation: sparkle-pop 2s ease-in-out infinite;
        }
        .donate-coin {
          position: absolute;
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
        }
      `}</style>

      {/* Hero Section - Enhanced with Heart Theme */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#E0F2F7] via-[#E8F5E9] to-[#F1F8E9]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Removed original image and overlay, replaced with new background and animation */}

        {/* Falling Coins Animation */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="donate-coin coin-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Sparkle Effects */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 sparkle-pop"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, #fbbf24, transparent)',
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Heart 
              key={i}
              className="absolute text-pink-300 opacity-30 float-gentle"
              style={{
                width: `${30 + Math.random() * 30}px`,
                height: `${30 + Math.random() * 30}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 bounce-slow">
              <Heart className="w-24 h-24 text-yellow-300 mx-auto mb-4 glow-pulse heartbeat" />
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-teal-900 mb-8 drop-shadow-2xl">Donate</h1>
            <p className="text-3xl text-green-700 italic mb-6 font-bold drop-shadow-lg heartbeat" style={{animationDelay: '0.5s'}}>
              💚 "Your contribution plants hope for tomorrow."
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-8 font-semibold">
              When you donate to Mowo Social Initiatives Foundation, you're not just giving money — you're helping plant trees, protect nature, and empower communities to live sustainably. Every rupee helps us restore balance to our planet, one tree at a time. 🌱
            </p>

            {/* Quick Donation Amounts */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {['₹100', '₹500', '₹1000', '₹5000'].map((amount, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-emerald-300 text-gray-800 font-bold text-xl hover:bg-emerald-300 hover:text-green-900 transition-all cursor-pointer glow-pulse" style={{animationDelay: `${index * 0.2}s`}}>
                  {amount}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Donate to Mowo?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Transparency", desc: "Every donation is tracked and used only for verified environmental programs." },
              { icon: Trees, title: "Sustainability", desc: "We ensure long-term tree care — not just plantation." },
              { icon: TrendingUp, title: "Impact", desc: "You directly support plantations, awareness campaigns, and volunteer drives." },
              { icon: Award, title: "Recognition", desc: "Donors receive digital certificates and impact updates." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg float-gentle" style={{animationDelay: `${index * 0.3}s`}}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">✅ {item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps - Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">How Your Donation Helps</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-emerald-300">
                        <th className="text-left p-4 text-xl font-bold text-gray-900">Amount</th>
                        <th className="text-left p-4 text-xl font-bold text-gray-900">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donationOptions.map((option, index) => (
                        <tr key={index} className="border-b border-emerald-200 hover:bg-emerald-100/50 transition-colors">
                          <td className="p-4">
                            <span className="text-2xl font-bold text-emerald-700">₹{option.amount}</span>
                          </td>
                          <td className="p-4 text-gray-700">{option.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-center mt-8 text-lg text-gray-600 italic">
                  Every contribution — no matter the size — helps nurture life. 🌳
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Donation Options</h2>
            <p className="text-xl text-gray-700">Choose how you want to make a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "💳 One-Time Donation", desc: "Support a single initiative or drive." },
              { title: "🔁 Monthly Donation", desc: "Become a Mowo Sustainer — help us maintain trees all year round." },
              { title: "🏢 Corporate & CSR", desc: "Partner with us for long-term environmental impact and CSR compliance." }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.title}</h3>
                    <p className="text-gray-700 mb-6">{option.desc}</p>
                    <Button className="bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white rounded-full px-6">
                      Choose This
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto border-none shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 shimmer-gold"></div>
              <CardContent className="p-10 relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Donation Methods</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">1. Online Transfer / UPI:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <p><strong>Bank Name:</strong> [Your Bank]</p>
                      <p><strong>Account Name:</strong> Mowo Social Initiatives Foundation</p>
                      <p><strong>Account Number:</strong> ———</p>
                      <p><strong>IFSC:</strong> ———</p>
                      <p className="md:col-span-2"><strong>UPI ID:</strong> mowo@upi</p>
                    </div>
                  </div>

                   
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">3. International / FCRA Donations:</h4>
                    <p className="text-gray-700 mb-2">For donors outside India, contributions are accepted under <strong>FCRA No. 368140142</strong>.</p>
                    <p className="text-gray-700">Email: <a href="mailto:donate@mowo.foundation" className="text-purple-600 hover:underline font-semibold">donate@mowo.foundation</a> for guidance.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">🧾 Tax Exemption / Receipts</h4>
                  <p className="text-gray-700">All donations are eligible for official receipts. We ensure full compliance under Indian NGO norms.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Star className="w-16 h-16 text-yellow-500 mx-auto mb-6 bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">📈 Impact of Your Contribution</h2>
            <p className="text-xl text-gray-700 italic">"Every donation creates measurable change."</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg float-gentle" style={{animationDelay: `${index * 0.5}s`}}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all">
              See Our Impact <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Donors Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-4 italic leading-relaxed">💬 "{testimonial.text}"</p>
                    <p className="text-emerald-700 font-semibold">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <Gift className="w-20 h-20 text-white mx-auto mb-6 bounce-slow" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🌎 "Let's grow a forest together."
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              Your kindness can create shade for generations. Join hands with Mowo Foundation and help us make Earth greener — one tree at a time. 🌱💚
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-white-700 hover:bg-green-300 hover:text-white-800 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold hover:scale-105 transition-all glow-pulse">
                Donate Now <Heart className="ml-2 w-6 h-6" />
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold hover:scale-105 transition-all">
                Adopt a Tree <Trees className="ml-2 w-6 h-6" />
              </Button>
              <Button size="lg" className="bg-white text-white-700 hover:bg-green-300 hover:text-white-800 text-lg px-12 py-6 rounded-full shadow-2xl border-none font-bold hover:scale-105 transition-all glow-pulse">
                Monthly Support <Calendar className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
