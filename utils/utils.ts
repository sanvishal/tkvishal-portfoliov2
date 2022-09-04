export const randRange = (min: number, max: number) => Math.random() * (max - min) + min;

export function choose<T>(array: T[]): T {
  return array[~~randRange(0, array.length)];
}

export const map = (n: number, start1: number, end1: number, start2: number, end2: number) =>
  ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

export const hslToHex = (h: number, s: number, l: number) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const HexToHSL = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  s = s * 100;
  s = Math.round(s);
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return { h, s, l };
};

export const isColorTooDark = (color: string): boolean => {
  let colorStripped = color.substring(1);
  let rgb = parseInt(colorStripped, 16);
  let r = (rgb >> 16) & 0xff;
  let g = (rgb >> 8) & 0xff;
  let b = (rgb >> 0) & 0xff;

  const luminanace = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return luminanace < 40;
};

export type GeneratedPalette = {
  hues: {
    baseHue: number;
    complimentaryHue1: number;
    complimentaryHue2: number;
  };
  colorChoices: string[];
};

export const getNewPalette = (): GeneratedPalette => {
  // const hue = ~~randRange(220, 360);
  const hue = ~~randRange(150, 360);
  const complimentaryHue1 = hue + 30;
  const complimentaryHue2 = hue + 60;
  const saturation = 95;
  const lightness = 50;

  const baseColor = hslToHex(hue, saturation, lightness);
  const complimentaryColor1 = hslToHex(complimentaryHue1, saturation, lightness);
  const complimentaryColor2 = hslToHex(complimentaryHue2, saturation, lightness);

  const colorChoices = [baseColor, complimentaryColor1, complimentaryColor2];

  return { hues: { baseHue: hue, complimentaryHue1, complimentaryHue2 }, colorChoices };
};

export const setGeneratedColors = (generatedPalette: GeneratedPalette) => {
  document.documentElement.style.setProperty('--hue', String(generatedPalette.hues.baseHue));
  document.documentElement.style.setProperty(
    '--hue-complimentary1',
    String(generatedPalette.hues.complimentaryHue1)
  );
  document.documentElement.style.setProperty(
    '--hue-complimentary2',
    String(generatedPalette.hues.complimentaryHue2)
  );
  document.documentElement.style.setProperty(
    '--hue-col-1',
    String(generatedPalette.colorChoices[0])
  );
  document.documentElement.style.setProperty(
    '--hue-col-2',
    String(generatedPalette.colorChoices[1])
  );
  document.documentElement.style.setProperty(
    '--hue-col-3',
    String(generatedPalette.colorChoices[2])
  );
};

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
