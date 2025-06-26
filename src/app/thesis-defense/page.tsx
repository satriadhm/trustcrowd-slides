// src/app/thesis-defense/page.tsx (Enhanced with Auto-Print Support)
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home, Menu, X, MoreVertical } from "lucide-react";

// Import all slide components
import TitleSlide from "@/app/components/thesis-slides/TitleSlide";
import IntroductionSlide from "@/app/components/thesis-slides/IntroductionSlide";
import ResearchProblemsSlide from "@/app/components/thesis-slides/ResearchProblemsSlide";
import TheoreticalBackgroundSlide from "@/app/components/thesis-slides/TheoreticalBackgroundSlide";
import MXAlgorithmSlide from "@/app/components/thesis-slides/MXAlgorithmSlide";
import MethodologySlide from "@/app/components/thesis-slides/MethodologySlide";
import SystemArchitectureSlide from "@/app/components/thesis-slides/SystemArchitectureSlide";
import SimulationDesignSlide from "@/app/components/thesis-slides/SimulationDesignSlide";
import ResultsSlide from "@/app/components/thesis-slides/ResultsSlide";
import AnalysisSlide from "@/app/components/thesis-slides/AnalysisSlide";
import ConclusionSlide from "@/app/components/thesis-slides/ConclusionSlide";
import FutureWorkSlide from "@/app/components/thesis-slides/FutureWorkSlide";
import ThankYouSlide from "@/app/components/thesis-slides/ThankyouSlide";

interface SlideItem {
  component: React.ComponentType;
  title: string;
  id: string;
  shortTitle: string;
}

export default function ThesisDefensePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isExportMode, setIsExportMode] = useState<boolean>(false);
  const [autoprint, setAutoprint] = useState<boolean>(false);

  // Define all slides with their components and titles
  const slides: SlideItem[] = [
    { component: TitleSlide, title: "Title Slide", id: "title", shortTitle: "Title" },
    { component: IntroductionSlide, title: "Pendahuluan", id: "introduction", shortTitle: "Intro" },
    { component: ResearchProblemsSlide, title: "Rumusan Masalah", id: "problems", shortTitle: "Problems" },
    { component: TheoreticalBackgroundSlide, title: "Landasan Teori", id: "background", shortTitle: "Theory" },
    { component: MXAlgorithmSlide, title: "Algoritma M-X", id: "mx-algorithm", shortTitle: "M-X Algo" },
    { component: MethodologySlide, title: "Metodologi", id: "methodology", shortTitle: "Method" },
    { component: SystemArchitectureSlide, title: "Arsitektur Sistem", id: "architecture", shortTitle: "System" },
    { component: SimulationDesignSlide, title: "Desain Simulasi", id: "simulation", shortTitle: "Simulation" },
    { component: ResultsSlide, title: "Hasil Penelitian", id: "results", shortTitle: "Results" },
    { component: AnalysisSlide, title: "Analisis Hasil", id: "analysis", shortTitle: "Analysis" },
    { component: ConclusionSlide, title: "Kesimpulan", id: "conclusion", shortTitle: "Conclusion" },
    { component: FutureWorkSlide, title: "Penelitian Lanjutan", id: "future", shortTitle: "Future" },
    { component: ThankYouSlide, title: "Terima Kasih", id: "thankyou", shortTitle: "Thanks" }
  ];

  // Navigation functions
  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsNavigationOpen(false);
  };

  // Enhanced URL parameter handling for export modes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = urlParams.get('slide');
    const exportParam = urlParams.get('export');
    const autoprintParam = urlParams.get('autoprint');
    const mobileParam = urlParams.get('mobile');
    
    // Set slide if specified
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10);
      if (slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex);
      }
    }
    
    // Handle export mode
    if (exportParam === 'true') {
      setIsExportMode(true);
      document.body.classList.add('export-mode');
    }
    
    // Handle autoprint mode
    if (autoprintParam === 'true') {
      setAutoprint(true);
    }
    
    // Handle mobile mode
    if (mobileParam === 'true') {
      document.body.classList.add('mobile-mode');
    }
  }, [slides.length]);

  // Auto-print functionality
  useEffect(() => {
    if (autoprint && isExportMode) {
      // Wait for content to load, then trigger print
      const timer = setTimeout(() => {
        // Inject print-optimized styles
        const printStyles = document.createElement('style');
        printStyles.id = 'autoprint-styles';
        printStyles.textContent = `
          @media print {
            .fixed, .absolute, nav, header, footer,
            [class*="navigation"], [class*="sidebar"], 
            [class*="menu"], .no-print { 
              display: none !important; 
            }
            
            body { 
              margin: 0 !important; 
              padding: 0 !important; 
              background: white !important; 
              color: black !important;
            }
            
            @page { 
              size: A4 landscape; 
              margin: 0.5in; 
            }
          }
        `;
        document.head.appendChild(printStyles);
        
        // Trigger print dialog
        window.print();
        
        // Clean up after print
        setTimeout(() => {
          const styles = document.getElementById('autoprint-styles');
          if (styles) styles.remove();
        }, 1000);
        
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [autoprint, isExportMode]);

  // Scroll to top when slide changes
  useEffect(() => {
    if (!isExportMode) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlide, isExportMode]);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Disable keyboard navigation in export mode
      if (isExportMode) return;
      
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      } else if (event.key === "Home") {
        event.preventDefault();
        setCurrentSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setCurrentSlide(slides.length - 1);
      } else if (event.key === "Escape") {
        event.preventDefault();
        setIsNavigationOpen(false);
      } else if (event.ctrlKey && event.key === "p") {
        // Ctrl+P for quick print
        event.preventDefault();
        const printStyles = document.createElement('style');
        printStyles.textContent = `
          @media print {
            .fixed, .absolute { display: none !important; }
            @page { size: A4 landscape; margin: 0.5in; }
          }
        `;
        document.head.appendChild(printStyles);
        setTimeout(() => window.print(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, slides.length, isExportMode]);

  // Get current slide component
  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white relative">
      {/* Navigation Header - Hidden in export mode */}
      {!isExportMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#001333]/95 to-[#0a1e5e]/95 backdrop-blur-md border-b border-white/10 no-print">
          <div className="flex items-center justify-between px-3 lg:px-6 py-2">
            {/* Left: Home and Menu */}
            <div className="flex items-center gap-1">
              <Link 
                href="/" 
                className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-all duration-200 group"
                title="Back to Home"
              >
                <Home size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-sm font-medium">Home</span>
              </Link>
              
              <button
                onClick={() => setIsNavigationOpen(!isNavigationOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                title="Open slide navigation"
              >
                <Menu size={16} />
              </button>
            </div>

            {/* Center: Current Slide Info */}
            <div className="flex-1 text-center px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">
                  {currentSlide + 1} / {slides.length}
                </span>
                <div className="w-16 sm:w-32 h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#24ce2a] to-[#25da9e] transition-all duration-500 ease-out"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                  />
                </div>
                <span className="hidden lg:inline text-sm font-medium text-white max-w-40 xl:max-w-64 truncate">
                  {slides[currentSlide].title}
                </span>
              </div>
            </div>

            {/* Right: Navigation Controls + PDF Export */}
            <div className="flex items-center gap-1">
              
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
                title="Previous slide (←)"
              >
                <ChevronLeft size={16} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed group"
                title="Next slide (→ or Space)"
              >
                <ChevronRight size={16} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hidden lg:block p-2 rounded-lg hover:bg-white/10 transition-colors ml-1"
                title="Toggle navigation"
              >
                <MoreVertical size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Slide Navigation Sidebar - Hidden in export mode */}
      {!isExportMode && (
        <div className={`hidden lg:block fixed left-0 top-12 bottom-0 z-40 transition-all duration-300 no-print ${
          isMinimized ? 'w-12' : 'w-60 xl:w-64'
        } bg-gradient-to-b from-[#001333]/95 to-[#0a1e5e]/95 backdrop-blur-md border-r border-white/10`}>
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
            <div className="p-2">
              <div className="space-y-1">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left group relative transition-all duration-200 ${
                      currentSlide === index 
                        ? "bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20 border-l-2 border-[#24ce2a]" 
                        : "hover:bg-white/5"
                    } ${isMinimized ? 'p-2 rounded-lg' : 'p-2 xl:p-3 rounded-lg'}`}
                    title={isMinimized ? slide.title : undefined}
                  >
                    <div className="flex items-center gap-2 xl:gap-3">
                      <div className={`flex-shrink-0 flex items-center justify-center rounded-md font-medium transition-all duration-200 ${
                        currentSlide === index 
                          ? "bg-[#24ce2a] text-white w-5 h-5 text-xs" 
                          : "bg-white/10 text-gray-300 w-5 h-5 text-xs group-hover:bg-white/20"
                      }`}>
                        {index + 1}
                      </div>
                      
                      {!isMinimized && (
                        <div className="flex-1 min-w-0">
                          <div className={`font-medium transition-colors text-xs xl:text-sm leading-tight ${
                            currentSlide === index ? "text-white" : "text-gray-300 group-hover:text-white"
                          }`}>
                            {slide.title}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Tooltip for minimized state */}
                    {isMinimized && (
                      <div className="absolute left-full ml-2 bg-[#001333] text-white p-2 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50 border border-white/10">
                        <div className="text-sm font-medium">{slide.title}</div>
                        <div className="text-xs text-gray-300">Slide {index + 1}</div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Slide Navigation Overlay - Hidden in export mode */}
      {isNavigationOpen && !isExportMode && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm no-print">
          <div className="fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-gradient-to-b from-[#001333] to-[#0a1e5e] border-r border-white/10">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold">Navigation</h3>
              <button
                onClick={() => setIsNavigationOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 pb-20">
              <div className="p-3 space-y-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      currentSlide === index 
                        ? "bg-gradient-to-r from-[#24ce2a]/20 to-[#25da9e]/20 border border-[#24ce2a]/30" 
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg font-bold text-sm transition-all duration-200 ${
                        currentSlide === index 
                          ? "bg-[#24ce2a] text-white" 
                          : "bg-white/10 text-gray-300"
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium transition-colors text-sm ${
                          currentSlide === index ? "text-white" : "text-gray-300"
                        }`}>
                          {slide.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          Slide {index + 1} of {slides.length}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Slide Content */}
      <div className={`transition-all duration-300 ${
        isExportMode 
          ? 'pt-0 pb-0 ml-0' 
          : `pt-14 pb-20 lg:pb-4 ${isMinimized ? 'lg:ml-12' : 'lg:ml-60 xl:ml-64'}`
      }`}>
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="w-full max-w-7xl mx-auto slide-content">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Hidden in export mode */}
      {!isExportMode && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#001333]/95 to-[#0a1e5e]/95 backdrop-blur-md border-t border-white/10 z-40 no-print">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              <span className="text-sm font-medium">Previous</span>
            </button>
            
            <div className="text-center px-2">
              <div className="text-sm font-medium truncate max-w-32">{slides[currentSlide].shortTitle}</div>
              <div className="text-xs text-gray-400">{currentSlide + 1} / {slides.length}</div>
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Export Mode Notification */}
      {isExportMode && !autoprint && (
        <div className="fixed top-4 right-4 bg-[#24ce2a] text-white px-4 py-2 rounded-lg shadow-lg z-50 no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Export Mode</span>
            <button 
              onClick={() => window.print()}
              className="bg-white/20 px-2 py-1 rounded text-xs hover:bg-white/30 transition-colors"
            >
              Print
            </button>
          </div>
        </div>
      )}

      {/* Auto-print notification */}
      {autoprint && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 no-print">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span className="text-sm font-medium">Preparing for print...</span>
          </div>
        </div>
      )}

      {/* Enhanced Export Mode Styles */}
      <style jsx global>{`
        /* Export Mode Optimizations */
        .export-mode .fixed,
        .export-mode .absolute,
        .export-mode .no-print {
          display: none !important;
        }
        
        .export-mode body {
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          color: black !important;
        }
        
        .export-mode .pt-14,
        .export-mode .pb-20,
        .export-mode .lg\\:pb-4,
        .export-mode .lg\\:ml-60,
        .export-mode .xl\\:ml-64,
        .export-mode .lg\\:ml-12 {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-left: 0 !important;
        }

        /* Mobile Mode Optimizations */
        .mobile-mode {
          font-size: 14px;
        }
        
        .mobile-mode .slide-content {
          padding: 0.5rem;
        }

        /* Print Optimizations */
        @media print {
          .fixed, .absolute, .no-print,
          nav, header, footer,
          [class*="navigation"], [class*="sidebar"], 
          [class*="menu"] { 
            display: none !important; 
          }
          
          body { 
            margin: 0 !important; 
            padding: 0 !important; 
            background: white !important; 
            color: black !important;
            font-size: 12pt;
            line-height: 1.4;
          }
          
          .slide-content {
            page-break-inside: avoid;
            margin: 0;
            padding: 0.5in;
            background: white !important;
          }
          
          @page { 
            size: A4 landscape; 
            margin: 0.5in; 
          }
          
          /* Ensure proper text colors for print */
          * {
            color: black !important;
            background: transparent !important;
          }
          
          /* Keep essential styling for readability */
          h1, h2, h3, h4, h5, h6 {
            color: #333 !important;
            font-weight: bold !important;
          }
          
          /* Preserve layout structures */
          .grid, [class*="grid"], 
          .flex, [class*="flex"] {
            display: block !important;
          }
          
          /* Make sure important content is visible */
          .bg-white\\/10, .bg-white\\/5,
          [class*="bg-white"] {
            background: #f8f9fa !important;
            border: 1px solid #dee2e6 !important;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .transition-colors,
          .transition-transform {
            transition: none !important;
          }
          
          .animate-spin {
            animation: none !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .bg-white\\/10 {
            background: rgba(255, 255, 255, 0.3) !important;
          }
          
          .border-white\\/10 {
            border-color: rgba(255, 255, 255, 0.5) !important;
          }
        }
      `}</style>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isExportMode ? 
          `Export mode active. Slide ${currentSlide + 1} of ${slides.length}: ${slides[currentSlide].title}` :
          `Current slide: ${currentSlide + 1} of ${slides.length}. ${slides[currentSlide].title}. Use arrow keys or space to navigate slides. Home/End to go to first/last slide. Escape to close navigation.`
        }
      </div>
    </div>
  );
}