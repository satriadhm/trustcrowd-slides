// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Updated with Mathematical Foundation)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox, TextContent, Caption, FormulaBox } from "./SlideContentComponent";

const TheoreticalBackgroundSlide = () => {
  return (
    <SlideLayout 
      title="Landasan Teori"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* UAT & Crowdsourcing - Compact */}
      <ContentCard title="UAT & Crowdsourcing Integration" animationDelay={0} className="py-4">
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#24ce2a]">UAT Characteristics</h4>
            <ul className="space-y-2">
              <li><TextContent size="small" className="text-gray-300">• Final validation phase sebelum deployment</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Tidak ada <em>ground truth</em> yang predefined</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Evaluasi subjektif dan kontekstual</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• User-centric validation objectives</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-3 text-[#25da9e]">Crowdsourced Advantages</h4>
            <ul className="space-y-2">
              <li><TextContent size="small" className="text-gray-300">• Cost-effective dan scalable testing</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Diverse perspectives dari end-users</TextContent></li>
              <li><TextContent size="small" className="text-gray-300"><strong>Challenge:</strong> Participant heterogeneity</TextContent></li>
              <li><TextContent size="small" className="text-gray-300"><strong>Challenge:</strong> Quality variability control</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </ContentCard>

      {/* M-X Mathematical Foundation */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">M-X Algorithm Mathematical Foundation</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a]">Core Principle</h4>
            <div className="bg-white/5 p-4 rounded-lg mb-4">
              <TextContent size="small" className="text-gray-300 mb-2">
                Untuk dua worker w<sub>i</sub> dan w<sub>j</sub>, probability of agreement:
              </TextContent>
              <FormulaBox className="py-3">
                <div className="text-base sm:text-lg">
                  Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + [(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)
                </div>
              </FormulaBox>
              <Caption className="mt-2">
                Dua cara workers dapat setuju: both correct atau both incorrect
              </Caption>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#24ce2a]">Key Components:</h5>
              <ul className="space-y-1 text-xs">
                <li>• A<sub>i</sub>: Accuracy rate worker w<sub>i</sub></li>
                <li>• M: Total number of available options</li>
                <li>• Agreement tracked via X<sub>ij</sub><sup>u</sup></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">Solution for 3 Workers</h4>
            <div className="bg-white/5 p-4 rounded-lg mb-4">
              <TextContent size="small" className="text-gray-300 mb-2">
                Worker w<sub>1</sub> accuracy derived as:
              </TextContent>
              <FormulaBox className="py-3">
                <div className="text-sm sm:text-base">
                  A<sub>1</sub> = 1/M + [(M-1)/M] · √[(M·Q<sub>12</sub>-1)(M·Q<sub>13</sub>-1)/(M·Q<sub>23</sub>-1)]
                </div>
              </FormulaBox>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-sm mb-2 text-[#25da9e]">Multiple-Choice Extension:</h5>
              <ul className="space-y-1 text-xs">
                <li>• Dekomposisi ke M binary problems</li>
                <li>• Sliding window untuk &gt;3 workers</li>
                <li>• Average multiple evaluations</li>
              </ul>
            </div>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Algorithm Comparison & Validation */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Algorithm Selection Rationale" animationDelay={0.2} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#24ce2a]">M-X Advantages</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• No ground truth dependency</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Privacy preservation (response patterns)</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Immediate deployment capability</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Computational efficiency</TextContent></li>
              </ul>
            </div>

            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-red-400">Limitations of Existing Methods</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• MOCOM: Extensive historical data required</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• WSM: Privacy concerns, potential bias</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Learning curves: Long-term focus only</TextContent></li>
              </ul>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Validation Framework" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Prior-Experience Based Validation</h4>
              <ul className="space-y-1">
                <li><TextContent size="small" className="text-gray-300">• Historical performance assessment</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Domain expertise evaluation</TextContent></li>
                <li><TextContent size="small" className="text-gray-300">• Ground truth for M-X comparison</TextContent></li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="text-base sm:text-lg font-medium mb-2 text-[#25da9e]">Confusion Matrix Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Accuracy</div>
                <div>• Precision</div>
                <div>• Recall</div>
                <div>• F1-Score</div>
                <div>• TNR</div>
                <div>• FP Rate</div>
              </div>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Bottom Highlight - Compact */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Kontribusi Penelitian</h3>
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium mb-1 text-[#24ce2a]">Teoretis</h4>
            <Caption>Validasi empiris M-X dalam realistic UAT scenarios</Caption>
          </div>
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium mb-1 text-[#25da9e]">Praktis</h4>
            <Caption>Framework QC untuk crowdsourced testing platforms</Caption>
          </div>
          <div className="bg-white/5 p-3 rounded-lg text-center">
            <h4 className="text-base sm:text-lg font-medium mb-1 text-[#f39c12]">Metodologis</h4>
            <Caption>Mapping RQ ke metrics evaluation systematically</Caption>
          </div>
        </SectionGrid>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;