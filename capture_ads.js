const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Create exports directory if it doesn't exist
    const exportDir = path.join(__dirname, 'exports');
    if (!fs.existsSync(exportDir)){
        fs.mkdirSync(exportDir);
    }

    // Launch headless browser
    const browser = await puppeteer.launch({ 
        headless: 'new',
        defaultViewport: { width: 1920, height: 2000, deviceScaleFactor: 2 } // 2x scale for Retina-level crispness
    });
    
    // Find all HTML ad variants
    const files = fs.readdirSync(__dirname).filter(file => file.startsWith('ad-variant-') && file.endsWith('.html'));

    console.log(`Found ${files.length} ad variants to capture at high-res...`);

    for (const file of files) {
        const page = await browser.newPage();
        const filePath = `file://${path.join(__dirname, file)}`;
        
        console.log(`Processing ${file}...`);
        
        // Wait until everything is fully loaded including external resources (fonts, SVG paths)
        await page.goto(filePath, { waitUntil: 'networkidle0' });
        
        // Remove the CSS scale transform attached for previews locally so it captures the TRUE native pixel width 
        // 1080x1080 or 1080x1350 or 1080x1920
        await page.evaluate(() => {
            const adNode = document.querySelector('.ad-container');
            if (adNode) {
                adNode.style.transform = 'none'; // reset scaling so it captures perfectly
                // Forcing the body not to scroll to guarantee clean node boxes
                document.body.style.margin = '0';
                document.body.style.padding = '0';
                document.body.style.display = 'block';
                adNode.style.position = 'absolute';
                adNode.style.top = '0';
                adNode.style.left = '0';
                adNode.style.boxShadow = 'none'; // strip shadow padding just for raw ad output
            }
        });
        
        // Pause briefly after applying DOM forces to ensure repaint
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const adElement = await page.$('.ad-container');
        if (adElement) {
            const pngPath = path.join(exportDir, file.replace('.html', '.png'));
            // Create the high quality screenshot 
            // since we used deviceScaleFactor: 2, this will export massive natively-scallable images
            await adElement.screenshot({ path: pngPath });
            console.log(`✅ Saved ${file.replace('.html', '.png')}`);
        } else {
            console.log(`❌ Failed to find .ad-container in ${file}`);
        }
        
        await page.close();
    }

    await browser.close();
    console.log('🎉 Generation complete! High-res PNGs saved to /GEO/exports/.');
})();
