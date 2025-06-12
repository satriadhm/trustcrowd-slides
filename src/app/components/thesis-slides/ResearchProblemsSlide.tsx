"use client";

import React from "react";
import { motion } from "framer-motion";

const ResearchProblemsSlide = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-6xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Rumusan Masalah
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#24ce2a]/30 rounded-xl p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <span className="bg-[#24ce2a]/20 text-[#24ce2a] text-2xl font-bold px-6 py-3 rounded-full">RQ1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-8 text-center leading-relaxed">
              Seberapa akurat algoritma M-X dalam mengklasifikasi tester 
              pada lingkungan UAT berbasis crowdsourcing?
            </h3>
            <div className="bg-white/10 p-6 rounded-lg">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Evaluasi berdasarkan metrik performa klasifikasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Penilaian efektivitas dalam mendeteksi tester konsisten</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-[#0a1e5e] to-[#001333] border-2 border-[#25da9e]/30 rounded-xl p-10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <span className="bg-[#25da9e]/20 text-[#25da9e] text-2xl font-bold px-6 py-3 rounded-full">RQ2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-8 text-center leading-relaxed">
              Sejauh mana algoritma M-X dapat mengurangi variabilitas tester 
              dan memastikan kualitas testing yang konsisten?
            </h3>
            <div className="bg-white/10 p-6 rounded-lg">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Analisis kemampuan menyaring tester tidak konsisten</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#25da9e]/20 p-2 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <span>Pengukuran homogenitas pola respons tester</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-white/10 p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-center">Tujuan Penelitian</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-medium text-2xl text-[#24ce2a] mb-4">Tujuan Utama</h4>
              <p className="text-xl text-gray-200">
                Mengevaluasi efektivitas algoritma M-X sebagai mekanisme kontrol kualitas 
                untuk klasifikasi tester dalam lingkungan UAT crowdsourced
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h4 className="font-medium text-2xl text-[#25da9e] mb-4">Tujuan Khusus</h4>
              <ul className="text-xl text-gray-200 space-y-3">
                <li>• Implementasi algoritma M-X dalam lingkungan UAT simulasi</li>
                <li>• Evaluasi akurasi klasifikasi menggunakan confusion matrix</li>
                <li>• Analisis dampak dalam mengurangi variabilitas tester</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchProblemsSlide;