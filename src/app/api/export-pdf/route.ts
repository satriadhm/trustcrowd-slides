// src/app/api/export-pdf/route.ts (Enhanced Version with pdf-lib)
import { NextRequest, NextResponse } from 'next/server';
import puppeteer, { PDFOptions } from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

export async function POST(request: NextRequest) {
  try {
    const { format = 'A4', includeNotes = false } = await request.json() as { format?: PDFOptions['format'], includeNotes?: boolean };
    
    // Launch puppeteer with optimized settings
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });
    
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Create new PDF document for merging
    const mergedPdf = await PDFDocument.create();
    
    const slideNames = [
      'title', 'introduction', 'problems', 'background', 'mx-algorithm',
      'methodology', 'architecture', 'simulation', 'results', 'analysis',
      'conclusion', 'future', 'thankyou'
    ];
    
    // Process each slide
    for (let i = 0; i < slideNames.length; i++) {
      console.log(`Processing slide ${i + 1}/${slideNames.length}: ${slideNames[i]}`);
      
      const slideUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/thesis-defense?slide=${i}&export=true`;
      
      await page.goto(slideUrl, { 
        waitUntil: 'networkidle0',
        timeout: 60000 
      });
      
      // Wait for animations and content to load
      await new Promise(res => setTimeout(res, 3000));
      
      // Ensure all images and content are loaded
      await page.evaluate(() => {
        return Promise.all([
          ...Array.from(document.images, img => 
            img.complete || new Promise(resolve => {
              img.onload = img.onerror = resolve;
            })
          )
        ]);
      });
      
      // Generate PDF for this slide
      const pdf = await page.pdf({
        format: format,
        landscape: true,
        printBackground: true,
        preferCSSPageSize: false,
        margin: {
          top: '0.5in',
          right: '0.5in',
          bottom: '0.5in',
          left: '0.5in'
        },
        displayHeaderFooter: includeNotes,
        headerTemplate: includeNotes ? 
          `<div style="font-size: 10px; margin: 0 auto;">
            <span class="title">${slideNames[i].replace('-', ' ').toUpperCase()}</span>
          </div>` : '',
        footerTemplate: includeNotes ?
          `<div style="font-size: 10px; margin: 0 auto;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>` : ''
      });
      
      // Add slide to merged PDF
      const slidePdf = await PDFDocument.load(pdf);
      const pages = await mergedPdf.copyPages(slidePdf, slidePdf.getPageIndices());
      pages.forEach(page => mergedPdf.addPage(page));
    }
    
    await browser.close();
    
    // Add metadata to PDF
    mergedPdf.setTitle('TrustCrowd Thesis Defense Presentation');
    mergedPdf.setAuthor('Glorious Satria Dhamang Aji');
    mergedPdf.setSubject('User Acceptance Testing Quality Control using M-X Algorithm');
    mergedPdf.setCreator('TrustCrowd Presentation System');
    mergedPdf.setProducer('Next.js PDF Export');
    mergedPdf.setCreationDate(new Date());
    
    // Serialize the PDF
    const pdfBytes = await mergedPdf.save();
    
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="thesis-defense-${new Date().toISOString().split('T')[0]}.pdf"`,
        'Content-Length': pdfBytes.length.toString(),
        'Cache-Control': 'no-cache',
      },
    });
    
  } catch (error) {
    console.error('PDF Export Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Single slide export endpoint
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slideIndex = searchParams.get('slide');
    const exportMode = searchParams.get('export');
    
    if (!exportMode) {
      return NextResponse.json({ error: 'Export mode required' }, { status: 400 });
    }
    
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
    
    const slideNames = [
      'title', 'introduction', 'problems', 'background', 'mx-algorithm',
      'methodology', 'architecture', 'simulation', 'results', 'analysis',
      'conclusion', 'future', 'thankyou'
    ];
    
    const slideName = slideIndex ? slideNames[parseInt(slideIndex)] || 'slide' : 'presentation';
    
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${slideName}-${slideIndex || 'all'}.pdf"`,
      },
    });
    
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}

// Batch export with progress tracking
export async function PATCH(request: NextRequest) {
  try {
    const { slideRange, format = 'A4' } = await request.json();
    const { start = 0, end = 12 } = slideRange || {};
    
    // This would be used with SSE for progress tracking
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        (async () => {
          try {
            const browser = await puppeteer.launch({
              headless: true,
              args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
            
            const page = await browser.newPage();
            await page.setViewport({ width: 1920, height: 1080 });
            
            const mergedPdf = await PDFDocument.create();
            const totalSlides = end - start + 1;
            
            for (let i = start; i <= end; i++) {
              const progress = Math.round(((i - start + 1) / totalSlides) * 100);
              
              // Send progress update
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
                progress, 
                current: i + 1, 
                total: totalSlides,
                status: `Processing slide ${i + 1}...` 
              })}\n\n`));
              
              const slideUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://trustcrowd-slides.vercel.app'}/thesis-defense?slide=${i}&export=true`;
              
              await page.goto(slideUrl, { waitUntil: 'networkidle0', timeout: 30000 });
              await new Promise(res => setTimeout(res, 2000));
              
              const pdf = await page.pdf({
                format: format as PDFOptions['format'],
                landscape: true,
                printBackground: true,
                margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
              });
              
              const slidePdf = await PDFDocument.load(pdf);
              const pages = await mergedPdf.copyPages(slidePdf, slidePdf.getPageIndices());
              pages.forEach(page => mergedPdf.addPage(page));
            }
            
            await browser.close();
            
            const pdfBytes = await mergedPdf.save();
            const base64Pdf = Buffer.from(pdfBytes).toString('base64');
            
            // Send completion
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
              progress: 100, 
              status: 'Complete!',
              pdf: base64Pdf 
            })}\n\n`));
            
            controller.close();
            
          } catch (error) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
              error: 'Export failed',
              details: error instanceof Error ? error.message : 'Unknown error'
            })}\n\n`));
            controller.close();
          }
        })();
      }
    });
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
    
  } catch (error) {
    console.error('Batch export error:', error);
    return NextResponse.json({ error: 'Failed to start batch export' }, { status: 500 });
  }
}