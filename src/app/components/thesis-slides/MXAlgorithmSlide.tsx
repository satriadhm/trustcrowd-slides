// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { ContentCard, FormulaBox, SectionGrid, TextContent } from "./SlideContentComponent";

const MXAlgorithmSlide = () => {
  return (
    <SlideLayout 
      title="Algoritma M-X"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      {/* Formula Section */}
      <SectionGrid columns={2} className="mb-8 sm:mb-10 lg:mb-12">
        <ContentCard 
          title="M-1 Algorithm" 
          highlight={true}
          animationDelay={0}
          className="border-[#24ce2a]/30"
        >
          <TextContent size="base" className="mb-6 text-center">
            Evaluasi kualitas worker untuk masalah biner tanpa jawaban benar
          </TextContent>
          <FormulaBox>
            <div className="space-y-2">
              <div>
                Q<sub className="text-base sm:text-lg lg:text-xl">ij</sub> = A<sub className="text-base sm:text-lg lg:text-xl">i</sub> · A<sub className="text-base sm:text-lg lg:text-xl">j</sub> +
              </div>
              <div>
                ((1 - A<sub className="text-base sm:text-lg lg:text-xl">i</sub>)(1 - A<sub className="text-base sm:text-lg lg:text-xl">j</sub>)) / (M - 1)
              </div>
            </div>
          </FormulaBox>
        </ContentCard>

        <ContentCard 
          title="M-X Algorithm" 
          highlight={true}
          animationDelay={0.2}
          className="border-[#25da9e]/30"
        >
          <TextContent size="base" className="mb-6 text-center">
            Ekstensi M-1 untuk multiple-choice dengan dekomposisi biner
          </TextContent>
          <FormulaBox>
            A<sub className="text-lg sm:text-xl lg:text-2xl">i</sub> = ∏<sub className="text-base sm:text-lg lg:text-xl">j=1</sub><sup className="text-base sm:text-lg lg:text-xl">M</sup> A<sub className="text-base sm:text-lg lg:text-xl">ij</sub>
          </FormulaBox>
        </ContentCard>
      </SectionGrid>

      {/* Features and Process Section */}
      <SectionGrid columns={3}>
        <ContentCard title="Karakteristik Algoritma" animationDelay={0}>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-[#24ce2a]">
                <strong>Independensi Ground Truth</strong>
              </h4>
              <TextContent size="sm">
                Tidak memerlukan jawaban yang benar untuk evaluasi kualitas worker
              </TextContent>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-[#24ce2a]">
                <strong>Dekomposisi Biner</strong>
              </h4>
              <TextContent size="sm">
                Mengubah masalah multiple-choice menjadi sub-pertanyaan biner
              </TextContent>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Proses Algoritma" animationDelay={0.2}>
          <ol className="space-y-2 text-sm sm:text-base lg:text-lg text-gray-300 ml-3 list-decimal">
            <li>Dekomposisi tugas multiple-choice ke sub-pertanyaan biner</li>
            <li>Hitung tingkat agreement antar worker</li>
            <li>Bangun sistem persamaan probabilitas agreement</li>
            <li>Selesaikan persamaan untuk tingkat akurasi worker</li>
            <li>Klasifikasi kelayakan berdasarkan threshold</li>
          </ol>
        </ContentCard>

        <ContentCard title="Relevansi UAT Crowdsourcing" animationDelay={0.4}>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-[#f39c12]">
                <strong>Evaluasi Subjektif</strong>
              </h4>
              <TextContent size="sm">
                Cocok untuk UAT dengan testing subjektif dan eksplorasi
              </TextContent>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-[#f39c12]">
                <strong>Reduksi Variabilitas</strong>
              </h4>
              <TextContent size="sm">
                Identifikasi tester konsisten berdasarkan pola agreement
              </TextContent>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2 text-[#f39c12]">
                <strong>Skalabilitas</strong>
              </h4>
              <TextContent size="sm">
                Dirancang untuk pool worker besar dalam crowdsourcing
              </TextContent>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;