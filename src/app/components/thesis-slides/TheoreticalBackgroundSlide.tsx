// src/app/components/thesis-slides/TheoreticalBackgroundSlide.tsx (Enhanced with Detailed Research Gap Analysis)
"use client";

import React from "react";
import SlideLayout from "./SlideLayout";
import { SectionGrid, ContentCard, HighlightBox, TextContent } from "./SlideContentComponent";

const TheoreticalBackgroundSlide = () => {
  return (
    <SlideLayout 
      title="Landasan Teori"
      className="bg-gradient-to-br from-[#0a1e5e] via-[#001333] to-[#21074f]"
      contentClassName="space-y-6"
    >
      {/* UAT in Crowdsourcing Context */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">User Acceptance Testing berbasis Crowdsourcing</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#24ce2a]">UAT: Validasi Akhir Software</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• Tahap kritis sebelum deployment produk</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Evaluasi dari perspektif end-user sesungguhnya</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Tidak ada ground truth</strong> yang telah ditentukan</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• Penilaian bersifat <strong>subjektif dan kontekstual</strong></TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">UAT berbasis Crowdsourcing: Potensi & Tantangan</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Cost-effective</strong> dengan cakupan testing luas</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Diverse perspectives</strong> dari beragam tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Challenge:</strong> Heterogenitas kualitas tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Problem:</strong> Variabilitas hasil tanpa kontrol kualitas</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Enhanced Quality Control Methods Analysis */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Analisis Metode Quality Control Existing</h3>
        
        <SectionGrid columns={3} gap="gap-4">
          {/* MOCOM Method */}
          <ContentCard title="MOCOM (Multi-Objective Crowd Worker Recommendation)" animationDelay={0} className="py-4">
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-base font-medium mb-3 text-blue-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Wang et al. (2019):</strong> Multi-Objective Crowd Worker Recommendation</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Berdasarkan <strong>riwayat deteksi bug</strong> sebelumnya</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Optimasi multiple criteria: accuracy, speed, cost</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Menggunakan <strong>historical performance data</strong></TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Cold Start Problem:</strong> Butuh data historis ekstensif</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak cocok untuk <strong>tester baru</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Kurang applicable untuk skenario <strong>subjektif</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus pada <strong>objective bug detection</strong>, bukan user experience</TextContent></li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* WSM Method */}
          <ContentCard title="WSM (Worker Search Model)" animationDelay={0.2} className="py-4">
            <div className="space-y-4">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-base font-medium mb-3 text-purple-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Hong et al. (2021):</strong> Wide learning approach</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Mengandalkan <strong>atribut personal & demografis</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Sistem rekomendasi worker berdasarkan profil</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Machine learning untuk <strong>worker matching</strong></TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Privacy Concerns:</strong> Butuh data personal sensitif</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• <strong>Potential Bias:</strong> Diskriminasi demografis</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak fokus pada <strong>response consistency</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Asumsi bahwa demografi = kemampuan testing</TextContent></li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* Learning Curves Method */}
          <ContentCard title="Learning Curves Analysis" animationDelay={0.4} className="py-4">
            <div className="space-y-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-base font-medium mb-3 text-green-400">Konsep Dasar</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• <strong>Yao et al. (2021):</strong> Tester learning progression</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Analisis <strong>kurva pembelajaran</strong> dari waktu ke waktu</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus pada <strong>skill development</strong> jangka panjang</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Longitudinal study approach</TextContent></li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-base font-medium mb-3 text-red-400">Limitasi untuk UAT</h4>
                <ul className="space-y-2">
                  <li><TextContent size="small" className="text-gray-300">• Tidak mengatasi <strong>initial quality assessment</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Tidak ada <strong>immediate filtering</strong></TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Focus <strong>jangka panjang</strong>, bukan real-time selection</TextContent></li>
                  <li><TextContent size="small" className="text-gray-300">• Memerlukan time investment yang besar</TextContent></li>
                </ul>
              </div>
            </div>
          </ContentCard>
        </SectionGrid>
      </HighlightBox>

      {/* Comprehensive Comparison Study */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Comparison Study: Quality Control Methods</h3>
        
        <div className="space-y-6">
          {/* Comparison Table */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-center text-[#f39c12]">Perbandingan Komprehensif Metode Quality Control</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 font-medium">Aspek</th>
                    <th className="text-center py-3 px-4 font-medium text-blue-400">MOCOM</th>
                    <th className="text-center py-3 px-4 font-medium text-purple-400">WSM</th>
                    <th className="text-center py-3 px-4 font-medium text-green-400">Learning Curves</th>
                    <th className="text-center py-3 px-4 font-medium text-orange-400">Rule-Based</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Ground Truth Required</td>
                    <td className="text-center py-3 px-4">✓ (Historical bugs)</td>
                    <td className="text-center py-3 px-4">✗</td>
                    <td className="text-center py-3 px-4">✓ (Performance data)</td>
                    <td className="text-center py-3 px-4">Partial (Thresholds)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Privacy Preservation</td>
                    <td className="text-center py-3 px-4">Partial</td>
                    <td className="text-center py-3 px-4">✗ (Demographic data)</td>
                    <td className="text-center py-3 px-4">Partial</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Immediate Deployment</td>
                    <td className="text-center py-3 px-4">✗ (Need history)</td>
                    <td className="text-center py-3 px-4">Partial</td>
                    <td className="text-center py-3 px-4">✗ (Long-term)</td>
                    <td className="text-center py-3 px-4">✓</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Subjective Task Support</td>
                    <td className="text-center py-3 px-4">Limited</td>
                    <td className="text-center py-3 px-4">Limited</td>
                    <td className="text-center py-3 px-4">Partial</td>
                    <td className="text-center py-3 px-4">Medium</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Scalability</td>
                    <td className="text-center py-3 px-4">Medium</td>
                    <td className="text-center py-3 px-4">High</td>
                    <td className="text-center py-3 px-4">Low</td>
                    <td className="text-center py-3 px-4">High</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-medium">Implementation Complexity</td>
                    <td className="text-center py-3 px-4">High</td>
                    <td className="text-center py-3 px-4">Medium</td>
                    <td className="text-center py-3 px-4">High</td>
                    <td className="text-center py-3 px-4">Low</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Bias Risk</td>
                    <td className="text-center py-3 px-4">Medium</td>
                    <td className="text-center py-3 px-4">High (Demographic)</td>
                    <td className="text-center py-3 px-4">Low</td>
                    <td className="text-center py-3 px-4">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Research Gap Analysis */}
          <SectionGrid columns={2} gap="gap-6">
            <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
              <h4 className="text-base font-medium mb-4 text-red-400">Identified Research Gaps</h4>
              <div className="space-y-3">
                <TextContent size="small" className="text-gray-300">
                  <strong>Gap 1:</strong> Existing methods memerlukan <strong>predefined answers</strong> atau <strong>historical data</strong>, 
                  tidak sesuai dengan nature UAT yang subjektif.
                </TextContent>
                <TextContent size="small" className="text-gray-300">
                  <strong>Gap 2:</strong> Kurangnya mechanisms untuk <strong>immediate quality assessment</strong> 
                  tanpa privacy compromise dalam crowdsourced environments.
                </TextContent>
                <TextContent size="small" className="text-gray-300">
                  <strong>Gap 3:</strong> Belum ada validasi empiris untuk <strong>consensus-based approach</strong> 
                  dalam realistic UAT scenarios.
                </TextContent>
              </div>
            </div>
            
            <div className="bg-[#24ce2a]/10 p-6 rounded-lg border border-[#24ce2a]/20">
              <h4 className="text-base font-medium mb-4 text-[#24ce2a]">Solution Direction</h4>
              <div className="space-y-3">
                <TextContent size="small" className="text-gray-300">
                  <strong>Approach:</strong> Consensus-based quality assessment menggunakan 
                  <strong> inter-tester agreement patterns</strong> tanpa ground truth.
                </TextContent>
                <TextContent size="small" className="text-gray-300">
                  <strong>Innovation:</strong> Privacy-preserving analysis melalui <strong>response pattern recognition</strong> 
                  bukan data personal atau demografis.
                </TextContent>
                <TextContent size="small" className="text-gray-300">
                  <strong>Contribution:</strong> Empirical validation dari <strong>consensus-based quality assessment</strong> 
                  dalam konteks <strong>UAT berbasis crowdsourcing</strong> tanpa historical data requirements.
                </TextContent>
              </div>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Rule-Based Validation for Threshold Setting */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Rule-Based Validation untuk Threshold Setting</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#f39c12]">Konsep Rule-Based Validation</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Domain-Specific Rules:</strong> UAT-specific quality indicators</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Statistical Boundaries:</strong> Menggunakan distribusi data untuk boundary setting</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Expert Knowledge Integration:</strong> Incorporasi expert knowledge dalam rule formation</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Adaptive Thresholds:</strong> Dynamic adjustment berdasarkan dataset characteristics</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">Application dalam UAT Context</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Response Time Rules:</strong> Threshold untuk waktu respon optimal</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Consistency Rules:</strong> Batasan untuk inter-response variability</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Agreement Rules:</strong> Minimum consensus level untuk quality assessment</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Outlier Detection:</strong> Rules untuk identifikasi anomalous responses</TextContent></li>
            </ul>
          </div>
        </SectionGrid>

        <div className="mt-6 bg-white/5 p-6 rounded-lg">
          <h4 className="text-base sm:text-lg font-medium mb-4 text-center text-[#e74c3c]">Threshold Setting Framework</h4>
          <SectionGrid columns={3} gap="gap-4">
            <div className="text-center">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h5 className="font-medium mb-2 text-blue-400">Statistical Rules</h5>
                <TextContent size="small" className="text-gray-300">
                  • Mean ± Standard Deviation<br/>
                  • Percentile-based boundaries<br/>
                  • Interquartile Range (IQR)
                </TextContent>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <h5 className="font-medium mb-2 text-purple-400">Behavioral Rules</h5>
                <TextContent size="small" className="text-gray-300">
                  • Response pattern consistency<br/>
                  • Time-based thresholds<br/>
                  • Sequential response analysis
                </TextContent>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h5 className="font-medium mb-2 text-green-400">Consensus Rules</h5>
                <TextContent size="small" className="text-gray-300">
                  • Majority agreement threshold<br/>
                  • Weighted consensus scoring<br/>
                  • Multi-level validation
                </TextContent>
              </div>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>

      {/* Research Gap & Contribution - Enhanced
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Research Gap & Kontribusi Penelitian</h3>
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
            <h4 className="text-base font-medium mb-4 text-red-400">Identified Research Gap</h4>
            <div className="space-y-3">
              <TextContent size="small" className="text-gray-300">
                <strong>Gap 1:</strong> Belum ada validasi empiris M-X algorithm dalam <strong>realistic UAT scenarios</strong> 
                {" "}yang melibatkan subjective evaluation dan heterogeneous tester backgrounds.
              </TextContent>
              <TextContent size="small" className="text-gray-300">
                <strong>Gap 2:</strong> Existing methods memerlukan <strong>predefined answers</strong> atau <strong>historical data</strong>, 
                tidak sesuai dengan nature UAT yang subjektif.
              </TextContent>
              <TextContent size="small" className="text-gray-300">
                <strong>Gap 3:</strong> Kurangnya mechanisms untuk <strong>immediate quality assessment</strong> 
                tanpa privacy compromise dalam crowdsourced environments.
              </TextContent>
            </div>
          </div>
          
          <div className="bg-[#24ce2a]/10 p-6 rounded-lg border border-[#24ce2a]/20">
            <h4 className="text-base font-medium mb-4 text-[#24ce2a]">Kontribusi Penelitian</h4>
            <div className="space-y-3">
              <TextContent size="small" className="text-gray-300">
                <strong>Contribution 1:</strong> Implementasi dan validasi empiris algoritma M-X 
                dalam konteks <strong>UAT berbasis crowdsourcing</strong> dengan participant real.
              </TextContent>
              <TextContent size="small" className="text-gray-300">
                <strong>Contribution 2:</strong> Evaluasi comprehensive menggunakan <strong>Confusion Matrix metrics</strong> 
                untuk assess classification accuracy dalam subjective scenarios.
              </TextContent>
              <TextContent size="small" className="text-gray-300">
                <strong>Contribution 3:</strong> Analisis dampak <strong>tester variability</strong> dan prior experience 
                terhadap algorithm performance dalam real-world settings.
              </TextContent>
            </div>
          </div>
        </SectionGrid>
      </HighlightBox> */}

      {/* Research Variables */}
      <HighlightBox variant="secondary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Variabel-Variabel Penelitian</h3>
        
        <SectionGrid columns={3} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-blue-400">Independent Variables</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Tester Experience Level:</strong> Novice, Intermediate, Expert</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Algorithm Threshold Settings:</strong> Conservative, Moderate, Aggressive</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Response Pattern Type:</strong> Consistent, Variable, Random</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Task Complexity:</strong> Simple, Medium, Complex scenarios</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-green-400">Dependent Variables</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Classification Accuracy:</strong> True/False Positive & Negative rates</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Algorithm Performance:</strong> Precision, Recall, F1-Score</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Response Quality Score:</strong> Consensus-based rating</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>System Efficiency:</strong> Processing time & resource usage</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-purple-400">Control Variables</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Test Environment:</strong> Controlled lab setting</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Test Duration:</strong> Standardized time allocation</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Task Format:</strong> Gherkin BDD multiple-choice</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Sample Size:</strong> Minimum 30 participants per group</TextContent></li>
            </ul>
          </div>
        </SectionGrid>
      </HighlightBox>

      {/* Validation Framework */}
      <HighlightBox variant="primary" className="py-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Framework Validasi & Evaluasi Komprehensif</h3>
        
        <SectionGrid columns={2} gap="gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#25da9e]">Prior-Experience Validation</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Expert Assessment:</strong> Manual evaluation berdasarkan pengalaman UAT</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Ground Truth Creation:</strong> Baseline untuk evaluasi algoritma</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Inter-rater Reliability:</strong> Konsistensi antar expert evaluator</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Benchmark Comparison:</strong> Performance baseline untuk algoritma</TextContent></li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-medium mb-4 text-[#f39c12]">Gherkin BDD Format</h4>
            <ul className="space-y-3">
              <li><TextContent size="small" className="text-gray-300">• <strong>Given-When-Then</strong> structure untuk clarity</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>User-friendly</strong> untuk non-technical tester</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Standardized Format:</strong> Consistent across all test scenarios</TextContent></li>
              <li><TextContent size="small" className="text-gray-300">• <strong>Multiple-choice Adaptation:</strong> Objective response format</TextContent></li>
            </ul>
          </div>
        </SectionGrid>

        <div className="mt-6 bg-white/5 p-6 rounded-lg">
          <h4 className="text-base sm:text-lg font-medium mb-4 text-center text-[#e74c3c]">Metrics & Evaluation Framework</h4>
          <SectionGrid columns={3} gap="gap-4">
            <div className="text-center">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <h5 className="font-medium mb-2 text-blue-400">Confusion Matrix Metrics</h5>
                <div className="text-xs text-left space-y-1">
                  <div>• <strong>Accuracy:</strong> (TP+TN)/(TP+TN+FP+FN)</div>
                  <div>• <strong>Precision:</strong> TP/(TP+FP)</div>
                  <div>• <strong>Recall:</strong> TP/(TP+FN)</div>
                  <div>• <strong>F1-Score:</strong> 2×(Precision×Recall)/(Precision+Recall)</div>
                  <div>• <strong>Specificity:</strong> TN/(TN+FP)</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                <h5 className="font-medium mb-2 text-purple-400">Statistical Analysis</h5>
                <div className="text-xs text-left space-y-1">
                  <div>• <strong>Descriptive Statistics:</strong> Mean, SD, percentiles</div>
                  <div>• <strong>Inferential Tests:</strong> t-test, ANOVA</div>
                  <div>• <strong>Effect Size:</strong> Cohen&apos;s d, η²</div>
                  <div>• <strong>Confidence Intervals:</strong> 95% CI for estimates</div>
                  <div>• <strong>Power Analysis:</strong> Sample size validation</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                <h5 className="font-medium mb-2 text-green-400">Qualitative Measures</h5>
                <div className="text-xs text-left space-y-1">
                  <div>• <strong>Response Quality:</strong> Content analysis</div>
                  <div>• <strong>Pattern Recognition:</strong> Behavioral consistency</div>
                  <div>• <strong>Outlier Detection:</strong> Anomaly identification</div>
                  <div>• <strong>Consensus Level:</strong> Inter-tester agreement</div>
                  <div>• <strong>Error Analysis:</strong> Misclassification patterns</div>
                </div>
              </div>
            </div>
          </SectionGrid>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};

export default TheoreticalBackgroundSlide;