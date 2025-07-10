import fs from 'node:fs/promises';
import path from 'node:path';
import { createCanvas, loadImage } from 'canvas';

// Convert #hex to {r, g, b}
function hexToRGB(hex: string) {
  const normalized = hex.replace(/^#/, '');
  const bigint = parseInt(normalized, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

const convertToAscii = async (
  imagePath: string,
  maxWidth: number,
  maxHeight: number,
  hexColor: string,
) => {
  const chars = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.', '$'];
// const chars = [
//   '@', '#', '$', '§', '&', '%', '█', '▓', '▒', '░',
//   '●', '◼', '◾', '■', '◆', '◍', '◯', '*', '+', '=',
//   '~', '^', '?', '/', '\\', '|', '(', ')', '[', ']',
//   '{', '}', '<', '>', '!', ';', ':', ',', '.', '`', '\'', ' ',
// ];
  const img = await loadImage(imagePath);

  const canvas = createCanvas(maxWidth, maxHeight);
  const width = Math.min(img.width, maxWidth);
  const height = Math.min(img.height, maxHeight);
  const scaley = 0.5;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  //ctx.drawImage(img, 0, 0, width, height * 0.55); // uncomment if you want normal img
  //ctx.drawImage(img, 0, 0, width / 2, (height * 0.55) / 2);
  ctx.drawImage(img, 0, 0, width / 3.5, (height * 0.55) / 4);


  const imageData = ctx.getImageData(0, 0, width, height).data;
  let art = '';

  const { r: cr, g: cg, b: cb } = hexToRGB(hexColor);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const a = imageData[i + 3];

      if (a === 0) {
        art += ' ';
        continue;
      }

      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const brightness = (r + g + b) / 3;
      const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
      const color = `\x1b[38;2;${cr};${cg};${cb}m`; // use fixed color
      art += `${color}${chars[charIndex]}\x1b[0m`;
    }
    art += '\n';
  }

  return art;
};

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: tsx scripts/previewAscii.ts <path/to/image.png> [#hexcolor]');
    process.exit(1);
  }

  const imagePath = path.resolve(args[0]);
  const hexColor = args[1] || '#00ffff'; // default cyan

  try {
    const asciiArt = await convertToAscii(imagePath, 100, 100, hexColor);
    console.log(asciiArt);
  } catch (err) {
    console.error('Error generating ASCII art:', err);
  }
}

main();
