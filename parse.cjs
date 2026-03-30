const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('k2000.html', 'utf8');
const $ = cheerio.load(html);

const results = [];

$('.c-c').each((i, el) => {
  const a = $(el).find('a.b-img-a');
  if (a.length > 0) {
    const url = a.attr('href');
    const img = a.find('img').attr('src');
    const desc = $(el).find('.b-text-c p').text().trim();
    
    if (url && img && desc) {
      results.push({ url, img, desc });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
