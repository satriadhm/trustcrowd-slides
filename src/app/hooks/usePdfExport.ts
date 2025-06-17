// src/app/hooks/usePdfExport.ts
import { useState } from 'react';

interface ExportOptions {
  format?: 'A4' | 'Letter' | 'A3';
  orientation?: 'portrait' | 'landscape';
  includeNotes?: boolean;
  slideRange?: { start: number; end: number };
}

export const usePdfExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const exportToPdf = async (options: ExportOptions = {}) => {
    setIsExporting(true);
    setProgress(0);
    
    try {
      // Get slide information
      const slides = [
        'title', 'introduction', 'problems', 'background', 'mx-algorithm',
        'methodology', 'architecture', 'simulation', 'results', 'analysis',
        'conclusion', 'future', 'thankyou'
      ];
      
      const { slideRange, ...exportOptions } = options;
      const slidesToExport = slideRange 
        ? slides.slice(slideRange.start, slideRange.end + 1)
        : slides;
      
      // Export method 1: Single request for all slides
      const response = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slides: slidesToExport,
          ...exportOptions
        }),
      });
      
      if (!response.ok) {
        throw new Error('Export failed');
      }
      
      // Download the PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `thesis-defense-${new Date().getTime()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setProgress(100);
      
    } catch (error) {
      console.error('Export error:', error);
      throw error;
    } finally {
      setIsExporting(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const exportSingleSlide = async (slideIndex: number) => {
    setIsExporting(true);
    
    try {
      const response = await fetch(`/api/export-pdf?slide=${slideIndex}&export=true`);
      
      if (!response.ok) {
        throw new Error('Export failed');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `slide-${slideIndex + 1}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Single slide export error:', error);
      throw error;
    } finally {
      setIsExporting(false);
    }
  };

  return {
    exportToPdf,
    exportSingleSlide,
    isExporting,
    progress
  };
};

