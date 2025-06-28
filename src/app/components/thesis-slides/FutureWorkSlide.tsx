// src/app/components/thesis-slides/FutureWorkSlide.tsx (Updated)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox } from "./SlideContentComponent";

const FutureWorkSlide = () => {
  return (
    <SlideLayout 
      title="Penelitian Lanjutan"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8 sm:mb-10 lg:mb-12">
        <ContentCard title="Pengembangan Algoritma" animationDelay={0}>
          <div className="space-y-6">
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>Adaptive Thresholding</b></span>
                <TextContent size="base" className="mt-1">
                  Mekanisme <i>threshold</i> yang menyesuaikan dengan kompleksitas <i>task</i> dan konteks domain.
                </TextContent>
              </div>
            </ListItem>
            
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>Varian Algoritma</b></span>
                <TextContent size="base" className="mt-1">
                  Versi khusus M-X yang dioptimalkan untuk tipe <i>test</i> dan format pertanyaan berbeda.
                </TextContent>
              </div>
            </ListItem>
            
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>Machine Learning Integration</b></span>
                <TextContent size="base" className="mt-1">
                  Integrasi teknik ML untuk meningkatkan presisi dan adaptabilitas <i>over time</i>.
                </TextContent>
              </div>
            </ListItem>
          </div>
        </ContentCard>

        <ContentCard title="Implementasi & Skala" animationDelay={0.2}>
          <div className="space-y-6">
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>Large-Scale Production</b></span>
                <TextContent size="base" className="mt-1">
                  Validasi performa algoritma di <i>production environment</i> dengan <i>tester</i> beragam.
                </TextContent>
              </div>
            </ListItem>
          
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>Performance Optimization</b></span>
                <TextContent size="base" className="mt-1">
                  Efisiensi komputasi untuk <i>worker pools</i> besar dan skenario <i>testing</i> kompleks.
                </TextContent>
              </div>
            </ListItem>
            
            <ListItem>
              <div>
                <span className="font-medium text-xl lg:text-2xl"><b>API & Integration Framework</b></span>
                <TextContent size="base" className="mt-1">
                  Interface terstandarisasi untuk integrasi dengan platform <i>testing</i> dan CI/CD <i>pipelines</i>.
                </TextContent>
              </div>
            </ListItem>
          </div>
        </ContentCard>
      </SectionGrid>

      <SectionGrid columns={3} className="mb-8 sm:mb-10">
        <ContentCard title="Ekstensi Penelitian" animationDelay={0.4}>
          <TextContent size="base" className="mb-3">
            Ekspansi fondasi teoritis dan aplikasi penelitian
          </TextContent>
          <ul className="text-base text-gray-300 space-y-2 list-disc pl-5">
            <li>Studi komparatif dengan metode QC lain.</li>
            <li>Aplikabilitas <i>cross-domain</i> di luar <i>software testing</i>.</li>
            <li>Studi longitudinal akurasi algoritma dalam periode waktu yang lebih panjang.</li>
          </ul>
        </ContentCard>

        <ContentCard title="Implementasi Bisnis" animationDelay={0.6}>
          <TextContent size="base" className="mb-3">
            Transisi temuan penelitian ke aplikasi bisnis praktis
          </TextContent>
          <ul className="text-base text-gray-300 space-y-2 list-disc pl-5">
            <li>Model SaaS untuk platform <i>crowdsourcing-based UAT</i>.</li>
            <li><i>Partnership</i> industri untuk validasi <i>real-world</i>.</li>
            <li>Framework sertifikasi kualitas untuk produk <i>software</i>.</li>
          </ul>
        </ContentCard>

        <ContentCard title="Studi Demografis" animationDelay={0.8}>
          <TextContent size="base" className="mb-3">
            Pemahaman karakteristik <i>tester</i> dan strategi <i>recruitment</i>
          </TextContent>
          <ul className="text-base text-gray-300 space-y-2 list-disc pl-5">
            <li>Analisis faktor demografis yang mempengaruhi kualitas <i>test</i>.</li>
            <li>Strategi <i>recruitment tester</i> yang <i>targeted</i>.</li>
            <li>Investigasi faktor motivasi untuk partisipasi berkelanjutan.</li>
          </ul>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary" className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Visi Jangka Panjang</h3>
        
        <TextContent size="large" className="leading-relaxed">
          Mengembangkan ekosistem kontrol kualitas yang komprehensif dan adaptif yang merevolusi <i>UAt berbasis crowdsourcing</i> 
          dengan meminimalkan variabilitas sambil memaksimalkan nilai perspektif yang beragam.
        </TextContent>
      </HighlightBox>
    </SlideLayout>
  );
};

export default FutureWorkSlide;