import fs from 'fs';
import path from 'path';

function findPngs(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findPngs(fullPath);
    } else if (file.endsWith('.png')) {
      console.log(fullPath);
    }
  }
}

findPngs('.');
