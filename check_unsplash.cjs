const urls = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1600"
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`[${res.status}]: ${url}`);
    } catch (e) {
      console.log(`Error: ${url} - ${e.message}`);
    }
  }
}

checkUrls();
