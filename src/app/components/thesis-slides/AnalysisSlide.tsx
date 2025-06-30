// src/app/components/thesis-slides/AnalysisSlide.tsx (Ultra Compact)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox } from "./SlideContentComponent";

const AnalysisSlide = () => {
  return (
    <SlideLayout 
      title="Analisis Hasil"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Top Row - Metrics & Strengths */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Interpretasi Metrik" animationDelay={0} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Accuracy 79%</h4>
              <p className="text-sm text-gray-300">4 dari 5 tester benar, performa kuat</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Precision 82%</h4>
              <p className="text-sm text-gray-300">Minimalisir false positive</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#24ce2a]">True Negative Rate 83%</h4>
              <p className="text-sm text-gray-300">Filter non-eligible sangat efektif</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Kekuatan M-X" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Independensi Ground Truth</h4>
              <p className="text-sm text-gray-300">Ideal untuk UAT subjektif</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Performa Seimbang</h4>
              <p className="text-sm text-gray-300">F1-Score 78%, konsisten semua metrik</p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-1 text-[#25da9e]">Reduksi Variabilitas</h4>
              <p className="text-sm text-gray-300">Pool tester lebih homogen</p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Classification Analysis - Compact */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-4 text-center">Analisis Klasifikasi</h3>
        
        <SectionGrid columns={3} gap="gap-3">
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-red-400">FP = 2</h4>
            <p className="text-sm text-gray-300">2 non-experienced diklasifikasi eligible</p>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-orange-400">FN = 3</h4>
            <p className="text-sm text-gray-300">3 experienced tidak terdeteksi</p>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Overall</h4>
            <p className="text-sm text-gray-300">19/24 benar (79% akurasi)</p>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default AnalysisSlide;