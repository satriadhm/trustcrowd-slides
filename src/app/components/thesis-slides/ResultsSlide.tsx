// src/app/components/thesis-slides/ResultsSlide.tsx (Updated)
"use client";

import React from "react";
import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox } from "./SlideContentComponent";

// Helper to replace * and ** with <em> and <strong>
function formatMarkdown(text: string) {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  return text;
}

const ResultsSlide = () => {
  const metricsData = [
    { name: "Accuracy", value: 0.79 },
    { name: "Precision", value: 0.82 },
    { name: "Recall", value: 0.75 },
    { name: "TNR", value: 0.83 },
    { name: "F1 Score", value: 0.78 },
  ];

  const confusionMatrixData = {
    truePositive: 9,
    trueNegative: 10,
    falsePositive: 2,
    falseNegative: 3,
  };

  return (
    <SlideLayout 
      title="Hasil Penelitian"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
    >
      <SectionGrid columns={2} className="mb-8 sm:mb-10 lg:mb-12">
        <ContentCard title="Metrik Performa" animationDelay={0}>
          <div className="space-y-6">
            {metricsData.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xl"><strong>{metric.name}</strong></span>
                  <span className="font-bold text-2xl lg:text-3xl text-[#24ce2a]">
                    {(metric.value * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#24ce2a]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </ContentCard>

        <ContentCard title="Confusion Matrix" animationDelay={0.2}>
          <div className="grid grid-cols-2 gap-6 p-6 bg-white/5 rounded-lg mb-6">
            <motion.div 
              className="bg-green-500/20 p-6 rounded-lg text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="block text-lg mb-3"><strong>True Positive</strong></span>
              <span className="text-4xl lg:text-5xl font-bold text-green-400">
                {confusionMatrixData.truePositive}
              </span>
            </motion.div>
            
            <motion.div 
              className="bg-red-500/20 p-6 rounded-lg text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="block text-lg mb-3"><strong>False Positive</strong></span>
              <span className="text-4xl lg:text-5xl font-bold text-red-400">
                {confusionMatrixData.falsePositive}
              </span>
            </motion.div>
            
            <motion.div 
              className="bg-red-500/20 p-6 rounded-lg text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="block text-lg mb-3"><strong>False Negative</strong></span>
              <span className="text-4xl lg:text-5xl font-bold text-red-400">
                {confusionMatrixData.falseNegative}
              </span>
            </motion.div>
            
            <motion.div 
              className="bg-green-500/20 p-6 rounded-lg text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="block text-lg mb-3"><strong>True Negative</strong></span>
              <span className="text-4xl lg:text-5xl font-bold text-green-400">
                {confusionMatrixData.trueNegative}
              </span>
            </motion.div>
          </div>
          
          <div className="text-center text-lg text-gray-300">
            <p><strong>Total Sample:</strong> {confusionMatrixData.truePositive + confusionMatrixData.trueNegative + confusionMatrixData.falsePositive + confusionMatrixData.falseNegative}</p>
            <p><strong>Klasifikasi Benar:</strong> {confusionMatrixData.truePositive + confusionMatrixData.trueNegative}</p>
          </div>
        </ContentCard>
      </SectionGrid>

      <HighlightBox variant="primary">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-center">Temuan Utama</h3>
        
        <SectionGrid columns={2} className="mb-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="font-medium text-xl lg:text-2xl mb-3 text-[#24ce2a]">
              <strong>RQ1: Akurasi Klasifikasi</strong>
            </h4>
            <p
              className="text-lg text-gray-200"
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(
                  "Algoritma M-X mencapai akurasi *79%* dengan presisi *82%* dan *recall* *75%* dalam mengklasifikasi *tester*."
                ),
              }}
            />
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="font-medium text-xl lg:text-2xl mb-3 text-[#25da9e]">
              <strong>RQ2: Reduksi Variabilitas</strong>
            </h4>
            <p
              className="text-lg text-gray-200"
              dangerouslySetInnerHTML={{
                __html: formatMarkdown(
                  "TNR *83%* menunjukkan efektivitas algoritma dalam *filtering tester* tidak konsisten dan mengurangi variabilitas."
                ),
              }}
            />
          </div>
        </SectionGrid>
        
        <div className="bg-[#24ce2a]/10 p-6 rounded-lg">
          <p
            className="text-center text-xl lg:text-2xl text-gray-200"
            dangerouslySetInnerHTML={{
              __html: formatMarkdown(
                "Algoritma berhasil mengklasifikasi **19 dari 24 *tester*** dengan benar, menunjukkan efektivitas sebagai mekanisme kontrol kualitas UAT *crowdsourcing*."
              ),
            }}
          />
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResultsSlide;