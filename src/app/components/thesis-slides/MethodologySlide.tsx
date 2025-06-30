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
              <TextContent size="base"><strong>Simulasi kuantitatif</strong> untuk evaluasi algoritma M-X.</TextContent> {/* **Simulasi kuantitatif** -> <strong>Simulasi kuantitatif</strong> */}
            </ListItem>
            <ListItem>
              <TextContent size="base"><strong>Arsitektur <em>client-server</em></strong> dengan GraphQL dan MongoDB.</TextContent> {/* **Arsitektur *client-server*** -> <strong>Arsitektur <em>client-server</em></strong> */}
            </ListItem>
            <ListItem>
              <TextContent size="base"><strong>24 partisipan</strong> selama <strong>3 hari simulasi</strong>.</TextContent> {/* **24 partisipan** -> <strong>24 partisipan</strong>, **3 hari simulasi** -> <strong>3 hari simulasi</strong> */}
            </ListItem>
          </div>
        </ContentCard>

        <ContentCard title="Alur Penelitian" animationDelay={0.2}>
          <div className="space-y-4">
            <ListItem icon={<div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8"><span className="text-[#25da9e] font-bold text-sm">1</span></div>}>
              <TextContent size="base" className="font-medium block">Studi Literatur & Perumusan Masalah</TextContent>
              <Caption className="mt-1">
                Identifikasi <em>gap</em> penelitian dan definisi tujuan.
              </Caption>
            </ListItem>
            
            <ListItem icon={<div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8"><span className="text-[#25da9e] font-bold text-sm">2</span></div>}>
              <TextContent size="base" className="font-medium block">Desain & Implementasi Sistem</TextContent>
              <Caption className="mt-1">
                Perancangan arsitektur, database, dan implementasi algoritma.
              </Caption>
            </ListItem>
            
            <ListItem icon={<div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8"><span className="text-[#25da9e] font-bold text-sm">3</span></div>}>
              <TextContent size="base" className="font-medium block">Simulasi & Pengumpulan Data</TextContent>
              <Caption className="mt-1">
                Eksekusi eksperimen dan koleksi respons <em>tester</em>. {/* *tester* -> <em>tester</em> */}
              </Caption>
            </ListItem>

            <ListItem icon={<div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8"><span className="text-[#25da9e] font-bold text-sm">4</span></div>}>
              <TextContent size="base" className="font-medium block">Analisis Data & Evaluasi</TextContent>
              <Caption className="mt-1">
                Pemrosesan data, perhitungan metrik, dan interpretasi hasil.
              </Caption>
            </ListItem>

            <ListItem icon={<div className="bg-[#25da9e]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center w-8 h-8"><span className="text-[#25da9e] font-bold text-sm">5</span></div>}>
              <TextContent size="base" className="font-medium block">Kesimpulan & Penelitian Lanjutan</TextContent>
              <Caption className="mt-1">
                Ringkasan temuan dan arah riset di masa depan.
              </Caption>
            </ListItem>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <SectionTitle level={3} centered>Metrik Evaluasi</SectionTitle>
        <SectionGrid columns={5} gap="gap-3 sm:gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0"><strong>Accuracy</strong></SectionTitle> {/* **Accuracy** -> <strong>Accuracy</strong> */}
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="secondary" className="mb-0"><strong>Precision</strong></SectionTitle> {/* **Precision** -> <strong>Precision</strong> */}
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0"><strong>Recall</strong></SectionTitle> {/* **Recall** -> <strong>Recall</strong> */}
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="secondary" className="mb-0"><strong>F1 Score</strong></SectionTitle> {/* **F1 Score** -> <strong>F1 Score</strong> */}
          </div>
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <SectionTitle level={4} color="primary" className="mb-0"><strong>True Negative Rate</strong></SectionTitle> {/* **True Negative Rate** -> <strong>True Negative Rate</strong> */}
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