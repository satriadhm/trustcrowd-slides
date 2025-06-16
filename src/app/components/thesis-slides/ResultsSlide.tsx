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
      {/* Top Row - Enhanced Metrics & Matrix */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Metrik Performa" animationDelay={0} className="py-4">
          <div className="grid grid-cols-1 gap-4">
            {metricsData.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white">{metric.name}</span>
                  <span className="text-lg font-bold text-[#24ce2a]">
                    {(metric.value * 100).toFixed(0)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full ${metric.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value * 100}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ContentCard>

        <ContentCard title="Confusion Matrix" animationDelay={0.2} className="py-4">
          <div className="space-y-4">
            {/* Matrix Visual */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-500/20 p-4 rounded-lg text-center border border-green-500/30">
                <div className="text-2xl font-bold text-green-400 mb-1">{confusionData.tp}</div>
                <div className="text-xs text-gray-300">True Positive</div>
                <div className="text-xs text-gray-400">Eligible → Eligible</div>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg text-center border border-red-500/30">
                <div className="text-2xl font-bold text-red-400 mb-1">{confusionData.fp}</div>
                <div className="text-xs text-gray-300">False Positive</div>
                <div className="text-xs text-gray-400">Non-eligible → Eligible</div>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg text-center border border-red-500/30">
                <div className="text-2xl font-bold text-red-400 mb-1">{confusionData.fn}</div>
                <div className="text-xs text-gray-300">False Negative</div>
                <div className="text-xs text-gray-400">Eligible → Non-eligible</div>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg text-center border border-green-500/30">
                <div className="text-2xl font-bold text-green-400 mb-1">{confusionData.tn}</div>
                <div className="text-xs text-gray-300">True Negative</div>
                <div className="text-xs text-gray-400">Non-eligible → Non-eligible</div>
              </div>
            </div>
            
            {/* Summary */}
            <div className="bg-[#24ce2a]/10 p-3 rounded-lg text-center border border-[#24ce2a]/20">
              <div className="text-base font-medium text-[#24ce2a]">
                Correct Classifications: {confusionData.tp + confusionData.tn}/24
              </div>
              <div className="text-sm text-gray-300 mt-1">
                Overall Accuracy: <span className="font-bold text-[#24ce2a]">79%</span>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Key Findings */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-4 text-center">Temuan Utama</h3>
        
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#24ce2a]">RQ1: Akurasi Klasifikasi</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• M-X mencapai <strong>79% akurasi</strong> klasifikasi</li>
              <li>• <strong>Presisi 82%</strong> - efektif minimalisir kesalahan positif</li>
              <li>• <strong>Recall 75%</strong> - beberapa tester berpengalaman terlewat</li>
              <li>• <strong>F1-Score 78%</strong> - performa seimbang</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#25da9e]">RQ2: Reduksi Variabilitas</h4>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• <strong>TNR 83%</strong> - filtering efektif</li>
              <li>• Berhasil identifikasi <strong>10 dari 12</strong> tester tidak layak</li>
              <li>• Presisi tinggi = kontrol kualitas ketat</li>
              <li>• Reduksi variabilitas karakteristik tester</li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Detailed Analysis */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Analisis Kesalahan" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <h5 className="font-medium text-sm mb-2 text-red-400">False Negative (3 kasus)</h5>
              <p className="text-xs text-gray-300">
                3 mahasiswa teknik informatika berpengalaman diklasifikasi tidak layak. 
                Algoritma cenderung <strong>konservatif</strong>.
              </p>
            </div>
            
            <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <h5 className="font-medium text-sm mb-2 text-yellow-400">False Positive (2 kasus)</h5>
              <p className="text-xs text-gray-300">
                2 partisipan tanpa pengalaman UAT diklasifikasi layak. 
                Konsistensi <strong>berbeda dari penilaian berbasis pengalaman</strong>.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Interpretasi" animationDelay={0.6} className="py-4">
          <div className="space-y-3">
            <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <h5 className="font-medium text-sm mb-2 text-green-400">✓ Kekuatan</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Presisi tinggi = filtering efektif</li>
                <li>• TNR kuat = deteksi tidak layak baik</li>
                <li>• Performa seimbang semua metrik</li>
                <li>• Tidak perlu ground truth</li>
              </ul>
            </div>
            
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
              <h5 className="font-medium text-sm mb-2 text-blue-400">⚠ Pertimbangan</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Tendensi konservatif</li>
                <li>• Konsistensi ≠ keahlian domain</li>
                <li>• Mungkin exclude perspektif berharga</li>
                <li>• Perlu penilaian pelengkap</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Overall Assessment */}
      <HighlightBox variant="primary" className="py-4 text-center">
        <h3 className="text-xl font-semibold mb-3">Kesimpulan</h3>
        <p className="text-base text-gray-200 leading-relaxed mb-4">
          M-X Algorithm menunjukkan <strong>performa solid</strong> sebagai mekanisme kontrol kualitas 
          dalam UAT crowdsourced dengan <strong>akurasi 79%</strong>. Presisi tinggi efektif 
          mempertahankan kualitas testing, namun recall moderat menunjukkan perlunya 
          <strong>pendekatan pelengkap</strong> untuk optimalisasi seleksi tester.
        </p>
        
        <div className="bg-[#24ce2a]/10 p-3 rounded-lg">
          <p className="text-sm text-[#24ce2a] font-medium">
            <strong>Rekomendasi:</strong> Algoritma valid untuk kontrol kualitas UAT dengan 
            perlunya kalibrasi dan pendekatan hibrid untuk performa optimal
          </p>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResultsSlide;