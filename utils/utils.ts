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
