import { Story, Meta } from '@storybook/react';
import NoData, { NoDataProps } from '../App/Components/NoData/NoData';

export default {
  title: 'Example/NoData',
  component: NoData,
  argTypes: {
    onConfirm: { action: 'confirm' },
    onCancel: { action: 'cancel' },
  },
} as Meta;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({})
Default.args = {}

export const FixedHeight = Template.bind({})
FixedHeight.args = {
  height: 240
}