import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Web Component',
  parameters: {
    controls: { disabled: true },
  },
} as Meta

const Template: Story = () => ({
  template: `
    <div>
      <my-component></my-component>
    </div>
  `,
})

export const Default = Template.bind({})
