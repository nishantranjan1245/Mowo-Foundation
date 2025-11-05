

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set favicon
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/png';
    favicon.rel = 'shortcut icon';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6905e92607f555030b948140/f01e29b81_Screenshot_24-removebg-preview.png';
    document.getElementsByTagName('head')[0].appendChild(favicon);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", path: createPageUrl("Home") },
    { name: "About", path: createPageUrl("About") },
    { name: "Programs", path: createPageUrl("Programs") },
    { name: "Get Involved", path: createPageUrl("GetInvolved") },
    { name: "Impact", path: createPageUrl("Impact") },
    { name: "Contact", path: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <style>{`
        :root {
          --primary-green: #10b981;
          --primary-green-dark: #059669;
          --primary-green-light: #34d399;
          --accent-blue: #3b82f6;
          --accent-purple: #8b5cf6;
          --accent-orange: #f97316;
          --gradient-start: #0d9488;
          --gradient-end: #10b981;
        }

        .animated-gradient {
          background: linear-gradient(-45deg, #10b981, #059669, #0d9488, #14b8a6);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #14b8a6);
          border-radius: 2px;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        .footer-gradient {
          background: linear-gradient(135deg,
            #064e3b 0%,
            #047857 25%,
            #059669 50%,
            #047857 75%,
            #064e3b 100%
          );
          position: relative;
          overflow: hidden;
        }

        .footer-section-title {
          position: relative;
          padding-bottom: 16px;
          margin-bottom: 20px;
          font-size: 18px;
          font-weight: 700;
          color: #f0fdf4;
          letter-spacing: 0.5px;
        }

        .footer-section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #34d399, #10b981);
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(52, 211, 153, 0.4);
        }

        .footer-link {
          transition: all 0.3s ease;
          position: relative;
          padding-left: 0;
          display: inline-block;
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #34d399;
        }

        .footer-link:hover {
          color: #34d399;
          padding-left: 20px;
          text-shadow: 0 0 4px rgba(52, 211, 153, 0.3);
          transform: translateX(4px);
        }

        .social-icon {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(52, 211, 153, 0.4);
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }

        .social-icon:hover::before {
          width: 150%;
          height: 150%;
        }

        .social-icon:hover {
          transform: translateY(-4px) rotate(8deg) scale(1.2);
          box-shadow: 0 8px 20px rgba(52, 211, 153, 0.4);
        }

        .footer-bottom-link {
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-bottom-link:hover {
          color: #34d399;
          text-decoration: underline;
          text-decoration-color: #34d399;
          text-underline-offset: 4px;
        }

        .donate-btn {
          background: linear-gradient(135deg, #43afb1, #38999b);
          box-shadow: 0 4px 15px rgba(67, 175, 177, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .donate-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: all 0.5s ease;
        }

        .donate-btn:hover::before {
          width: 300%;
          height: 300%;
        }

        .donate-btn:hover {
          background: linear-gradient(135deg, #38999b, #2d8587);
          box-shadow: 0 6px 25px rgba(67, 175, 177, 0.6);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-effect shadow-xl" : "glass-effect"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img 
                src="/image/header-logo.png" 
                alt="Mowo Foundation" 
                className="h-12 w-auto object-contain"
                style={{filter: 'drop-shadow(0 2px 8px rgba(16, 185, 129, 0.3))'}}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    location.pathname === item.path
                      ? "active text-emerald-800 bg-emerald-100"
                      : "text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl("Donate")}>
                <Button className="ml-4 donate-btn text-white border-none font-bold px-6 py-5 rounded-full relative z-10">
                  Donate Now
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-emerald-800" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-emerald-200 glass-effect">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-emerald-100 text-emerald-800"
                        : "text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to={createPageUrl("Donate")} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full mt-2 donate-btn text-white">
                    Donate Now
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer-gradient text-white relative overflow-hidden">
        {/* Enhanced Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Animated Leaf Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 50 Q30 30, 50 50 Q30 70, 20 50" fill="currentColor" opacity="0.3"/>
              <path d="M70 30 Q80 20, 90 30 Q80 40, 70 30" fill="currentColor" opacity="0.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#leaf-pattern)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Section 1 - Logo & Description */}
            <div className="lg:col-span-1">
              <Link to={createPageUrl("Home")} className="block mb-6 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/image/footer-logo.png" 
                  alt="Mowo Foundation" 
                  className="h-14 w-auto object-contain drop-shadow-2xl"
                />
              </Link>
              <p className="text-sm leading-relaxed text-gray-300 mb-6">
                Mowo Social Initiatives Foundation is a non-profit organization committed to protecting and nurturing the environment through tree plantation, care, and awareness programs that empower communities to build a greener, cleaner planet.
              </p>
            </div>

            {/* Section 2 - Quick Links */}
            <div>
              <h4 className="footer-section-title text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl("Home")} className="footer-link text-sm block text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("About")} className="footer-link text-sm block text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Programs")} className="footer-link text-sm block text-gray-300">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("GetInvolved")} className="footer-link text-sm block text-gray-300">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("Impact")} className="footer-link text-sm block text-gray-300">
                    Impact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3 - Our Initiatives */}
            <div>
              <h4 className="footer-section-title text-white">Our Initiatives</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to={createPageUrl("TreePlantationDrives")} className="footer-link block text-gray-300">
                    Tree Plantation Drives
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("SaveTreesCampaign")} className="footer-link block text-gray-300">
                    Save Trees Campaign
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("WateringMaintenance")} className="footer-link block text-gray-300">
                    Watering & Maintenance
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("CommunityAwarenessPrograms")} className="footer-link block text-gray-300">
                    Community Awareness Programs
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl("VolunteerActivities")} className="footer-link block text-gray-300">
                    Volunteer Activities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 4 - Contact & Social */}
            <div>
              <h4 className="footer-section-title text-white">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="leading-relaxed text-gray-300">
                    2-22-105/H, Allwyn Colony Road, Navodaya Colony, Shamshiguda, Kukatpally-Balanagar, Telangana – 500072, India
                  </p>
                </div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@mowo.foundation" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    info@mowo.foundation
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+918685735698" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    +91 86857 35698
                  </a>
                </div>
                
                {/* Social Media */}
                <div className="pt-4">
                  <p className="text-xs text-gray-400 mb-3 font-semibold">Follow Us</p>
                  <div className="flex gap-3">
                    <a href="#" className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-800">
                      <Facebook className="w-5 h-5 text-white relative z-10" />
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-800">
                      <Instagram className="w-5 h-5 text-white relative z-10" />
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-900">
                      <Linkedin className="w-5 h-5 text-white relative z-10" />
                    </a>
                    <a href="#" className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800">
                      <Youtube className="w-5 h-5 text-white relative z-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
              <div className="flex items-center gap-2">
                <p className="text-gray-300 text-sm">
                  © 2025 Mowo Social Initiatives Foundation. All Rights Reserved
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-300 relative z-10">
                <Link to={createPageUrl("PrivacyPolicy")} className="footer-bottom-link relative z-10 hover:text-emerald-400">Privacy Policy</Link>
                <span className="text-gray-600">|</span>
                <Link to={createPageUrl("TermsOfService")} className="footer-bottom-link relative z-10 hover:text-emerald-400">Terms of Service</Link>
                <span className="text-gray-600">|</span>
                <Link to={createPageUrl("RefundPolicy")} className="footer-bottom-link relative z-10 hover:text-emerald-400">Refund Policy</Link>
                <span className="text-gray-600">|</span>
                <Link to={createPageUrl("Disclaimer")} className="footer-bottom-link relative z-10 hover:text-emerald-400">Disclaimer</Link>
                <span className="text-gray-600">|</span>
                <Link to={createPageUrl("Sitemap")} className="footer-bottom-link relative z-10 hover:text-emerald-400">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave at Top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{height: '60px'}}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 30L48 25C96 20 192 10 288 10C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 10C1248 10 1344 20 1392 25L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V30Z" fill="rgba(240, 253, 244, 0.1)"/>
          </svg>
        </div>
      </footer>
    </div>
  );
}

