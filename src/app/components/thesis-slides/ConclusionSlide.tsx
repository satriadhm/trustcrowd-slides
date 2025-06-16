// src/app/components/thesis-slides/ConclusionSlide.tsx (Ultra Compact)
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
            M-X efektif sebagai QC mechanism dengan <span className="font-bold text-[#24ce2a]">79% akurasi</span>, 
            <span className="font-bold text-[#24ce2a]"> 82% presisi</span>, <span className="font-bold text-[#24ce2a]">75% recall</span>
          </p>
          <p className="text-sm text-gray-300">
            Dapat membedakan tester eligible/non-eligible tanpa ground truth
          </p>
        </div>
      </HighlightBox>

      {/* Strengths & Limitations */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Kekuatan Utama" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Reduksi Variabilitas</h4>
              <p className="text-sm text-gray-300">TNR 83% = filter sangat efektif</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Fleksibilitas</h4>
              <p className="text-sm text-gray-300">Independen dari ground truth</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Performa Seimbang</h4>
              <p className="text-sm text-gray-300">Konsisten di semua metrik evaluasi</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Keterbatasan & Saran" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Sampel Terbatas</h4>
              <p className="text-sm text-gray-300">24 partisipan, perlu skala lebih besar</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Environment</h4>
              <p className="text-sm text-gray-300">Simulasi vs production environment</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Diversity Trade-off</h4>
              <p className="text-sm text-gray-300">Mungkin mengecualikan perspektif berharga</p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Final Assessment */}
      <HighlightBox variant="primary" className="py-4 text-center">
        <h3 className="text-xl font-semibold mb-3">Penilaian Akhir</h3>
        <p className="text-base text-gray-200 leading-relaxed">
          Algoritma M-X memberikan solusi <em>promising</em> untuk meningkatkan kualitas <em>crowdsourced</em> UAT 
          dengan mengidentifikasi <em>tester</em> konsisten dan reduksi variabilitas hasil <em>testing</em>.
        </p>
      </HighlightBox>

      {/* Future Directions - Compact */}
      <SectionGrid columns={3} gap="gap-3">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-blue-400">Research</h4>
          <p className="text-sm text-gray-200">Large-scale validation</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-purple-400">Industry</h4>
          <p className="text-sm text-gray-200">Production implementation</p>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 p-3 rounded-lg text-center">
          <h4 className="font-medium text-base mb-1 text-green-400">Impact</h4>
          <p className="text-sm text-gray-200">QC mechanism standard</p>
        </div>
      </SectionGrid>
    </SlideLayout>
  );
};

export default ConclusionSlide;