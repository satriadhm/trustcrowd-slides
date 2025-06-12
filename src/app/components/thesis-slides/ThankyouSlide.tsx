"use client";

import React from "react";
import { motion } from "framer-motion";

const ThankYouSlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            Terima Kasih!
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12">
            Atas perhatian dan feedback yang berharga
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-12 bg-white/10 p-6 sm:p-8 lg:p-10 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-center text-[#24ce2a]">Penghargaan Penelitian</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="bg-[#24ce2a]/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Partisipan</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                24 volunteer yang mendedikasikan waktu untuk studi simulasi
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#24ce2a]/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Dukungan Akademik</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Fakultas dan staff Universitas Telkom atas guidance dan resources
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#24ce2a]/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Komunitas Penelitian</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Peers dan colleagues yang memberikan feedback dan review berharga
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-3 sm:mb-4">Terima Kasih Khusus Untuk</p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">Dana Sulistiyo Kusumo, S.T., M.T., Ph.D</p>
            <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl">Pembimbing Penelitian</p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Informasi Kontak</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">+6282241389340</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">glorioussatria@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">linkedin.com/in/gloriousatria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Langkah Selanjutnya</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Publikasi</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Submission ke jurnal akademik dan konferensi di bidang software testing dan crowdsourced quality control</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Open Source Implementation</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Public release implementasi algoritma dan toolkit validasi untuk kolaborasi komunitas yang lebih luas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Partnership Industri</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Eksplorasi partnership dengan platform software testing untuk implementasi real-world</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#24ce2a] mb-3 sm:mb-4">Ada Pertanyaan?</p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">Silakan hubungi via email atau LinkedIn</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouSlide;