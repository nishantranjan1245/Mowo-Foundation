
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, FileText, Shield, Copyright, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | Mowo Foundation";
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
            <AlertCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 drop-shadow-2xl">Disclaimer</h1>
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
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Disclaimer applies to the website <strong>mowo.foundation</strong> operated by Mowo Social Initiatives Foundation ("Mowo Foundation", "we", "our", or "us").
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing or using this website, you acknowledge that you have read, understood, and agreed to the terms of this Disclaimer along with our Privacy Policy, Terms of Service, and Refund Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you do not agree, please discontinue use of the website.
                  </p>
                </div>

                {/* General Information */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <FileText className="w-8 h-8" />
                    2. General Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The content available on this website is provided for general informational and educational purposes only. While Mowo Foundation makes every effort to ensure the accuracy of information, we do not guarantee that the content is always up to date, complete, or free from errors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All materials — including text, images, and data — are intended to promote environmental awareness, showcase our programs, and provide details about our organization's initiatives.
                  </p>
                </div>

                {/* No Professional or Legal Advice */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">3. No Professional or Legal Advice</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The content on this website should not be considered professional, financial, or legal advice. Visitors should seek appropriate consultation before relying on any information presented here for decision-making purposes.
                  </p>
                </div>

                {/* Donations & Financial Information */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">4. Donations & Financial Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All donations made through <strong>mowo.foundation</strong> are voluntary and governed by our official Refund Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We make no guarantee of specific outcomes or results based on donations received. Funds are utilized toward environmental, social, and educational projects in accordance with our organizational objectives and compliance with FCRA and Indian NGO regulations.
                  </p>
                </div>

                {/* External Links */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <LinkIcon className="w-8 h-8" />
                    5. External Links
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our website may contain links to external websites or social media pages for convenience or reference. Mowo Foundation does not control, endorse, or take responsibility for the content, accuracy, or privacy practices of any third-party websites.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Visiting external sites linked from our website is done at your own risk.
                  </p>
                </div>

                {/* Media & Images */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">6. Media & Images</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Photographs, graphics, and videos displayed on this website represent real activities, volunteer events, and environmental campaigns conducted by or in partnership with Mowo Foundation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    However, these visuals are for illustrative purposes only and may not always depict current or live projects.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All media remains the property of Mowo Foundation or credited collaborators. Unauthorized use or reproduction is prohibited.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    7. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mowo Social Initiatives Foundation shall not be liable for any loss, damage, or expense — direct or indirect — arising from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Use of or reliance on the website's content</li>
                    <li>Technical errors, downtime, or server issues</li>
                    <li>Unauthorized access to user data</li>
                    <li>Third-party links or external content</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to maintain secure and reliable services but cannot guarantee uninterrupted website availability.
                  </p>
                </div>

                {/* Volunteer & Event Participation */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">8. Volunteer & Event Participation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Participation in any Mowo Foundation event (such as plantation drives, awareness programs, or volunteer activities) is voluntary. Participants are responsible for their own safety and are advised to follow event guidelines and safety measures.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Mowo Foundation will not be held liable for injuries, losses, or damages occurring during events unless directly caused by organizational negligence.
                  </p>
                </div>

                {/* Copyright & Intellectual Property */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Copyright className="w-8 h-8" />
                    9. Copyright & Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All written content, photographs, graphics, videos, and design elements featured on <strong>mowo.foundation</strong> are protected under applicable copyright and intellectual property laws. No material may be copied, reused, or distributed without prior written consent from Mowo Social Initiatives Foundation.
                  </p>
                </div>

                {/* Updates & Changes */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">10. Updates & Changes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Mowo Foundation reserves the right to update, modify, or remove any part of this Disclaimer at any time without prior notice. Revised versions will include a "Last Updated" date.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">11. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This Disclaimer and all related terms shall be governed by and interpreted in accordance with the laws of India, and any disputes shall fall under the jurisdiction of the courts in Hyderabad, Telangana.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">12. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions, feedback, or concerns regarding this Disclaimer, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>📧 Email:</strong> <a href="mailto:info@mowo.foundation" className="text-emerald-600 hover:underline">info@mowo.foundation</a></p>
                    <p><strong>📞 Phone:</strong> <a href="tel:+918685735698" className="text-emerald-600 hover:underline">+91 86857 35698</a></p>
                    <p><strong>📍 Address:</strong></p>
                    <p className="pl-4">
                      Mowo Social Initiatives Foundation<br />
                      2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                      Shamshiguda, Kukatpally-Balanagar, Telangana – 500072, India
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">✅ Summary</h2>
                  <p className="text-xl leading-relaxed">
                    At Mowo Social Initiatives Foundation, we are committed to maintaining accuracy, integrity, and transparency in everything we share. While we strive for perfection, this website is meant to inform, inspire, and involve — not to substitute professional or legal guidance. By using our website, you agree to engage responsibly and help us continue our mission of nurturing nature, one tree at a time. 🌿💚
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
