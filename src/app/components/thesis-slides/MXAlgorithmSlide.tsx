// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Improved - Focused for UAT Research)
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
              <p className="text-sm text-gray-300">Mathematical model dengan assumsi dapat diverifikasi</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg text-center">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">UAT Compatible</h4>
              <p className="text-sm text-gray-300">Sesuai untuk subjective & contextual evaluation</p>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Core Mathematical Principle - Focused */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Prinsip Matematis Inti" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#25da9e]">Agreement Probability Formula</h4>
              <FormulaBox className="py-2 mb-2">
                <div className="text-lg">
                  Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + <span className="text-[#25da9e]">[(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)</span>
                </div>
              </FormulaBox>
              <Caption>Dua tester dapat agree: keduanya benar, atau keduanya salah dengan pilihan sama</Caption>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Key Variables</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <strong>A<sub>i</sub></strong>
                  <span className="text-gray-300">Accuracy rate tester w<sub>i</sub></span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>M</strong>
                  <span className="text-gray-300">Jumlah opsi per pertanyaan</span>
                </div>
                <div className="flex justify-between items-center">
                  <strong>Q<sub>ij</sub></strong>
                  <span className="text-gray-300">Observed agreement rate</span>
                </div>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Implementasi untuk UAT" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Multiple-Choice Decomposition</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Step 1:</strong> Setiap M-choice question → M binary sub-problems</li>
                <li><strong>Step 2:</strong> Apply M-X pada setiap dimensi opsi</li>
                <li><strong>Step 3:</strong> Aggregate accuracy scores</li>
              </ul>
              <Caption className="mt-2">Transformasi &quot;Pilih yang benar&quot; → &quot;Apakah opsi X benar?&quot;</Caption>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base font-medium mb-2 text-[#25da9e]">Sliding Window for 3+ Testers</h4>
              <ul className="space-y-2 text-sm">
                <li>• Worker diatur dalam pola circular pattern</li>
                <li>• Evaluasi grup 3 tester secara bergantian</li>
                <li>• Final score = rata-rata multiple evaluations</li>
              </ul>
              <div className="bg-green-600/20 p-2 rounded-lg mt-2">
                <p className="text-xs text-gray-300">
                  <strong>Example:</strong> Tester [1,2,3,4,5] → Groups: (1,2,3), (2,3,4), (3,4,5), (4,5,1), (5,1,2)
                </p>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* UAT Application Example - Focused */}
      <HighlightBox variant="secondary" className="py-4">
        <h3 className="text-xl font-semibold mb-3 text-center">Contoh Aplikasi dalam UAT</h3>
        
        <div className="bg-white/5 p-4 rounded-lg">
          <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Skenario: Testing Login Form dengan Gherkin BDD</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#25da9e]">Gherkin Scenario</h5>
              <div className="bg-black/20 p-2 rounded text-xs font-mono">
                <p className="text-[#24ce2a]">Feature: User Login</p>
                <p className="text-white mt-2">Scenario: Login dengan kredensial valid</p>
                <p className="text-blue-300">Given: User di halaman login</p>
                <p className="text-blue-300">When: User input email & password</p>
                <p className="text-blue-300">Then: User should see:</p>
                <div className="ml-4 mt-1 text-gray-300">
                  <p>□ Success message displayed</p>
                  <p>□ Redirect to dashboard</p>
                  <p>□ Username shown in header</p>
                  <p>□ Logout button available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#25da9e]">M-X Processing Steps</h5>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-500/10 p-2 rounded">
                  <strong>Step 1:</strong> Decompose ke 4 binary sub-problems
                </div>
                <div className="bg-purple-500/10 p-2 rounded">
                  <strong>Step 2:</strong> Analyze agreement untuk setiap opsi
                </div>
                <div className="bg-green-500/10 p-2 rounded">
                  <strong>Step 3:</strong> Calculate individual accuracy scores
                </div>
                <div className="bg-orange-500/10 p-2 rounded">
                  <strong>Step 4:</strong> Classify eligible/non-eligible
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-3 text-center">
            <Caption>
              M-X mengidentifikasi tester dengan pola respons konsisten tanpa mengetahui 
              jawaban &quot;benar&quot; absolut dalam konteks UI/UX evaluation
            </Caption>
          </div>
        </div>
      </HighlightBox>

      {/* Algorithm Advantages for UAT - Concise */}
      <SectionGrid columns={3} gap="gap-3">
        <div className="bg-white/5 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-2 text-[#24ce2a]">No Ground Truth Dependency</h4>
          <p className="text-sm text-gray-300">
            Perfect untuk UAT scenarios dimana correctness bersifat subjective dan contextual
          </p>
        </div>
        
        <div className="bg-white/5 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-2 text-[#25da9e]">Privacy Preservation</h4>
          <p className="text-sm text-gray-300">
            Hanya menganalisis response patterns, tidak mengakses informasi personal tester
          </p>
        </div>
        
        <div className="bg-white/5 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-2 text-[#f39c12]">Immediate Deployment</h4>
          <p className="text-sm text-gray-300">
            Dapat diterapkan langsung tanpa training period atau historical data
          </p>
        </div>
      </SectionGrid>

      {/* Research Implementation Focus */}
      <HighlightBox variant="primary" className="py-3">
        <h3 className="text-xl font-semibold mb-2 text-center">Focus Penelitian: Validasi M-X dalam UAT Environment</h3>
        <div className="text-center">
          <p className="text-base text-gray-200 leading-relaxed mb-3">
            Penelitian ini mengevaluasi <strong>efektivitas M-X sebagai quality control mechanism</strong> 
            untuk mengklasifikasi tester eligibility dalam UAT berbasis Crowdsourcing scenarios 
            dengan menggunakan <strong>real participant responses</strong> dan <strong>prior-experience validation</strong>.
          </p>
          
          <div className="bg-[#24ce2a]/10 p-2 rounded-lg">
            <p className="text-sm text-[#24ce2a] font-medium">
              <strong>Key Innovation:</strong> Empirical validation M-X algorithm dalam realistic UAT settings 
              dengan systematic evaluation menggunakan Confusion Matrix metrics
            </p>
          </div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;