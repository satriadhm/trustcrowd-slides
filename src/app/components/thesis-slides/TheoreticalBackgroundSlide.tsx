// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Standardized Typography)
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
      {/* UAT & Crowdsourcing - Compact */}
      <ContentCard title="UAT & Crowdsourcing" animationDelay={0} className="py-4">
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-2 text-[#24ce2a]">UAT Tradisional</h4>
            <ul className="space-y-1">
              <li><TextContent size="small" className="text-gray-300">• Validasi akhir sebelum deployment</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Tidak ada <em>ground truth</em></TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Butuh sumber daya besar</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Crowdsourced UAT</h4>
            <ul className="space-y-1">
              <li><TextContent size="small" className="text-gray-300">• Cost-effective, perspektif beragam</TextContent></li>
              <li><TextContent size="small" className="text-gray-300"><strong>Masalah:</strong> Heterogenitas partisipan</TextContent></li>
              <li><TextContent size="small" className="text-gray-300"><strong>Masalah:</strong> Variabilitas kualitas</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </ContentCard>

      {/* Main Content - Side by Side */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Algoritma M-X" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#24ce2a]">Keunggulan</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• Tidak butuh <em>ground truth</em></TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Evaluasi berbasis konsistensi</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Privasi terjaga, efisien</TextContent></li>
              </ul>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#24ce2a]">vs Metode Lain</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• MOCOM: butuh data historis</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• WSM: masalah privasi</TextContent></li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Validation Framework" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Ground Truth</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• Berbasis pengalaman UAT</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Klasifikasi eligible/non-eligible</TextContent></li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Metrik Evaluasi</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• Accuracy, Precision, Recall</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• TNR, F1-Score, TP/TN/FP/FN</TextContent></li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Bottom Highlight - Compact */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-center">Kontribusi Penelitian</h3>
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium mb-1 text-[#24ce2a]">Teoretis</h4>
            <Caption>Aplikasi M-X untuk UAT crowdsourcing</Caption>
          </div>
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium mb-1 text-[#25da9e]">Praktis</h4>
            <Caption>Framework QC untuk platform testing</Caption>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;