// src/app/components/thesis-slides/SystemArchitectureSlide.tsx (Standardized Typography)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, TextContent, ListItem, HighlightBox, Caption } from "./SlideContentComponent";

const SystemArchitectureSlide = () => {
  return (
    <SlideLayout 
      title="Arsitektur Sistem"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8">
        <ContentCard title="Arsitektur Overview" animationDelay={0}>
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/10 p-3 rounded-lg text-[#24ce2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </div>
            <TextContent size="base" className="text-center mb-4">
              Client-Server dengan GraphQL dan MongoDB
            </TextContent>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <TextContent size="base" className="text-[#24ce2a]">Client</TextContent>
                <Caption>Next.js, React</Caption>
              </div>
              <div className="flex-grow mx-3">
                <div className="border-t border-dashed border-gray-500 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#24ce2a]/20 text-xs text-[#24ce2a] px-1 rounded">
                    GraphQL
                  </div>
                </div>
              </div>
              <div className="text-center">
                <TextContent size="base" className="text-[#24ce2a]">Server</TextContent>
                <Caption>Nest.js, MongoDB</Caption>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <ListItem>
              <div>
                <TextContent size="base" className="font-medium">Single GraphQL Gateway</TextContent>
                <Caption className="mt-1">
                  Centralized entry point untuk semua data requests
                </Caption>
              </div>
            </ListItem>
            
            <ListItem>
              <div>
                <TextContent size="base" className="font-medium">Implementasi M-X di Quality Control Service</TextContent>
                <Caption className="mt-1">
                  Processing server-side yang efisien
                </Caption>
              </div>
            </ListItem>
          </div>
        </ContentCard>

        <ContentCard title="Komponen Sistem" animationDelay={0.2}>
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#25da9e]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-medium">Worker Management Service</h4>
              </div>
              <Caption>
                Registrasi volunteer dan tracking kualifikasi
              </Caption>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#25da9e]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-medium">Task Management Service</h4>
              </div>
              <Caption>
                Kontrol assignment, submission, dan validasi
              </Caption>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg border-2 border-[#24ce2a]/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#24ce2a]/20 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h4 className="text-base sm:text-lg font-medium">Quality Control Service</h4>
              </div>
              <Caption>
                Implementasi algoritma M-X untuk assessment worker
              </Caption>
              <div className="mt-2 bg-[#24ce2a]/10 p-2 rounded">
                <p className="text-xs text-[#24ce2a]">Core implementation algoritma M-X</p>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center">Data Flow Process</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="bg-white/5 p-6 rounded-lg flex-1">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#24ce2a] text-center">Input</h4>
            <div className="text-center">
              <TextContent size="base" className="text-gray-300">
                • Task identification<br/>
                • Worker identification<br/>
                • Answer selection
              </TextContent>
            </div>
          </div>

          <div className="mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a] rotate-90 lg:rotate-0">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg flex-1">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#25da9e] text-center">Processing</h4>
            <div className="text-center">
              <TextContent size="base" className="text-gray-300">
                • Dekomposisi M-X<br/>
                • Konsistensi antar-worker<br/>
                • Accuracy scores
              </TextContent>
            </div>
          </div>

          <div className="mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e] rotate-90 lg:rotate-0">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg flex-1">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#24ce2a] text-center">Output</h4>
            <div className="text-center">
              <TextContent size="base" className="text-gray-300">
                • Worker accuracy scores<br/>
                • Klasifikasi kelayakan<br/>
                • Performance analytics
              </TextContent>
            </div>
          </div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default SystemArchitectureSlide;