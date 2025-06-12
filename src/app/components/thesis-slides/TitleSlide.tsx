"use client";

import React from "react";
import { motion } from "framer-motion";

const TitleSlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white">
      <div className="max-w-5xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Mekanisme Kontrol Kualitas Tester untuk 
            <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#24ce2a] to-[#25da9e]">
              UAT Berbasis Crowdsourcing
            </span>
            <span className="block mt-4 text-3xl text-gray-300">
              menggunakan Algoritma M-X
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 space-y-6"
        >
          <div className="flex flex-col items-center">
            <p className="text-2xl mb-2">Disajikan oleh:</p>
            <h2 className="text-4xl font-semibold mb-2">Glorious Satria Dhamang Aji</h2>
            <p className="text-xl">NIM: 1302213015</p>
          </div>

          <div className="mt-12">
            <p className="text-xl mb-2">Pembimbing:</p>
            <p className="text-3xl font-medium mb-2">Dana Sulistiyo Kusumo, S.T., M.T., Ph.D</p>
            <p className="text-lg text-gray-300">NIP: 02780011</p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-xl">Program Studi Sarjana Rekayasa Perangkat Lunak</p>
            <p className="text-xl">Fakultas Informatika • Universitas Telkom</p>
            <p className="text-2xl font-medium mt-4">2025</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;