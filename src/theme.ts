interface Spacing {
  (space?: number | string): string | undefined;
  (...spaces: number[]): string | undefined;
}

const spacing: Spacing = (first?: number | string, ...rest: number[]) => {
  if (!first) return;

  switch (typeof first) {
    case 'string':
      return first;
    default:
      return [first, ...rest].slice(0, 4).map(n => `${n * 8}px`).join(' ');
  }
};

export const theme = {
  backgroundColor: {
    primary: '#fef4f4',
    secondary: '#f5fffa',
  },
  spacing,
  typography: {
    h1: {
      fontFamily: 'Allura, cursive',
      fontSize: '3.0rem',
    },
    h2: {
      fontFamily: 'Kite One, cursive',
      fontSize: '2.0rem',
    },
    h3: {
      fontFamily: 'Kite One, cursive',
      fontSize: '1.75rem',
    },
    h4: {
      fontFamily: 'Kite One, cursive',
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Kite One, cursive',
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: 'Kite One, cursive',
      fontSize: '1.0rem',
    },
    p: {
      fontFamily: 'Noto Sans JP, sans-serif',
      fontSize: '1.0rem',
    },
  },
};
