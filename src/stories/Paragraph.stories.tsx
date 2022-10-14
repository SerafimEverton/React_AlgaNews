import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Paragraph from '../App/Components/Typografy/Paragraph';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default { 
  title: 'Typografy/Paragraph',
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args = {
  size: 'default',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel'
}