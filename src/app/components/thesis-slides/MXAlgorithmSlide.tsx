"use client";

import React from "react";
import { motion } from "framer-motion";

const MXAlgorithmSlide = () => {
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
          Algoritma M-X
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#24ce2a]">Dasar Algoritma</h3>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">M-1 Algorithm</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">
                  Evaluasi kualitas worker untuk masalah biner tanpa jawaban benar
                </p>
                <div className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded-lg text-center overflow-x-auto">
                  <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">
                    Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + ((1 - A<sub>i</sub>)(1 - A<sub>j</sub>)) / (M - 1)
                  </span>
                </div>
              </div>

              <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">M-X Algorithm</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3 lg:mb-4">
                  Ekstensi M-1 untuk multiple-choice dengan dekomposisi biner
                </p>
                <div className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded-lg text-center overflow-x-auto">
                  <span className="font-mono text-xs sm:text-sm lg:text-base text-gray-200 whitespace-nowrap">
                    A<sub>i</sub> = ∏<sub>j=1</sub><sup>M</sup> A<sub>ij</sub>
                  </span>
                </div>
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
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#25da9e]">Fitur Utama</h3>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#25da9e]">Independensi Ground Truth</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Evaluasi berdasarkan konsistensi antar-worker tanpa jawaban yang telah ditetapkan
                </p>
              </div>
              
              <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#25da9e]">Proses Algoritma</h4>
                <ol className="text-sm sm:text-base lg:text-lg text-gray-300 space-y-1 sm:space-y-2 lg:space-y-3 ml-3 sm:ml-4 list-decimal">
                  <li>Dekomposisi tugas multiple-choice ke sub-pertanyaan biner</li>
                  <li>Hitung tingkat agreement antar worker untuk setiap sub-pertanyaan</li>
                  <li>Bangun sistem persamaan menggunakan probabilitas agreement</li>
                  <li>Selesaikan persamaan untuk menentukan tingkat akurasi worker</li>
                  <li>Klasifikasi kelayakan berdasarkan threshold</li>
                </ol>
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
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-center">Relevansi untuk UAT Crowdsourcing</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">Evaluasi Subjektif</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Cocok untuk UAT dengan testing subjektif dan eksplorasi
              </p>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#25da9e]">Reduksi Variabilitas</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Identifikasi tester konsisten berdasarkan pola agreement
              </p>
            </div>
            
            <div className="bg-white/5 p-3 sm:p-4 lg:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
              <h4 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">Skalabilitas</h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Dirancang untuk menangani pool worker besar dalam crowdsourcing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MXAlgorithmSlide;