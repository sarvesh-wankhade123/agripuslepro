const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const files = [
    'index.html',
    'field_monitoring.html',
    'automated_controls.html',
    'analytics_reports.html',
    'farm_settings.html',
    'crops.html'
];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(content);
        
        $('a').each((i, el) => {
            const linkText = $(el).text().trim().toLowerCase();
            
            if (linkText.includes('dashboard') || linkText.includes('home')) {
                $(el).attr('href', 'index.html');
            } else if (linkText.includes('field')) {
                $(el).attr('href', 'field_monitoring.html');
            } else if (linkText.includes('automation') || linkText.includes('action')) {
                $(el).attr('href', 'automated_controls.html');
            } else if (linkText.includes('analytic') || linkText.includes('report')) {
                $(el).attr('href', 'analytics_reports.html');
            } else if (linkText.includes('crop')) {
                $(el).attr('href', 'crops.html');
            } else if (linkText.includes('setting')) {
                $(el).attr('href', 'farm_settings.html');
            }
        });
        
        fs.writeFileSync(filePath, $.html(), 'utf8');
        console.log(`Updated links in ${file}`);
    }
});
