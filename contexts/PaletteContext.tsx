import { createContext, useContext, useEffect } from 'react';
import { GeneratedPalette, getNewPalette, setGeneratedColors } from '../utils/utils';

const palette = getNewPalette();
export const PaletteContext = createContext<{
  palette: GeneratedPalette;
  changePalette: () => void;
}>({
  palette,
  changePalette: () => {},
});

export const PaletteProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  useEffect(() => {
    setGeneratedColors(palette);
  }, []);

  const changePalette = () => {
    const palette = getNewPalette();
    setGeneratedColors(palette);
  };

  return (
    <PaletteContext.Provider value={{ palette, changePalette }}>{children}</PaletteContext.Provider>
  );
};

export const usePalette = () => {
  return useContext(PaletteContext);
};
