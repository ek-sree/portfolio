declare module 'tailwindcss/lib/util/flattenColorPalette' {
    import { Theme } from 'tailwindcss/types/config';
  
    export default function flattenColorPalette(colors: Theme['colors']): Record<string, any>;
  }
  