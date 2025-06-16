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
        <h3 className="text-xl font-semibold mb-4 text-center">Temuan Utama Penelitian</h3>
        
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#24ce2a]">RQ1: Akurasi Klasifikasi Tester</h4>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>• M-X algorithm mencapai <strong>79% akurasi</strong> dalam mengklasifikasi tester eligibility</li>
              <li>• <strong>High precision (82%)</strong> menunjukkan efektivitas minimalisir false positives</li>
              <li>• <strong>Moderate recall (75%)</strong> dengan beberapa experienced tester tidak terdeteksi</li>
              <li>• <strong>Balanced F1-Score (78%)</strong> mengkonfirmasi performa yang konsisten</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#25da9e]">RQ2: Reduksi Variabilitas Tester</h4>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>• <strong>TNR 83%</strong> menunjukkan efektivitas filtering non-eligible testers</li>
              <li>• Algorithm berhasil mengidentifikasi <strong>10 dari 12 non-eligible testers</strong></li>
              <li>• Precision tinggi memastikan <strong>quality control yang ketat</strong></li>
              <li>• Effective reduction of tester characteristic variability</li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Detailed Analysis */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Analisis Misclassification" animationDelay={0.4} className="py-4">
          <div className="space-y-4">
            <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <h5 className="font-medium text-sm mb-2 text-red-400">False Negatives (3 cases)</h5>
              <p className="text-xs text-gray-300">
                3 experienced software engineering students diklasifikasi sebagai non-eligible. 
                Menunjukkan algorithm cenderung <strong>conservative</strong> dalam penilaian.
              </p>
            </div>
            
            <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <h5 className="font-medium text-sm mb-2 text-yellow-400">False Positives (2 cases)</h5>
              <p className="text-xs text-gray-300">
                2 participants tanpa formal UAT experience diklasifikasi sebagai eligible. 
                Suggests consistency patterns dapat <strong>berbeda dari experience-based assessment</strong>.
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Interpretasi Hasil" animationDelay={0.6} className="py-4">
          <div className="space-y-3">
            <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <h5 className="font-medium text-sm mb-2 text-green-400">✓ Algorithm Strengths</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• High precision = effective quality filtering</li>
                <li>• Strong TNR = excellent non-eligible detection</li>
                <li>• Balanced performance across metrics</li>
                <li>• No ground truth dependency achieved</li>
              </ul>
            </div>
            
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
              <h5 className="font-medium text-sm mb-2 text-blue-400">⚠ Considerations</h5>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>• Conservative tendency in classification</li>
                <li>• Consistency ≠ domain expertise</li>
                <li>• May exclude valuable diverse perspectives</li>
                <li>• Complement with domain-specific assessment</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Overall Assessment */}
      <HighlightBox variant="primary" className="py-4 text-center">
        <h3 className="text-xl font-semibold mb-3">Penilaian Keseluruhan</h3>
        <p className="text-base text-gray-200 leading-relaxed mb-4">
          M-X Algorithm menunjukkan <strong>performance yang solid</strong> sebagai quality control mechanism 
          dalam crowdsourced UAT dengan <strong>79% overall accuracy</strong>. High precision mengindikasikan 
          efektivitas dalam mempertahankan kualitas testing, namun moderate recall menunjukkan perlunya 
          <strong>complementary assessment approaches</strong> untuk mengoptimalkan tester selection.
        </p>
        
        <div className="bg-[#24ce2a]/10 p-3 rounded-lg">
          <p className="text-sm text-[#24ce2a] font-medium">
            <strong>Conclusion:</strong> Algorithm valid untuk UAT quality control dengan catatan 
            perlunya calibration dan hybrid approach untuk optimal performance
          </p>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default ResultsSlide;