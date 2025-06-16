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
      {/* Metrics & Matrix */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Metrik Performa" animationDelay={0} className="py-4">
          <div className="space-y-3">
            {metricsData.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-white">{metric.name}</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 h-2 bg-white/20 rounded-full">
                    <motion.div 
                      className={`h-full rounded-full ${metric.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-lg font-bold text-[#24ce2a] w-12 text-right">
                    {(metric.value * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ContentCard>

        <ContentCard title="Confusion Matrix" animationDelay={0.2} className="py-4">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-green-500/20 p-3 rounded text-center">
              <div className="text-xl font-bold text-green-400">TP: {confusionData.tp}</div>
            </div>
            <div className="bg-red-500/20 p-3 rounded text-center">
              <div className="text-xl font-bold text-red-400">FP: {confusionData.fp}</div>
            </div>
            <div className="bg-red-500/20 p-3 rounded text-center">
              <div className="text-xl font-bold text-red-400">FN: {confusionData.fn}</div>
            </div>
            <div className="bg-green-500/20 p-3 rounded text-center">
              <div className="text-xl font-bold text-green-400">TN: {confusionData.tn}</div>
            </div>
          </div>
          <div className="text-center text-sm bg-[#24ce2a]/10 p-2 rounded">
            <strong>Benar:</strong> {confusionData.tp + confusionData.tn}/24 (79%)
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
        
        <div className="bg-[#24ce2a]/10 p-3 rounded-lg mt-4 text-center">
          <p className="text-base text-gray-200">
            <strong>19/24 tester</strong> diklasifikasi benar → M-X efektif sebagai mekanisme kontrol kualitas
          </p>
        </div>
      </HighlightBox>

      {/* Analysis */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Analisis Kesalahan" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-red-500/10 p-3 rounded border border-red-500/20">
              <h5 className="font-medium text-sm mb-1 text-red-400">FN = 3</h5>
              <p className="text-xs text-gray-300">3 mahasiswa berpengalaman diklasifikasi tidak layak</p>
            </div>
            
            <div className="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
              <h5 className="font-medium text-sm mb-1 text-yellow-400">FP = 2</h5>
              <p className="text-xs text-gray-300">2 tester tanpa pengalaman diklasifikasi layak</p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Interpretasi" animationDelay={0.6} className="py-4">
          <div className="space-y-3">
            <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
              <h5 className="font-medium text-sm mb-1 text-green-400">✓ Kekuatan</h5>
              <p className="text-xs text-gray-300">Presisi tinggi, TNR kuat, tidak perlu ground truth</p>
            </div>
            
            <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20">
              <h5 className="font-medium text-sm mb-1 text-blue-400">⚠ Keterbatasan</h5>
              <p className="text-xs text-gray-300">Tendensi konservatif, konsistensi ≠ keahlian</p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Conclusion */}
      <HighlightBox variant="primary" className="py-3 text-center">
        <h3 className="text-xl font-semibold mb-2">Kesimpulan</h3>
        <p className="text-base text-gray-200 mb-3">
          M-X efektif untuk kontrol kualitas UAT dengan <strong>akurasi 79%</strong>. 
          Perlu pendekatan hibrid untuk hasil optimal.
        </p>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResultsSlide;