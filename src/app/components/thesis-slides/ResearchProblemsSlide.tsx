// src/app/components/thesis-slides/ResearchProblemsSlide.tsx (Standardized Typography)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, ListItem, HighlightBox, TextContent, Subtitle } from "./SlideContentComponent";

const ResearchProblemsSlide = () => {
  return (
    <SlideLayout 
      title="Rumusan Masalah"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8">
        <ContentCard 
          highlight={true}
          animationDelay={0}
          className="border-[#24ce2a]/30"
        >
          <div className="text-center mb-6">
            <span className="bg-[#24ce2a]/20 text-[#24ce2a] text-xl sm:text-2xl lg:text-3xl font-bold px-4 py-2 rounded-full">
              RQ1
            </span>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-center leading-relaxed">
            Seberapa akurat algoritma M-X dalam mengklasifikasi kelayakan <i>tester</i> di lingkungan UAT <i>berbasis crowdsourcing</i>?
          </h3>
          <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
            <ul className="space-y-4">
              <ListItem>
                <TextContent size="base">
                  <b>Tujuan:</b> Mengevaluasi akurasi klasifikasi M-X menggunakan respons <i>tester</i> nyata dalam tugas-tugas subjektif.
                </TextContent>
              </ListItem>
            </ul>
          </div>
        </ContentCard>

        <ContentCard 
          highlight={true}
          animationDelay={0.2}
          className="border-[#25da9e]/30"
        >
          <div className="text-center mb-6">
            <span className="bg-[#25da9e]/20 text-[#25da9e] text-xl sm:text-2xl lg:text-3xl font-bold px-4 py-2 rounded-full">
              RQ2
            </span>
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6 text-center leading-relaxed">
            Sejauh mana algoritma M-X mengurangi variabilitas karakteristik <i>tester</i> dan memastikan kualitas <i>testing</i> yang konsisten?
          </h3>
          <div className="bg-white/10 p-4 sm:p-6 rounded-lg">
            <ul className="space-y-4">
              <ListItem>
                <TextContent size="base">
                  <b>Tujuan:</b> Mengukur dampak variabilitas <i>tester</i>, khususnya pengalaman sebelumnya, terhadap performa algoritma.
                </TextContent>
              </ListItem>
            </ul>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Tujuan Penelitian</h3>
        <Subtitle>
          Mengevaluasi <b>efektivitas algoritma M-X sebagai mekanisme kontrol kualitas</b> untuk klasifikasi <i>tester</i> dalam lingkungan UAT <i>crowdsourced</i>.
        </Subtitle>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResearchProblemsSlide;