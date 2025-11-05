
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertCircle, Shield, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Mowo Foundation";
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
            <FileText className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 drop-shadow-2xl">Terms of Service</h1>
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
                    Welcome to Mowo Social Initiatives Foundation ("Mowo Foundation", "we", "our", or "us").
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing or using our website <strong>mowo.foundation</strong>, participating in our programs, or making a donation, you agree to comply with and be bound by these Terms of Service ("Terms").
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Please read these Terms carefully before using our site. If you do not agree, please do not access or use the website.
                  </p>
                </div>

                {/* About Mowo Foundation */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Building2 className="w-8 h-8" />
                    2. About Mowo Foundation
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mowo Social Initiatives Foundation is a registered non-profit organization under the Companies Act, 2013 (India), committed to environmental protection and community-based sustainability.
                  </p>
                  <div className="bg-green-50 p-6 rounded-lg space-y-2 text-gray-700">
                    <p><strong>CIN:</strong> U85300TG2019NPL130996</p>
                    <p><strong>FCRA Registration No.:</strong> 368140142</p>
                    <p><strong>Registered Address:</strong></p>
                    <p className="pl-4">
                      2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                      Shamshiguda, Kukatpally-Balanagar, Telangana – 500072, India
                    </p>
                  </div>
                </div>

                {/* Use of Website */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">3. Use of the Website</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to use the Mowo Foundation website for lawful and ethical purposes only. You may not:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Use the site to upload, post, or transmit any illegal, offensive, or harmful content</li>
                    <li>Interfere with the website's functionality or security</li>
                    <li>Misrepresent your identity while making donations or volunteering</li>
                    <li>Copy, distribute, or modify website content without written permission</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Any misuse of the site may result in suspension of access or legal action as per applicable Indian laws.
                  </p>
                </div>

                {/* Donations */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">4. Donations</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">By making a donation on our website:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>You confirm that the funds are from legitimate sources and comply with Indian and FCRA regulations</li>
                    <li>You understand that all donations made are non-refundable, except in specific cases outlined in our Refund Policy</li>
                    <li>You authorize Mowo Foundation and its authorized payment partners to process your donation securely</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Mowo Foundation ensures that all funds are used strictly for environmental, educational, and social welfare programs.
                  </p>
                </div>

                {/* Volunteer Participation */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">5. Volunteer Participation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Volunteering with Mowo Foundation is a voluntary activity. By registering:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>You agree to participate safely and responsibly during events</li>
                    <li>You grant permission to use photographs or videos taken during volunteering for awareness and documentation purposes</li>
                    <li>Mowo Foundation is not responsible for personal injuries, loss, or damages incurred during field activities, except where negligence by the Foundation is proven</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All website content — including text, graphics, logos, photos, icons, and digital assets — is the exclusive property of Mowo Social Initiatives Foundation unless otherwise stated.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Reproduction, modification, or distribution of content without prior written consent is strictly prohibited. You may, however, share our content for awareness or educational purposes with proper attribution.
                  </p>
                </div>

                {/* Third-Party Services */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">7. Third-Party Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites or payment gateways (e.g., Razorpay, Paytm, etc.). Mowo Foundation is not responsible for the content, privacy policies, or actions of these third-party websites. Please review their respective terms before using their services.
                  </p>
                </div>

                {/* Privacy */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">8. Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your use of the website is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your data as described therein.
                  </p>
                </div>

                {/* Refund Policy */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">9. Refund Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All donations made to Mowo Social Initiatives Foundation are final and non-refundable, except under exceptional circumstances such as duplicate transactions or technical errors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Refund requests must be made within 7 working days of the transaction via email to <a href="mailto:donate@mowo.foundation" className="text-emerald-600 hover:underline">donate@mowo.foundation</a>. Approved refunds will be processed within 15 working days.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    10. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Mowo Social Initiatives Foundation, its employees, directors, or affiliates shall not be liable for any indirect, incidental, or consequential damages arising from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Use or inability to use the website</li>
                    <li>Unauthorized access to your data</li>
                    <li>Delays or disruptions in service</li>
                    <li>Acts of third parties beyond our control</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We make every effort to ensure accuracy and reliability, but all information is provided "as is" without warranties of any kind.
                  </p>
                </div>

                {/* Indemnification */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">11. Indemnification</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify and hold harmless Mowo Social Initiatives Foundation, its team, and associates against any claims, damages, or expenses arising from your misuse of the website, violation of these Terms, or infringement of rights.
                  </p>
                </div>

                {/* Termination */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">12. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Mowo Foundation reserves the right to terminate or restrict access to any user who violates these Terms or engages in misuse of the platform.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">13. Governing Law & Jurisdiction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms shall be governed by and interpreted in accordance with the laws of India, with jurisdiction exclusively in the courts of Hyderabad, Telangana.
                  </p>
                </div>

                {/* Amendments */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">14. Amendments</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Mowo Foundation reserves the right to update or modify these Terms at any time without prior notice. Any changes will be reflected on this page with a revised "Last Updated" date.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">15. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For any questions or clarifications regarding these Terms of Service, please contact us:
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
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                    <AlertCircle className="w-8 h-8" />
                    ✅ Summary
                  </h2>
                  <p className="text-xl leading-relaxed">
                    By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms of Service. At Mowo Social Initiatives Foundation, we value your trust and partnership in nurturing nature — one tree at a time. 🌿💚
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
