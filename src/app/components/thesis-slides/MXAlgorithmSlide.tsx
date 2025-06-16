// src/app/components/thesis-slides/MXAlgorithmSlide.tsx (Enhanced with Detailed Mathematical Foundation)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { ContentCard, FormulaBox, SectionGrid, HighlightBox, Caption } from "./SlideContentComponent";

const MXAlgorithmSlide = () => {
  return (
    <SlideLayout 
      title="Algoritma M-X: Mathematical Foundation"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* Core Mathematical Principle */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-[#24ce2a]">Core Mathematical Principle</h3>
        
        <div className="bg-white/5 p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-4 text-center">Agreement Probability Formula</h4>
          
          <FormulaBox className="py-4 mb-4">
            <div className="text-lg sm:text-xl lg:text-2xl">
              Q<sub>ij</sub> = A<sub>i</sub> · A<sub>j</sub> + <span className="text-[#25da9e]">[(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)</span>
            </div>
          </FormulaBox>
          
          <SectionGrid columns={2} gap="gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-base mb-2 text-[#24ce2a]">Term 1: Both Correct</h5>
              <p className="text-sm text-gray-300">
                <strong>A<sub>i</sub> · A<sub>j</sub></strong>: Probability bahwa kedua worker memilih opsi yang benar
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <h5 className="font-medium text-base mb-2 text-[#25da9e]">Term 2: Both Incorrect (Same)</h5>
              <p className="text-sm text-gray-300">
                <strong>[(1-A<sub>i</sub>)(1-A<sub>j</sub>)]/(M-1)</strong>: Probability kedua worker memilih incorrect option yang sama
              </p>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Algorithm Components */}
      <SectionGrid columns={2} gap="gap-6">
        <ContentCard title="Algorithm Variables" animationDelay={0} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Key Variables</h4>
              <div className="space-y-2 text-sm">
                <div><strong>A<sub>i</sub></strong>: Accuracy rate worker w<sub>i</sub> (probability correct answer)</div>
                <div><strong>M</strong>: Total number of available options per question</div>
                <div><strong>K</strong>: Total number of workers {`{w_i | 1 ≤ i ≤ K}`}</div>
                <div><strong>N</strong>: Total number of problems {`{p_u | 1 ≤ u ≤ N}`}</div>
                <div><strong>X<sub>ij</sub><sup>u</sup></strong>: Agreement indicator (1 if agree, 0 otherwise)</div>
              </div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Agreement Tracking</h4>
              <FormulaBox className="py-3 mb-2">
                <div className="text-base">
                  T<sub>ij</sub> = Σ<sub>u=1</sub><sup>N</sup> X<sub>ij</sub><sup>u</sup>
                </div>
              </FormulaBox>
              <Caption>Total agreement count antara worker i dan j</Caption>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="3-Worker Solution" animationDelay={0.2} className="py-4">
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Solving for Worker Accuracy</h4>
              <Caption className="mb-3">
                Untuk 3 workers, kita dapat solve system persamaan:
              </Caption>
              <FormulaBox className="py-3">
                <div className="text-sm sm:text-base">
                  A<sub>1</sub> = 1/M + [(M-1)/M] · √[(M·Q<sub>12</sub>-1)(M·Q<sub>13</sub>-1)/(M·Q<sub>23</sub>-1)]
                </div>
              </FormulaBox>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <h4 className="font-medium text-base mb-3 text-[#25da9e]">Multiple Workers (&gt;3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• <strong>Sliding Window:</strong> Workers arranged in circular pattern</li>
                <li>• <strong>Group Evaluation:</strong> Groups of 3 workers processed</li>
                <li>• <strong>Final Score:</strong> Average dari multiple evaluations</li>
              </ul>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* M-X Extension for Multiple Choice */}
      <HighlightBox variant="secondary" className="py-4">
        <h3 className="text-xl font-semibold mb-4 text-center">M-X Extension for Multiple-Choice Problems</h3>
        
        <SectionGrid columns={3} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Step 1: Decomposition</h4>
            <p className="text-sm text-gray-300">
              Each M-option problem → M binary (yes/no) sub-problems
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-2 text-[#25da9e]">Step 2: Binary Analysis</h4>
            <p className="text-sm text-gray-300">
              Apply M-1 algorithm pada setiap option dimension
            </p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg text-center">
            <h4 className="font-medium text-base mb-2 text-[#f39c12]">Step 3: Aggregation</h4>
            <p className="text-sm text-gray-300">
              Combine accuracy scores untuk comprehensive worker quality
            </p>
          </div>
        </SectionGrid>
        
        <div className="mt-4 bg-white/5 p-4 rounded-lg text-center">
          <FormulaBox className="py-3">
            <div className="text-lg">
              A<sub>i</sub> = ∏<sub>j=1</sub><sup>M</sup> A<sub>ij</sub>
            </div>
          </FormulaBox>
          <Caption className="mt-2">Final worker accuracy = product of accuracies across all option dimensions</Caption>
        </div>
      </HighlightBox>

      {/* Algorithm Properties & UAT Relevance */}
      <SectionGrid columns={2} gap="gap-4">
        <ContentCard title="Algorithm Properties" animationDelay={0.4} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">No Ground Truth Requirement</h4>
              <p className="text-sm text-gray-300">
                Evaluates quality through <strong>peer consistency</strong> rather than comparison dengan known answers
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#25da9e]">Probabilistic Foundation</h4>
              <p className="text-sm text-gray-300">
                Mathematical model berdasarkan <strong>agreement probability theory</strong> dengan assumptions yang reasonable
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#f39c12]">Scalability</h4>
              <p className="text-sm text-gray-300">
                Efficient computation, dapat diimplementasi dengan <strong>MapReduce</strong> untuk big data applications
              </p>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="UAT Applicability" animationDelay={0.6} className="py-4">
          <div className="space-y-3">
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#24ce2a]">Subjective Evaluation Support</h4>
              <p className="text-sm text-gray-300">
                Perfect untuk UAT scenarios dimana <strong>correctness is contextual</strong> dan user-dependent
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#25da9e]">Variability Reduction</h4>
              <p className="text-sm text-gray-300">
                Identifies consistent testers, reducing <strong>noise dari unreliable participants</strong>
              </p>
            </div>
            
            <div className="bg-white/5 p-3 rounded-lg">
              <h4 className="font-medium text-base mb-2 text-[#f39c12]">Quality Control Mechanism</h4>
              <p className="text-sm text-gray-300">
                Automated filtering process untuk <strong>maintain testing quality</strong> in crowdsourced environments
              </p>
            </div>
          </div>
        </ContentCard>
      </SectionGrid>

      {/* Algorithm Assumptions & Constraints */}
      <HighlightBox variant="primary" className="py-4">
        <h3 className="text-xl font-semibold mb-4 text-center">Algorithm Assumptions & Implementation</h3>
        
        <SectionGrid columns={2} gap="gap-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#24ce2a]">Key Assumptions</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• <strong>Uniform Distribution:</strong> When incorrect, workers choose randomly</li>
              <li>• <strong>Independence:</strong> Worker decisions are independent</li>
              <li>• <strong>Consistency:</strong> Worker quality remains stable across tasks</li>
              <li>• <strong>Minimum 3 Workers:</strong> Required untuk solving equation system</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <h4 className="font-medium text-base mb-3 text-[#25da9e]">Implementation Constraints</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• <strong>Multiple-Choice Format:</strong> Tasks must be decomposable ke binary</li>
              <li>• <strong>Independent Options:</strong> No mutual exclusivity required</li>
              <li>• <strong>Response Patterns:</strong> Algorithm analyzes consistency, not correctness</li>
              <li>• <strong>Threshold Setting:</strong> Domain-specific calibration needed</li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Comparison with Other Methods */}
      <ContentCard title="Comparison with Alternative Approaches" animationDelay={0.8} className="py-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2 px-3">Method</th>
                <th className="text-center py-2 px-3">Ground Truth Required</th>
                <th className="text-center py-2 px-3">Privacy Concerns</th>
                <th className="text-center py-2 px-3">Historical Data</th>
                <th className="text-center py-2 px-3">UAT Suitability</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10">
                <td className="py-2 px-3 font-medium text-[#24ce2a]">M-X Algorithm</td>
                <td className="text-center py-2 px-3">✗</td>
                <td className="text-center py-2 px-3">Low</td>
                <td className="text-center py-2 px-3">✗</td>
                <td className="text-center py-2 px-3 text-green-400">High</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 px-3">MOCOM</td>
                <td className="text-center py-2 px-3">✓</td>
                <td className="text-center py-2 px-3">Medium</td>
                <td className="text-center py-2 px-3">✓</td>
                <td className="text-center py-2 px-3 text-red-400">Low</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2 px-3">WSM (Wide Learning)</td>
                <td className="text-center py-2 px-3">✗</td>
                <td className="text-center py-2 px-3">High</td>
                <td className="text-center py-2 px-3">✓</td>
                <td className="text-center py-2 px-3 text-yellow-400">Medium</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Learning Curves</td>
                <td className="text-center py-2 px-3">✓</td>
                <td className="text-center py-2 px-3">Low</td>
                <td className="text-center py-2 px-3">✓</td>
                <td className="text-center py-2 px-3 text-yellow-400">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ContentCard>
    </SlideLayout>
  );
};

export default MXAlgorithmSlide;