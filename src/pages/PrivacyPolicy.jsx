
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Mowo Foundation";
  }, []);

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
      `}</style>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden hero-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-400 rounded-full floating-particle"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-teal-400 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-cyan-400 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-[800px] h-[800px] bg-green-400/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-emerald-400/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 drop-shadow-2xl">Privacy Policy</h1>
            <p className="text-lg text-gray-700 mb-2"><strong>Effective Date:</strong> February 27, 2019</p>
            <p className="text-lg text-gray-700"><strong>Last Updated:</strong> November 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-none shadow-xl">
            <CardContent className="p-10">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <FileText className="w-8 h-8" />
                    1. Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mowo Social Initiatives Foundation ("we", "our", or "us") respects your privacy and is committed to protecting your personal information.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website <strong>mowo.foundation</strong>, engage with our programs, or make donations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By using our website, you agree to the terms of this Privacy Policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Eye className="w-8 h-8" />
                    2. Information We Collect
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect personal and non-personal information to facilitate our programs, donations, and communication.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">a. Personal Information:</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Full Name</li>
                    <li>Email Address</li>
                    <li>Contact Number</li>
                    <li>Address (if provided for volunteer/donation)</li>
                    <li>Donation amount and payment details (processed securely through third-party gateways)</li>
                    <li>Any additional information voluntarily submitted via forms or emails</li>
                  </ul>

                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">b. Non-Personal Information:</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Browser type and device details</li>
                    <li>IP address and location (approximate)</li>
                    <li>Website usage patterns (via cookies and analytics tools)</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We use the collected information for:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Processing donations and generating receipts</li>
                    <li>Volunteer registration and coordination</li>
                    <li>Communication regarding our programs, events, and impact updates</li>
                    <li>Maintaining compliance under Indian NGO and FCRA regulations</li>
                    <li>Improving website functionality and user experience</li>
                    <li>Responding to queries and support requests</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    We never sell, rent, or trade your personal data to third parties.
                  </p>
                </div>

                {/* Donation & Payment Security */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Lock className="w-8 h-8" />
                    4. Donation & Payment Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All donations are processed through secure and verified payment gateways (such as Razorpay, Paytm, or bank transfers). Your financial details (like card or UPI information) are never stored on our servers.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We comply with the latest RBI and FCRA norms for all domestic and international transactions.
                  </p>
                </div>

                {/* Data Sharing & Disclosure */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">5. Data Sharing & Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We may share limited information only when required:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>With payment service providers to process donations securely</li>
                    <li>With government authorities (for compliance with FCRA, Income Tax, or other legal obligations)</li>
                    <li>With event partners strictly for operational purposes</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Every third-party service provider is required to maintain confidentiality and data security.
                  </p>
                </div>

                {/* Cookies & Analytics */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">6. Cookies & Analytics</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may use cookies and analytics tools to enhance your browsing experience. You can modify your browser settings to disable cookies if you prefer not to share anonymous usage data.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We retain your personal information only as long as necessary:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>To fulfill the purposes stated above</li>
                    <li>To comply with legal and financial record-keeping obligations</li>
                    </ul>
                  <p className="text-gray-700 leading-relaxed">
                    After this period, your data is securely deleted from our systems.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">8. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">As a user, you have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Access, correct, or delete your personal data</li>
                    <li>Withdraw consent for communication or newsletters</li>
                    <li>Request clarification about how your data is used</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    For privacy-related queries, email us at <a href="mailto:privacy@mowo.foundation" className="text-emerald-600 hover:text-emerald-800 underline">privacy@mowo.foundation</a>.
                  </p>
                </div>

                {/* Data Security */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    9. Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, or disclosure. However, no online platform can guarantee absolute security, and users are advised to share information responsibly.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">10. Third-Party Links</h2>
                  <p className="text-700 leading-relaxed">
                    Our website may contain links to external sites (such as social media, partner NGOs, or payment gateways). We are not responsible for the privacy practices of these external websites. Please review their policies separately.
                  </p>
                </div>

                {/* Updates to Policy */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">11. Updates to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may revise this Privacy Policy periodically to reflect changes in laws, technology, or organizational practices. Updated versions will be posted on this page with a new "Last Updated" date.
                  </p>
                </div>

                {/* Contact Us */}
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">12. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions, feedback, or concerns regarding this Privacy Policy, please contact:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>📧 Email:</strong> <a href="mailto:info@mowo.foundation" className="text-emerald-600 hover:text-emerald-800 underline">info@mowo.foundation</a></p>
                    <p><strong>📞 Phone:</strong> <a href="tel:+918685735698" className="text-emerald-600 hover:text-emerald-800 underline">+91 86857 35698</a></p>
                    <p><strong>📍 Address:</strong></p>
                    <p className="pl-4">
                      Mowo Social Initiatives Foundation<br />
                      2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                      Shamshiguda, Kukatpally-Balanagar, Telangana – 500072, India
                    </p>
                  </div>
                </div>

                {/* Legal & Compliance */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8" />
                    13. Legal & Compliance
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
                    <p><strong>CIN:</strong> U85300TG2019NPL130996</p>
                    <p><strong>FCRA Registration No.:</strong> 368140142</p>
                    <p><strong>Registered Date:</strong> February 27, 2019</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">✅ Summary</h2>
                  <p className="text-xl leading-relaxed">
                    At Mowo Social Initiatives Foundation, we value your trust. We promise to handle your information responsibly, securely, and transparently — because protecting the environment begins with protecting people. 🌎💚
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
