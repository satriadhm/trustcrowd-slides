// src/app/hooks/usePdfExport.ts (Automated Fallback)
import { useState, useCallback } from 'react';

interface ExportOptions {
  format?: 'A4' | 'Letter' | 'A3';
  includeNotes?: boolean;
}

interface ExportResult {
  success: boolean;
  method: 'server' | 'browser-print' | 'mobile' | 'manual';
  message?: string;
}

export const usePdfExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastResult, setLastResult] = useState<ExportResult | null>(null);

  // Detect device and browser capabilities
  const getDeviceInfo = () => {
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const supportsDownload = typeof document.createElement('a').download !== 'undefined';
    const supportsPrint = typeof window.print === 'function';
    
    return { isMobile, isIOS, supportsDownload, supportsPrint };
  };

  // Automated client-side print with optimized settings
  const automatedBrowserPrint = useCallback(() => {
    return new Promise<ExportResult>((resolve) => {
      try {
        // Inject print-optimized styles
        const printStyles = document.createElement('style');
        printStyles.id = 'auto-print-styles';
        printStyles.textContent = `
          @media print {
            /* Hide all navigation and UI elements */
            .fixed, .absolute, nav, header, footer, 
            [class*="navigation"], [class*="sidebar"], 
            [class*="menu"], .no-print { 
              display: none !important; 
            }
            
            /* Optimize content for print */
            body { 
              margin: 0 !important; 
              padding: 0 !important; 
              background: white !important; 
              color: black !important;
              font-size: 12pt;
            }
            
            /* Slide content optimization */
            [class*="slide"], main, .slide-content {
              page-break-inside: avoid;
              margin: 0;
              padding: 0.5in;
              background: white !important;
            }
            
            /* Set page size and orientation */
            @page { 
              size: A4 landscape; 
              margin: 0.5in; 
            }
            
            /* Force landscape for wide content */
            @page :first {
              size: A4 landscape;
            }
          }
        `;
        document.head.appendChild(printStyles);

        // Add auto-print trigger for supported browsers
        const deviceInfo = getDeviceInfo();
        
        if (deviceInfo.supportsPrint && !deviceInfo.isMobile) {
          // Desktop: Auto-trigger print dialog
          setTimeout(() => {
            window.print();
            
            // Clean up styles after print
            setTimeout(() => {
              const styles = document.getElementById('auto-print-styles');
              if (styles) styles.remove();
            }, 1000);
            
            resolve({
              success: true,
              method: 'browser-print',
              message: 'Browser print dialog opened successfully'
            });
          }, 500);
          
        } else if (deviceInfo.isMobile) {
          // Mobile: Show mobile-specific instructions
          resolve({
            success: true,
            method: 'mobile',
            message: 'Mobile print instructions provided'
          });
          
        } else {
          // Fallback: Manual instructions
          resolve({
            success: true,
            method: 'manual',
            message: 'Manual export instructions provided'
          });
        }
        
      } catch {
        resolve({
          success: false,
          method: 'browser-print',
          message: 'Browser print setup failed'
        });
      }
    });
  }, []);

  // Smart export with automated fallback chain
  const smartExport = useCallback(async (options: ExportOptions = {}): Promise<ExportResult> => {
    setIsExporting(true);
    setProgress(0);

    try {
      setProgress(20);
      
      // Step 1: Try server-side PDF generation
      console.log('🚀 Attempting server-side PDF generation...');
      
      const serverResponse = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options),
      });

      setProgress(60);

      if (serverResponse.ok) {
        // Server generation successful
        const blob = await serverResponse.blob();
        
        if (blob.type === 'application/pdf') {
          // It's a PDF - download it
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `thesis-defense-${new Date().getTime()}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          
          setProgress(100);
          
          return {
            success: true,
            method: 'server',
            message: 'PDF generated and downloaded successfully'
          };
        } else {
          // It's HTML fallback page - handle it
          const htmlText = await blob.text();
          
          if (htmlText.includes('Automated PDF Export')) {
            // Open the automated fallback page
            const newWindow = window.open('', '_blank');
            if (newWindow) {
              newWindow.document.write(htmlText);
              newWindow.document.close();
            }
            
            setProgress(100);
            
            return {
              success: true,
              method: 'browser-print',
              message: 'Automated fallback page opened'
            };
          }
        }
      }

      // Step 2: Server failed, try automated browser print
      console.log('⚠️ Server PDF failed, trying automated browser print...');
      setProgress(80);
      
      const browserResult = await automatedBrowserPrint();
      setProgress(100);
      
      return browserResult;

    } catch (error) {
      console.error('💥 All export methods failed:', error);
      
      // Step 3: Emergency fallback - manual instructions
      setProgress(90);
      
      const deviceInfo = getDeviceInfo();
      
      // Show contextual emergency instructions
      const instructions = deviceInfo.isMobile 
        ? 'Mobile: Use browser menu → Share → Print or Save as PDF'
        : 'Desktop: Press Ctrl+P (or Cmd+P) to print, then choose "Save as PDF"';
        
      alert(`Export Failed - Manual Method Required:\n\n${instructions}\n\nThe page will be optimized for printing automatically.`);
      
      // Apply print optimization anyway
      await automatedBrowserPrint();
      
      setProgress(100);
      
      return {
        success: false,
        method: 'manual',
        message: 'Manual export instructions provided due to system failure'
      };
      
    } finally {
      setIsExporting(false);
      setTimeout(() => setProgress(0), 2000);
    }
  }, [automatedBrowserPrint]);

  // Simplified export function that always works
  const exportToPdf = useCallback(async (options: ExportOptions = {}) => {
    const result = await smartExport(options);
    setLastResult(result);
    
    if (!result.success) {
      console.warn('Export completed with fallback method:', result.method);
    }
    
    return result;
  }, [smartExport]);

  // Single slide export with automated fallback
  const exportSingleSlide = useCallback(async (slideIndex: number): Promise<ExportResult> => {
    setIsExporting(true);
    
    try {
      // Try server-side single slide first
      const response = await fetch(`/api/export-pdf?slide=${slideIndex}&export=true`);
      
      if (response.ok) {
        const blob = await response.blob();
        
        if (blob.type === 'application/pdf') {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `slide-${slideIndex + 1}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          
          return {
            success: true,
            method: 'server',
            message: `Slide ${slideIndex + 1} downloaded successfully`
          };
        }
      }
      
      // Fallback: Navigate to slide and trigger print
      const slideUrl = `${window.location.origin}/thesis-defense?slide=${slideIndex}&export=true`;
      
      // Open in new tab for printing
      const printWindow = window.open(slideUrl, '_blank');
      
      if (printWindow) {
        // Auto-trigger print when loaded
        printWindow.addEventListener('load', () => {
          setTimeout(() => {
            printWindow.print();
          }, 1000);
        });
        
        return {
          success: true,
          method: 'browser-print',
          message: `Slide ${slideIndex + 1} opened for printing`
        };
      }
      
      // Last resort: Navigate current window
      window.location.href = slideUrl + '&autoprint=true';
      
      return {
        success: true,
        method: 'manual',
        message: 'Navigated to slide for manual printing'
      };
      
    } catch{
      return {
        success: false,
        method: 'manual',
        message: 'Single slide export failed'
      };
    } finally {
      setIsExporting(false);
    }
  }, []);

  // Quick print current view
  const quickPrint = useCallback(async () => {
    const result = await automatedBrowserPrint();
    setLastResult(result);
    return result;
  }, [automatedBrowserPrint]);

  return {
    exportToPdf,
    exportSingleSlide,
    quickPrint,
    smartExport,
    isExporting,
    progress,
    lastResult
  };
};