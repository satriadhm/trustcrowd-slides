"use client";

import React from "react";
import { motion } from "framer-motion";
// Pastikan komponen Dialog diimpor dari path yang benar
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/app/components/ui/dialog"; 


const TheoreticalBackgroundSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 sm:px-8 py-8">
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

        {/* Section 1: User Acceptance Testing (UAT) & Crowdsourcing Integration */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
          <motion.div 
            className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">User Acceptance Testing (UAT)</h3>
            <div className="space-y-3 sm:space-y-4">
              {/* Ini adalah kartu yang akan membuka modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"> {/* Added cursor-pointer and hover effect */}
                    <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Definisi & Peran</h4>
                    <p className="text-sm sm:text-base lg:text-base text-gray-300">
                      Klik untuk melihat detail definisi dan peran UAT.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">Definisi & Peran UAT</DialogTitle>
                    <DialogDescription className="text-gray-300 text-base text-center">
                      Detail lengkap mengenai User Acceptance Testing.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 text-base text-gray-200">
                    <p>Fase validasi akhir yang memverifikasi kesesuaian sistem dengan kebutuhan bisnis dan kesiapan deployment.</p>
                    <p>UAT berfungsi sebagai jembatan penting antara tim pengembangan dan *end-user*, memastikan sistem memenuhi ekspektasi pengguna melalui evaluasi kelengkapan, kegunaan, dan keselarasan bisnis.</p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Tantangan Khas UAT</h4>
                    <p className="text-sm sm:text-base lg:text-base text-gray-300">
                      Klik untuk melihat detail tantangan dalam UAT.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">Tantangan Khas UAT</DialogTitle>
                    <DialogDescription className="text-gray-300 text-base text-center">
                      Isu-isu yang sering dihadapi dalam User Acceptance Testing.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 text-base text-gray-200">
                    <p>Sering kurangnya jawaban benar yang telah ditentukan dan melibatkan evaluasi subjektif, kontekstual.</p>
                    <p>Membutuhkan sumber daya, waktu, dan anggaran yang signifikan.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#25da9e]">Crowdsourcing UAT</h3>
            <div className="space-y-3 sm:space-y-4">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Konsep</h4>
                    <p className="text-sm sm:text-base lg:text-base text-gray-300">
                      Klik untuk melihat detail konsep Crowdsourcing UAT.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">Konsep Crowdsourcing UAT</DialogTitle>
                    <DialogDescription className="text-gray-300 text-base text-center">
                      Bagaimana Crowdsourcing UAT bekerja.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 text-base text-gray-200">
                    <p>Distribusi tugas *testing* ke grup independen untuk efisiensi dan perspektif beragam.</p>
                    <p>Melibatkan populasi pengguna yang beragam untuk *testing* yang hemat biaya dan terukur.</p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                    <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Masalah Utama</h4>
                    <p className="text-sm sm:text-base lg:text-base text-gray-300">
                      Klik untuk melihat detail masalah utama Crowdsourcing UAT.
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">Masalah Utama Crowdsourcing UAT</DialogTitle>
                    <DialogDescription className="text-gray-300 text-base text-center">
                      Tantangan signifikan yang dihadapi dalam Crowdsourcing UAT.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 mt-4 text-base text-gray-200">
                    <p>Heterogenitas partisipan, variabilitas karakteristik *tester* memengaruhi konsistensi hasil.</p>
                    <p>Kurangnya lingkungan terkontrol.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Algorithm Selection Rationale & Prior-Experience Based Validation */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8">
            <motion.div 
                className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#24ce2a]">Rasionalisasi Pemilihan Algoritma</h3>
                <div className="space-y-3 sm:space-y-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Kompatibilitas Unik dengan UAT</h4>
                                <p className="text-sm sm:text-base lg:text-base text-gray-300">
                                    Klik untuk detail kompatibilitas M-X dengan UAT.
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-center mb-4">Kompatibilitas Unik M-X dengan UAT</DialogTitle>
                                <DialogDescription className="text-gray-300 text-base text-center">
                                    Mengapa algoritma M-X sangat cocok untuk User Acceptance Testing.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4 text-base text-gray-200">
                                <p>M-X beroperasi tanpa jawaban benar atau data historis yang ditentukan sebelumnya, membuatnya langsung dapat diterapkan pada populasi *worker* baru.</p>
                                <p>Pendekatan konsistensi *peer-to-peer* ini memungkinkan evaluasi yang efektif dalam skenario UAT subjektif di mana *ground truth* seringkali tidak tersedia atau bersifat kontekstual.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#24ce2a]">Keunggulan Dibandingkan Metode Lain</h4>
                                <p className="text-sm sm:text-base lg:text-base text-gray-300">
                                    Klik untuk detail keunggulan M-X.
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-center mb-4">Keunggulan M-X Dibandingkan Metode Lain</DialogTitle>
                                <DialogDescription className="text-gray-300 text-base text-center">
                                    Perbandingan M-X dengan pendekatan kontrol kualitas *worker* lainnya.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4 text-base text-gray-200">
                                <p>Metode tradisional (seperti MOCOM) memerlukan data performa historis yang ekstensif.</p>
                                <p>Pendekatan berbasis demografi (seperti WSM) menimbulkan kekhawatiran privasi dan potensi bias.</p>
                                <p>Metodologi kurva pembelajaran berfokus pada pengembangan keterampilan jangka panjang daripada penilaian kualitas segera.</p>
                                <p>M-X menjaga privasi *worker* dengan mengevaluasi pola respons alih-alih mengumpulkan atribut pribadi, sambil mempertahankan efisiensi komputasi.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </motion.div>

            <motion.div 
                className="bg-white/10 p-4 sm:p-5 lg:p-6 rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-[#25da9e]">Validasi Berbasis Pengalaman Sebelumnya</h3>
                <div className="space-y-3 sm:space-y-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Konsep</h4>
                                <p className="text-sm sm:text-base lg:text-base text-gray-300">
                                    Klik untuk detail konsep Validasi Berbasis Pengalaman Sebelumnya.
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-center mb-4">Konsep Validasi Berbasis Pengalaman</DialogTitle>
                                <DialogDescription className="text-gray-300 text-base text-center">
                                    Bagaimana kelayakan *tester* ditetapkan berdasarkan pengalaman.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4 text-base text-gray-200">
                                <p>Menetapkan kelayakan *tester* melalui performa historis dan penilaian keahlian domain.</p>
                                <p>Meliputi faktor-faktor seperti hasil *testing* sebelumnya, pengetahuan domain, dan kompetensi yang ditunjukkan.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="bg-white/5 p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                <h4 className="font-medium text-base sm:text-lg lg:text-xl mb-2 text-[#25da9e]">Peran dalam Studi Ini</h4>
                                <p className="text-sm sm:text-base lg:text-base text-gray-300">
                                    Klik untuk detail peran dalam studi ini.
                                </p>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-center mb-4">Peran dalam Studi Ini</DialogTitle>
                                <DialogDescription className="text-gray-300 text-base text-center">
                                    Bagaimana Validasi Berbasis Pengalaman digunakan dalam penelitian ini.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 mt-4 text-base text-gray-200">
                                <p>Pengalaman sebelumnya berfungsi sebagai *ground truth* untuk mengevaluasi klasifikasi algoritma M-X.</p>
                                <p>Partisipan dikategorikan sebagai *eligible* atau *non-eligible* berdasarkan pengalaman UAT mereka.</p>
                                <p>Pendekatan validasi ganda ini memungkinkan pengukuran performa objektif sambil menyoroti area di mana evaluasi berbasis konsistensi mungkin berbeda dari penilaian berbasis pengalaman.</p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </motion.div>
        </div>

        {/* Section 3: Confusion Matrix & Gherkin */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <motion.div 
            className="bg-white/10 p-3 sm:p-4 lg:p-5 rounded-xl backdrop-blur-sm md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 text-[#24ce2a]">Confusion Matrix</h3>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors"> {/* Added padding here for click area */}
                        <p className="text-sm sm:text-base lg:text-base text-gray-200 mb-2">
                           Klik untuk detail definisi & metrik Confusion Matrix.
                        </p>
                        <span className="text-xs text-gray-400">Termasuk TP, TN, FP, FN, Accuracy, Precision, Recall, F1 Score, TNR.</span>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center mb-4">Detail Confusion Matrix & Metrik</DialogTitle>
                        <DialogDescription className="text-gray-300 text-base text-center">
                            Memahami kinerja model klasifikasi.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4 text-base text-gray-200">
                        <p>Confusion Matrix adalah metodologi yang digunakan untuk menilai performa model klasifikasi, terutama dalam skenario di mana label *true* mungkin tidak tersedia atau tidak tepat.</p>
                        <h4 className="font-medium text-lg text-white mt-4">Metrik Confusion Matrix:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>**TP (True Positive):** Jumlah *tester eligible* yang diklasifikasikan dengan benar sebagai *eligible*.</li>
                            <li>**TN (True Negative):** Jumlah *tester non-eligible* yang diklasifikasikan dengan benar sebagai *non-eligible*.</li>
                            <li>**FP (False Positive):** Jumlah *tester non-eligible* yang salah diklasifikasikan sebagai *eligible*.</li>
                            <li>**FN (False Negative):** Jumlah *tester eligible* yang salah diklasifikasikan sebagai *non-eligible*.</li>
                            <li>**Metrik Utama:** Accuracy, Precision, Recall, F1 Score, TNR (Specificity).</li>
                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
          </motion.div>

          <motion.div 
            className="bg-white/10 p-3 sm:p-4 lg:p-5 rounded-xl backdrop-blur-sm md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 text-[#25da9e]">Gherkin Syntax</h3>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                        <p className="text-sm sm:text-base lg:text-base text-gray-200 mb-2">
                           Klik untuk detail Gherkin Syntax.
                        </p>
                        <span className="text-xs text-gray-400">Format Given-When-Then untuk skenario testing.</span>
                    </div>
                </DialogTrigger>
                <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center mb-4">Detail Gherkin Syntax</DialogTitle>
                        <DialogDescription className="text-gray-300 text-base text-center">
                            Sintaks yang digunakan untuk mendefinisikan skenario pengujian.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4 text-base text-gray-200">
                        <p>Gherkin syntax dipilih karena kejelasan, format terstruktur, dan relevansinya dengan praktik *behavior-driven development*.</p>
                        <p>Ini membantu dalam menyusun skenario UAT yang mudah dipahami dan divalidasi oleh *non-technical user*.</p>
                        <p>**Model:** &quot;Given-When-Then&quot;</p>
                    </div>
                </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TheoreticalBackgroundSlide;