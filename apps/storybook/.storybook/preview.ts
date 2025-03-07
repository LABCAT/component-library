import type { Preview } from '@storybook/vue3'
import '@base/scss/styles.scss';

// Define breakpoints and heights in a single configuration object
const VIEWPORT_CONFIG = {
  xs: { width: 360, height: 900 },
  sm: { width: 576, height: 900 },
  md: { width: 768, height: 1024 },
  lg: { width: 1024, height: 768 },
  xl: { width: 1280, height: 720 },
  xxl: { width: 1440, height: 900 },
  xxxl: { width: 1920, height: 1080 },
};

// Generate viewports from combined configuration
const viewports = {};
Object.entries(VIEWPORT_CONFIG).forEach(([name, { width, height }]) => {
  const type = width >= 1280 ? 'desktop' : width >= 576 ? 'tablet' : 'mobile';
  viewports[name] = {
    name: `${type.replace(/^./, (char) => char.toUpperCase())} (${name})`,
    styles: { width: `${width}px`, height: `${height}px` },
    type,
  };
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports,
    },
    
  },
  decorators: [
    (story) => {
      const scriptUrl = import.meta.env.VITE_WEB_COMPONENT_URL;
      if (scriptUrl) {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.type = 'module';
        document.head.appendChild(script);
      }
      return story();
    }
  ]
}

export default preview