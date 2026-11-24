const fs = require('fs');
const path = require('path');

const images = {
  'public/images/food/kanopy-koobideh.jpg': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  'public/images/food/gulab-jamun.jpg': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
  'public/images/gallery/table-setting.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/family-dining.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
};

async function retryFailed() {
  for (const [dest, url] of Object.entries(images)) {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      console.log(`Already exists: ${dest}`);
      continue;
    }
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        console.log(`Downloaded: ${dest}`);
      }
    } catch (e) {
      console.error(`Failed ${dest}:`, e.message);
    }
  }
}

retryFailed();
