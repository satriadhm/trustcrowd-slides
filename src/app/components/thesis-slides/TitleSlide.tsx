// src/app/components/thesis-slides/TitleSlide.tsx (Updated)
"use client";

import React from "react";
import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";

const TitleSlide = () => {
  return (
    <SlideLayout 
      showTitle={false}
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
            Mekanisme Kontrol Kualitas Tester untuk 
            <span className="block mt-2 sm:mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#24ce2a] to-[#25da9e]">
              UAT Berbasis Crowdsourcing
            </span>
            <span className="block mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-normal">
              menggunakan Algoritma M-X
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-10"
        >
          {/* Presenter Info */}
          <div className="bg-white/10 p-6 sm:p-8 lg:p-10 rounded-xl backdrop-blur-sm">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl mb-2 text-gray-300">Disajikan oleh:</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 text-white">
                  Glorious Satria Dhamang Aji
                </h2>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300">NIM: 1302213015</p>
              </div>

              <div className="border-t border-white/20 pt-4 sm:pt-6">
                <p className="text-base sm:text-lg lg:text-xl mb-2 text-gray-300">Pembimbing:</p>
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mb-2 text-white">
                  Dana Sulistiyo Kusumo, S.T., M.T., Ph.D
                </p>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300">NIP: 02780011</p>
              </div>
              
              <div className="border-t border-white/20 pt-4 sm:pt-6">
                <div className="space-y-2">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200">
                    Program Studi Sarjana Rekayasa Perangkat Lunak
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200">
                    Fakultas Informatika • Universitas Telkom
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium mt-4 text-[#24ce2a]">
                    2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default TitleSlide;