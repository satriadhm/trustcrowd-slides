"use client";

import React from "react";
import { motion } from "framer-motion";

const SimulationDesignSlide = () => {
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
          Desain Simulasi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Desain Tugas Gherkin</h3>
            
            <div className="mb-4 sm:mb-6 bg-white/5 p-4 sm:p-6 rounded-lg">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">Format Requirements</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Format multiple-choice dengan M opsi tetap</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Kapabilitas dekomposisi biner untuk algoritma M-X</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Opsi independen dan non-eksklusif</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 sm:p-6 rounded-lg">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-center">Contoh Tugas Gherkin</h4>
              <div className="bg-white/10 p-3 sm:p-4 rounded text-sm sm:text-base">
                <p className="text-[#24ce2a] font-medium">Feature: User Account Management</p>
                <p className="mt-2 text-white">Scenario: Password reset functionality</p>
                <div className="mt-2 text-gray-300 space-y-1">
                  <p><span className="text-blue-300 font-medium">Given</span> user di halaman login</p>
                  <p><span className="text-blue-300 font-medium">When</span> klik &quot;Forgot Password&quot;</p>
                  <p><span className="text-blue-300 font-medium">Then</span> user melihat:</p>
                </div>
                <div className="mt-2 ml-4 space-y-1 text-gray-300 text-xs sm:text-sm">
                  <p>□ Email input field</p>
                  <p>□ Submit button</p>
                  <p>□ Return to login link</p>
                  <p>□ Security question prompts</p>
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Penentuan Kelayakan</h3>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">Rule-Based Validation</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">
                Pendekatan definisi threshold manual untuk kriteria kelayakan spesifik konteks
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Perbandingan accuracy scores M-X terhadap threshold</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Kalkulasi kelayakan berdasarkan rata-rata performa task</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">Protokol Simulasi</h4>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-300">
                <p>• <span className="font-medium">Timeframe:</span> 3 hari simulasi hybrid</p>
                <p>• <span className="font-medium">Partisipan:</span> 24 volunteer (12 berpengalaman UAT, 12 tanpa pengalaman)</p>
                <p>• <span className="font-medium">Validasi:</span> Prior-experience based validation untuk ground truth</p>
                <p>• <span className="font-medium">Distribusi:</span> 50:50 eligible/non-eligible</p>
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
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center">Proses Pengumpulan Data</h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center flex-1">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3">
                <span className="text-[#24ce2a] font-bold text-lg sm:text-xl lg:text-2xl">1</span>
              </div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2">Task Distribution</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">Distribusi tugas testing berbasis Gherkin</p>
            </div>
            
            <div className="hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            <div className="text-center flex-1">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3">
                <span className="text-[#25da9e] font-bold text-lg sm:text-xl lg:text-2xl">2</span>
              </div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2">Response Collection</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">Pengumpulan respons dari 24 partisipan</p>
            </div>
            
            <div className="hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            <div className="text-center flex-1">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3">
                <span className="text-[#24ce2a] font-bold text-lg sm:text-xl lg:text-2xl">3</span>
              </div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2">Algorithm Processing</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">Pemrosesan dengan algoritma M-X</p>
            </div>
            
            <div className="hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            <div className="text-center flex-1">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3">
                <span className="text-[#25da9e] font-bold text-lg sm:text-xl lg:text-2xl">4</span>
              </div>
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2">Evaluation</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">Evaluasi dengan confusion matrix</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulationDesignSlide;