import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
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
    Tooltip: {
      baseStyle: (props: any) => ({
        borderRadius: '6px',
        fontWeight: 'bold',
        border: mode(
          '1px solid hsla(var(--hue), 60%, 10%, 0.3)',
          '1px solid hsla(var(--hue), 92%, 60%, 0.3)'
        )(props),
        background: mode('hsla(var(--hue), 70%, 40%)', 'hsla(var(--hue), 60%, 80%)')(props),
      }),
    },
  },
  semanticTokens: {
    colors: {
      contentColor: { default: 'gray.900', _dark: 'gray.100' },
      hueColorSchemeDependent: {
        default: 'hsla(var(--hue), 95%, 98%, 0)',
        _dark: 'hsla(var(--hue), 100%, 9%, 0)',
      },
      bgGradient: {
        default:
          'linear-gradient(to top left, hsla(var(--hue), 95%, 99%, 0), hsla(var(--hue), 92%, 84%))',
        _dark:
          'linear-gradient(to top left, hsla(var(--hue), 95%, 1%, 0), hsla(var(--hue), 95%, 10%))',
      },
      bgGradientComp: {
        default:
          'linear-gradient(to top left, hsla(var(--hue-complimentary1), 95%, 99%, 0), hsla(var(--hue-complimentary1), 92%, 84%))',
        _dark:
          'linear-gradient(to top left, hsla(var(--hue-complimentary1), 95%, 1%, 0), hsla(var(--hue-complimentary1), 95%, 10%));',
      },
      bgGradientButton: {
        default:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 80%), hsla(var(--hue), 92%, 80%))',
        _dark:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 20%), hsla(var(--hue), 95%, 20%))',
      },
      bgGradientProj: {
        default:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 90%, 0.5), hsla(var(--hue), 92%, 90%, 0.5))',
        _dark:
          'linear-gradient(to bottom right, hsla(var(--hue-complimentary1), 95%, 12%, 0.5), hsla(var(--hue), 95%, 20%, 0.5));',
      },
      dialogBg: {
        default: 'hsla(var(--hue), 92%, 95%)',
        _dark: 'hsla(var(--hue), 30%, 10%)',
      },
      iconBorderColor: {
        default: 'rgba(0,0,0,0.1)',
        _dark: 'rgba(255,255,255,0.09)',
      },
      commonIconColor: {
        default: '#333333',
        _dark: 'white',
      },
      commonIconBgColor: {
        default: 'rgba(0,0,0,0.06)',
        _dark: 'rgba(255,255,255,0.06)',
      },
    },
  },
});
