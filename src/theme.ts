interface Spacing {
  (xy: number): string;
  (x: number, y: number): string;
  (top: number, y: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}

const spacing: Spacing = (...numbers: number[]) => numbers.map(n => `${n * 8}px`).join(' ');

export const theme = {
  backgroundColor: {
    primary: '#fef4f4',
    secondary: '#f5fffa',
  },
  fontFamily: {
    appTitle: 'Allura, cursive',
    title: 'Kite One, cursive',
    body: 'Noto Sans JP, sans-serif',
  },
  fontSize: {
    '48': '3.0rem',
    '24': '1.5rem',
    '20': '1.25rem',
    '16': '1.0rem',
    '12': '0.75rem',
  },
  spacing,
};
