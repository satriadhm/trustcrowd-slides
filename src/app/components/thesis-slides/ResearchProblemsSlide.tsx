"use client";

import React from "react";
import { motion } from "framer-motion";

const ResearchProblemsSlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rumusan Masalah
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#24ce2a]/30 rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <span className="bg-[#24ce2a]/20 text-[#24ce2a] text-2xl sm:text-3xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full">RQ1</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center leading-relaxed">
              Seberapa akurat algoritma M-X dalam mengklasifikasi kelayakan tester?
            </h3>
            <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl">
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Evaluasi metrik performa klasifikasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Deteksi tester berkualitas konsisten</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#25da9e]/30 rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <span className="bg-[#25da9e]/20 text-[#25da9e] text-2xl sm:text-3xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full">RQ2</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center leading-relaxed">
              Sejauh mana algoritma M-X mengurangi variabilitas tester?
            </h3>
            <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl">
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Filtering tester tidak konsisten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Homogenitas pola respons</span>
                </li>
              </ul>
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
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-center">Tujuan Penelitian</h3>
          <div className="text-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Mengevaluasi efektivitas algoritma M-X sebagai mekanisme kontrol kualitas 
              untuk klasifikasi tester dalam lingkungan UAT crowdsourced
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchProblemsSlide;