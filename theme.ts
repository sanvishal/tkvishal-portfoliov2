import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  disableTransitionOnChange: false,
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config: themeConfig,
  fonts: {
    body: 'Avenir LT Std',
    heading: 'Avenir LT Std',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.50', '#171817')(props),
        color: mode('gray.900', 'gray.100')(props),
      },
    }),
  },
  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: mode('gray.900', 'gray.100')(props),
      }),
    },
  },
  semanticTokens: {
    colors: {
      contentColor: { default: 'gray.900', _dark: 'gray.100' },
      linkUnderLineColor: { default: 'red', _dark: 'green' },
      hueColorSchemeDependent: {
        default: 'hsla(var(--hue), 95%, 98%, 0)',
        _dark: 'hsla(var(--hue), 100%, 9%, 0)',
      },
      bgGradient: {
        default:
          'linear-gradient(to top left, hsla(var(--hue), 95%, 99%, 0), hsla(var(--hue), 92%, 84%))',
        _dark:
          'linear-gradient(to top left, hsla(var(--hue), 95%, 1%, 0), hsla(var(--hue), 95%, 10%));',
      },
      bgGradientComp: {
        default:
          'linear-gradient(to top left, hsla(var(--hue-complimentary1), 95%, 99%, 0), hsla(var(--hue-complimentary1), 92%, 84%))',
        _dark:
          'linear-gradient(to top left, hsla(var(--hue-complimentary1), 95%, 1%, 0), hsla(var(--hue-complimentary1), 95%, 10%));',
      },
      bgGradientButton: {
        default:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 90%), hsla(var(--hue), 92%, 90%))',
        _dark:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 12%), hsla(var(--hue), 95%, 20%));',
      },
    },
  },
});
