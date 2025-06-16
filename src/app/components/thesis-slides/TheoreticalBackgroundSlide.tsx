// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Ultra Compact)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox } from "./SlideContentComponent";

const TheoreticalBackgroundSlide = () => {
  return (
    <SlideLayout 
      title="Landasan Teori"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* UAT & Crowdsourcing - Compact */}
      <ContentCard title="UAT & Crowdsourcing" animationDelay={0} className="py-4">
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-[#24ce2a]">UAT Tradisional</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Validasi akhir sebelum deployment</li>
              <li>• Tidak ada <em>ground truth</em></li>
              <li>• Butuh sumber daya besar</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-[#25da9e]">Crowdsourced UAT</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Cost-effective, perspektif beragam</li>
              <li>• <strong>Masalah:</strong> Heterogenitas partisipan</li>
              <li>• <strong>Masalah:</strong> Variabilitas kualitas</li>
            </ul>
          </div>
        </SectionGrid>
      </ContentCard>

      {/* Main Content - Side by Side */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Algoritma M-X" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Keunggulan</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Tidak butuh <em>ground truth</em></li>
                <li>• Evaluasi berbasis konsistensi</li>
                <li>• Privasi terjaga, efisien</li>
              </ul>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">vs Metode Lain</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• MOCOM: butuh data historis</li>
                <li>• WSM: masalah privasi</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Validation Framework" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#25da9e]">Ground Truth</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Berbasis pengalaman UAT</li>
                <li>• Klasifikasi eligible/non-eligible</li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#25da9e]">Metrik Evaluasi</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Accuracy, Precision, Recall</li>
                <li>• TNR, F1-Score, TP/TN/FP/FN</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Bottom Highlight - Compact */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-3 text-center">Kontribusi Penelitian</h3>
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="font-medium text-base mb-1 text-[#24ce2a]">Teoretis</h4>
            <p className="text-sm text-gray-200">Aplikasi M-X untuk UAT crowdsourcing</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="font-medium text-base mb-1 text-[#25da9e]">Praktis</h4>
            <p className="text-sm text-gray-200">Framework QC untuk platform testing</p>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;