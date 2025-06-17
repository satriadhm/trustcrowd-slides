// src/app/components/PdfExportButton.tsx (Smart Automated Version)
import React, { useState, useEffect } from 'react';
import { usePdfExport } from '../hooks/usePdfExport';
import { Download, FileText, Printer, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface PdfExportButtonProps {
  currentSlide?: number;
  totalSlides?: number;
}

const PdfExportButton: React.FC<PdfExportButtonProps> = ({ 
  currentSlide = 0, 
  totalSlides = 13 
}) => {
  const { 
    exportToPdf, 
    exportSingleSlide, 
    quickPrint,
    isExporting, 
    progress,
    lastResult
  } = usePdfExport();
  
  const [showOptions, setShowOptions] = useState(false);
  const [autoDetectedMethod, setAutoDetectedMethod] = useState<string>('detecting...');
  
  // Auto-detect best export method on component mount
  useEffect(() => {
    const detectBestMethod = () => {
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const supportsDownload = typeof document.createElement('a').download !== 'undefined';
      
      if (isMobile) {
        setAutoDetectedMethod(isIOS ? 'iOS Share Menu' : 'Mobile Print');
      } else if (supportsDownload) {
        setAutoDetectedMethod('Desktop PDF Generation');
      } else {
        setAutoDetectedMethod('Browser Print');
      }
    };
    
    detectBestMethod();
  }, []);

  // Smart export handler - automatically uses best method
  const handleSmartExport = async () => {
    setShowOptions(false);
    
    try {
      const result = await exportToPdf({
        format: 'A4',
        includeNotes: false
      });
      
      // Auto-show result feedback
      if (result.success) {
        showToast(`✅ Export successful via ${result.method}`, 'success');
      } else {
        showToast(`⚠️ ${result.message}`, 'warning');
      }
    } catch  {
      showToast('❌ Export failed - using manual fallback', 'error');
    }
  };

  // Quick actions for different scenarios
  const handleQuickPrint = async () => {
    setShowOptions(false);
    const result = await quickPrint();
    showToast(result.success ? '🖨️ Print dialog opened' : '⚠️ Using manual print method', 
              result.success ? 'success' : 'warning');
  };

  const handleSingleSlide = async () => {
    setShowOptions(false);
    const result = await exportSingleSlide(currentSlide);
    showToast(result.success ? `📑 Slide ${currentSlide + 1} exported` : '⚠️ Using manual method', 
              result.success ? 'success' : 'warning');
  };

  // Toast notification system
  const showToast = (message: string, type: 'success' | 'warning' | 'error') => {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 10000;
      padding: 1rem 1.5rem; border-radius: 0.5rem; color: white;
      font-family: system-ui, sans-serif; font-size: 0.875rem;
      max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444'};
      transform: translateX(100%); transition: transform 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 4000);
  };

  // Get status icon based on current state
  const getStatusIcon = () => {
    if (isExporting) {
      return <Loader size={16} className="animate-spin" />;
    }
    if (lastResult) {
      return lastResult.success ? 
        <CheckCircle size={16} className="text-green-400" /> : 
        <AlertCircle size={16} className="text-yellow-400" />;
    }
    return <Download size={16} />;
  };

  // Get button text based on state
  const getButtonText = () => {
    if (isExporting) return 'Exporting...';
    if (lastResult && !lastResult.success) return 'Try Again';
    return 'Export PDF';
  };

  return (
    <div className="relative">
      {/* Main Export Button */}
      <button
        onClick={handleSmartExport}
        disabled={isExporting}
        className="flex items-center gap-2 px-3 py-2 bg-[#24ce2a] text-white rounded-lg hover:bg-[#1ea821] transition-colors disabled:opacity-50 group"
        title={`Smart export using ${autoDetectedMethod}`}
      >
        {getStatusIcon()}
        <span className="hidden sm:inline">{getButtonText()}</span>
        
        {/* Smart indicator */}
        <div className="hidden lg:flex items-center gap-1 ml-1 px-2 py-1 bg-white/20 rounded text-xs">
          <span>Auto</span>
        </div>
      </button>

      {/* Quick Options (visible on hover/click) */}
      <div className="absolute top-full mt-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-[#001333] border border-white/20 rounded-lg p-2 min-w-48 shadow-xl">
          <div className="text-xs text-gray-400 mb-2 text-center">Quick Actions</div>
          
          <div className="space-y-1">
            <button
              onClick={handleQuickPrint}
              disabled={isExporting}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
            >
              <Printer size={14} />
              Quick Print
            </button>
            
            <button
              onClick={handleSingleSlide}
              disabled={isExporting}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50"
            >
              <FileText size={14} />
              Current Slide
            </button>
            
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10 rounded transition-colors"
            >
              <Download size={14} />
              More Options
            </button>
          </div>
        </div>
      </div>

      {/* Advanced Options Modal */}
      {showOptions && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#001333] border border-white/20 rounded-xl p-6 max-w-md w-full mx-4 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-center">Export Options</h3>
            
            {/* Auto-detected method info */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Auto-Detected Method</span>
              </div>
              <p className="text-xs text-blue-100">{autoDetectedMethod}</p>
            </div>

            {/* Export methods */}
            <div className="space-y-3">
              <button
                onClick={handleSmartExport}
                disabled={isExporting}
                className="w-full flex items-center gap-3 p-3 bg-[#24ce2a]/20 border border-[#24ce2a]/30 rounded-lg hover:bg-[#24ce2a]/30 transition-colors disabled:opacity-50"
              >
                <Download size={18} />
                <div className="text-left">
                  <div className="font-medium text-[#24ce2a]">Smart Export (Recommended)</div>
                  <div className="text-xs text-gray-300">Automatically chooses best method</div>
                </div>
              </button>

              <button
                onClick={handleQuickPrint}
                disabled={isExporting}
                className="w-full flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                <Printer size={18} />
                <div className="text-left">
                  <div className="font-medium">Browser Print</div>
                  <div className="text-xs text-gray-300">Direct browser print dialog</div>
                </div>
              </button>

              <button
                onClick={handleSingleSlide}
                disabled={isExporting}
                className="w-full flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors disabled:opacity-50"
              >
                <FileText size={18} />
                <div className="text-left">
                  <div className="font-medium">Current Slide Only</div>
                  <div className="text-xs text-gray-300">Export slide {currentSlide + 1} of {totalSlides}</div>
                </div>
              </button>
            </div>

            {/* Progress Bar */}
            {isExporting && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-300">Processing...</span>
                  <span className="text-[#24ce2a]">{progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#24ce2a] to-[#25da9e] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {progress < 30 ? 'Initializing...' : 
                   progress < 70 ? 'Processing slides...' : 
                   progress < 95 ? 'Finalizing...' : 'Almost done!'}
                </div>
              </div>
            )}

            {/* Last result feedback */}
            {lastResult && !isExporting && (
              <div className={`mt-4 p-3 rounded-lg border ${
                lastResult.success 
                  ? 'bg-green-500/10 border-green-500/20 text-green-200' 
                  : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-200'
              }`}>
                <div className="flex items-center gap-2 text-sm">
                  {lastResult.success ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                  <span className="font-medium">
                    {lastResult.success ? 'Export Successful' : 'Alternative Method Used'}
                  </span>
                </div>
                <div className="text-xs mt-1 opacity-80">{lastResult.message}</div>
              </div>
            )}

            {/* Close button */}
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowOptions(false)}
                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfExportButton;