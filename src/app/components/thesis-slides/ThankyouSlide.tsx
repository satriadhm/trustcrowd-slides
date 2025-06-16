// src/app/components/thesis-slides/ThankyouSlide.tsx (Ultra Compact)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { TextContent, HighlightBox, SectionGrid, ContentCard } from "./SlideContentComponent";

const ThankYouSlide = () => {
  return (  
    <SlideLayout 
      showTitle={false}
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Main Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Terima Kasih!
        </h1>
        <TextContent size="base" className="max-w-3xl mx-auto">
          Atas perhatian dan feedback yang berharga
        </TextContent>
      </div>

      {/* Compact Acknowledgments */}
      <HighlightBox variant="primary" className="py-4">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#24ce2a]">
          Penghargaan Penelitian
        </h2>
        
        <SectionGrid columns={3} gap="gap-3">
          <div className="text-center bg-white/5 p-3 rounded-lg">
            <div className="bg-[#24ce2a]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-medium text-base mb-1">24 Partisipan</h3>
            <TextContent size="small">Volunteer simulasi UAT</TextContent>
          </div>
          
          <div className="text-center bg-white/5 p-3 rounded-lg">
            <div className="bg-[#24ce2a]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="font-medium text-base mb-1">Fakultas & Staff</h3>
            <TextContent size="small">Universitas Telkom</TextContent>
          </div>
          
          <div className="text-center bg-white/5 p-3 rounded-lg">
            <div className="bg-[#24ce2a]/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="font-medium text-base mb-1">Peers & Community</h3>
            <TextContent size="small">Feedback & review</TextContent>
          </div>
        </SectionGrid>
        
        <div className="text-center border-t border-white/20 pt-4 mt-4">
          <TextContent size="base" className="mb-1">Terima Kasih Khusus</TextContent>
          <p className="text-lg font-medium mb-1">Dana Sulistiyo Kusumo, S.T., M.T., Ph.D</p>
          <TextContent size="small">Pembimbing Penelitian</TextContent>
        </div>
      </HighlightBox>

      {/* Contact & Next Steps - Compact */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Kontak" animationDelay={0} className="py-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-[#24ce2a]/20 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span>+6282241389340</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-[#24ce2a]/20 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>glorioussatria@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-[#24ce2a]/20 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <span>linkedin.com/in/gloriousatria</span>
            </div>
          </div>
        </ContentCard>
        
        <ContentCard title="Langkah Selanjutnya" animationDelay={0.2} className="py-3">
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Publikasi</span>
                <p className="text-xs text-gray-300">Journal & conference submission</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Open Source</span>
                <p className="text-xs text-gray-300">Algorithm implementation release</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="bg-[#25da9e]/20 p-1 rounded-full mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <span className="font-medium">Industry Partnership</span>
                <p className="text-xs text-gray-300">Real-world implementation</p>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Final CTA */}
      <HighlightBox variant="primary" className="text-center py-3">
        <TextContent size="base" className="text-[#24ce2a] font-medium">
          Ada Pertanyaan? → glorioussatria@gmail.com
        </TextContent>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ThankYouSlide;