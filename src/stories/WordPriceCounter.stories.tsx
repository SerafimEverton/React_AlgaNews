import { Story, Meta } from '@storybook/react';
import WordPriceCounter, { WordPriceCounterProps } from '../App/Components/WordPriceCounter';

export default {
  title: 'Example/WordPriceCounter',
  component: WordPriceCounter,
//   argTypes: {
//     onLogout: {
//       action: 'logout'
//     }
//   }
} as Meta;

const Template: Story<WordPriceCounterProps> = (args) =>
  <div>
    <WordPriceCounter {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
pricePerWord: 0.25,
wordsCount: 20
}