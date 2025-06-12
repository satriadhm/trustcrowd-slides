"use client";

import React from "react";
import { motion } from "framer-motion";

const AnalysisSlide = () => {
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
          Analisis Hasil
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Interpretasi Metrik</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]"><strong>Accuracy (79%)</strong></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Algoritma berhasil mengklasifikasi <b>4 dari 5 <i>tester</i> dengan benar</b>, menunjukkan performa yang kuat.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]"><strong>Precision (82%)</strong></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Tinggi <i>precision</i> <b>mengurangi risiko melibatkan <i>tester</i> tidak berkualitas</b>, krusial dalam UAT.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]"><strong>TNR (83%)</strong></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  <b>Sangat efektif dalam mengidentifikasi dan <i>filtering tester</i> non-eligible</b>.
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
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Kekuatan Algoritma M-X</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><strong>Independensi Ground Truth</strong></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">Ideal untuk UAT subjektif dan eksplorasi tanpa jawaban benar yang telah ditetapkan.</p>
                </div>
              </div>
            
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><strong>Performa Seimbang</strong></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">F1 Score 78% menunjukkan keseimbangan yang baik antara <i>precision</i> dan <i>recall</i>.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-lg sm:text-xl lg:text-2xl"><strong>Reduksi Variabilitas Efektif</strong></span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mt-1">TNR 83% sangat efektif dalam menciptakan <i>pool tester</i> yang homogen.</p>
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
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-center">Analisis Klasifikasi</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-red-400"><strong>False Positives (FP = 2)</strong></h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Hanya 17% dari <i>tester</i> yang diidentifikasi <i>eligible</i>, meminimalkan dampak terhadap kualitas <i>testing</i>. Ini termasuk <b>2 partisipan tanpa pengalaman UAT formal</b> yang diklasifikasikan <i>eligible</i> oleh algoritma.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-orange-400"><strong>False Negatives (FN = 3)</strong></h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                Tiga <i>tester eligible</i> tidak teridentifikasi, menunjukkan ruang perbaikan <i>sensitivity</i>. Ini termasuk <b>3 mahasiswa <i>software engineering</i> yang berpengalaman</b> yang dianggap <i>eligible</i> berdasarkan pengalaman sebelumnya.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 sm:p-6 rounded-lg sm:col-span-2 lg:col-span-1">
              <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[#24ce2a]"><strong>Efektivitas Keseluruhan</strong></h4>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                79% akurasi dan performa kuat di semua metrik menunjukkan potensi signifikan sebagai mekanisme QC. <b>Analisis misklasifikasi menunjukkan bahwa pendekatan berbasis konsistensi algoritma kadang dapat menyimpang dari penentuan kelayakan berbasis pengalaman, menyoroti sifat komplementer dari metode penilaian ini</b>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalysisSlide;