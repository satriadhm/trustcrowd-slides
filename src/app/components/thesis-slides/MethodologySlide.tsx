// src/app/components/thesis-slides/MethodologySlide.tsx (Standardized Typography)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox, Caption } from "./SlideContentComponent";

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
              <TextContent size="base">Simulasi kuantitatif untuk evaluasi algoritma M-X</TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base">Arsitektur client-server dengan GraphQL dan MongoDB</TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base">24 partisipan selama 3 hari simulasi</TextContent>
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
                  Studi Crowdsourced Testing, UAT, dan kontrol kualitas worker
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
                  Platform web dengan implementasi algoritma M-X
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
                  Testing terkontrol dengan evaluasi kuantitatif
                </Caption>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center">Metrik Evaluasi</h3>
        <SectionGrid columns={5} gap="gap-3 sm:gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium text-[#24ce2a] mb-2">Accuracy</h