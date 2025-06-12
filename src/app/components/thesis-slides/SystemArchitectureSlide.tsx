"use client";

import React from "react";
import { motion } from "framer-motion";

const SystemArchitectureSlide = () => {
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
          Arsitektur Sistem
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Arsitektur Overview</h3>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="bg-white/10 p-3 rounded-lg text-[#24ce2a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
              <p className="text-center text-sm sm:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4">Client-Server dengan GraphQL dan MongoDB</p>
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <span className="text-sm sm:text-base lg:text-lg text-[#24ce2a]">Client</span>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400">Next.js, React</div>
                </div>
                <div className="flex-grow mx-3">
                  <div className="border-t border-dashed border-gray-500 relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#24ce2a]/20 text-xs text-[#24ce2a] px-1 rounded">
                      GraphQL
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm sm:text-base lg:text-lg text-[#24ce2a]">Server</span>
                  <div className="mt-1 text-xs sm:text-sm text-gray-400">Nest.js, MongoDB</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Single GraphQL Gateway</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Centralized entry point untuk semua data requests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-[#24ce2a]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-sm sm:text-base lg:text-lg">Implementasi M-X di Quality Control Service</span>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">Processing server-side yang efisien</p>
                </div>
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Komponen Sistem</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm sm:text-base lg:text-lg">Worker Management Service</h4>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Registrasi volunteer dan tracking kualifikasi</p>
              </div>
              
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm sm:text-base lg:text-lg">Task Management Service</h4>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Kontrol assignment, submission, dan validasi</p>
              </div>
              
              <div className="bg-white/5 p-3 sm:p-4 rounded-lg border-2 border-[#24ce2a]/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h4 className="font-medium text-sm sm:text-base lg:text-lg">Quality Control Service</h4>
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Implementasi algoritma M-X untuk assessment worker</p>
                <div className="mt-2 bg-[#24ce2a]/10 p-2 rounded">
                  <p className="text-xs text-[#24ce2a]">Core implementation algoritma M-X</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 sm:mt-12 bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center">Data Flow Process</h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg flex-1">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a] text-center">Input</h4>
              <div className="text-sm sm:text-base lg:text-lg text-gray-300 text-center">
                <p>• Task identification</p>
                <p>• Worker identification</p>
                <p>• Answer selection</p>
              </div>
            </div>

            <div className="mx-2 sm:mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a] rotate-90 lg:rotate-0">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg flex-1">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#25da9e] text-center">Processing</h4>
              <div className="text-sm sm:text-base lg:text-lg text-gray-300 text-center">
                <p>• Dekomposisi M-X</p>
                <p>• Konsistensi antar-worker</p>
                <p>• Accuracy scores</p>
              </div>
            </div>

            <div className="mx-2 sm:mx-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e] rotate-90 lg:rotate-0">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg flex-1">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a] text-center">Output</h4>
              <div className="text-sm sm:text-base lg:text-lg text-gray-300 text-center">
                <p>• Worker accuracy scores</p>
                <p>• Klasifikasi kelayakan</p>
                <p>• Performance analytics</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemArchitectureSlide;