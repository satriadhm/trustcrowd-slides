// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Improved - Concise Version)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox, TextContent } from "./SlideContentComponent";

const TheoreticalBackgroundSlide = () => {
  return (
    <SlideLayout 
      title="Landasan Teori"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* UAT in Crowdsourcing Context */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">User Acceptance Testing dalam Crowdsourcing</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a]">UAT: Validasi Akhir Software</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• Tahap kritis sebelum deployment produk</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Evaluasi dari perspektif end-user sesungguhnya</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Tidak ada ground truth</strong> yang telah ditentukan</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Penilaian bersifat <strong>subjektif dan kontekstual</strong></TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">Crowdsourced UAT: Potensi & Tantangan</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Cost-effective</strong> dengan cakupan testing luas</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Diverse perspectives</strong> dari beragam tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Challenge:</strong> Heterogenitas kualitas tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Problem:</strong> Variabilitas hasil tanpa kontrol kualitas</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Quality Control Methods - Simplified */}
      <SectionGrid columns={2} gap="gap-6">
        <ContentCard title="Metode Quality Control Existing" animationDelay={0} className="py-6">
          <div className="space-y-4">
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
              <h4 className="text-base font-medium mb-3 text-red-400">Limitasi Metode Konvensional</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• <strong>MOCOM:</strong> Butuh historical data ekstensif</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>WSM:</strong> Privacy concerns & potential bias</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Learning Curves:</strong> Focus jangka panjang, tidak immediate</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Common issue:</strong> Memerlukan predefined answers</TextContent></li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#f39c12]">Kebutuhan untuk UAT</h4>
              <TextContent size="small" className="text-gray-300">
                Diperlukan mekanisme yang dapat mengevaluasi kualitas tester 
                <strong> tanpa ground truth</strong> dan dapat diterapkan langsung 
                pada skenario UAT yang subjektif.
              </TextContent>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="M-X Algorithm: Solusi untuk UAT" animationDelay={0.2} className="py-6">
          <div className="space-y-4">
            <div className="bg-[#24ce2a]/10 p-4 rounded-lg border border-[#24ce2a]/20">
              <h4 className="text-base font-medium mb-3 text-[#24ce2a]">Keunggulan M-X untuk UAT</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• <strong>No Ground Truth Required:</strong> Evaluasi berdasarkan konsistensi peer</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Probabilistic Approach:</strong> Matematis dan dapat diverifikasi</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Privacy Preserving:</strong> Analisis pola, bukan data personal</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Immediate Deployment:</strong> Tidak butuh training period</TextContent></li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#25da9e]">Aplikabilitas UAT</h4>
              <TextContent size="small" className="text-gray-300">
                Ideal untuk skenario UAT dimana <strong>correctness bersifat kontekstual</strong> 
                dan bergantung pada agreement antar-tester daripada jawaban absolute.
              </TextContent>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Validation Framework - Concise */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Framework Validasi & Evaluasi</h3>
        
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Prior-Experience Validation</h4>
            <ul className="space-y-2">
              <li><TextContent size="small" className="text-gray-300">• Assessment berdasarkan pengalaman UAT</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Ground truth untuk evaluasi algoritma</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Baseline perbandingan kinerja</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Gherkin BDD Format</h4>
            <ul className="space-y-2">
              <li><TextContent size="small" className="text-gray-300">• <strong>Given-When-Then</strong> structure</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• User-friendly untuk non-technical tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Adaptable ke multiple-choice format</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Confusion Matrix Metrics</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <div>• <strong>Accuracy:</strong> Overall correctness</div>
              <div>• <strong>Precision:</strong> True positive rate</div>
              <div>• <strong>Recall:</strong> Sensitivity</div>
              <div>• <strong>F1-Score:</strong> Harmonic mean</div>
              <div>• <strong>TNR:</strong> True negative rate</div>
              <div>• <strong>FP Rate:</strong> False positive rate</div>
            </div>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Research Contribution - Simplified */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Research Gap & Kontribusi</h3>
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-2 text-red-400">Research Gap</h4>
            <TextContent size="small" className="text-gray-300">
              Belum ada validasi empiris M-X algorithm dalam <strong>realistic UAT scenarios </strong> 
              yang melibatkan subjective evaluation dan heterogeneous tester backgrounds.
            </TextContent>
          </div>
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Kontribusi Penelitian</h4>
            <TextContent size="small" className="text-gray-300">
              Implementasi algoritma M-X di ranah <strong>UAT berbasis crowdsourcing</strong> dan hasil validasinya
            </TextContent>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;