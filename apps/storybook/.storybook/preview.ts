import type { Preview } from '@storybook/vue3'
const preview: Preview = {
  parameters: {
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