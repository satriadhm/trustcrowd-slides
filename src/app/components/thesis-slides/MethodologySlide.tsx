// src/app/components/thesis-slides/MethodologySlide.tsx
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { 
  SectionGrid, 
  ContentCard, 
  ListItem, 
  TextContent, 
  HighlightBox, 
  Caption, 
  SectionTitle 
} from "./SlideContentComponent"; 

const MethodologySlide = () => {
  return (
    <SlideLayout 
      title="Metodologi"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8">
        <ContentCard title="Desain Penelitian" animationDelay={0}>
          <div className="space-y-4">
            <ListItem>
              <TextContent size="base"><strong>Simulasi kuantitatif</strong> untuk evaluasi algoritma M-X.</TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base"><strong>Arsitektur client-server</strong> dengan GraphQL dan MongoDB.</TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base"><strong>24 partisipan</strong> selama <strong>3 hari simulasi</strong>.</TextContent>
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
                <TextContent size="base" className="font-medium block">Literature Review</TextContent>
                <Caption className="mt-1">
                  Studi Crowdsourced Testing, UAT, dan kontrol kualitas *worker*.
                </Caption>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8">
                <span className="text-[#25da9e] font-bold text-sm">2</span>
              </div>
              <div>
                <TextContent size="base" className="font-medium block">Pengembangan Sistem</TextContent>
                <Caption className="mt-1">
                  Platform web dengan implementasi algoritma M-X.
                </Caption>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8">
                <span className="text-[#25da9e] font-bold text-sm">3</span>
              </div>
              <div>
                <TextContent size="base" className="font-medium block">Simulasi & Analisis</TextContent>
                <Caption className="mt-1">
                  Testing terkontrol dengan evaluasi kuantitatif.
                </Caption>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <SectionTitle level={3} centered>Metrik Evaluasi</SectionTitle>
        <SectionGrid columns={5} gap="gap-3 sm:gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0">**Accuracy**</SectionTitle>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="secondary" className="mb-0">**Precision**</SectionTitle>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0">**Recall**</SectionTitle>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="secondary" className="mb-0">**F1 Score**</SectionTitle>
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0">**TNR**</SectionTitle>
          </div>
        </SectionGrid>
        <TextContent size="small" className="mt-4 text-center">
            Metrik standar yang digunakan berdasarkan Confusion Matrix untuk mengevaluasi performa klasifikasi.
        </TextContent>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MethodologySlide;