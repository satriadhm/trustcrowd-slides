// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Standardized Typography)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { ContentCard, FormulaBox, SectionGrid, HighlightBox, TextContent, Caption } from "./SlideContentComponent";

const MXAlgorithmSlide = () => {
  return (
    <SlideLayout 
      title="Algoritma M-X"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Formula Section - Compact */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard 
          title="M-1 Algorithm" 
          highlight={true}
          animationDelay={0}
          className="border-[#24ce2a]/30 py-4"
        >
          <Caption className="text-center mb-4">
            Worker quality tanpa ground truth
          </Caption>
          <FormulaBox className="py-4">
            <div className="text-lg sm:text-xl lg:text-2xl">
              Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + ((1-A<sub>i</sub>)(1-A<sub>j</sub>))/(M-1)
            </div>
          </FormulaBox>
        </ContentCard>

        <ContentCard 
          title="M-X Algorithm" 
          highlight={true}
          animationDelay={0.2}
          className="border-[#25da9e]/30 py-4"
        >
          <Caption className="text-center mb-4">
            Ekstensi untuk multiple-choice
          </Caption>
          <FormulaBox className="py-4">
            <div className="text-lg sm:text-xl lg:text-2xl">
              A<sub>i</sub> = ∏<sub>j=1</sub><sup>M</sup> A<sub>ij</sub>
            </div>
          </FormulaBox>
        </ContentCard>
      </SectionGrid>

      {/* Key Features - Ultra Compact */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Karakteristik & Aplikasi</h3>
        
        <SectionGrid columns={3} gap="gap-3">
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-2 text-[#24ce2a]">Core Features</h4>
            <ul className="space-y-1">
              <li><TextContent size="small" className="text-gray-300">• No ground truth needed</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Binary decomposition</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Consistency-based evaluation</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Process</h4>
            <ol className="space-y-1 list-decimal list-inside">
              <li><TextContent size="small" className="text-gray-300">Dekomposisi ke biner</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">Hitung agreement matrix</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">Solve accuracy scores</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">Threshold classification</TextContent></li>
            </ol>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-2 text-[#f39c12]">UAT Relevance</h4>
            <ul className="space-y-1">
              <li><TextContent size="small" className="text-gray-300">• Subjektif evaluation</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Variability reduction</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Crowdsourcing scalable</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;