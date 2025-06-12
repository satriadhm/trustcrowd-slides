"use client";

import React from "react";
import { motion } from "framer-motion";

const FutureWorkSlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8 py-4 sm:py-6 lg:py-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Penelitian Lanjutan
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Pengembangan Algoritma</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M12 22V8" />
                    <path d="m5 12 7-4 7 4" />
                    <path d="M5 16l7-4 7 4" />
                    <path d="M5 20l7-4 7 4" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>Adaptive Thresholding</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Mekanisme <i>threshold</i> yang menyesuaikan dengan kompleksitas <i>task</i> dan konteks domain.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M12 22V8" />
                    <path d="m5 12 7-4 7 4" />
                    <path d="M5 16l7-4 7 4" />
                    <path d="M5 20l7-4 7 4" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>Varian Algoritma</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Versi khusus M-X yang dioptimalkan untuk tipe <i>test</i> dan format pertanyaan berbeda.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M12 22V8" />
                    <path d="m5 12 7-4 7 4" />
                    <path d="M5 16l7-4 7 4" />
                    <path d="M5 20l7-4 7 4" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>Machine Learning Integration</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Integrasi teknik ML untuk meningkatkan presisi dan adaptabilitas <i>over time</i>.</p>
                </div>
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Implementasi & Skala</h3>
          
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>Large-Scale Production</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Validasi performa algoritma di <i>production environment</i> dengan <i>tester</i> beragam.</p>
                </div>
              </div>
            
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>Performance Optimization</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Efisiensi komputasi untuk <i>worker pools</i> besar dan skenario <i>testing</i> kompleks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="3" x2="21" y1="9" y2="9" />
                    <line x1="9" x2="9" y1="21" y2="9" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><b>API & Integration Framework</b></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Interface terstandarisasi untuk integrasi dengan platform <i>testing</i> dan CI/CD <i>pipelines</i>.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">Ekstensi Penelitian</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3">
              Ekspansi fondasi teoritis dan aplikasi penelitian
            </p>
            <ul className="text-xs sm:text-sm lg:text-base text-gray-300 space-y-2 list-disc pl-5">
              <li>Studi komparatif dengan metode QC lain.</li>
              <li>Aplikabilitas <i>cross-domain</i> di luar <i>software testing</i>.</li>
              <li>Studi longitudinal akurasi algoritma dalam periode waktu yang lebih panjang.</li>
            </ul>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#25da9e]">Implementasi Bisnis</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3">
              Transisi temuan penelitian ke aplikasi bisnis praktis
            </p>
            <ul className="text-xs sm:text-sm lg:text-base text-gray-300 space-y-2 list-disc pl-5">
              <li>Model SaaS untuk platform <i>crowdsourced testing</i>.</li>
              <li><i>Partnership</i> industri untuk validasi <i>real-world</i>.</li>
              <li>Framework sertifikasi kualitas untuk produk <i>software</i>.</li>
            </ul>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">Studi Demografis</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-3">
              Pemahaman karakteristik <i>tester</i> dan strategi <i>recruitment</i>
            </p>
            <ul className="text-xs sm:text-sm lg:text-base text-gray-300 space-y-2 list-disc pl-5">
              <li>Analisis faktor demografis yang mempengaruhi kualitas <i>test</i>.</li>
              <li>Strategi <i>recruitment tester</i> yang <i>targeted</i>.</li>
              <li>Investigasi faktor motivasi untuk partisipasi berkelanjutan.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mt-8 bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20 p-6 sm:p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">Visi Jangka Panjang</h3>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Mengembangkan ekosistem kontrol kualitas yang komprehensif dan adaptif yang merevolusi <i>crowdsourced testing</i> dengan meminimalkan variabilitas sambil memaksimalkan nilai perspektif yang beragam.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureWorkSlide;