import Header from '../../../_header/src/Header.vue';
import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    showNav: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'My Application',
    showNav: true
  },
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: `
      <Header v-bind="args">
        <template #navigation>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </template>
      </Header>
    `
  })
};

export const NoNavigation: Story = {
  args: {
    title: 'Simple Header',
    showNav: false
  }
};
