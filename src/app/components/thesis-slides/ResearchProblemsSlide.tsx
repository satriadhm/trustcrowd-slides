"use client";

import React from "react";
import { motion } from "framer-motion";

const ResearchProblemsSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 sm:mb-12 lg:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rumusan Masalah
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#24ce2a]/30 rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <span className="bg-[#24ce2a]/20 text-[#24ce2a] text-xl sm:text-2xl lg:text-3xl font-bold px-3 sm:px-4 lg:px-6 py-2 rounded-full">RQ1</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-center leading-relaxed">
              Seberapa akurat algoritma M-X dalam mengklasifikasi kelayakan <i>tester</i> di lingkungan UAT <i>crowdsourced</i>?
            </h3>
            <div className="bg-white/10 p-3 sm:p-4 lg:p-6 rounded-lg">
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span><b>Tujuan:</b> Mengevaluasi akurasi klasifikasi M-X menggunakan respons <i>tester</i> nyata dalam tugas-tugas subjektif.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span><b>Metrik:</b> Akurasi, Presisi, <i>Recall</i>, F1-Score, dan TNR.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#25da9e]/30 rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <span className="bg-[#25da9e]/20 text-[#25da9e] text-xl sm:text-2xl lg:text-3xl font-bold px-3 sm:px-4 lg:px-6 py-2 rounded-full">RQ2</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-center leading-relaxed">
              Sejauh mana algoritma M-X mengurangi variabilitas karakteristik <i>tester</i> dan memastikan kualitas <i>testing</i> yang konsisten?
            </h3>
            <div className="bg-white/10 p-3 sm:p-4 lg:p-6 rounded-lg">
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg xl:text-xl">
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span><b>Tujuan:</b> Mengukur dampak variabilitas <i>tester</i>, khususnya pengalaman sebelumnya, terhadap performa algoritma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span><b>Metrik:</b> TNR, FP Rate.</span>
                </li>
              </ul>
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
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center">Tujuan Penelitian</h3>
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed">
              Mengevaluasi <b>efektivitas algoritma M-X sebagai mekanisme kontrol kualitas</b> untuk klasifikasi <i>tester</i> dalam lingkungan UAT <i>crowdsourced</i>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchProblemsSlide;