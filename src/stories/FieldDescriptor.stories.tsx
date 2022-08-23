import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FieldDescriptor from '../Components/FieldDescriptor/FieldDescriptor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default { 
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FieldDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FieldDescriptor> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  field: 'Data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}