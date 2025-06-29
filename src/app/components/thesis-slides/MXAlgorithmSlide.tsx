// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { ContentCard, FormulaBox, SectionGrid, HighlightBox, Caption } from "./SlideContentComponent";

const MXAlgorithmSlide = () => {
  return (
    <SlideLayout 
      title="Algoritma M-X untuk UAT Quality Control"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-4"
    >
      {/* Core Concept - Simplified */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center text-[#24ce2a]">M-X Algorithm: Peer-Consistency Based Quality Control</h3>
        
        <div className="bg-white/5 p-4 rounded-lg mb-4">
          <div className="text-center mb-3">
            <p className="text-base text-gray-200 leading-relaxed">
              Algoritma probabilistik untuk mengevaluasi kualitas tester berdasarkan 
              <strong> konsistensi agreement antar-tester</strong> tanpa memerlukan predefined correct answers.
            </p>
          </div>
          
          <SectionGrid columns={3} gap="gap-4">
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Tanpa Ground Truth</h4>
              <p className="text-sm text-gray-300">Evaluasi melalui inter-tester agreement patterns</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Probabilistic Foundation</h4>
              <p className="text-sm text-gray-300">Menangani ketidakpastian dan mendukung skalabilitas</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">UAT Compatible</h4>
              <p className="text-sm text-gray-300">Sesuai untuk evaluasi subjektif & kontekstual</p>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Core Mathematical Principle - Update */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Algoritma M-1 (Base Algorithm)" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#25da9e]">Agreement Probability Formula</h4>
              <FormulaBox className="py-2 mb-2">
                <div className="text-lg">
                  Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + <span className="text-[#25da9e]">(1/(M+1)) · (1-A<sub>i</sub>)(1-A<sub>j</sub>) · (M-1)</span>
                </div>
              </FormulaBox>
              <Caption>Dua tester dapat agree: keduanya benar, atau keduanya salah dengan pilihan sama</Caption>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Karakteristik M-1</h4>
              <ul className="space-y-2 text-sm">
                <li>• Dirancang untuk <strong>single-choice dan biner</strong></li>
                <li>• Mengukur akurasi workers berdasarkan <strong>kesamaan jawaban</strong></li>
                <li>• Minimal <strong>3 workers</strong> untuk setiap tugas</li>
                <li>• Tanpa memerlukan <strong>pre-developed answers</strong></li>
              </ul>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-1 text-[#25da9e]">Key Variables M-1</h4>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-4">
                  <strong>A<sub>i</sub></strong>
                  <span className="text-gray-300">Probabilitas worker i memberikan jawaban benar</span>
                </div>
                <div className="flex items-center gap-4">
                  <strong>Q<sub>ij</sub></strong>
                  <span className="text-gray-300">Probabilitas workers i,j memberikan jawaban sama</span>
                </div>
                <div className="flex items-center gap-4">
                  <strong>M</strong>
                  <span className="text-gray-300">Jumlah opsi pada pertanyaan (choice options)</span>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Algoritma M-X (Extension)" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#24ce2a]">M-X Formula</h4>
              <FormulaBox className="py-2 mb-2">
                <div className="text-lg flex flex-col items-center gap-2">
                  <div>
                    A<sub>i</sub> = <span className="text-[#f39c12]">∏ A<sub>ij</sub></span>
                  </div>
                  <div className="text-sm text-gray-300">
                    (untuk j = 1 hingga M)
                  </div>
                </div>
              </FormulaBox>
              <Caption>Akurasi komprehensif dengan mengalikan hasil dari seluruh opsi</Caption>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#25da9e]">Proses M-X (3 Tahap)</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>1. Konversi Tugas:</strong> Multiple-choice → M sub-pertanyaan single choice</li>
                <li><strong>2. Evaluasi Sub-tugas:</strong> Gunakan M-1 untuk setiap sub-tugas</li>
                <li><strong>3. Penggabungan Akurasi:</strong> Kalikan hasil akurasi dari seluruh opsi</li>
              </ul>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#f39c12]">Implementasi untuk UAT</h4>
              <ul className="space-y-2 text-sm">
                <li>• Setiap opsi UAT diperlakukan sebagai <strong>pertanyaan independen</strong></li>
                <li>• Semua opsi memiliki bobot yang sama (tidak ada salah dan benar)</li>
                <li>• Minimal <strong>3 worker</strong> yang memberikan jawaban</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

       {/* Algorithm Mathematical Foundation */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Fondasi Matematis" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Komponen Formula M-1</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-600/20 p-2 rounded">
                  <strong>A<sub>i</sub> · A<sub>j</sub>:</strong> Probabilitas kedua worker benar secara bersamaan
                </div>
                <div className="bg-blue-600/20 p-2 rounded">
                  <strong>(1/(M+1)) · (1-A<sub>i</sub>)(1-A<sub>j</sub>) · (M-1):</strong> Probabilitas agreement saat keduanya salah
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#25da9e]">Sistem Persamaan Linear</h4>
              <p className="text-sm text-gray-300">
                Algoritma menyusun sistem persamaan linear dari Q<sub>ij</sub> yang dihitung dari data respons, 
                kemudian diselesaikan untuk menentukan nilai akurasi A<sub>i</sub> setiap worker.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Keunggulan untuk UAT" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Tidak Bergantung Ground Truth</h4>
              <p className="text-sm text-gray-300">
                Perfect untuk UAT scenarios dimana correctness bersifat subjective dan contextual
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#25da9e]">Evaluasi Konsistensi</h4>
              <p className="text-sm text-gray-300">
                Menilai worker berdasarkan konsistensi pola jawaban dengan worker lain
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#f39c12]">Skalabilitas Multiple Choice</h4>
              <p className="text-sm text-gray-300">
                M-X memungkinkan evaluasi pada tugas dengan multiple opsi sekaligus
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* UAT Application Example - Updat */}
      <HighlightBox variant="secondary" className="py-4">
        <h3 className="text-xl font-semibold mb-3 text-center">Implementasi M-X dalam UAT Berbasis Crowdsourcing</h3>
        
        <div className="bg-white/5 p-4 rounded-lg">
          <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Skenario: Testing Login Form dengan Multiple Choice</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#25da9e]">Gherkin Scenario UAT</h5>
              <div className="bg-black/20 p-2 rounded text-xs font-mono">
                <p className="text-[#24ce2a]">Feature: User Login</p>
                <p className="text-white mt-2">Scenario: Login dengan kredensial valid</p>
                <p className="text-blue-300">Given: User di halaman login</p>
                <p className="text-blue-300">When: User input email & password</p>
                <p className="text-blue-300">Then: Sistem harus menampilkan:</p>
                <div className="ml-4 mt-1 text-gray-300">
                  <p>□ Success message displayed (Option 1)</p>
                  <p>□ Redirect to dashboard (Option 2)</p>
                  <p>□ Username shown in header (Option 3)</p>
                  <p>□ Logout button available (Option 4)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#25da9e]">M-X Processing</h5>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-500/10 p-2 rounded">
                  <strong>Step 1:</strong> Konversi 4 opsi → 4 sub-pertanyaan biner
                </div>
                <div className="bg-purple-500/10 p-2 rounded">
                  <strong>Step 2:</strong> Apply M-1 algorithm pada setiap sub-pertanyaan
                </div>
                <div className="bg-green-500/10 p-2 rounded">
                  <strong>Step 3:</strong> Hitung A<sub>ij</sub> untuk setiap worker i dan opsi j
                </div>
                <div className="bg-orange-500/10 p-2 rounded">
                  <strong>Step 4:</strong> Final score: A<sub>i</sub> = A<sub>i1</sub> × A<sub>i2</sub> × A<sub>i3</sub> × A<sub>i4</sub>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <Caption>
              M-X mengkonversi setiap opsi UAT menjadi sub-pertanyaan biner, menerapkan M-1 pada setiap sub-pertanyaan, 
              kemudian mengalikan hasil akurasi untuk mendapatkan skor kualitas worker yang komprehensif
            </Caption>
          </div>
        </div>
      </HighlightBox>

      {/* Research Implementation Focus - Updated */}
      <HighlightBox variant="primary" className="py-3">
        <h3 className="text-xl font-semibold mb-2 text-center">Focus Penelitian: Validasi M-X dalam UAT Environment</h3>
        <div className="text-center">
          <p className="text-base text-gray-200 leading-relaxed mb-3">
            Penelitian ini mengevaluasi <strong>efektivitas algoritma M-X sebagai quality control mechanism</strong> 
            untuk mengklasifikasi tester eligibility dalam UAT berbasis Crowdsourcing dengan menggunakan 
            <strong>real participant responses</strong> dan <strong>prior-experience validation</strong>.
          </p>
          
          <div className="bg-[#24ce2a]/10 p-2 rounded-lg">
            <p className="text-sm text-[#24ce2a] font-medium">
              <strong>Key Innovation:</strong> Empirical validation bahwa M-X dapat secara efektif mengkonversi 
              multiple-choice UAT scenarios menjadi evaluasi worker quality yang reliable menggunakan 
              peer-consistency tanpa memerlukan predefined correct answers
            </p>
          </div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;