"use client";

import React from "react"; // Import useState
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/app/components/ui/dialog"; 

const SimulationDesignSlide = () => {

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Desain Simulasi
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          {/* Section 1: Desain Tugas Gherkin */}
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#24ce2a]">Desain Tugas Gherkin</h3>
            
            <div className="mb-3 sm:mb-4 lg:mb-6 bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 lg:mb-4">Format Requirements</h4>
              <ul className="space-y-1 sm:space-y-2 lg:space-y-3 text-sm sm:text-base lg:text-lg text-gray-300">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Format multiple-choice dengan M opsi tetap</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Kapabilitas dekomposisi biner untuk algoritma M-X</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Opsi independen dan non-eksklusif</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 lg:mb-4 text-center">Contoh Tugas Gherkin</h4>
              <div className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded text-xs sm:text-sm lg:text-base">
                <p className="text-[#24ce2a] font-medium">Feature: User Account Management</p>
                <p className="mt-1 sm:mt-2 text-white">Scenario: Password reset functionality</p>
                <div className="mt-1 sm:mt-2 text-gray-300 space-y-1">
                  <p><span className="text-blue-300 font-medium">Given</span> user di halaman login</p>
                  <p><span className="text-blue-300 font-medium">When</span> klik &quot;Forgot Password&quot;</p>
                  <p><span className="text-blue-300 font-medium">Then</span> user melihat:</p>
                </div>
                <div className="mt-1 sm:mt-2 ml-2 sm:ml-4 space-y-1 text-gray-300 text-xs sm:text-sm">
                  <p>□ Email input field</p>
                  <p>□ Submit button</p>
                  <p>□ Return to login link</p>
                  <p>□ Security question prompts</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Penentuan Kelayakan */}
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#25da9e]">Penentuan Kelayakan</h3>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg mb-3 sm:mb-4 lg:mb-6">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 lg:mb-4">Rule-Based Validation</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">
                Pendekatan definisi threshold manual untuk kriteria kelayakan spesifik konteks
              </p>
              <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Perbandingan accuracy scores M-X terhadap threshold</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg">Kalkulasi kelayakan berdasarkan rata-rata performa task</span>
                </li>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 lg:mb-4">Protokol Simulasi</h4>
              <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-sm sm:text-base lg:text-lg text-gray-300">
                <p>• <span className="font-medium">Timeframe:</span> 3 hari simulasi hybrid</p>
                <p>• <span className="font-medium">Partisipan:</span> 24 volunteer (12 berpengalaman UAT, 12 tanpa pengalaman)</p>
                <p>• <span className="font-medium">Validasi:</span> Prior-experience based validation untuk ground truth</p>
                <p>• <span className="font-medium">Distribusi:</span> 50:50 eligible/non-eligible</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Proses Pengumpulan Data - Sekarang ini adalah tombol atau kartu pemicu modal */}
        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12 bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm text-center" // Tambahkan text-center
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center">Proses Pengumpulan Data</h3>
          
          {/* Menggunakan DialogTrigger untuk membuka modal saat diklik */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-gradient-to-r from-[#24ce2a] to-[#25da9e] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Lihat Detail Proses
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">Detail Proses Pengumpulan Data</DialogTitle>
                <DialogDescription className="text-gray-300 text-base text-center">
                  Berikut adalah langkah-langkah detail dalam proses pengumpulan data untuk simulasi.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#24ce2a]">1</div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Task Distribution</h4>
                    <p className="text-sm text-gray-300">Distribusi tugas testing berbasis Gherkin</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#25da9e]">2</div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Response Collection</h4>
                    <p className="text-sm text-gray-300">Pengumpulan respons dari 24 partisipan</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#24ce2a]">3</div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Algorithm Processing</h4>
                    <p className="text-sm text-gray-300">Pemrosesan dengan algoritma M-X</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#25da9e]">4</div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Evaluation</h4>
                    <p className="text-sm text-gray-300">Evaluasi dengan confusion matrix</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulationDesignSlide;