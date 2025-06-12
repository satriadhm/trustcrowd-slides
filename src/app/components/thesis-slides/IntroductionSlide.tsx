"use client";

import React from "react";
import { motion } from "framer-motion";

const IntroductionSlide = () => {
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
          Pendahuluan
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Latar Belakang</h3>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-base sm:text-lg lg:text-xl text-gray-200">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>Kualitas software sangat penting dalam pengembangan komersial</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>UAT adalah tahap kritis terakhir sebelum implementasi</span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>UAT membutuhkan sumber daya, waktu, dan budget signifikan</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Crowdsourced UAT</h3>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-base sm:text-lg lg:text-xl text-gray-200">
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Solusi potensial:</span>
                  <p className="text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">Melibatkan beragam pengguna untuk testing yang lebih luas dan realistis</p>
                </div>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium">Tantangan utama:</span>
                  <p className="text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">Variabilitas karakteristik tester yang mempengaruhi konsistensi hasil</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-10 lg:mt-12 bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center text-[#24ce2a]">Algoritma M-X sebagai Solusi</h3>
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 leading-relaxed">
              Algoritma M-X menawarkan pendekatan untuk menilai kualitas tester berdasarkan konsistensi respons 
              <span className="text-[#25da9e] font-medium"> tanpa memerlukan jawaban benar yang telah ditentukan</span>
            </p>
            <div className="bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20 p-4 sm:p-6 rounded-lg">
              <p className="text-base sm:text-lg lg:text-xl font-medium">
                Penelitian ini mengevaluasi efektivitas algoritma M-X dalam mengklasifikasi kelayakan tester 
                dalam konteks UAT berbasis crowdsourcing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionSlide;