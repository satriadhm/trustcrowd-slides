// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Enhanced with Detailed Research Gap Analysis)
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
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">User Acceptance Testing berbasis Crowdsourcing</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a]">UAT: Validasi Akhir Software</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• Tahap kritis sebelum deployment produk</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Evaluasi dari perspektif end-user sesungguhnya</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Discovery-oriented testing</strong> untuk menemukan edge cases</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>User-centric assessment</strong> berdasarkan experience nyata</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">UAT berbasis Crowdsourcing: Potensi & Tantangan</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Cost-effective</strong> dengan cakupan testing luas</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Diverse perspectives</strong> dari beragam tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Challenge:</strong> Heterogenitas kualitas tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Problem:</strong> Variabilitas hasil tanpa kontrol kualitas</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Analisis Metode Quality Control Existing</h3>
        
        <SectionGrid columns={3} gap="gap-4">
          {/* MOCOM Method */}
          <ContentCard title="MOCOM (Multi-Objective Crowd Worker Recommendation)" animationDelay={0} className="py-4">
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-base font-medium mb-3 text-blue-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Wang et al. (2019):</strong> Multi-Objective Crowd Worker Recommendation</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Berdasarkan <strong>riwayat deteksi bug</strong> sebelumnya</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Optimasi multiple criteria: accuracy, speed, cost</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Menggunakan <strong>historical performance data</strong></TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Cold Start Problem:</strong> Butuh data historis ekstensif</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak cocok untuk <strong>tester baru</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Kurang applicable untuk skenario <strong>subjektif</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus pada <strong>objective bug detection</strong>, bukan user experience</TextContent></li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* WSM Method */}
          <ContentCard title="WSM (Worker Search Model)" animationDelay={0.2} className="py-4">
            <div className="space-y-4">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-base font-medium mb-3 text-purple-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Hong et al. (2021):</strong> Wide learning approach</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Mengandalkan <strong>atribut personal & demografis</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Sistem rekomendasi worker berdasarkan profil</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Machine learning untuk <strong>worker matching</strong></TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Privacy Concerns:</strong> Butuh data personal sensitif</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• <strong>Potential Bias:</strong> Diskriminasi demografis</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak fokus pada <strong>response consistency</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Asumsi bahwa demografi = kemampuan testing</TextContent></li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* Learning Curves Method */}
          <ContentCard title="Learning Curves Analysis" animationDelay={0.4} className="py-4">
            <div className="space-y-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-base font-medium mb-3 text-green-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Yao et al. (2021):</strong> Tester learning progression</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Analisis <strong>kurva pembelajaran</strong> dari waktu ke waktu</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus pada <strong>skill development</strong> jangka panjang</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Longitudinal study approach</TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• Tidak mengatasi <strong>initial quality assessment</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak ada <strong>immediate filtering</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus <strong>jangka panjang</strong>, bukan real-time selection</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Memerlukan time investment yang besar</TextContent></li>
                </ul>
              </div>
              
            </div>
          </ContentCard>
        </SectionGrid>
      </HighlightBox>

      {/* Comparison Table */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Perbandingan Metode Quality Control</h3>
        
        <div className="bg-white/5 p-6 rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 font-medium">Aspek</th>
                  <th className="text-center py-3 px-4 font-medium text-blue-400">MOCOM</th>
                  <th className="text-center py-3 px-4 font-medium text-purple-400">WSM</th>
                  <th className="text-center py-3 px-4 font-medium text-green-400">Learning Curves</th>
                  <th className="text-center py-3 px-4 font-medium text-cyan-400">MX Algorithm</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Ground Truth Required</td>
                  <td className="text-center py-3 px-4">✓ (Historical bugs)</td>
                  <td className="text-center py-3 px-4">✗</td>
                  <td className="text-center py-3 px-4">✓ (Performance data)</td>
                  <td className="text-center py-3 px-4 text-cyan-400">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Privacy Preservation</td>
                  <td className="text-center py-3 px-4">Partial</td>
                  <td className="text-center py-3 px-4">✗ (Demographic data)</td>
                  <td className="text-center py-3 px-4">Partial</td>
                  <td className="text-center py-3 px-4 text-cyan-400">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Immediate Deployment</td>
                  <td className="text-center py-3 px-4">✗ (Need history)</td>
                  <td className="text-center py-3 px-4">Partial</td>
                  <td className="text-center py-3 px-4">✗ (Long-term)</td>
                  <td className="text-center py-3 px-4 text-cyan-400">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Subjective Task Support</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4">Partial</td>
                  <td className="text-center py-3 px-4 text-cyan-400">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Scalability</td>
                  <td className="text-center py-3 px-4">Medium</td>
                  <td className="text-center py-3 px-4">High</td>
                  <td className="text-center py-3 px-4">Low</td>
                  <td className="text-center py-3 px-4 text-cyan-400">High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Implementation Complexity</td>
                  <td className="text-center py-3 px-4">High</td>
                  <td className="text-center py-3 px-4">Medium</td>
                  <td className="text-center py-3 px-4">High</td>
                  <td className="text-center py-3 px-4 text-cyan-400">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </HighlightBox>

      {/* Validation Framework */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Framework Validasi & Evaluasi</h3>
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Prior-Experience Validation</h4>
            <ul className="space-y-2 text-left">
              <li><TextContent size="small" className="text-gray-300">• Assessment berdasarkan pengalaman UAT</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Ground truth untuk evaluasi algoritma</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Baseline perbandingan kinerja</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Gherkin BDD Format</h4>
            <ul className="space-y-2 text-left">
              <li><TextContent size="small" className="text-gray-300">• <strong>Given-When-Then</strong> structure</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• User-friendly untuk non-technical tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Adaptable ke multiple-choice format</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base font-medium mb-3 text-[#25da9e]">Confusion Matrix Metrics</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-left">
              <div>• <strong>Accuracy:</strong> Overall correctness</div>
              <div>• <strong>Precision:</strong> True positive rate</div>
              <div>• <strong>Recall:</strong> Sensitivity</div>
              <div>• <strong>F1-Score:</strong> Harmonic mean</div>
              <div>• <strong>True Negative Rate:</strong> True negative rate</div>
              <div>• <strong>FP Rate:</strong> False positive rate</div>
            </div>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;