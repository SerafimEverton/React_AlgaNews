import { Story, Meta } from '@storybook/react';
import TagsInput, { TagsInputProps } from '../Components/TagsInput';

export default {
  title: 'Example/TagsInput',
  component: TagsInput,
  
} as Meta;

const Template: Story<TagsInputProps> = (args) =>
  <div>
    <TagsInput {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Insira as Tags deste Post',
    tags: [{ id:'1', text: 'JavaScript'}]
}