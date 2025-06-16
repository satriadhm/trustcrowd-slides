"use client";

import React from "react";
import { motion } from "framer-motion";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox } from "./SlideContentComponent";

const ResultsSlide = () => {
  const metricsData = [
    { name: "Accuracy", value: 0.79, color: "bg-[#24ce2a]" },
    { name: "Precision", value: 0.82, color: "bg-blue-500" },
    { name: "Recall", value: 0.75, color: "bg-purple-500" },
    { name: "TNR", value: 0.83, color: "bg-green-500" },
    { name: "F1 Score", value: 0.78, color: "bg-orange-500" },
  ];

  const confusionData = {
    tp: 9, tn: 10, fp: 2, fn: 3
  };

  return (
    <SlideLayout 
      title="Hasil Penelitian"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Top Row - Metrics & Matrix */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Metrik Performa" animationDelay={0} className="py-4">
          <div className="grid grid-cols-3 gap-3">
            {metricsData.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#24ce2a] mb-1">
                  {(metric.value * 100).toFixed(0)}%
                </div>
                <div className="text-xs text-gray-300">{metric.name}</div>
                <div className="w-full h-2 bg-white/10 rounded-full mt-1">
                  <motion.div 
                    className={metric.color}
                    style={{ width: `${metric.value * 100}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ContentCard>

        <ContentCard title="Confusion Matrix" animationDelay={0.2} className="py-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-green-500/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-green-400">TP: {confusionData.tp}</div>
              <div className="text-xs text-gray-300">True Positive</div>
            </div>
            <div className="bg-red-500/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-red-400">FP: {confusionData.fp}</div>
              <div className="text-xs text-gray-300">False Positive</div>
            </div>
            <div className="bg-red-500/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-red-400">FN: {confusionData.fn}</div>
              <div className="text-xs text-gray-300">False Negative</div>
            </div>
            <div className="bg-green-500/20 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-green-400">TN: {confusionData.tn}</div>
              <div className="text-xs text-gray-300">True Negative</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-300">
            <strong>Correct:</strong> {confusionData.tp + confusionData.tn}/24 (79%)
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Key Findings */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-4 text-center">Temuan Utama</h3>
        
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-[#24ce2a]">RQ1: Akurasi Klasifikasi</h4>
            <p className="text-sm text-gray-200">
              M-X mencapai <strong>79% akurasi</strong> dengan presisi <strong>82%</strong> 
              dan recall <strong>75%</strong> dalam klasifikasi tester.
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-2 text-[#25da9e]">RQ2: Reduksi Variabilitas</h4>
            <p className="text-sm text-gray-200">
              TNR <strong>83%</strong> menunjukkan efektivitas filtering 
              tester tidak konsisten.
            </p>
          </div>
        </SectionGrid>
        
        <div className="bg-[#24ce2a]/10 p-4 rounded-lg mt-4 text-center">
          <p className="text-base text-gray-200">
            <strong>19/24 tester</strong> diklasifikasi benar → M-X efektif sebagai QC mechanism
          </p>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResultsSlide;