"use client";

import React from "react";
import { motion } from "framer-motion";

const MethodologySlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Metodologi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#24ce2a]">Desain Penelitian</h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Simulasi kuantitatif untuk evaluasi algoritma M-X</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Arsitektur client-server dengan GraphQL dan MongoDB</span>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>24 partisipan selama 3 hari simulasi</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#25da9e]">Alur Penelitian</h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <span className="text-[#25da9e] font-bold text-sm sm:text-base lg:text-lg xl:text-xl">1</span>
                </div>
                <div>
                  <span className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl block">Literature Review</span>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mt-1 sm:mt-2">Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <span className="text-[#25da9e] font-bold text-sm sm:text-base lg:text-lg xl:text-xl">2</span>
                </div>
                <div>
                  <span className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl block">Pengembangan Sistem</span>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mt-1 sm:mt-2">Platform web dengan implementasi algoritma M-X</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-2 sm:p-3 rounded-full mt-1 flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <span className="text-[#25da9e] font-bold text-sm sm:text-base lg:text-lg xl:text-xl">3</span>
                </div>
                <div>
                  <span className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl block">Simulasi & Analisis</span>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mt-1 sm:mt-2">Testing terkontrol dengan evaluasi kuantitatif</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12 bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">Metrik Evaluasi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg text-center">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Accuracy</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">Proporsi prediksi benar</p>
              <div className="bg-white/10 p-1 sm:p-2 lg:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">(TP + TN) / Total</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg text-center">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Precision</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">Prediksi positif benar</p>
              <div className="bg-white/10 p-1 sm:p-2 lg:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">TP / (TP + FP)</span>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg text-center">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-[#24ce2a] mb-2 sm:mb-3">Recall</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">Positif aktual terdeteksi</p>
              <div className="bg-white/10 p-1 sm:p-2 lg:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">TP / (TP + FN)</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg text-center">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-[#24ce2a] mb-2 sm:mb-3">TNR</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">Negatif aktual terdeteksi</p>
              <div className="bg-white/10 p-1 sm:p-2 lg:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">TN / (TN + FP)</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg text-center col-span-2 sm:col-span-3 lg:col-span-1">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl text-[#24ce2a] mb-2 sm:mb-3">F1 Score</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">Harmonik P & R</p>
              <div className="bg-white/10 p-1 sm:p-2 lg:p-3 rounded text-center">
                <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">2 × (P × R) / (P + R)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MethodologySlide;