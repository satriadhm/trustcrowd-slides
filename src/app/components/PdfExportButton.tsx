// src/app/components/PdfExportButton.tsx
import React, { useState } from 'react';
import { usePdfExport } from '../hooks/usePdfExport';
import { Download, FileText, Settings } from 'lucide-react';

interface PdfExportButtonProps {
  currentSlide?: number;
}

const PdfExportButton: React.FC<PdfExportButtonProps> = ({ 
  currentSlide = 0
}) => {
  const { exportToPdf, exportSingleSlide, isExporting, progress } = usePdfExport();
  const [showOptions, setShowOptions] = useState(false);
  const [exportOptions, setExportOptions] = useState<{
    format: 'A4' | 'Letter' | 'A3';
    orientation: 'landscape';
    includeNotes: boolean;
    exportType: 'all' | 'current' | 'range';
  }>({
    format: 'A4',
    orientation: 'landscape',
    includeNotes: false,
    exportType: 'all'
  });

  const handleExport = async () => {
    try {
      if (exportOptions.exportType === 'current') {
        await exportSingleSlide(currentSlide);
      } else if (exportOptions.exportType === 'all') {
        await exportToPdf({
          format: exportOptions.format,
          includeNotes: exportOptions.includeNotes
        });
      }
      setShowOptions(false);
    } catch {
      alert('Export failed. Please try again.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        disabled={isExporting}
        className="flex items-center gap-2 px-3 py-2 bg-[#24ce2a] text-white rounded-lg hover:bg-[#1ea821] transition-colors disabled:opacity-50"
        title="Export to PDF"
      >
        {isExporting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span className="hidden sm:inline">Exporting...</span>
          </>
        ) : (
          <>
            <Download size={16} />
            <span className="hidden sm:inline">Export PDF</span>
          </>
        )}
      </button>

      {showOptions && (
        <div className="absolute top-full mt-2 right-0 bg-[#001333] border border-white/20 rounded-lg p-4 min-w-64 z-50">
          <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
            <Settings size={14} />
            Export Options
          </h3>
          
          <div className="space-y-3">
            {/* Export Type */}
            <div>
              <label className="text-xs text-gray-300 mb-1 block">Export Type</label>
              <select
                value={exportOptions.exportType}
                onChange={(e) => setExportOptions(prev => ({ 
                  ...prev, 
                  exportType: e.target.value as "all" | "current"
                }))}
                className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm"
              >
                <option value="all">All Slides</option>
                <option value="current">Current Slide Only</option>
              </select>
            </div>

            {/* Format */}
            <div>
              <label className="text-xs text-gray-300 mb-1 block">Format</label>
              <select
                value={exportOptions.format}
                onChange={(e) => setExportOptions(prev => ({ 
                  ...prev, 
                  format: e.target.value as 'A4' | 'Letter' | 'A3'
                }))}
                className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-sm"
              >
                <option value="A4">A4</option>
                <option value="Letter">Letter</option>
                <option value="A3">A3</option>
              </select>
            </div>

            {/* Include Notes */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="includeNotes"
                checked={exportOptions.includeNotes}
                onChange={(e) => setExportOptions(prev => ({ 
                  ...prev, 
                  includeNotes: e.target.checked 
                }))}
                className="rounded"
              />
              <label htmlFor="includeNotes" className="text-xs text-gray-300">
                Include speaker notes
              </label>
            </div>
          </div>

          {/* Progress Bar */}
          {isExporting && (
            <div className="mt-3">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-[#24ce2a] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-300 mt-1">Generating PDF... {progress}%</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="flex-1 bg-[#24ce2a] text-white px-3 py-2 rounded text-sm hover:bg-[#1ea821] transition-colors disabled:opacity-50"
            >
              <FileText size={14} className="inline mr-1" />
              Export
            </button>
            <button
              onClick={() => setShowOptions(false)}
              className="px-3 py-2 bg-white/10 text-white rounded text-sm hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfExportButton;