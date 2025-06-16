// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Updated - M-X content removed)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox, TextContent, Caption } from "./SlideContentComponent";

const TheoreticalBackgroundSlide = () => {
  return (
    <SlideLayout 
      title="Landasan Teori"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* UAT & Crowdsourcing Integration */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">User Acceptance Testing (UAT)</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a]">Definisi & Karakteristik UAT</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• Tahap validasi akhir sebelum deployment produk</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Fokus pada kepuasan dan kebutuhan end-user</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Tidak ada <em>ground truth</em> yang telah ditentukan</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Evaluasi bersifat subjektif dan kontekstual</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Mengutamakan pengalaman pengguna dalam kondisi nyata</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">Pentingnya UAT dalam SDLC</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• Memastikan software memenuhi business requirements</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Mengurangi risiko kegagalan setelah deployment</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Meningkatkan user satisfaction dan adoption rate</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Mengidentifikasi gap antara expectation dan reality</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Validasi usability dan functional requirements</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Crowdsourcing in Software Testing */}
      <SectionGrid columns={2} gap="gap-6">
        <ContentCard title="Crowdsourcing dalam Software Testing" animationDelay={0} className="py-6">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#24ce2a]">Definisi Crowdsourcing</h4>
              <TextContent size="small" className="text-gray-300">
                Praktik memperoleh layanan, ide, atau konten dengan meminta kontribusi dari 
                grup besar orang, terutama komunitas online, daripada karyawan tradisional.
              </TextContent>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#25da9e]">Keuntungan Crowdsourced Testing</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• <strong>Cost-effective:</strong> Mengurangi biaya testing secara signifikan</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Diverse perspectives:</strong> Beragam device, OS, dan user behavior</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Scalable:</strong> Dapat menangani testing volume besar</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Real-world conditions:</strong> Testing dalam environment sesungguhnya</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Time-efficient:</strong> Parallel testing oleh multiple testers</TextContent></li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Tantangan Crowdsourced UAT" animationDelay={0.2} className="py-6">
          <div className="space-y-4">
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
              <h4 className="text-base font-medium mb-3 text-red-400">Masalah Utama</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• <strong>Heterogenitas partisipan:</strong> Skill dan experience yang beragam</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Variabilitas kualitas:</strong> Inkonsistensi dalam testing quality</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Motivasi yang berbeda:</strong> Tidak semua tester memiliki komitmen sama</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• <strong>Kontrol kualitas:</strong> Sulit memastikan standar testing</TextContent></li>
              </ul>
            </div>

            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#f39c12]">Kebutuhan Quality Control</h4>
              <TextContent size="small" className="text-gray-300">
                Diperlukan mekanisme untuk mengidentifikasi dan memfilter tester berkualitas 
                tanpa mengurangi benefit dari diversitas perspektif crowd.
              </TextContent>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Quality Control Methods */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Metode Quality Control dalam Crowdsourcing</h3>
        
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-blue-400">MOCOM (Multi-Objective Crowdsourcing Optimization Model)</h4>
            <ul className="space-y-2 text-xs">
              <li><strong>Kelebihan:</strong> Optimasi multi-objektif yang komprehensif</li>
              <li><strong>Kekurangan:</strong> Membutuhkan historical data yang ekstensif</li>
              <li><strong>Aplikabilitas UAT:</strong> Terbatas karena ketergantungan pada predefined answers</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-purple-400">WSM (Worker Selection Mechanism)</h4>
            <ul className="space-y-2 text-xs">
              <li><strong>Kelebihan:</strong> Dapat bekerja tanpa ground truth</li>
              <li><strong>Kekurangan:</strong> Privacy concerns dan potential bias</li>
              <li><strong>Aplikabilitas UAT:</strong> Moderat, tapi ada isu privacy</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-3 text-green-400">Learning Curves Approach</h4>
            <ul className="space-y-2 text-xs">
              <li><strong>Kelebihan:</strong> Adaptif terhadap learning pattern</li>
              <li><strong>Kekurangan:</strong> Focus jangka panjang, tidak immediate</li>
              <li><strong>Aplikabilitas UAT:</strong> Baik untuk long-term, kurang untuk short-term</li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Validation Framework */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Framework Validasi Penelitian" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#25da9e]">Prior-Experience Based Validation</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• Assessment berdasarkan pengalaman sebelumnya</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Evaluasi domain expertise dan track record</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Ground truth untuk perbandingan algoritma</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Baseline untuk mengukur efektivitas method</TextContent></li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#25da9e]">Confusion Matrix Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• <strong>Accuracy:</strong> Overall correctness</div>
                <div>• <strong>Precision:</strong> True positive accuracy</div>
                <div>• <strong>Recall:</strong> Sensitivity to positive cases</div>
                <div>• <strong>F1-Score:</strong> Harmonic mean precision & recall</div>
                <div>• <strong>TNR:</strong> True negative rate</div>
                <div>• <strong>FP Rate:</strong> False positive rate</div>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Gherkin dalam UAT" animationDelay={0.6} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#24ce2a]">Behavior-Driven Development (BDD)</h4>
              <ul className="space-y-2">
                <li><TextContent size="small" className="text-gray-300">• Format <strong>Given-When-Then</strong> yang user-friendly</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Mendeskripsikan behavior ekspektasi dari user perspective</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Mudah dipahami oleh non-technical testers</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Bridge antara business requirements dan technical implementation</TextContent></li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="text-base font-medium mb-3 text-[#24ce2a]">Multiple-Choice Format</h4>
              <TextContent size="small" className="text-gray-300 mb-2">
                Adaptasi Gherkin untuk crowdsourced testing:
              </TextContent>
              <ul className="space-y-1 text-xs">
                <li>• Dekomposisi scenario ke pilihan ganda</li>
                <li>• Independent options (non-exclusive)</li>
                <li>• Capability untuk binary decomposition</li>
                <li>• Suitable untuk algoritma berbasis agreement</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Research Contribution */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Kontribusi Penelitian</h3>
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-2 text-[#24ce2a]">Kontribusi Teoretis</h4>
            <Caption>
              Validasi empiris algoritma M-X dalam realistic UAT scenarios dengan 
              subjective evaluation criteria
            </Caption>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-2 text-[#25da9e]">Kontribusi Praktis</h4>
            <Caption>
              Framework quality control yang dapat diimplementasi dalam 
              crowdsourced testing platforms
            </Caption>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-2 text-[#f39c12]">Kontribusi Metodologis</h4>
            <Caption>
              Systematic mapping research questions ke evaluation metrics 
              dengan validation framework
            </Caption>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;