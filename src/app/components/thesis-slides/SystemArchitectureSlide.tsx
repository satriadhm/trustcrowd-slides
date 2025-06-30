// src/app/components/thesis-slides/SystemArchitectureSlide.tsx (Updated with Connection Lines)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { HighlightBox, Caption } from "./SlideContentComponent";

const SystemArchitectureSlide = () => {
  return (
    <SlideLayout 
      title="Arsitektur Sistem Platform Simulasi"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      {/* Component Diagram */}
      <HighlightBox variant="primary" className="mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center">Component Diagram</h3>
        
        {/* Architecture Overview */}
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
          <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed text-center mb-4">
            Client-Server dengan GraphQL dan MongoDB
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed text-[#24ce2a]">Client</div>
              <Caption>Next.js, React</Caption>
            </div>
            <div className="flex-grow mx-3">
              <div className="border-t border-dashed border-[#25da9e] relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-[#24ce2a]/20 text-xs text-[#24ce2a] px-1 rounded">
                  GraphQL
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed text-[#24ce2a]">Server</div>
              <Caption>Nest.js, MongoDB</Caption>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 p-6 rounded-lg relative">
          {/* Client Layer */}
          <div className="mb-8">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a] text-center">Client Layer</h4>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-700/30 p-4 rounded-lg border border-blue-500/30 max-w-xs relative">
                <div className="text-center">
                  <div className="bg-blue-500/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h5 className="font-medium text-sm text-blue-300">React Client</h5>
                  <p className="text-xs text-gray-300 mt-1">Next.js Interface</p>
                </div>
                
                {/* Connection Line Down */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#25da9e] to-transparent"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GraphQL Gateway */}
          <div className="mb-8 relative">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-purple-900/30 to-purple-700/30 p-3 rounded-lg border border-purple-500/30 relative">
                <h5 className="font-medium text-sm text-purple-300 text-center">GraphQL Gateway</h5>
                <p className="text-xs text-gray-300 text-center">API Gateway & Schema</p>
                
                {/* Connection Line Down */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#25da9e] to-transparent"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Server Components */}
          <div className="mb-8 relative">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e] text-center">Server Components (Nest.js)</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {/* Horizontal connection line between components */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#25da9e]/40 to-transparent transform -translate-y-1/2"></div>
              
              <div className="bg-gradient-to-r from-green-900/30 to-green-700/30 p-3 rounded-lg border border-green-500/30 relative z-10">
                <div className="text-center">
                  <div className="bg-green-500/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h5 className="font-medium text-xs text-green-300">Worker Management</h5>
                  <p className="text-xs text-gray-300 mt-1">Registration & Profiling</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/30 to-yellow-700/30 p-3 rounded-lg border border-yellow-500/30 relative z-10">
                <div className="text-center">
                  <div className="bg-yellow-500/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h5 className="font-medium text-xs text-yellow-300">Auth Service</h5>
                  <p className="text-xs text-gray-300 mt-1">Authentication</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-blue-700/30 p-3 rounded-lg border border-blue-500/30 relative z-10">
                <div className="text-center">
                  <div className="bg-blue-500/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                  <h5 className="font-medium text-xs text-blue-300">Task Management</h5>
                  <p className="text-xs text-gray-300 mt-1">Assignment & Validation</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#24ce2a]/30 to-[#25da9e]/30 p-3 rounded-lg border-2 border-[#24ce2a]/50 relative z-10">
                <div className="text-center">
                  <div className="bg-[#24ce2a]/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h5 className="font-medium text-xs text-[#24ce2a]">Quality Control</h5>
                  <p className="text-xs text-gray-300 mt-1">M-X Algorithm</p>
                </div>
              </div>
            </div>
            
            {/* Connection Line to Database */}
            <div className="flex justify-center mt-8">
              <div className="w-0.5 h-8 bg-gradient-to-b from-[#25da9e] to-transparent"></div>
            </div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Database Layer */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 p-4 rounded-lg border border-gray-500/30">
              <div className="text-center">
                <div className="bg-gray-500/20 p-2 rounded-full w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <h5 className="font-medium text-sm text-gray-300">MongoDB</h5>
                <p className="text-xs text-gray-400">Data Storage</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* System Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
              <h4 className="text-sm font-medium">Worker Management</h4>
            </div>
            <Caption>Registrasi volunteer dan tracking kualifikasi</Caption>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#25da9e]/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#25da9e]">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h4 className="text-sm font-medium">Task Management</h4>
            </div>
            <Caption>Kontrol assignment, submission, dan validasi</Caption>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border-2 border-[#24ce2a]/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-[#24ce2a]/20 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#24ce2a]">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 className="text-sm font-medium">Quality Control</h4>
            </div>
            <Caption>Implementasi algoritma M-X untuk assessment worker</Caption>
            <div className="mt-2 bg-[#24ce2a]/10 p-2 rounded">
              <p className="text-xs text-[#24ce2a]">Core implementation algoritma M-X</p>
            </div>
          </div>
        </div>
      </HighlightBox>

      <HighlightBox variant="primary">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center">Data Flow Process</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="bg-white/5 p-6 rounded-lg flex-1">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#24ce2a] text-center">Input</h4>
            <div className="text-center">
              <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-300">
                • Task identification<br/>
                • Worker identification<br/>
                • Answer selection
              </div>
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
              <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-300">
                • Dekomposisi M-X<br/>
                • Konsistensi antar-worker<br/>
                • Accuracy scores
              </div>
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
              <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-300">
                • Worker accuracy scores<br/>
                • Klasifikasi kelayakan<br/>
                • Performance analytics
              </div>
            </div>
          </div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default SystemArchitectureSlide;