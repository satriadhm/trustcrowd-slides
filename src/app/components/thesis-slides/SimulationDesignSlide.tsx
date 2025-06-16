"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/app/components/ui/dialog";
import { SectionGrid, ContentCard, ListItem, HighlightBox, Caption } from "./SlideContentComponent";

const SimulationDesignSlide = () => {
  return (
    <SlideLayout 
      title="Desain Simulasi"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8">
        <ContentCard title="Desain Tugas Gherkin" animationDelay={0}>
          <div className="mb-6 bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4">Format Requirements</h4>
            <ul className="space-y-3">
              <ListItem>
                <span className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed">Format multiple-choice dengan M opsi tetap</span>
              </ListItem>
              <ListItem>
                <span className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed">Kapabilitas <em>dekomposisi biner</em> untuk algoritma <strong>M-X</strong></span>
              </ListItem>
              <ListItem>
                <span className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed">Opsi <em>independen</em> dan <em>non-eksklusif</em></span>
              </ListItem>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-center">Contoh Tugas Gherkin</h4>
            <div className="bg-white/10 p-4 rounded">
              <p className="text-[#24ce2a] font-medium text-sm">Feature: User Account Management</p>
              <p className="mt-2 text-white text-sm">Scenario: Password reset functionality</p>
              <div className="mt-2 text-gray-300 space-y-1 text-sm">
                <p><span className="text-blue-300 font-medium">Given</span> user di halaman login</p>
                <p><span className="text-blue-300 font-medium">When</span> klik &quot;Forgot Password&quot;</p>
                <p><span className="text-blue-300 font-medium">Then</span> user melihat:</p>
              </div>
              <div className="mt-2 ml-4 space-y-1 text-gray-300 text-xs">
                <p>□ Email input field</p>
                <p>□ Submit button</p>
                <p>□ Return to login link</p>
                <p>□ Security question prompts</p>
              </div>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Penentuan Kelayakan" animationDelay={0.2}>
          <div className="bg-white/5 p-6 rounded-lg mb-6">
            <h4 className="text-base sm:text-lg font-medium mb-4"><strong>Rule-Based Validation</strong></h4>
            <div className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed mb-4">
              Pendekatan definisi <em>threshold</em> manual untuk kriteria kelayakan spesifik konteks
            </div>
            <div className="space-y-3">
              <ListItem>
                <span className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed">Perbandingan <em>accuracy scores</em> <strong>M-X</strong> terhadap <em>threshold</em></span>
              </ListItem>
              <ListItem>
                <span className="text-sm sm:text-base lg:text-base xl:text-lg text-gray-200 leading-relaxed">Kalkulasi kelayakan berdasarkan rata-rata <em>performa task</em></span>
              </ListItem>
            </div>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4"><strong>Protokol Simulasi</strong></h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <span className="text-sm sm:text-base lg:text-base xl:text-lg font-medium inline">Timeframe:</span> <strong>3 hari simulasi <em>hybrid</em></strong>
              </div>
              <div className="text-gray-300">
                <span className="text-sm sm:text-base lg:text-base xl:text-lg font-medium inline">Partisipan:</span> <strong>24 <em>volunteer</em></strong> (12 berpengalaman UAT, 12 tanpa pengalaman)
              </div>
              <div className="text-gray-300">
                <span className="text-sm sm:text-base lg:text-base xl:text-lg font-medium inline">Validasi:</span> <strong><em>Prior-experience based validation</em></strong> untuk <em>ground truth</em>
              </div>
              <div className="text-gray-300">
                <span className="text-sm sm:text-base lg:text-base xl:text-lg font-medium inline">Distribusi:</span> <strong>50:50 <em>eligible</em>/<em>non-eligible</em></strong>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">Proses Pengumpulan Data</h3>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-gradient-to-r from-[#24ce2a] to-[#25da9e] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Lihat Detail Proses
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4">Detail Proses Pengumpulan Data</DialogTitle>
              <DialogDescription className="text-gray-300 text-base text-center">
                Berikut adalah langkah-langkah detail dalam proses pengumpulan data untuk simulasi.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#25da9e]">4</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>Evaluation</strong></h4>
                  <Caption>Evaluasi dengan <em>confusion matrix</em>.</Caption>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </HighlightBox>
    </SlideLayout>
  );
};

export default SimulationDesignSlide;