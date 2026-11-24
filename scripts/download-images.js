const fs = require('fs');
const path = require('path');

const images = {
  'public/images/hero/hero-bg.jpg': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80',
  'public/images/hero/hero-ambience.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  'public/images/outlets/kebabs-biryanis.jpg': 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80',
  'public/images/outlets/thalis-more.jpg': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
  'public/images/outlets/kanopy.jpg': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
  'public/images/food/peshwari-kebab.jpg': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  'public/images/food/dum-biryani.jpg': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80',
  'public/images/food/kolhapuri-thali.jpg': 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80',
  'public/images/food/nawabi-tangdi.jpg': 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&w=900&q=80',
  'public/images/food/balochi-paneer.jpg': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80',
  'public/images/food/kanopy-koobideh.jpg': 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
  'public/images/food/tandoori-prawns.jpg': 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80',
  'public/images/food/dal-makhani.jpg': 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
  'public/images/food/murg-nawabi.jpg': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  'public/images/food/gulab-jamun.jpg': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80',
  'public/images/gallery/ambience-rooftop.jpg': 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/chef-tandoor.jpg': 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/table-setting.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/interior-lounge.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/cocktail-drinks.jpg': 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/family-dining.jpg': 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/spice-craft.jpg': 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80',
  'public/images/gallery/sizzler-smoke.jpg': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
};

async function downloadAll() {
  console.log(`Starting download of ${Object.keys(images).length} assets...`);
  const entries = Object.entries(images);
  
  await Promise.all(
    entries.map(async ([dest, url]) => {
      try {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log(`OK: ${dest} (${Math.round(buf.length / 1024)} KB)`);
      } catch (err) {
        console.error(`FAIL: ${dest} - ${err.message}`);
      }
    })
  );
  console.log('All downloads completed.');
}

downloadAll();
