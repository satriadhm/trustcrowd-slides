"use client";

import React from "react";
import { motion } from "framer-motion";

const TheoreticalBackgroundSlide = () => {
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
          Landasan Teori
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">User Acceptance Testing</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">Definisi</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Fase akhir testing yang memverifikasi kesesuaian sistem dengan kebutuhan pengguna
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]">Tantangan</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Sering tidak memiliki jawaban benar yang telah ditetapkan
                </p>
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Crowdsourced Testing</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#25da9e]">Konsep</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Distribusi tugas testing ke grup independen untuk efisiensi dan perspektif beragam
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#25da9e]">Masalah Utama</h4>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300">
                  Variabilitas karakteristik tester mempengaruhi konsistensi hasil
                </p>
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
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">Algoritma M-X</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200">
              Evaluasi kualitas worker tanpa jawaban benar yang telah ditetapkan
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#25da9e]">Confusion Matrix</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200">
              Framework evaluasi untuk pengukuran performa klasifikasi
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">Gherkin Syntax</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200">
              Format Given-When-Then untuk skenario testing terstruktur
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TheoreticalBackgroundSlide;