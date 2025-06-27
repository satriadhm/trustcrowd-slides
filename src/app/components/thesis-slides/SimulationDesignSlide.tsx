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
          <DialogContent className="max-w-2xl p-6 bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white rounded-xl shadow-xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4">Detail Proses Pengumpulan Data</DialogTitle>
              <DialogDescription className="text-gray-300 text-base text-center">
                Berikut adalah langkah-langkah detail dalam proses pengumpulan data untuk simulasi validasi M-X algorithm dalam UAT environment.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#24ce2a]">1</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>Recruitment & Screening</strong></h4>
                  <Caption>Rekrutmen 100 partisipan dengan screening berdasarkan experience level (Beginner/Intermediate/Expert)</Caption>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#25da9e]">2</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>Task Assignment</strong></h4>
                  <Caption>Pembagian 20 task UAT berbasis Gherkin BDD scenarios dengan domain berbeda (E-commerce, SaaS, Mobile Apps)</Caption>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#f39c12]">3</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>Response Collection</strong></h4>
                  <Caption>Pengumpulan response dalam format multiple-choice untuk 4 criteria: Functionality, Usability, UI Consistency, Error Handling</Caption>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#e74c3c]">4</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>M-X Algorithm Processing</strong></h4>
                  <Caption>Aplikasi M-X algorithm untuk menghitung accuracy scores dan klasifikasi eligible/non-eligible berdasarkan peer agreement</Caption>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-lg text-[#9b59b6]">5</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-white"><strong>Ground Truth Validation</strong></h4>
                  <Caption>Evaluasi hasil M-X dengan confusion matrix menggunakan ground truth dari expert assessment dan prior experience</Caption>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-[#24ce2a]">Metrics Dikumpulkan:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>• Accuracy, Precision, Recall</div>
                <div>• F1-Score & Specificity</div>
                <div>• Inter-rater Agreement</div>
                <div>• Response Time Pattern</div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </HighlightBox>
    </SlideLayout>
  );
};

export default SimulationDesignSlide;