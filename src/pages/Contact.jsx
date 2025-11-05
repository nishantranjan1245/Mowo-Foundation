
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Send, Clock, AlertTriangle, Building2, Newspaper, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    document.title = "Contact | Mowo Foundation";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for contacting us! We'll respond within 24-48 hours.");
  };

  return (
    <div className="w-full">
      {/* Hero Section - Enhanced with Connection Theme */}
      <section className="relative py-32 overflow-hidden">
        <style>{`
          @keyframes connection-pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
          @keyframes line-draw {
            from { stroke-dashoffset: 1000; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes float-icon {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes shimmer-bg {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes glow-border {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
          }
          @keyframes envelope-open {
            0%, 100% { transform: rotateX(0deg); }
            50% { transform: rotateX(15deg); }
          }
          .connection-pulse {
            animation: connection-pulse 3s ease-in-out infinite;
          }
          .line-draw {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: line-draw 3s ease-out forwards;
          }
          .float-icon {
            animation: float-icon 3s ease-in-out infinite;
          }
          .shimmer-bg {
            background: linear-gradient(90deg, 
              rgba(16, 185, 129, 0.1) 0%, 
              rgba(52, 211, 153, 0.2) 50%, 
              rgba(16, 185, 129, 0.1) 100%
            );
            background-size: 200% 100%;
            animation: shimmer-bg 3s linear infinite;
          }
          .glow-border {
            animation: glow-border 2s ease-in-out infinite;
          }
          .envelope-open {
            animation: envelope-open 2s ease-in-out infinite;
          }
          .input-glow:focus {
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
            border-color: #10b981;
          }
          .contact-node {
            position: absolute;
            width: 12px;
            height: 12px;
            background: linear-gradient(135deg, #10b981, #14b8a6);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
          }
        `}</style>

        <div className="absolute inset-0">
          <img 
            src="public/image/contact-hero-img.jpg" 
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 via-teal-800/90 to-emerald-900/95"></div>
          <div className="absolute inset-0 shimmer-bg"></div>
        </div>

        {/* Connection Network Visualization */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: 0.3}}>
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#10b981" strokeWidth="2" className="line-draw" />
          <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="#14b8a6" strokeWidth="2" className="line-draw" style={{animationDelay: '0.5s'}} />
          <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#06b6d4" strokeWidth="2" className="line-draw" style={{animationDelay: '1s'}} />
          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="#0d9488" strokeWidth="2" className="line-draw" style={{animationDelay: '1.5s'}} />
        </svg>

        {/* Connection Nodes */}
        <div className="contact-node connection-pulse" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="contact-node connection-pulse" style={{top: '20%', right: '10%', animationDelay: '0.5s'}}></div>
        <div className="contact-node connection-pulse" style={{bottom: '20%', left: '10%', animationDelay: '1s'}}></div>
        <div className="contact-node connection-pulse" style={{bottom: '20%', right: '10%', animationDelay: '1.5s'}}></div>
        <div className="contact-node connection-pulse" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animationDelay: '2s'}}></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Mail className="absolute top-24 left-20 w-16 h-16 text-cyan-300 opacity-40 float-icon" style={{animationDelay: '0s'}} />
          <Phone className="absolute top-32 right-24 w-14 h-14 text-teal-300 opacity-40 float-icon" style={{animationDelay: '1s'}} />
          <MapPin className="absolute bottom-40 left-1/4 w-12 h-12 text-emerald-300 opacity-40 float-icon" style={{animationDelay: '2s'}} />
          <MessageCircle className="absolute bottom-32 right-1/3 w-14 h-14 text-green-300 opacity-40 float-icon" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 float-icon envelope-open">
              <span className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold border border-white/30 glow-border shadow-2xl">
                📧 Contact Us
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl">Get In Touch</h1>
            <p className="text-3xl text-yellow-300 italic font-bold mb-6 drop-shadow-lg">
              "Let's grow together — one conversation at a time." 💬
            </p>
            <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Whether you want to volunteer, partner, donate, or simply learn more about our work, we'd love to hear from you. Our team is always ready to connect, collaborate, and create impact for a greener tomorrow. 🌱
            </p>

            {/* Quick Contact Icons */}
            <div className="flex justify-center gap-8 mt-12">
              {[
                { icon: Mail, label: 'Email', color: 'from-blue-500 to-cyan-600' },
                { icon: Phone, label: 'Call', color: 'from-green-500 to-emerald-600' },
                { icon: MapPin, label: 'Visit', color: 'from-purple-500 to-pink-600' }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-2xl glow-border group-hover:scale-110 transition-all`} style={{animationDelay: `${index * 0.3}s`}}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white font-semibold mt-3">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 shimmer-bg opacity-50"></div>
                <CardContent className="p-10 relative z-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Us</h2>
                  <p className="text-gray-600 mb-6">Please fill out the form below and our team will respond within 24–48 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <Input 
                        placeholder="Enter your name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="input-glow transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-glow transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (optional)</label>
                      <Input 
                        type="tel" 
                        placeholder="+91 12345 67890"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-glow transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject / Reason for Contact</label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger className="input-glow">
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volunteer">Volunteer</SelectItem>
                          <SelectItem value="partner">Partner</SelectItem>
                          <SelectItem value="donate">Donate</SelectItem>
                          <SelectItem value="report">Report Tree Issue</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us how we can help..." 
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="input-glow transition-all duration-300"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      Send Message 🌿 <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glow-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg float-icon">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📍 Our Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                    Shamshiguda, Kukatpally-Balanagar,<br />
                    Telangana – 500072, India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glow-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg float-icon" style={{animationDelay: '0.5s'}}>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📞 Phone</h3>
                  <a href="tel:+918685735698" className="text-xl text-emerald-600 hover:text-emerald-700 font-semibold hover:underline block mb-4">
                    +91 86857 35698
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">🕒 Office Hours:</p>
                      <p className="text-sm">Monday – Saturday: 10:00 AM to 6:00 PM</p>
                      <p className="text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 glow-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg float-icon" style={{animationDelay: '1s'}}>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">📧 Email</h3>
                  <a href="mailto:info@mowo.foundation" className="text-xl text-emerald-600 hover:text-emerald-700 font-semibold hover:underline block">
                    info@mowo.foundation
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">🌍 Connect with Us Online</h3>
                  <p className="mb-6">Follow our journey and join our community:</p>
                  <div className="flex gap-4 flex-wrap">
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-6">
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-6">
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-6">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-6">
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="mt-6 text-yellow-300 font-semibold">Hashtag: #MowoForNature 💚</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Tree Issue */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-10">
                <AlertTriangle className="w-20 h-20 text-red-600 mx-auto mb-6 float-icon" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">🚫 Report a Tree Issue</h2>
                <p className="text-xl text-red-700 font-semibold italic mb-6">
                  "See a tree being cut? Let us know immediately."
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Use our quick contact or WhatsApp number to report illegal tree cutting, damaged trees, or neglected green zones in your area. Our team will verify and coordinate with local bodies for action.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900 mb-2">📞 WhatsApp Helpline:</p>
                    <a href="https://wa.me/918685735698" target="_blank" rel="noopener noreferrer" className="text-xl text-green-600 hover:text-green-700 font-bold hover:underline">
                      +91 86857 35698
                    </a>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900 mb-2">📧 Email:</p>
                    <a href="mailto:report@mowo.foundation" className="text-xl text-blue-600 hover:text-blue-700 font-bold hover:underline">
                      report@mowo.foundation
                    </a>
                  </div>
                </div>
                <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all">
                  Report Now <AlertTriangle className="ml-2 w-6 h-6" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partnership & Media */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg float-icon">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">🏢 Corporate / CSR Collaboration</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Partner with us for meaningful environmental impact and CSR compliance.
                  </p>
                  <a href="mailto:csr@mowo.foundation" className="text-xl text-blue-600 hover:text-blue-700 font-semibold hover:underline">
                    csr@mowo.foundation
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all h-full">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg float-icon" style={{animationDelay: '0.5s'}}>
                    <Newspaper className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">📰 Media & Press</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    For media inquiries, interviews, and press releases about our work.
                  </p>
                  <a href="mailto:press@mowo.foundation" className="text-xl text-purple-600 hover:text-purple-700 font-semibold hover:underline">
                    press@mowo.foundation
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📍 Find Us on the Map</h2>
            <p className="text-xl text-gray-600">Visit us at our registered office in Telangana</p>
          </motion.div>
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5689!2d78.4089!3d17.5089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzMyLjAiTiA3OMKwMjQnMzIuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                className="w-full"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Note */}
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
              "Every message is a step toward a greener India."
            </h2>
            <p className="text-xl text-teal-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              We value your time, your trust, and your voice — because change begins when we connect. 🌳
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
