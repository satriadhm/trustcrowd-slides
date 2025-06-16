// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Comprehensive Indonesian Version)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { ContentCard, FormulaBox, SectionGrid, HighlightBox, Caption } from "./SlideContentComponent";

const MXAlgorithmSlide = () => {
  return (
    <SlideLayout 
      title="Algoritma M-X: Fondasi Matematika & Implementasi"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Introduction to M-X Algorithm */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-[#24ce2a]">Pengenalan Algoritma M-X</h3>
        
        <div className="bg-white/5 p-6 rounded-lg mb-6">
          <div className="text-center mb-4">
            <p className="text-base text-gray-200 leading-relaxed">
              <strong>Algoritma M-X</strong> adalah pendekatan probabilistik untuk mengevaluasi kualitas worker 
              dalam crowdsourcing tanpa memerlukan <em>ground truth</em> yang telah ditentukan sebelumnya.
            </p>
          </div>
          
          <SectionGrid columns={3} gap="gap-4">
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Tanpa Ground Truth</h4>
              <p className="text-sm text-gray-300">Evaluasi berdasarkan konsistensi antar-worker</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Pendekatan Probabilistik</h4>
              <p className="text-sm text-gray-300">Fondasi matematis yang robust dan reliable</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Scalable</h4>
              <p className="text-sm text-gray-300">Dapat diterapkan pada skala crowdsourcing besar</p>
            </div>
          </SectionGrid>
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-3 text-center text-[#25da9e]">Mengapa M-X Ideal untuk UAT?</h4>
          <p className="text-sm text-gray-200 text-center leading-relaxed">
            UAT bersifat subjektif dan tidak memiliki jawaban &quot;benar&quot; yang absolut. M-X mengevaluasi 
            kualitas worker melalui <strong>konsistensi penilaian dengan worker lain</strong>, 
            bukan dengan membandingkan terhadap jawaban yang telah ditentukan.
          </p>
        </div>
      </HighlightBox>

      {/* Core Mathematical Principle */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-[#25da9e]">Prinsip Matematis Inti</h3>
        
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-4 text-center">Formula Probabilitas Agreement</h4>
          
          <FormulaBox className="py-4 mb-6">
            <div className="text-lg sm:text-xl lg:text-2xl">
              Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + <span className="text-[#25da9e]">[(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)</span>
            </div>
          </FormulaBox>
          
          <div className="text-center mb-6">
            <p className="text-sm text-gray-300 leading-relaxed">
              Dua worker dapat setuju dalam <strong>dua cara</strong>: kedua worker memilih jawaban yang benar, 
              atau kedua worker memilih jawaban salah yang sama.
            </p>
          </div>
          
          <SectionGrid columns={2} gap="gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-base mb-3 text-[#24ce2a]">Term 1: Kedua Worker Benar</h5>
              <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>A<sub>i</sub> · A<sub>j</sub></strong>
                </p>
                <p className="text-xs text-gray-400">
                  Probabilitas bahwa worker w<sub>i</sub> dan w<sub>j</sub> sama-sama memilih opsi yang benar
                </p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-base mb-3 text-[#25da9e]">Term 2: Kedua Worker Salah (Sama)</h5>
              <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>[(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)</strong>
                </p>
                <p className="text-xs text-gray-400">
                  Probabilitas kedua worker memilih opsi incorrect yang sama secara random
                </p>
              </div>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Algorithm Variables and Components */}
      <SectionGrid columns={2} gap="gap-6">
        <ContentCard title="Variabel dan Komponen Algoritma" animationDelay={0} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Variabel Utama</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <strong>A<sub>i</sub></strong>
                  <span className="text-gray-300">Tingkat akurasi worker w<sub>i</sub></span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>M</strong>
                  <span className="text-gray-300">Jumlah total opsi per pertanyaan</span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>K</strong>
                  <span className="text-gray-300">Jumlah total worker {`{w_i | 1 ≤ i ≤ K}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>N</strong>
                  <span className="text-gray-300">Jumlah total masalah {`{p_u | 1 ≤ u ≤ N}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>X<sub>ij</sub><sup>u</sup></strong>
                  <span className="text-gray-300">Indikator agreement (1 jika setuju, 0 jika tidak)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Perhitungan Total Agreement</h4>
              <FormulaBox className="py-3 mb-2">
                <div className="text-base">
                  T<sub>ij</sub> = Σ<sub>u=1</sub><sup>N</sup> X<sub>ij</sub><sup>u</sup>
                </div>
              </FormulaBox>
              <Caption>Total jumlah agreement antara worker i dan j di semua task</Caption>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#f39c12]">Observed Agreement Rate</h4>
              <FormulaBox className="py-3 mb-2">
                <div className="text-base">
                  Q<sub>ij</sub> = T<sub>ij</sub> / N
                </div>
              </FormulaBox>
              <Caption>Proporsi agreement yang diamati antara worker i dan j</Caption>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Solusi untuk 3 Worker" animationDelay={0.2} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Menyelesaikan Akurasi Worker</h4>
              <p className="text-sm text-gray-300 mb-3">
                Untuk 3 worker, kita dapat menyelesaikan sistem persamaan untuk mendapatkan akurasi individual:
              </p>
              <FormulaBox className="py-3 mb-3">
                <div className="text-sm sm:text-base">
                  A<sub>1</sub> = 1/M + [(M-1)/M] · √[(M·Q<sub>12</sub>-1)(M·Q<sub>13</sub>-1)/(M·Q<sub>23</sub>-1)]
                </div>
              </FormulaBox>
              <Caption>Formula untuk menghitung akurasi worker pertama</Caption>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Untuk Worker Lebih dari 3</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• <strong>Sliding Window:</strong> Worker diatur dalam pola melingkar</li>
                <li>• <strong>Evaluasi Grup:</strong> Kelompok 3 worker diproses secara bergantian</li>
                <li>• <strong>Skor Akhir:</strong> Rata-rata dari multiple evaluasi</li>
                <li>• <strong>Overlapping Groups:</strong> Setiap worker dievaluasi dalam beberapa grup</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-green-400">Contoh Sliding Window</h4>
              <p className="text-xs text-gray-300">
                Worker [1,2,3,4,5] → Grup: (1,2,3), (2,3,4), (3,4,5), (4,5,1), (5,1,2)
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* M-X Extension for Multiple Choice */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Ekstensi M-X untuk Masalah Multiple-Choice</h3>
        
        <div className="bg-white/5 p-6 rounded-lg mb-4">
          <p className="text-base text-gray-200 text-center mb-4 leading-relaxed">
            Algoritma M-X asli dirancang untuk masalah biner (ya/tidak). Untuk UAT dengan format multiple-choice, 
            diperlukan ekstensi khusus.
          </p>
        </div>
        
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Langkah 1: Dekomposisi</h4>
            <div className="bg-blue-500/10 p-3 rounded mb-2">
              <p className="text-sm text-gray-300">
                Setiap masalah M-opsi → M sub-masalah biner (ya/tidak)
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Transformasi &quot;Pilih yang benar&quot; menjadi &quot;Apakah opsi X benar?&quot;
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-3 text-[#25da9e]">Langkah 2: Analisis Biner</h4>
            <div className="bg-purple-500/10 p-3 rounded mb-2">
              <p className="text-sm text-gray-300">
                Terapkan algoritma M-1 pada setiap dimensi opsi
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Evaluasi konsistensi worker untuk setiap opsi secara independen
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-3 text-[#f39c12]">Langkah 3: Agregasi</h4>
            <div className="bg-green-500/10 p-3 rounded mb-2">
              <p className="text-sm text-gray-300">
                Kombinasikan skor akurasi untuk penilaian kualitas worker komprehensif
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Integrasi hasil dari semua dimensi opsi
            </p>
          </div>
        </SectionGrid>
        
        <div className="mt-6 bg-white/5 p-4 rounded-lg text-center">
          <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Formula Agregasi Akhir</h4>
          <FormulaBox className="py-3">
            <div className="text-lg">
              A<sub>i</sub> = ∏<sub>j=1</sub><sup>M</sup> A<sub>ij</sub>
            </div>
          </FormulaBox>
          <Caption className="mt-2">Akurasi akhir worker = produk akurasi di semua dimensi opsi</Caption>
        </div>
      </HighlightBox>

      {/* Algorithm Properties & Implementation */}
      <SectionGrid columns={2} gap="gap-6">
        <ContentCard title="Properti dan Keunggulan Algoritma" animationDelay={0.4} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Tidak Memerlukan Ground Truth</h4>
              <p className="text-sm text-gray-300">
                Mengevaluasi kualitas melalui <strong>konsistensi peer</strong> daripada perbandingan 
                dengan jawaban yang telah diketahui. Ideal untuk skenario UAT yang subjektif.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Fondasi Probabilistik</h4>
              <p className="text-sm text-gray-300">
                Model matematis berdasarkan <strong>teori probabilitas agreement</strong> dengan 
                asumsi yang reasonable dan dapat diverifikasi dalam praktik.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#f39c12]">Skalabilitas Tinggi</h4>
              <p className="text-sm text-gray-300">
                Komputasi yang efisien, dapat diimplementasi dengan <strong>MapReduce</strong> 
                untuk aplikasi big data dan crowdsourcing skala besar.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#e74c3c]">Privacy Preservation</h4>
              <p className="text-sm text-gray-300">
                Hanya menganalisis <strong>pola respons</strong> tanpa mengekpos detail 
                jawaban individual atau informasi pribadi worker.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Aplikabilitas untuk UAT" animationDelay={0.6} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Dukungan Evaluasi Subjektif</h4>
              <p className="text-sm text-gray-300">
                Sempurna untuk skenario UAT dimana <strong>correctness bersifat kontekstual</strong> 
                dan bergantung pada perspektif dan preferensi user.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Reduksi Variabilitas</h4>
              <p className="text-sm text-gray-300">
                Mengidentifikasi tester yang konsisten, mengurangi <strong>noise dari 
                partisipan yang tidak reliable</strong> sambil mempertahankan diversitas perspektif.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#f39c12]">Mekanisme Quality Control Otomatis</h4>
              <p className="text-sm text-gray-300">
                Proses filtering otomatis untuk <strong>mempertahankan kualitas testing</strong> 
                dalam environment crowdsourced tanpa intervensi manual.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#9b59b6]">Immediate Deployment</h4>
              <p className="text-sm text-gray-300">
                Dapat diimplementasi langsung tanpa training period atau historical data, 
                cocok untuk <strong>proyek UAT dengan deadline ketat</strong>.
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Algorithm Assumptions & Constraints */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Asumsi Algoritma & Batasan Implementasi</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="font-medium text-base mb-4 text-[#24ce2a]">Asumsi Utama</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-blue-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Distribusi Seragam:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Ketika salah, worker memilih opsi secara random dengan probabilitas equal
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Independensi:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Keputusan worker bersifat independen (tidak ada kolusi atau komunikasi)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-purple-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Konsistensi:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Kualitas worker tetap stabil sepanjang periode testing
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-orange-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Minimum 3 Worker:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Diperlukan untuk menyelesaikan sistem persamaan
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="font-medium text-base mb-4 text-[#25da9e]">Batasan Implementasi</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-red-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Format Multiple-Choice:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Task harus dapat didekomposisi ke dalam format biner
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-yellow-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Opsi Independen:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Tidak ada mutual exclusivity yang strict antar opsi
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-cyan-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Pola Respons:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Algoritma menganalisis konsistensi, bukan correctness absolut
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-pink-500/20 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-sm">Kalibrasi Threshold:</strong>
                  <p className="text-xs text-gray-300 mt-1">
                    Memerlukan kalibrasi khusus domain untuk hasil optimal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Comparison with Alternative Methods */}
      <ContentCard title="Perbandingan dengan Metode Alternatif" animationDelay={0.8} className="py-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 font-medium">Metode</th>
                <th className="text-center py-3 px-4 font-medium">Ground Truth</th>
                <th className="text-center py-3 px-4 font-medium">Privacy</th>
                <th className="text-center py-3 px-4 font-medium">Data Historis</th>
                <th className="text-center py-3 px-4 font-medium">Kesesuaian UAT</th>
                <th className="text-center py-3 px-4 font-medium">Implementasi</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10 bg-[#24ce2a]/10">
                <td className="py-3 px-4 font-medium text-[#24ce2a]">M-X Algorithm</td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">✗</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">✗</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-green-400 font-medium">Tinggi</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-green-400 font-medium">Mudah</span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 px-4 font-medium">MOCOM</td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-500 text-white text-xs rounded-full">~</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-red-400 font-medium">Rendah</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-red-400 font-medium">Kompleks</span>
                </td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 px-4 font-medium">WSM</td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">✗</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✗</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-yellow-400 font-medium">Sedang</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-yellow-400 font-medium">Sedang</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Learning Curves</td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full">✓</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-yellow-400 font-medium">Sedang</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-yellow-400 font-medium">Sedang</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 bg-[#24ce2a]/10 p-4 rounded-lg">
          <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Keunggulan Kompetitif M-X</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Satu-satunya metode yang tidak memerlukan ground truth DAN data historis</li>
            <li>• Privacy-preserving dengan analisis pattern-based</li>
            <li>• Implementasi immediate tanpa training period</li>
            <li>• Ideal untuk skenario UAT yang subjektif dan time-sensitive</li>
          </ul>
        </div>
      </ContentCard>

      {/* Implementation Example */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl font-semibold mb-4 text-center">Contoh Implementasi dalam UAT</h3>
        
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="font-medium text-base mb-4 text-[#24ce2a]">Skenario: Testing Form Login Website</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-sm mb-3 text-[#25da9e]">Format Gherkin UAT</h5>
              <div className="bg-black/20 p-3 rounded text-xs font-mono">
                <p className="text-[#24ce2a]">Feature: User Login</p>
                <p className="text-white mt-2">Scenario: Login dengan kredensial valid</p>
                <p className="text-blue-300">Given: User di halaman login</p>
                <p className="text-blue-300">When: User memasukkan email & password</p>
                <p className="text-blue-300">Then: User melihat:</p>
                <div className="ml-4 mt-1 text-gray-300">
                  <p>□ Success message</p>
                  <p>□ Redirect ke dashboard</p>
                  <p>□ Username di header</p>
                  <p>□ Logout button tersedia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-sm mb-3 text-[#25da9e]">Proses M-X</h5>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-500/10 p-2 rounded">
                  <strong>Step 1:</strong> Dekomposisi ke 4 sub-masalah biner
                </div>
                <div className="bg-purple-500/10 p-2 rounded">
                  <strong>Step 2:</strong> Analisis agreement antar worker untuk setiap opsi
                </div>
                <div className="bg-green-500/10 p-2 rounded">
                  <strong>Step 3:</strong> Hitung accuracy score individual worker
                </div>
                <div className="bg-orange-500/10 p-2 rounded">
                  <strong>Step 4:</strong> Klasifikasi eligible/non-eligible berdasarkan threshold
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Caption>
              M-X mengidentifikasi worker yang konsisten dalam mengevaluasi elemen UI/UX 
              tanpa perlu mengetahui jawaban &quot;benar&quot; yang absolut
            </Caption>
          </div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;