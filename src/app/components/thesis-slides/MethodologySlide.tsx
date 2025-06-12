"use client";

import React from "react";
import { motion } from "framer-motion";

const MethodologySlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Metodologi
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#24ce2a]">Desain Penelitian</h3>
            <ul className="space-y-5 text-xl text-gray-200">
              <li className="flex items-start gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Metodologi simulasi kuantitatif untuk evaluasi algoritma M-X</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Arsitektur client-server dengan GraphQL dan MongoDB</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Simulasi dengan 24 partisipan selama 3 hari</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-[#25da9e]">Alur Penelitian</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <span className="text-[#25da9e] font-bold text-xl">1</span>
                </div>
                <div>
                  <span className="font-medium text-xl block">Literature Review</span>
                  <p className="text-lg text-gray-300 mt-2">Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <span className="text-[#25da9e] font-bold text-xl">2</span>
                </div>
                <div>
                  <span className="font-medium text-xl block">Pengembangan Sistem</span>
                  <p className="text-lg text-gray-300 mt-2">Platform web dengan implementasi algoritma M-X</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <span className="text-[#25da9e] font-bold text-xl">3</span>
                </div>
                <div>
                  <span className="font-medium text-xl block">Simulasi</span>
                  <p className="text-lg text-gray-300 mt-2">Testing terkontrol dengan tugas berbasis Gherkin</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <span className="text-[#25da9e] font-bold text-xl">4</span>
                </div>
                <div>
                  <span className="font-medium text-xl block">Analisis Data</span>
                  <p className="text-lg text-gray-300 mt-2">Evaluasi kuantitatif performa algoritma</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-white/10 p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center">Metrik Evaluasi</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="font-medium text-xl text-[#24ce2a] mb-3">Accuracy</h4>
              <p className="text-lg text-gray-300 mb-4">Proporsi prediksi benar</p>
              <div className="bg-white/10 p-3 rounded text-center">
                <span className="font-mono text-lg text-gray-200">(TP + TN) / Total</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="font-medium text-xl text-[#24ce2a] mb-3">Precision</h4>
              <p className="text-lg text-gray-300 mb-4">Prediksi positif benar</p>
              <div className="bg-white/10 p-3 rounded text-center">
                <span className="font-mono text-lg text-gray-200">TP / (TP + FP)</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="font-medium text-xl text-[#24ce2a] mb-3">Recall</h4>
              <p className="text-lg text-gray-300 mb-4">Positif aktual terdeteksi</p>
              <div className="bg-white/10 p-3 rounded text-center">
                <span className="font-mono text-lg text-gray-200">TP / (TP + FN)</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="font-medium text-xl text-[#24ce2a] mb-3">TNR</h4>
              <p className="text-lg text-gray-300 mb-4">Negatif aktual terdeteksi</p>
              <div className="bg-white/10 p-3 rounded text-center">
                <span className="font-mono text-lg text-gray-200">TN / (TN + FP)</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-lg text-center">
              <h4 className="font-medium text-xl text-[#24ce2a] mb-3">F1 Score</h4>
              <p className="text-lg text-gray-300 mb-4">Rata-rata harmonik P & R</p>
              <div className="bg-white/10 p-3 rounded text-center">
                <span className="font-mono text-lg text-gray-200">2 × (P × R) / (P + R)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MethodologySlide;