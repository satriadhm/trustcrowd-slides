// src/app/components/thesis-slides/ThankyouSlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { TextContent, HighlightBox, SectionGrid, ContentCard } from "./SlideContentComponent";

const ThankYouSlide = () => {
  return (
    <SlideLayout 
      showTitle={false}
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Terima Kasih!
        </h1>
        <TextContent size="lg" className="max-w-4xl mx-auto">
          Atas perhatian dan feedback yang berharga
        </TextContent>
      </div>

      <HighlightBox variant="primary" className="mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8 text-center text-[#24ce2a]">
          Penghargaan Penelitian
        </h2>
        
        <SectionGrid columns={3} className="mb-8">
          <div className="text-center">
            <div className="bg-[#24ce2a]/20 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg lg:text-xl xl:text-2xl mb-3">Partisipan</h3>
            <TextContent size="base">
              24 volunteer yang mendedikasikan waktu untuk studi simulasi
            </TextContent>
          </div>
          
          <div className="text-center">
            <div className="bg-[#24ce2a]/20 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-lg lg:text-xl xl:text-2xl mb-3">Dukungan Akademik</h3>
            <TextContent size="base">
              Fakultas dan staff Universitas Telkom atas guidance dan resources
            </TextContent>
          </div>
          
          <div className="text-center">
            <div className="bg-[#24ce2a]/20 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="font-medium text-lg lg:text-xl xl:text-2xl mb-3">Komunitas Penelitian</h3>
            <TextContent size="base">
              Peers dan colleagues yang memberikan feedback dan review berharga
            </TextContent>
          </div>
        </SectionGrid>
        
        <div className="text-center border-t border-white/20 pt-6">
          <TextContent size="lg" className="mb-2">Terima Kasih Khusus Untuk</TextContent>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2">Dana Sulistiyo Kusumo, S.T., M.T., Ph.D</p>
          <TextContent size="lg">Pembimbing Penelitian</TextContent>
        </div>
      </HighlightBox>

      <SectionGrid columns={2} className="mb-8 sm:mb-10">
        <ContentCard title="Informasi Kontak" animationDelay={0}>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#24ce2a]/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <TextContent size="base">+6282241389340</TextContent>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-[#24ce2a]/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <TextContent size="base">glorioussatria@gmail.com</TextContent>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-[#24ce2a]/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <TextContent size="base">linkedin.com/in/gloriousatria</TextContent>
            </div>
          </div>
        </ContentCard>
        
        <ContentCard title="Langkah Selanjutnya" animationDelay={0.2}>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-lg">Publikasi</span>
                <TextContent size="sm" className="mt-1">
                  Submission ke jurnal akademik dan konferensi di bidang software testing dan crowdsourced quality control
                </TextContent>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-lg">Open Source Implementation</span>
                <TextContent size="sm" className="mt-1">
                  Public release implementasi algoritma dan toolkit validasi untuk kolaborasi komunitas yang lebih luas
                </TextContent>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-lg">Partnership Industri</span>
                <TextContent size="sm" className="mt-1">
                  Eksplorasi partnership dengan platform software testing untuk implementasi real-world
                </TextContent>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <TextContent size="lg" className="mb-4 text-[#24ce2a] font-medium">Ada Pertanyaan?</TextContent>
        <TextContent size="lg">Silakan hubungi via email atau LinkedIn</TextContent>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ThankYouSlide;