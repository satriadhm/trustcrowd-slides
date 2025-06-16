// src/app/components/thesis-slides/IntroductionSlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox } from "./SlideContentComponent";

const IntroductionSlide = () => {
  return (
    <SlideLayout 
      title="Pendahuluan"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8 sm:mb-10 lg:mb-12">
        <ContentCard title="Latar Belakang" animationDelay={0}>
          <ul className="space-y-4 sm:space-y-5">
            <ListItem>
              Kualitas <em>software</em> sangat penting dalam pengembangan komersial.
            </ListItem>
            <ListItem>
              UAT adalah tahap kritis <strong>validasi akhir</strong> sebelum implementasi, berperan sebagai{" "}
              <strong>jembatan penting</strong> antara tim pengembangan dan <em>end-user</em>.
            </ListItem>
            <ListItem>
              UAT membutuhkan sumber daya, waktu, dan anggaran yang signifikan.
            </ListItem>
          </ul>
        </ContentCard>

        <ContentCard title="Crowdsourced UAT" animationDelay={0.2}>
          <ul className="space-y-4 sm:space-y-5">
            <ListItem>
              <div>
                <span className="font-medium">Solusi potensial:</span>
                <TextContent size="sm" className="mt-2">
                  Melibatkan beragam pengguna untuk <em>testing</em> yang{" "}
                  <strong>lebih luas, realistis, dan hemat biaya</strong>.
                </TextContent>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <span className="font-medium">Tantangan utama:</span>
                <TextContent size="sm" className="mt-2">
                  <strong>Heterogenitas partisipan</strong>, variabilitas karakteristik <em>tester</em>{" "}
                  memengaruhi konsistensi hasil.
                </TextContent>
              </div>
            </ListItem>
          </ul>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 sm:mb-6 text-[#24ce2a]">
          Algoritma M-X sebagai Solusi
        </h3>
        <TextContent size="lg" className="mb-4 sm:mb-6">
          Algoritma M-X menawarkan pendekatan untuk menilai kualitas <em>tester</em> berdasarkan konsistensi respons{" "}
          <span className="text-[#25da9e] font-medium">tanpa memerlukan jawaban benar yang telah ditentukan</span>,{" "}
          <strong>mengatasi keterbatasan metode konvensional yang tidak memiliki <em>ground truth</em></strong>.
        </TextContent>
        <div className="bg-gradient-to-r from-[#24ce2a]/30 to-[#25da9e]/30 p-4 sm:p-6 rounded-lg">
          <TextContent size="base" className="font-medium">
            Penelitian ini mengevaluasi efektivitas algoritma M-X dalam mengklasifikasi{" "}
            <strong>kelayakan <em>tester</em></strong> dalam konteks UAT berbasis <em>crowdsourcing</em>.
          </TextContent>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default IntroductionSlide;