"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { 
  SectionGrid, 
  ContentCard, 
  ListItem, 
  TextContent, 
  HighlightBox,
  Subtitle,
  Caption
} from "./SlideContentComponent";

const IntroductionSlide = () => {
  return (
    <SlideLayout 
      title="Pendahuluan"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8">
        <ContentCard title="Latar Belakang" animationDelay={0}>
          <ul className="space-y-4">
            <ListItem>
              <TextContent size="base">
                Kualitas <em>software</em> sangat penting dalam pengembangan komersial.
              </TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base">
                UAT adalah tahap kritis <strong>validasi akhir</strong> sebelum implementasi, berperan sebagai{" "}
                <strong>jembatan penting</strong> antara tim pengembangan dan <em>end-user</em>.
              </TextContent>
            </ListItem>
            <ListItem>
              <TextContent size="base">
                UAT membutuhkan sumber daya, waktu, dan anggaran yang signifikan.
              </TextContent>
            </ListItem>
          </ul>
        </ContentCard>

        <ContentCard title="Crowdsourced UAT" animationDelay={0.2}>
          <ul className="space-y-4">
            <ListItem>
              <div>
                <TextContent size="base" className="font-medium mb-2">Solusi potensial:</TextContent>
                <Caption>
                  Melibatkan beragam pengguna untuk <em>testing</em> yang{" "}
                  <strong>lebih luas, realistis, dan hemat biaya</strong>.
                </Caption>
              </div>
            </ListItem>
            <ListItem>
              <div>
                <TextContent size="base" className="font-medium mb-2">Tantangan utama:</TextContent>
                <Caption>
                  <strong>Heterogenitas partisipan</strong>, variabilitas karakteristik <em>tester</em>{" "}
                  memengaruhi konsistensi hasil.
                </Caption>
              </div>
            </ListItem>
          </ul>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#24ce2a]">
          Algoritma M-X sebagai Solusi
        </h3>
        <Subtitle className="mb-4">
          Algoritma M-X menawarkan pendekatan untuk menilai kualitas <em>tester</em> berdasarkan konsistensi respons{" "}
          <span className="text-[#25da9e] font-medium">tanpa memerlukan jawaban benar yang telah ditentukan</span>,{" "}
          <strong>mengatasi keterbatasan metode konvensional yang tidak memiliki <em>ground truth</em></strong>.
        </Subtitle>
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