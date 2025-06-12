"use client";

import React from "react";
import { motion } from "framer-motion";

const MXAlgorithmSlide = () => {
  return (
    <div className="w-full min-h-screen flex items-start justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8 py-4 sm:py-6 lg:py-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Algoritma M-X
        </motion.h2>

        {/* Rumus Utama - Highlight Section */}
        <motion.div 
          className="mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-[#24ce2a]/20 to-[#24ce2a]/5 border-2 border-[#24ce2a]/30 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#24ce2a] text-center">M-1 Algorithm</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 text-center">
                Evaluasi kualitas worker untuk masalah biner tanpa jawaban benar
              </p>
              <div className="bg-white/15 p-4 sm:p-6 lg:p-8 rounded-xl text-center border border-[#24ce2a]/20">
                <span className="font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#24ce2a] font-bold block">
                  Q<sub className="text-base sm:text-lg lg:text-xl">ij</sub> = A<sub className="text-base sm:text-lg lg:text-xl">i</sub> · A<sub className="text-base sm:text-lg lg:text-xl">j</sub> + 
                </span>
                <span className="font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#24ce2a] font-bold block mt-2">
                  ((1 - A<sub className="text-base sm:text-lg lg:text-xl">i</sub>)(1 - A<sub className="text-base sm:text-lg lg:text-xl">j</sub>)) / (M - 1)
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#25da9e]/20 to-[#25da9e]/5 border-2 border-[#25da9e]/30 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-[#25da9e] text-center">M-X Algorithm</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 text-center">
                Ekstensi M-1 untuk multiple-choice dengan dekomposisi biner
              </p>
              <div className="bg-white/15 p-4 sm:p-6 lg:p-8 rounded-xl text-center border border-[#25da9e]/20">
                <span className="font-mono text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#25da9e] font-bold block">
                  A<sub className="text-lg sm:text-xl lg:text-2xl">i</sub> = ∏<sub className="text-base sm:text-lg lg:text-xl">j=1</sub><sup className="text-base sm:text-lg lg:text-xl">M</sup> A<sub className="text-base sm:text-lg lg:text-xl">ij</sub>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <motion.div 
            className="bg-white/10 p-3 sm:p-4 lg:p-5 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-[#24ce2a]">Karakteristik Algoritma</h3>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg mb-1 text-[#24ce2a]">Independensi Ground Truth</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Tidak memerlukan jawaban yang benar untuk evaluasi kualitas worker
                </p>
              </div>
              
              <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg mb-1 text-[#24ce2a]">Dekomposisi Biner</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Mengubah masalah multiple-choice menjadi sub-pertanyaan biner
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-3 sm:p-4 lg:p-5 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-[#25da9e]">Proses Algoritma</h3>
            
            <div className="space-y-1 sm:space-y-2">
              <ol className="text-xs sm:text-sm lg:text-base text-gray-300 space-y-1 ml-3 list-decimal">
                <li>Dekomposisi tugas multiple-choice ke sub-pertanyaan biner</li>
                <li>Hitung tingkat agreement antar worker</li>
                <li>Bangun sistem persamaan probabilitas agreement</li>
                <li>Selesaikan persamaan untuk tingkat akurasi worker</li>
                <li>Klasifikasi kelayakan berdasarkan threshold</li>
              </ol>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-3 sm:p-4 lg:p-5 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-center text-[#f39c12]">Relevansi UAT Crowdsourcing</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg mb-1 text-[#f39c12]">Evaluasi Subjektif</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Cocok untuk UAT dengan testing subjektif dan eksplorasi
                </p>
              </div>
              
              <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg mb-1 text-[#f39c12]">Reduksi Variabilitas</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Identifikasi tester konsisten berdasarkan pola agreement
                </p>
              </div>
              
              <div className="bg-white/5 p-2 sm:p-3 rounded-lg">
                <h4 className="font-medium text-sm sm:text-base lg:text-lg mb-1 text-[#f39c12]">Skalabilitas</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">
                  Dirancang untuk pool worker besar dalam crowdsourcing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MXAlgorithmSlide;