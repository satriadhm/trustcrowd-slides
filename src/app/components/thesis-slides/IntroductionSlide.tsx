"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox, SectionTitle } from "./SlideContentComponent";

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

        <SectionGrid columns={2} className="mb-8">
          <ContentCard title="Latar Belakang" animationDelay={0}>
            <div className="space-y-3">
              <ListItem>
                <TextContent size="base">
                  <strong>User Acceptance Testing (UAT)</strong> adalah validasi akhir kritis dalam pengembangan software komersial.
                </TextContent>
              </ListItem>
              <ListItem>
                <TextContent size="base">
                  UAT tradisional membutuhkan <strong>sumber daya besar</strong> dengan cakupan testing terbatas.
                </TextContent>
              </ListItem>
            </div>
          </ContentCard>

          <ContentCard title="Crowdsourced UAT" animationDelay={0.2}>
            <div className="space-y-3">
              <ListItem>
                <TextContent size="base">
                  <strong>Solusi inovatif:</strong> Melibatkan pengguna terdistribusi untuk testing yang <strong>lebih luas dan hemat biaya</strong>.
                </TextContent>
              </ListItem>
              <ListItem>
                <TextContent size="base">
                  <strong>Tantangan:</strong> Heterogenitas partisipan dapat memengaruhi <strong>konsistensi hasil testing</strong>.
                </TextContent>
              </ListItem>
            </div>
          </ContentCard>
        </SectionGrid>

        <HighlightBox variant="primary" className="mt-8">
          <SectionTitle level={3} centered>Rumusan Masalah</SectionTitle>
          <TextContent size="large" className="text-center font-medium">
            Bagaimana <strong>mengidentifikasi tester berkualitas</strong> dalam UAT crowdsourced tanpa jawaban yang telah ditentukan sebelumnya?
          </TextContent>
        </HighlightBox>

        <motion.div
          className="mt-8 bg-white/10 p-6 rounded-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle level={3} color="secondary" centered>Research Gap</SectionTitle>
          <div className="space-y-3 text-base lg:text-lg text-gray-200">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <TextContent size="base">
                Studi sebelumnya fokus pada <strong>konteks objektif dengan hasil terverifikasi</strong>, tidak sesuai dengan sifat UAT yang subjektif.
              </TextContent>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
              <TextContent size="base">
                <strong>Belum ada validasi empiris komprehensif</strong> dalam skenario UAT realistis tanpa ground truth.
              </TextContent>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle level={3} color="primary" centered>Tujuan Penelitian</SectionTitle>
          <TextContent size="large" className="text-center font-medium">
            Mengevaluasi efektivitas <strong>pendekatan probabilistik berbasis kesepakatan antar-tester</strong> untuk kontrol kualitas dalam UAT crowdsourced.
          </TextContent>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionSlide;