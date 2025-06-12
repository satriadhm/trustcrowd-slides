"use client";

import React from "react";
import { motion } from "framer-motion";

const TheoreticalBackgroundSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Landasan Teori
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">User Acceptance Testing</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Definisi</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Fase akhir testing yang memverifikasi kesesuaian sistem dengan kebutuhan pengguna
                </p>
              </div>
              
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Tantangan</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Sering tidak memiliki jawaban benar yang telah ditetapkan
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#25da9e]">Crowdsourced Testing</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Konsep</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Distribusi tugas testing ke grup independen untuk efisiensi dan perspektif beragam
                </p>
              </div>
              
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Masalah Utama</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Variabilitas karakteristik tester mempengaruhi konsistensi hasil
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6 sm:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-[#24ce2a]">Algoritma M-X</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-200">
              Evaluasi kualitas worker tanpa jawaban benar yang telah ditetapkan
            </p>
          </div>

          <div className="bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-[#25da9e]">Confusion Matrix</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-200">
              Framework evaluasi untuk pengukuran performa klasifikasi
            </p>
          </div>

          <div className="bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-[#24ce2a]">Gherkin Syntax</h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-200">
              Format Given-When-Then untuk skenario testing terstruktur
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TheoreticalBackgroundSlide;