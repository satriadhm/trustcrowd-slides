// src/app/components/thesis-slides/IntroductionSlide.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox, SectionTitle } from "./SlideContentComponent"; // Pastikan semua komponen diimpor

const IntroductionSlide = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Pendahuluan
        </motion.h2>

        <SectionGrid columns={2} className="mb-8"> {/* Menggunakan SectionGrid */}
          <ContentCard title="Latar Belakang" animationDelay={0}>
            <div className="space-y-4">
              <ListItem>
                <TextContent size="base">Kualitas <em>software</em> sangat penting dalam pengembangan komersial.</TextContent> {/* *software* -> <em>software</em> */}
              </ListItem>
              <ListItem>
                <TextContent size="base">UAT adalah tahap kritis <strong>validasi akhir</strong> dan <strong>jembatan penting</strong> antara tim pengembangan dan <em>end-user</em>.</TextContent> {/* **validasi akhir** -> <strong>validasi akhir</strong>, **jembatan penting** -> <strong>jembatan penting</strong>, *end-user* -> <em>end-user</em> */}
              </ListItem>
              <ListItem>
                <TextContent size="base">UAT membutuhkan sumber daya, waktu, dan anggaran yang signifikan.</TextContent>
              </ListItem>
            </div>
          </ContentCard>

          <ContentCard title="Crowdsourced UAT" animationDelay={0.2}>
            <div className="space-y-4">
              <ListItem>
                <TextContent size="base" className="font-medium"><strong>Solusi potensial:</strong></TextContent> {/* **Solusi potensial:** -> <strong>Solusi potensial:</strong> */}
                <TextContent size="base" className="mt-1">Melibatkan beragam pengguna untuk <em>testing</em> yang <strong>lebih luas, realistis, dan hemat biaya</strong>.</TextContent> {/* *testing* -> <em>testing</em>, **lebih luas, realistis, dan hemat biaya** -> <strong>lebih luas, realistis, dan hemat biaya</strong> */}
              </ListItem>
              <ListItem>
                <TextContent size="base" className="font-medium"><strong>Tantangan utama:</strong></TextContent> {/* **Tantangan utama:** -> <strong>Tantangan utama:</strong> */}
                <TextContent size="base" className="mt-1"><strong>Heterogenitas partisipan</strong> dan <strong>variabilitas karakteristik <em>tester</em></strong> memengaruhi konsistensi hasil.</TextContent> {/* **Heterogenitas partisipan** -> <strong>Heterogenitas partisipan</strong>, **variabilitas karakteristik *tester*** -> <strong>variabilitas karakteristik <em>tester</em></strong>, *tester* -> <em>tester</em> */}
              </ListItem>
            </div>
          </ContentCard>
        </SectionGrid>

        <HighlightBox variant="primary" className="mt-8">
          <SectionTitle level={3} centered>Algoritma M-X sebagai Solusi</SectionTitle>
          <TextContent size="base" className="mb-4">
            Algoritma M-X menawarkan pendekatan untuk menilai kualitas <em>tester</em> berdasarkan <strong>konsistensi respons</strong>
            <span className="text-[#25da9e] font-medium"> tanpa memerlukan jawaban benar yang telah ditentukan</span>,
            mengatasi keterbatasan metode konvensional.
          </TextContent>
          <TextContent size="large" className="text-center"> 
            Penelitian ini mengevaluasi efektivitas algoritma M-X dalam mengklasifikasi <strong>kelayakan <em>tester</em></strong> dalam konteks UAT berbasis <em>crowdsourcing</em>.
          </TextContent>
        </HighlightBox>

        {/* --- Bagian Bridging: Research Gap --- */}
        <motion.div 
          className="mt-8 sm:mt-12 bg-white/10 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle level={3} color="secondary" centered>Research Gap</SectionTitle> 
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl text-gray-200 list-disc pl-6">
            <li>Meskipun M-X telah divalidasi secara teoritis, <strong>evaluasi empirisnya di skenario UAT <em>crowdsourced</em> yang realistis</strong> masih belum dieksplorasi secara mendalam.</li> {/* **evaluasi empirisnya di skenario UAT *crowdsourced* yang realistis** -> <strong>evaluasi empirisnya di skenario UAT <em>crowdsourced</em> yang realistis</strong>, *crowdsourced* -> <em>crowdsourced</em> */}
            <li>Studi sebelumnya sering berfokus pada tugas <em>crowdsourcing</em> yang umum atau mengandalkan <em>ground truth</em> yang disimulasikan, <strong>menyimpang dari subjektivitas dan kurangnya jawaban yang telah ditentukan</strong> yang menjadi ciri khas UAT.</li> {/* *crowdsourcing* -> <em>crowdsourcing</em>, *ground truth* -> <em>ground truth</em>, **menyimpang dari subjektivitas dan kurangnya jawaban yang telah ditentukan** -> <strong>menyimpang dari subjektivitas dan kurangnya jawaban yang telah ditentukan</strong> */}
            <li>Oleh karena itu, ada kebutuhan akan <strong>validasi empiris</strong> yang kuat untuk menegaskan <strong>kapabilitas M-X</strong> dalam mengatasi variabilitas <em>tester</em> dalam konteks UAT.</li> {/* **validasi empiris** -> <strong>validasi empiris</strong>, **kapabilitas M-X** -> <strong>kapabilitas M-X</strong>, *tester* -> <em>tester</em> */}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionSlide;