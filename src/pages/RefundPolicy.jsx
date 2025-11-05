
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCcw, AlertCircle, CheckCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund Policy | Mowo Foundation";
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
            <RefreshCcw className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4 drop-shadow-2xl">Refund Policy</h1>
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
                    Mowo Social Initiatives Foundation ("Mowo Foundation", "we", "our", or "us") is a registered non-profit organization working toward environmental conservation and community sustainability.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We value every contribution and are committed to maintaining transparency and trust with our donors. This Refund Policy outlines the circumstances under which donations made to us may be refunded.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Please read this policy carefully before making any contribution.
                  </p>
                </div>

                {/* Nature of Donations */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">2. Nature of Donations</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All contributions made to Mowo Social Initiatives Foundation are considered voluntary donations toward our environmental and social initiatives. Once a donation has been successfully processed, it is non-refundable except in specific, verified cases as outlined below.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">As an NGO, funds received are promptly allocated to ongoing and planned projects such as:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Tree Plantation Drives</li>
                    <li>Tree Care & Maintenance Programs</li>
                    <li>Awareness and Education Campaigns</li>
                    <li>Community Development Initiatives</li>
                  </ul>
                </div>

                {/* Eligibility for Refunds */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8" />
                    3. Eligibility for Refunds
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Refunds may be issued only under the following conditions:</p>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                      <p className="font-bold text-gray-900 mb-2">✅ Duplicate Transaction:</p>
                      <p className="text-gray-700">If the donor accidentally makes the same payment more than once for the same purpose.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                      <p className="font-bold text-gray-900 mb-2">✅ Technical Error:</p>
                      <p className="text-gray-700">If a technical glitch (payment gateway or bank error) results in an incorrect deduction.</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                      <p className="font-bold text-gray-900 mb-2">✅ Unauthorized / Fraudulent Transaction:</p>
                      <p className="text-gray-700">If a payment was made fraudulently without the donor's knowledge or consent (subject to verification by the payment provider).</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    In such cases, Mowo Foundation will initiate a refund once the issue is verified.
                  </p>
                </div>

                {/* Non-Refundable Cases */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">4. Non-Refundable Cases</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">Refunds will not be provided under the following circumstances:</p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li>Change of mind or voluntary withdrawal of donation after payment</li>
                    <li>Donations made toward specific programs already initiated</li>
                    <li>Partial payments toward event participation, sponsorships, or CSR collaborations once confirmed</li>
                  </ul>
                </div>

                {/* Refund Request Procedure */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <Mail className="w-8 h-8" />
                    5. Refund Request Procedure
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you believe your transaction meets the criteria for a refund, please follow the steps below:
                  </p>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg space-y-4">
                    <div>
                      <p className="font-bold text-gray-900 mb-2">1️⃣ Send an Email to <a href="mailto:donate@mowo.foundation" className="text-emerald-600 hover:underline">donate@mowo.foundation</a> within 7 working days of the transaction.</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">2️⃣ Include the following details:</p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Full Name</li>
                        <li>Transaction / Payment ID</li>
                        <li>Date and Amount of Payment</li>
                        <li>Mode of Payment (UPI / Card / Net Banking / etc.)</li>
                        <li>Reason for Refund Request</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2">3️⃣ Our finance team will verify the claim with the payment gateway and confirm within 5–7 working days.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                    Approved refunds will be processed within 15 working days of confirmation.
                  </p>
                </div>

                {/* Refund Method */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">6. Refund Method</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Refunds (if approved) will be issued using the same payment method through which the donation was made. Mowo Foundation is not responsible for delays caused by banking or third-party payment systems.
                  </p>
                </div>

                {/* International Donations */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">7. International Donations</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For international donors contributing under FCRA No. 368140142, refunds will follow additional verification as per FCRA and Indian government compliance procedures. Processing time may extend up to 30 working days due to mandatory reporting requirements.
                  </p>
                </div>

                {/* Transaction Security */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">8. Transaction Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All donations made through <strong>mowo.foundation</strong> are processed via secure and authorized payment gateways. We do not store or have access to your credit/debit card or banking information.
                  </p>
                </div>

                {/* Contact for Refund Queries */}
                <div className="mb-10 bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">9. Contact for Refund Queries</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For all refund or donation-related queries, please contact:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>📧 Email:</strong> <a href="mailto:donate@mowo.foundation" className="text-emerald-600 hover:underline">donate@mowo.foundation</a></p>
                    <p><strong>📞 Phone:</strong> <a href="tel:+918685735698" className="text-emerald-600 hover:underline">+91 86857 35698</a></p>
                    <p><strong>📍 Address:</strong></p>
                    <p className="pl-4">
                      Mowo Social Initiatives Foundation<br />
                      2-22-105/H, Allwyn Colony Road, Navodaya Colony,<br />
                      Shamshiguda, Kukatpally-Balanagar, Telangana – 500072, India
                    </p>
                  </div>
                </div>

                {/* Important Notes */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8" />
                    10. Important Notes
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Refunds are subject to verification and approval by Mowo Foundation</li>
                    <li>Administrative or gateway fees (if applicable) may be deducted from the refunded amount</li>
                    <li>All decisions made by the Foundation's finance committee are final</li>
                  </ul>
                </div>

                {/* Policy Updates */}
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-emerald-800 mb-4">11. Policy Updates</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This Refund Policy may be updated periodically to reflect changes in operational or legal requirements. Revised policies will be posted on our website with a new "Last Updated" date.
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">✅ Summary</h2>
                  <p className="text-xl leading-relaxed">
                    At Mowo Social Initiatives Foundation, every contribution helps us nurture nature and strengthen communities. We are committed to fairness, transparency, and integrity in managing your support — because trust grows just like trees — one root at a time. 🌿💚
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
