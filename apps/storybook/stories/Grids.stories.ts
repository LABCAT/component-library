import type { Meta, StoryObj } from '@storybook/vue3';

// Meta configuration
const meta = {
  title: 'Layout/TileGrid',
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select', options: [2, 3, 4] },
      description: 'Number of columns in the grid',
      defaultValue: 2
    },
    gap: {
      control: { type: 'range', min: 10, max: 40, step: 5 },
      description: 'Gap between items in pixels',
      defaultValue: 20
    },
    items: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of items to display',
      defaultValue: 6
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A flexible BEM-based tile grid component with configurable columns'
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to generate items
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    content: `This is item ${i + 1} content`
  }));
};

// Template for the story with custom CSS variables and class
const Template = (args) => ({
  setup() {
    const items = generateItems(args.items);
    const gridClass = args.columns === 2
      ? 'tile-grid'
      : `tile-grid tile-grid--${args.columns}-cols`;

    return { items, gridClass, args };
  },
  template: `
    <div 
      :class="gridClass" 
    >
      <div 
        v-for="item in items" 
        :key="item.id"
        style="background-color: #f5f5f5; padding: 20px; border-radius: 4px;"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
  `
});

// Stories
export const Default: Story = {
  render: Template,
  args: {
    columns: 2,
    gap: 20,
    items: 6
  }
};

export const ThreeColumns: Story = {
  render: Template,
  args: {
    columns: 3,
    gap: 20,
    items: 9
  }
};

export const FourColumns: Story = {
  render: Template,
  args: {
    columns: 4,
    gap: 15,
    items: 12
  }
};

export const CustomGap: Story = {
  render: Template,
  args: {
    columns: 2,
    gap: 40,
    items: 6
  }
};