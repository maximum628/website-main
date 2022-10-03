import { base } from '@theme-ui/presets';
import { merge } from 'theme-ui';

const brandColors = {
  gray: '#333f48',
  blue: '#7bafd4',
  green: '#97d700',
  lightBlue: '#e5eff6',
};

export const theme = merge(base, {
  colors: {
    primary: brandColors.blue,
    background: brandColors.lightBlue,
    text: brandColors.gray,
    ...brandColors,
  },
  fonts: {
    body: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      '\'Montserrat\', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      maxWidth: '1410px',
      px: 4,
    },
  },
});
