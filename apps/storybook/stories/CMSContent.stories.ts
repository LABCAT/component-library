import type { Meta, StoryObj } from '@storybook/vue3';
import CMSContent from '../../../_base/components/CMSContent.vue';
import { ContentHTML } from './CMSContent.html';

const meta = {
  title: 'Components/CMSContent',
  component: CMSContent,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The HTML content to be rendered',
    },
  },
} satisfies Meta<typeof CMSContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: ContentHTML,
  },
};