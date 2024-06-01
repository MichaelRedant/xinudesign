// theme/theme.ts
import { extendTheme } from '@chakra-ui/react';
import colors from './colors';

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'smokyBlack',
      },
    },
  },
});

export default theme;
