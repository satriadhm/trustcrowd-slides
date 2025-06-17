// src/app/api/export-pdf/route.ts (Automated Fallback System)
import { NextRequest, NextResponse } from 'next/server';

// Type definitions for better error handling
interface ExportError {
  type: 'PUPPETEER_MISSING' | 'BROWSER_LAUNCH_FAILED' | 'NAVIGATION_FAILED' | 'PDF_GENERATION_FAILED' | 'UNKNOWN';
  message: string;
  details?: string;
}

// Automated fallback chain
async function tryPuppeteerExport(request: NextRequest): Promise<NextResponse | ExportError> {
  try {
    // Dynamically import puppeteer to catch missing dependency
    const puppeteer = await import('puppeteer').catch(() => null);
    if (!puppeteer) {
      return {
        type: 'PUPPETEER_MISSING',
        message: 'Puppeteer not available',
        details: 'Server-side PDF generation requires puppeteer package'
      };
    }

    const { PDFDocument } = await import('pdf-lib').catch(() => ({ PDFDocument: null }));
    if (!PDFDocument) {
      return {
        type: 'PUPPETEER_MISSING',
        message: 'pdf-lib not available',
        details: 'PDF merging requires pdf-lib package'
      };
    }

    const { format = 'A4' } = await request.json();
    
    // Launch browser with comprehensive error handling
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--no-zygote',
          '--single-process',
          '--disable-gpu',
          '--disable-extensions'
        ]
      });
    } catch (launchError) {
      return {
        type: 'BROWSER_LAUNCH_FAILED',
        message: 'Failed to launch browser',
        details: launchError instanceof Error ? launchError.message : 'Unknown browser error'
      };
    }
    
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    const mergedPdf = await PDFDocument.create();
    const slideNames = [
      'title', 'introduction', 'problems', 'background', 'mx-algorithm',
      'methodology', 'architecture', 'simulation', 'results', 'analysis',
      'conclusion', 'future', 'thankyou'
    ];
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Process slides with individual error handling
    for (let i = 0; i < slideNames.length; i++) {
      try {
        const slideUrl = `${baseUrl}/thesis-defense?slide=${i}&export=true`;
        
        await page.goto(slideUrl, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });
        
        await new Promise(res => setTimeout(res, 2000));
        
        const pdf = await page.pdf({
          format: format,
          landscape: true,
          printBackground: true,
          preferCSSPageSize: false,
          margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
        });
        
        const slidePdf = await PDFDocument.load(pdf);
        const pages = await mergedPdf.copyPages(slidePdf, slidePdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
        
      } catch (slideError) {
        console.warn(`Failed to process slide ${i}, skipping:`, slideError);
        // Continue with other slides instead of failing completely
      }
    }
    
    await browser.close();
    
    // Add metadata
    mergedPdf.setTitle('TrustCrowd Thesis Defense Presentation');
    mergedPdf.setAuthor('Glorious Satria Dhamang Aji');
    mergedPdf.setSubject('User Acceptance Testing Quality Control using M-X Algorithm');
    mergedPdf.setCreationDate(new Date());
    
    const pdfBytes = await mergedPdf.save();
    
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="thesis-defense-${new Date().toISOString().split('T')[0]}.pdf"`,
        'Content-Length': pdfBytes.length.toString(),
      },
    });
    
  } catch (error) {
    return {
      type: 'PDF_GENERATION_FAILED',
      message: 'PDF generation failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Fallback method using client-side instructions
function generateClientSideFallback(): NextResponse {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>PDF Export Instructions</title>
        <style>
            body { 
                font-family: system-ui, -apple-system, sans-serif; 
                max-width: 800px; margin: 0 auto; padding: 2rem;
                background: linear-gradient(135deg, #0a1e5e, #001333);
                color: white; min-height: 100vh;
            }
            .container { background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 1rem; }
            .step { background: rgba(255,255,255,0.05); padding: 1rem; margin: 1rem 0; border-radius: 0.5rem; }
            .button { 
                background: #24ce2a; color: white; padding: 1rem 2rem; 
                border: none; border-radius: 0.5rem; cursor: pointer; 
                font-size: 1rem; margin: 0.5rem;
            }
            .button:hover { background: #1ea821; }
            .warning { background: rgba(245, 158, 11, 0.2); border: 1px solid #f59e0b; padding: 1rem; border-radius: 0.5rem; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Automated PDF Export</h1>
            
            <div class="warning">
                <h3>⚠️ Server PDF Generation Unavailable</h3>
                <p>The automated system will guide you through alternative export methods.</p>
            </div>
            
            <div class="step">
                <h3>🖨️ Method 1: Automated Browser Print (Recommended)</h3>
                <p>This will automatically open the print dialog with optimized settings:</p>
                <button class="button" onclick="automaticPrint()">
                    Start Automatic Print
                </button>
            </div>
            
            <div class="step">
                <h3>📱 Method 2: Mobile-Friendly Export</h3>
                <p>For mobile devices or when print dialog is not available:</p>
                <button class="button" onclick="mobileExport()">
                    Open Mobile Export
                </button>
            </div>
            
            <div class="step">
                <h3>🔗 Method 3: Direct Link Access</h3>
                <p>Get direct links to each slide for manual saving:</p>
                <button class="button" onclick="generateLinks()">
                    Generate Export Links
                </button>
                <div id="links-container"></div>
            </div>
        </div>
        
        <script>
            const baseUrl = '${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}';
            const slides = [
                'title', 'introduction', 'problems', 'background', 'mx-algorithm',
                'methodology', 'architecture', 'simulation', 'results', 'analysis',
                'conclusion', 'future', 'thankyou'
            ];
            
            function automaticPrint() {
                // Inject print styles
                const style = document.createElement('style');
                style.textContent = \`
                    @media print {
                        body { margin: 0; padding: 0; background: white !important; color: black !important; }
                        .container { background: white !important; box-shadow: none !important; }
                        .button { display: none !important; }
                        @page { size: A4 landscape; margin: 0.5in; }
                    }
                \`;
                document.head.appendChild(style);
                
                // Auto-configure print settings (where possible)
                setTimeout(() => {
                    window.print();
                }, 500);
                
                // Show instructions
                alert('Print Dialog Instructions:\\n\\n1. Choose "Save as PDF"\\n2. Set to "Landscape" orientation\\n3. Enable "Background graphics"\\n4. Set margins to "Minimum"');
            }
            
            function mobileExport() {
                // Create mobile-optimized view
                window.open(\`\${baseUrl}/thesis-defense?mobile=true&export=true\`, '_blank');
            }
            
            function generateLinks() {
                const container = document.getElementById('links-container');
                container.innerHTML = '<h4>Export Links:</h4>';
                
                slides.forEach((slide, index) => {
                    const link = document.createElement('a');
                    link.href = \`\${baseUrl}/thesis-defense?slide=\${index}&export=true\`;
                    link.target = '_blank';
                    link.style.display = 'block';
                    link.style.margin = '0.5rem 0';
                    link.style.color = '#24ce2a';
                    link.textContent = \`Slide \${index + 1}: \${slide.replace('-', ' ').toUpperCase()}\`;
                    container.appendChild(link);
                });
                
                // Copy all links to clipboard
                const allLinks = slides.map((slide, index) => 
                    \`\${baseUrl}/thesis-defense?slide=\${index}&export=true\`
                ).join('\\n');
                
                navigator.clipboard.writeText(allLinks).then(() => {
                    alert('All links copied to clipboard!');
                }).catch(() => {
                    console.log('Manual copy required');
                });
            }
            
            // Auto-start the most appropriate method based on device
            window.addEventListener('load', () => {
                const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                if (isMobile) {
                    setTimeout(() => {
                        if (confirm('Mobile device detected. Would you like to open the mobile-optimized export?')) {
                            mobileExport();
                        }
                    }, 1000);
                } else {
                    setTimeout(() => {
                        if (confirm('Server PDF generation failed. Would you like to start automatic browser print instead?')) {
                            automaticPrint();
                        }
                    }, 1000);
                }
            });
        </script>
    </body>
    </html>
  `;
  
  return new NextResponse(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

// Main export function with automated fallback chain
export async function POST(request: NextRequest) {
  console.log('Starting PDF export with automated fallback...');
  
  // Try primary method (Puppeteer)
  const puppeteerResult = await tryPuppeteerExport(request);
  
  if (puppeteerResult instanceof NextResponse) {
    console.log('✅ Puppeteer export successful');
    return puppeteerResult;
  }
  
  // Log the error and automatically fallback
  console.warn(`⚠️ Puppeteer failed (${puppeteerResult.type}):`, puppeteerResult.message);
  
  // Automatic fallback based on error type
  switch (puppeteerResult.type) {
    case 'PUPPETEER_MISSING':
      console.log('🔄 Falling back to client-side instructions...');
      return generateClientSideFallback();
      
    case 'BROWSER_LAUNCH_FAILED':
      console.log('🔄 Browser launch failed, providing alternative methods...');
      return generateClientSideFallback();
      
    default:
      console.log('🔄 Unknown error, falling back to client-side methods...');
      return generateClientSideFallback();
  }
}

// Single slide export with automated fallback
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slideIndex = searchParams.get('slide');
    const exportMode = searchParams.get('export');
    const mobileMode = searchParams.get('mobile');
    
    if (!exportMode) {
      return NextResponse.json({ error: 'Export mode required' }, { status: 400 });
    }
    
    // If mobile mode, return mobile-optimized HTML
    if (mobileMode) {
      const mobileHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mobile Export - Thesis Defense</title>
            <style>
                body { font-family: system-ui; margin: 0; padding: 1rem; background: #001333; color: white; }
                .slide { margin-bottom: 2rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 0.5rem; }
                .export-btn { background: #24ce2a; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.25rem; margin: 0.5rem 0; }
                iframe { width: 100%; height: 400px; border: 1px solid #ccc; border-radius: 0.5rem; }
            </style>
        </head>
        <body>
            <h1>📱 Mobile Export Mode</h1>
            <p>Navigate through slides and use your browser's "Share" → "Print" or "Save as PDF" option.</p>
            
            ${Array.from({ length: 13 }, (_, i) => `
              <div class="slide">
                <h3>Slide ${i + 1}</h3>
                <iframe src="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/thesis-defense?slide=${i}&export=true"></iframe>
                <button class="export-btn" onclick="window.open('${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/thesis-defense?slide=${i}&export=true', '_blank')">
                  Open Slide ${i + 1}
                </button>
              </div>
            `).join('')}
        </body>
        </html>
      `;
      
      return new NextResponse(mobileHtml, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    // Try puppeteer for single slide
    try {
      const puppeteer = await import('puppeteer');
      
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
      const targetUrl = slideIndex 
        ? `${baseUrl}/thesis-defense?slide=${slideIndex}&export=true`
        : `${baseUrl}/thesis-defense?export=true`;
      
      await page.goto(targetUrl, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      await new Promise(res => setTimeout(res, 2000));
      
      const pdf = await page.pdf({
        format: 'A4',
        landscape: true,
        printBackground: true,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
      });
      
      await browser.close();
      
      return new NextResponse(Buffer.from(pdf), {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="slide-${slideIndex || 'current'}.pdf"`,
        },
      });
      
    } catch {
      console.warn('Single slide export failed, redirecting to browser print');
      
      // Automatic redirect to print-friendly version
      const printRedirect = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Auto Print Redirect</title>
            <script>
                // Auto-redirect to print-friendly page and trigger print
                window.location.href = '${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/thesis-defense?slide=${slideIndex || 0}&export=true&autoprint=true';
            </script>
        </head>
        <body>
            <p>Redirecting to print-friendly version...</p>
        </body>
        </html>
      `;
      
      return new NextResponse(printRedirect, {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
  } catch (error) {
    console.error('GET export error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}