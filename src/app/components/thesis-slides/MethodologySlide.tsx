"use client";

import React from "react";
import { motion } from "framer-motion";

const MethodologySlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Metodologi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Desain Penelitian</h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Simulasi kuantitatif untuk evaluasi algoritma M-X</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Arsitektur client-server dengan GraphQL dan MongoDB</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>24 partisipan selama 3 hari simulasi</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Alur Penelitian</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <span className="text-[#25da9e] font-bold text-lg sm:text-xl">1</span>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl block">Literature Review</span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <span className="text-[#25da9e] font-bold text-lg sm:text-xl">2</span>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl block">Pengembangan Sistem</span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Platform web dengan implementasi algoritma M-X</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <span className="text-[#25da9e] font-bold text-lg sm:text-xl">3</span>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl block">Simulasi & Analisis</span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-2">Testing terkontrol dengan evaluasi kuantitatif</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-center">Metrik Evaluasi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg text-center">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Accuracy</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Proporsi prediksi benar</p>
              <div className="bg-white/10 p-2 sm:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200">(TP + TN) / Total</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg text-center">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Precision</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Prediksi positif benar</p>
              <div className="bg-white/10 p-2 sm:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200">TP / (TP + FP)</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg text-center">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Recall</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Positif aktual terdeteksi</p>
              <div className="bg-white/10 p-2 sm:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200">TP / (TP + FN)</span>
              </div>
            </div>

            <div className="bg-white/5 p-4 sm:p-6 rounded-lg text-center">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#24ce2a] mb-2 sm:mb-3">TNR</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Negatif aktual terdeteksi</p>
              <div className="bg-white/10 p-2 sm:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200">TN / (TN + FP)</span>
              </div>
            </div>

            <div className="bg-white/5 p-4 sm:p-6 rounded-lg text-center col-span-2 sm:col-span-3 lg:col-span-1">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl text-[#24ce2a] mb-2 sm:mb-3">F1 Score</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Harmonik P & R</p>
              <div className="bg-white/10 p-2 sm:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200">2 × (P × R) / (P + R)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MethodologySlide;