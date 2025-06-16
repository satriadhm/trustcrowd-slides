// src/app/components/thesis-slides/MethodologySlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox } from "./SlideContentComponent";

const MethodologySlide = () => {
  return (
    <SlideLayout 
      title="Metodologi"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8 sm:mb-10 lg:mb-12">
        <ContentCard title="Desain Penelitian" animationDelay={0}>
          <div className="space-y-4">
            <ListItem>
              Simulasi kuantitatif untuk evaluasi algoritma M-X
            </ListItem>
            <ListItem>
              Arsitektur client-server dengan GraphQL dan MongoDB
            </ListItem>
            <ListItem>
              24 partisipan selama 3 hari simulasi
            </ListItem>
          </div>
        </ContentCard>

        <ContentCard title="Alur Penelitian" animationDelay={0.2}>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8">
                <span className="text-[#25da9e] font-bold text-sm">1</span>
              </div>
              <div>
                <span className="font-medium text-lg block">Literature Review</span>
                <TextContent size="sm" className="mt-1">
                  Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker
                </TextContent>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8">
                <span className="text-[#25da9e] font-bold text-sm">2</span>
              </div>
              <div>
                <span className="font-medium text-lg block">Pengembangan Sistem</span>
                <TextContent size="sm" className="mt-1">
                  Platform web dengan implementasi algoritma M-X
                </TextContent>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8">
                <span className="text-[#25da9e] font-bold text-sm">3</span>
              </div>
              <div>
                <span className="font-medium text-lg block">Simulasi & Analisis</span>
                <TextContent size="sm" className="mt-1">
                  Testing terkontrol dengan evaluasi kuantitatif
                </TextContent>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 text-center">Metrik Evaluasi</h3>
        <SectionGrid columns={5} gap="gap-3 sm:gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-lg text-[#24ce2a] mb-2">Accuracy</h4>
            <TextContent size="sm" className="mb-3">
              Proporsi prediksi benar
            </TextContent>
            <div className="bg-white/10 p-2 rounded text-center">
              <span className="font-mono text-xs text-gray-200">(TP + TN) / Total</span>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-lg text-[#24ce2a] mb-2">Precision</h4>
            <TextContent size="sm" className="mb-3">
              Prediksi positif benar
            </TextContent>
            <div className="bg-white/10 p-2 rounded text-center">
              <span className="font-mono text-xs text-gray-200">TP / (TP + FP)</span>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-lg text-[#24ce2a] mb-2">Recall</h4>
            <TextContent size="sm" className="mb-3">
              Positif aktual terdeteksi
            </TextContent>
            <div className="bg-white/10 p-2 rounded text-center">
              <span className="font-mono text-xs text-gray-200">TP / (TP + FN)</span>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-lg text-[#24ce2a] mb-2">TNR</h4>
            <TextContent size="sm" className="mb-3">
              Negatif aktual terdeteksi
            </TextContent>
            <div className="bg-white/10 p-2 rounded text-center">
              <span className="font-mono text-xs text-gray-200">TN / (TN + FP)</span>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-lg text-[#24ce2a] mb-2">F1 Score</h4>
            <TextContent size="sm" className="mb-3">
              Harmonik P & R
            </TextContent>
            <div className="bg-white/10 p-2 rounded text-center">
              <span className="font-mono text-xs text-gray-200">2 × (P × R) / (P + R)</span>
            </div>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MethodologySlide;