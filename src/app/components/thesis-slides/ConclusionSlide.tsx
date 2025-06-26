// src/app/components/thesis-slides/ConclusionSlide.tsx (Enhanced with Limitations)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox } from "./SlideContentComponent";

const ConclusionSlide = () => {
  return (
    <SlideLayout 
      title="Kesimpulan"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Summary - Top */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-3 text-[#24ce2a] text-center">Ringkasan Penelitian</h3>
        <div className="text-center">
          <p className="text-base text-gray-200 mb-2">
            M-X algorithm efektif sebagai QC mechanism dengan <span className="font-bold text-[#24ce2a]">79% akurasi</span>, 
            <span className="font-bold text-[#24ce2a]"> 82% presisi</span>, <span className="font-bold text-[#24ce2a]">75% recall</span>
          </p>
          <p className="text-sm text-gray-300">
            Dapat membedakan tester eligible/non-eligible tanpa ground truth dalam konteks UAT crowdsourced
          </p>
        </div>
      </HighlightBox>

      {/* Main Results */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Temuan Utama" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">RQ1: Classification Accuracy</h4>
              <p className="text-sm text-gray-300">
                <strong>79% accuracy</strong> menunjukkan M-X efektif dalam klasifikasi tester, dengan high precision (82%) mengindikasikan minimalisir false positives yang crucial dalam UAT.
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">RQ2: Variability Reduction</h4>
              <p className="text-sm text-gray-300">
                <strong>TNR 83%</strong> dan high precision menunjukkan efektivitas dalam reducing tester characteristic variability dan ensuring consistent testing quality.
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Algorithm Performance</h4>
              <p className="text-sm text-gray-300">
                F1-Score 78% mengkonfirmasi balanced performance, cocok untuk UAT berbasis Crowdsourcing quality control.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Keterbatasan Penelitian" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <h4 className="font-medium text-base mb-1 text-red-400">Sample Size Limitation</h4>
              <p className="text-sm text-gray-300">
                <strong>24 partisipan</strong> membatasi generalizability ke larger crowdsourced environments. Perlu validasi skala lebih besar.
              </p>
            </div>
            
            <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <h4 className="font-medium text-base mb-1 text-yellow-400">Population Diversity</h4>
              <p className="text-sm text-gray-300">
                Partisipan mayoritas <strong>university students (20-24 tahun)</strong> dari IT background, mungkin tidak represent real-world crowd diversity.
              </p>
            </div>
            
            <div className="bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
              <h4 className="font-medium text-base mb-1 text-orange-400">Simulation vs Production</h4>
              <p className="text-sm text-gray-300">
                <strong>Simulation environment</strong> lacks complexity dari actual production deployments. Multiple-choice format mungkin tidak capture full spectrum UAT activities.
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Critical Analysis */}
      <HighlightBox variant="secondary" className="py-4">
        <h3 className="text-xl font-semibold mb-3 text-center">Critical Analysis</h3>
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-green-400">✓ Algorithm Strengths</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• High precision (82%) = effective quality control</li>
              <li>• No ground truth dependency = UAT applicable</li>
              <li>• Privacy preservation through response patterns</li>
              <li>• Immediate deployment capability</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-yellow-400">⚠ Conservative Tendency</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• 3 experienced software engineering students excluded</li>
              <li>• Consistency ≠ domain expertise</li>
              <li>• May discard valuable diverse perspectives</li>
              <li>• Risk of reducing innovative contributions</li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Comparison with Theoretical Framework */}
      <ContentCard title="Comparison with Prior Work" animationDelay={0.4} className="py-4">
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm text-gray-200 leading-relaxed">
            Dibandingkan dengan <strong>Dang et al.&apos;s theoretical framework</strong>, penelitian ini memberikan 
            <strong> empirical validation dalam realistic UAT settings</strong> sambil mengungkap practical limitations. 
            Temuan mendukung penggunaan algorithm ketika predefined answers tidak tersedia, namun 
            <strong> highlight perlunya complementary assessment mechanisms</strong> untuk domain-specific expertise.
          </p>
        </div>
      </ContentCard>

      {/* Final Assessment */}
      <HighlightBox variant="primary" className="py-4 text-center">
        <h3 className="text-xl font-semibold mb-3">Penilaian Akhir</h3>
        <p className="text-base text-gray-200 leading-relaxed mb-4">
          M-X Algorithm memberikan <strong>valuable foundation</strong> untuk UAT berbasis Crowdsourcing quality control, 
          namun memerlukan <strong>careful domain-specific calibration</strong> dan supplementary qualification mechanisms 
          untuk optimal performance dalam complex enterprise scenarios.
        </p>
        
        <div className="bg-[#24ce2a]/10 p-3 rounded-lg">
          <p className="text-sm text-[#24ce2a] font-medium">
            <strong>Recommendation:</strong> Hybrid approach combining consistency metrics dengan expertise indicators 
            untuk balanced quality control yang preserve both consistency dan diversity.
          </p>
        </div>
      </HighlightBox>

      {/* Future Directions - Compact */}
      <SectionGrid columns={3} gap="gap-3">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-blue-400">Future Research</h4>
          <p className="text-sm text-gray-200">Large-scale validation & adaptive thresholds</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-purple-400">Industry Application</h4>
          <p className="text-sm text-gray-200">Production implementation & real-world testing</p>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-green-400">Methodological Impact</h4>
          <p className="text-sm text-gray-200">Multi-criteria frameworks & hybrid approaches</p>
        </div>
      </SectionGrid>
    </SlideLayout>
  );
};

export default ConclusionSlide;