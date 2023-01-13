import fs from 'fs';
import content from './src/frontAid/content.json' assert { type: "json" };

for (const [key, value] of Object.entries(content)) {
  fs.writeFile(`./public/locales/${key}/translation.json`, JSON.stringify(value), (err) => {
    if (err) throw err
    console.log(`Saved ${key} translation`)
  })
}