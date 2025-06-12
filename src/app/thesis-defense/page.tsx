"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

// Import all slide components
import TitleSlide from "../components/thesis-slides/TitleSlide";
import IntroductionSlide from "../components/thesis-slides/IntroductionSlide";
import ResearchProblemsSlide from "../components/thesis-slides/ResearchProblemsSlide";
import TheoreticalBackgroundSlide from "../components/thesis-slides/TheoreticalBackgroundSlide";
import MXAlgorithmSlide from "../components/thesis-slides/MXAlgorithmSlide";
import MethodologySlide from "../components/thesis-slides/MethodologySlide";
import SystemArchitectureSlide from "../components/thesis-slides/SystemArchitectureSlide";
import SimulationDesignSlide from "../components/thesis-slides/SimulationDesignSlide";
import ResultsSlide from "../components/thesis-slides/ResultsSlide";
import AnalysisSlide from "../components/thesis-slides/AnalysisSlide";
import ConclusionSlide from "../components/thesis-slides/ConclusionSlide";
import FutureWorkSlide from "../components/thesis-slides/FutureWorkSlide";
import QuestionAnswerSlide from "../components/thesis-slides/QuestionAnswerSlide";
import ThankYouSlide from "../components/thesis-slides/ThankyouSlide";

export default function ThesisDefensePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define all slides with their components and titles
  const slides = [
    { component: TitleSlide, title: "Title", id: "title" },
    { component: IntroductionSlide, title: "Introduction", id: "introduction" },
    { component: ResearchProblemsSlide, title: "Research Problems", id: "problems" },
    { component: TheoreticalBackgroundSlide, title: "Theoretical Background", id: "background" },
    { component: MXAlgorithmSlide, title: "M-X Algorithm", id: "mx-algorithm" },
    { component: MethodologySlide, title: "Methodology", id: "methodology" },
    { component: SystemArchitectureSlide, title: "System Architecture", id: "architecture" },
    { component: SimulationDesignSlide, title: "Simulation Design", id: "simulation" },
    { component: ResultsSlide, title: "Results", id: "results" },
    { component: AnalysisSlide, title: "Analysis", id: "analysis" },
    { component: ConclusionSlide, title: "Conclusion", id: "conclusion" },
    { component: FutureWorkSlide, title: "Future Work", id: "future" },
    { component: QuestionAnswerSlide, title: "Q&A", id: "qa" },
    { component: ThankYouSlide, title: "Thank You", id: "thankyou" }
  ];

  // Navigation functions with useCallback to prevent unnecessary re-renders
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, slides.length]);

  // Get current slide component
  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white relative overflow-x-hidden">
      <style jsx global>{`
        .thesis-slide {
          width: 100%;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .thesis-slide-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .thesis-slide {
            min-height: calc(100vh - 160px);
            padding: 0.5rem;
          }
        }
        
        @media (max-height: 700px) {
          .thesis-slide {
            min-height: auto;
            padding: 1rem 0.5rem;
          }
        }
      `}</style>
      {/* Fixed Navigation Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#001333]/90 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Home Button */}
          <Link href="/" className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg transition-colors">
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Slide Title and Progress */}
          <div className="flex-1 text-center">
            <h1 className="text-lg font-semibold">{slides[currentSlide].title}</h1>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-sm text-gray-300">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#24ce2a] transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Previous slide (←)"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Next slide (→ or Space)"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 w-16 md:w-20 bg-[#001333]/90 backdrop-blur-sm border-r border-white/10 z-40 overflow-y-auto no-scrollbar">
        <div className="flex flex-col items-center py-4 space-y-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative group w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                currentSlide === index 
                  ? "bg-[#24ce2a] text-white" 
                  : "bg-white/10 hover:bg-white/20 text-gray-300"
              }`}
              title={slide.title}
            >
              <span className="text-xs font-bold">{index + 1}</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 bg-[#001333] text-white p-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none z-50">
                {slide.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="ml-16 md:ml-20 pt-16 pb-20 md:pb-8">
        <div className="thesis-slide">
          <div className="thesis-slide-content">
            <CurrentSlideComponent />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile-friendly) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#001333]/90 backdrop-blur-sm border-t border-white/10 z-40 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            <span className="text-sm">Previous</span>
          </button>
          
          <div className="text-sm text-gray-300">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-sm">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Info (Hidden, for accessibility) */}
      <div className="sr-only">
        Use arrow keys or space to navigate slides. Home/End to go to first/last slide.
      </div>
    </div>
  );
}