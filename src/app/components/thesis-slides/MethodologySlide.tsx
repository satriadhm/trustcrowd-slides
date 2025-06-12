"use client";

import React from "react";
import { motion } from "framer-motion";

const MethodologySlide = () => {
  return (
    <div className="w-full min-h-screen flex items-start justify-center text-white px-4 py-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Metodologi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <motion.div 
            className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-5 text-[#24ce2a]">Desain Penelitian</h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-gray-200">
              <div className="flex items-start gap-3">
                <div className="bg-[#24ce2a]/20 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Simulasi kuantitatif untuk evaluasi algoritma M-X</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#24ce2a]/20 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Arsitektur client-server dengan GraphQL dan MongoDB</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#24ce2a]/20 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>24 partisipan selama 3 hari simulasi</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-5 text-[#25da9e]">Alur Penelitian</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-2 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8">
                  <span className="text-[#25da9e] font-bold text-sm">1</span>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg block">Literature Review</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-2 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8">
                  <span className="text-[#25da9e] font-bold text-sm">2</span>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg block">Pengembangan Sistem</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Platform web dengan implementasi algoritma M-X</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-2 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center w-8 h-8">
                  <span className="text-[#25da9e] font-bold text-sm">3</span>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg block">Simulasi & Analisis</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Testing terkontrol dengan evaluasi kuantitatif</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 sm:mb-5 lg:mb-6 text-center">Metrik Evaluasi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
              <h4 className="font-medium text-sm sm:text-base lg:text-lg text-[#24ce2a] mb-2">Accuracy</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 lg:mb-3">Proporsi prediksi benar</p>
              <div className="bg-white/10 p-2 rounded text-center">
                <span className="font-mono text-xs text-gray-200">(TP + TN) / Total</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
              <h4 className="font-medium text-sm sm:text-base lg:text-lg text-[#24ce2a] mb-2">Precision</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 lg:mb-3">Prediksi positif benar</p>
              <div className="bg-white/10 p-2 rounded text-center">
                <span className="font-mono text-xs text-gray-200">TP / (TP + FP)</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
              <h4 className="font-medium text-sm sm:text-base lg:text-lg text-[#24ce2a] mb-2">Recall</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 lg:mb-3">Positif aktual terdeteksi</p>
              <div className="bg-white/10 p-2 rounded text-center">
                <span className="font-mono text-xs text-gray-200">TP / (TP + FN)</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center">
              <h4 className="font-medium text-sm sm:text-base lg:text-lg text-[#24ce2a] mb-2">TNR</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 lg:mb-3">Negatif aktual terdeteksi</p>
              <div className="bg-white/10 p-2 rounded text-center">
                <span className="font-mono text-xs text-gray-200">TN / (TN + FP)</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 sm:p-4 rounded-lg text-center sm:col-span-2 lg:col-span-1 xl:col-span-1">
              <h4 className="font-medium text-sm sm:text-base lg:text-lg text-[#24ce2a] mb-2">F1 Score</h4>
              <p className="text-xs sm:text-sm text-gray-300 mb-2 lg:mb-3">Harmonik P & R</p>
              <div className="bg-white/10 p-2 rounded text-center">
                <span className="font-mono text-xs text-gray-200">2 × (P × R) / (P + R)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MethodologySlide;