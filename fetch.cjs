const https = require('https');

https.get('https://www.k2000.pt', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const fs = require('fs');
    fs.writeFileSync('k2000.html', data);
    console.log('Done');
  });
});
