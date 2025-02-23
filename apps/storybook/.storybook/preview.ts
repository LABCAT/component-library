import type { Preview } from '@storybook/vue3'
import '@base/scss/styles.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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