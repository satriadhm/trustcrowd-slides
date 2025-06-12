"use client";

import React from "react";
import { motion } from "framer-motion";

const ThankYouSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Terima Kasih!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 lg:mb-12">
            Atas perhatian dan feedback yang berharga
          </p>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12 bg-white/10 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-center text-[#24ce2a]">Penghargaan Penelitian</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8">
            <div className="text-center">
              <div className="bg-[#24ce2a]/20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3">Partisipan</h3>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">
                24 volunteer yang mendedikasikan waktu untuk studi simulasi
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#24ce2a]/20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3">Dukungan Akademik</h3>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">
                Fakultas dan staff Universitas Telkom atas guidance dan resources
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-[#24ce2a]/20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="font-medium text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3">Komunitas Penelitian</h3>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">
                Peers dan colleagues yang memberikan feedback dan review berharga
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-2 sm:mb-3 lg:mb-4">Terima Kasih Khusus Untuk</p>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium mb-1 sm:mb-2">Dana Sulistiyo Kusumo, S.T., M.T., Ph.D</p>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl">Pembimbing Penelitian</p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12 grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#24ce2a]">Informasi Kontak</h3>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">+6282241389340</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">glorioussatria@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-[#24ce2a]/20 p-2 sm:p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300">linkedin.com/in/gloriousatria</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-[#25da9e]">Langkah Selanjutnya</h3>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-xs sm:text-sm lg:text-base xl:text-lg">Publikasi</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Submission ke jurnal akademik dan konferensi di bidang software testing dan crowdsourced quality control</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-xs sm:text-sm lg:text-base xl:text-lg">Open Source Implementation</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Public release implementasi algoritma dan toolkit validasi untuk kolaborasi komunitas yang lebih luas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-xs sm:text-sm lg:text-base xl:text-lg">Partnership Industri</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Eksplorasi partnership dengan platform software testing untuk implementasi real-world</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#24ce2a] mb-2 sm:mb-3 lg:mb-4">Ada Pertanyaan?</p>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300">Silakan hubungi via email atau LinkedIn</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouSlide;