"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionGrid, ContentCard, ListItem, TextContent, HighlightBox, SectionTitle } from "./SlideContentComponent";

const IntroductionSlide = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f] text-white px-4 py-8">
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
            <div className="space-y-4">
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
              <ListItem>
                <TextContent size="base">
                  <strong>Crowdsourced UAT</strong> menawarkan solusi cost-effective dengan perspektif beragam.
                </TextContent>
              </ListItem>
            </div>
          </ContentCard>

          <ContentCard title="Tantangan Crowdsourced UAT" animationDelay={0.2}>
            <div className="space-y-4">
              <ListItem>
                <TextContent size="base">
                  <strong>Heterogenitas partisipan</strong> dapat mempengaruhi konsistensi hasil testing.
                </TextContent>
              </ListItem>
              <ListItem>
                <TextContent size="base">
                  <strong>Variabilitas kualitas tester</strong> tanpa mekanisme kontrol yang efektif.
                </TextContent>
              </ListItem>
              <ListItem>
                <TextContent size="base">
                  <strong>Sifat subjektif dan kontekstual UAT</strong>  yang mempersulit penilaian reliabilitas tester.
                </TextContent>
              </ListItem>
            </div>
          </ContentCard>
        </SectionGrid>

        {/* M-X Algorithm as Solution */}
        <HighlightBox variant="primary" className="mt-8 mb-8">
          <SectionTitle level={3} centered>M-X Algorithm sebagai Solusi</SectionTitle>
          <div className="space-y-4">
            <TextContent size="base" className="text-center">
              <strong>M-X Algorithm</strong> menawarkan pendekatan probabilistik untuk mengevaluasi kualitas tester melalui <strong>inter-tester agreement</strong> tanpa memerlukan jawaban yang telah ditentukan sebelumnya.
            </TextContent>
            
            <SectionGrid columns={3} gap="gap-4">
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <h4 className="font-medium text-base mb-2 text-[#24ce2a]">No Ground Truth</h4>
                <TextContent size="small">Evaluasi berdasarkan konsistensi antar-tester</TextContent>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Probabilistic</h4>
                <TextContent size="small">Pendekatan matematis yang robust</TextContent>
              </div>
              <div className="bg-white/5 p-4 rounded-lg text-center">
                <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Scalable</h4>
                <TextContent size="small">Dapat diterapkan pada skala besar</TextContent>
              </div>
            </SectionGrid>
          </div>
        </HighlightBox>

        <HighlightBox variant="secondary" className="mt-8">
          <SectionTitle level={3} centered>Research Gap</SectionTitle>
          <div className="space-y-4">
            <TextContent size="base" className="text-center font-medium">
              Studi sebelumnya fokus pada <strong>konteks objektif dengan hasil terverifikasi</strong>, tidak sesuai dengan sifat UAT yang subjektif dan eksploratif.
            </TextContent>
            <SectionGrid columns={2} gap="gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium text-base mb-2 text-blue-400">Existing Methods</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• MOCOM: Butuh data historis ekstensif</li>
                  <li>• WSM: Masalah privasi & bias</li>
                  <li>• Learning Curves: Focus jangka panjang</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-medium text-base mb-2 text-purple-400">Our Contribution</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Validasi empiris M-X dalam UAT</li>
                  <li>• Evaluasi pada skenario subjektif</li>
                  <li>• Analisis dampak variabilitas tester</li>
                </ul>
              </div>
            </SectionGrid>
          </div>
        </HighlightBox>

        <motion.div
          className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-400/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle level={3} color="primary" centered>Tujuan Penelitian</SectionTitle>
          <TextContent size="large" className="text-center font-medium">
            Mengevaluasi efektivitas <strong>M-X Algorithm sebagai mekanisme kontrol kualitas</strong> untuk klasifikasi tester dalam UAT crowdsourced melalui pendekatan probabilistik berbasis konsistensi antar-tester.
          </TextContent>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionSlide;