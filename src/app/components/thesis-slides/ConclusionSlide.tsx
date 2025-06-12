"use client";

import React from "react";
import { motion } from "framer-motion";

const ConclusionSlide = () => {
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
          Kesimpulan
        </motion.h2>

        <motion.div 
          className="bg-white/10 p-6 sm:p-8 lg:p-10 rounded-xl backdrop-blur-sm mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Ringkasan Penelitian</h3>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
            Penelitian ini berhasil mendemonstrasikan efektivitas algoritma M-X sebagai mekanisme kontrol kualitas 
            <i>tester</i> dalam <i>crowdsourcing</i> UAT dengan akurasi <span className="font-bold text-[#24ce2a]">79%</span>, 
            presisi <span className="font-bold text-[#24ce2a]">82%</span> , dan <i>recall</i> <span className="font-bold text-[#24ce2a]">75%</span>.
          </p>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Algoritma dapat secara efektif membedakan <i>tester eligible</i> dan <i>non-eligible</i> berdasarkan pola konsistensi respons 
            tanpa memerlukan jawaban yang telah ditetapkan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">Kekuatan Utama</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#24ce2a]"><b>Reduksi Variabilitas</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  TNR 83% menunjukkan kemampuan signifikan dalam mengurangi variabilitas <i>tester</i>.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#24ce2a]"><b>Fleksibilitas</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Independensi dari <i>ground truth</i> membuatnya <i>versatile</i> untuk berbagai skenario <i>testing</i>.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#24ce2a]"><b>Performa Seimbang</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Konsistensi kuat di semua metrik evaluasi menunjukkan klasifikasi yang <i>reliable</i>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-[#25da9e]">Keterbatasan & Saran</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#25da9e]"><b>Keterbatasan Sampel</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Ukuran sampel 24 partisipan membatasi generalisasi ke lingkungan <i>crowdsourced</i> yang lebih besar.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#25da9e]"><b>Lingkungan Testing</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Simulasi terkontrol vs <i>production environment</i>; perlu validasi di skenario <i>real-world</i>.
                </p>
              </div>
              
              <div className="bg-white/5 p-4 sm:p-6 rounded-lg">
                <h4 className="font-medium text-lg sm:text-xl lg:text-2xl mb-2 text-[#25da9e]"><b>Nuansa Subjektivitas & Keahlian</b></h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                  Algoritma berpotensi mengecualikan kontributor berharga yang pola responsnya menyimpang dari konsensus, berpotensi mengurangi keragaman <i>tester</i> dan kualitas dalam skenario UAT kompleks yang membutuhkan perspektif beragam.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-6 sm:mt-8 bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20 p-6 sm:p-8 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">Penilaian Akhir</h3>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Algoritma M-X memberikan solusi yang <i>promising</i> untuk meningkatkan kualitas <i>crowdsourced</i> UAT 
            dengan mengidentifikasi <i>tester</i> konsisten dan reduksi variabilitas dalam hasil <i>testing</i>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConclusionSlide;