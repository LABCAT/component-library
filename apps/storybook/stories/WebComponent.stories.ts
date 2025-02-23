import { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Web Component',
  argTypes: {
    message: { control: 'text' },
  },
} as Meta

const Template: Story = (args) => ({
  setup() {
    return { args }
  },
  template: `
    <div>
      <my-component v-bind="args"></my-component>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  message: 'Hello, Storybook!',
}
