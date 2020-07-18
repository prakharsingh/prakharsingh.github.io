import 'typeface-roboto';

import { PaletteColor, TypeBackground, TypeText } from '@material-ui/core/styles/createPalette';
import { Spacing } from '@material-ui/core/styles/createSpacing';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    background: TypeBackground;
    text: TypeText;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    spacing: Spacing;
  }
}

export default {
  typography: {
    fontFamily: ['"Roboto"', '-apple-system', 'Arial', 'sans-serif'].join(','),
  },
  spacing: 4,
};
