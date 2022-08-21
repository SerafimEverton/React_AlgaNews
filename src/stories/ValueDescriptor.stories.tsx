import { ComponentMeta, Story} from "@storybook/react";
import ValueDescriptor from "../Components/ValueDescriptor/ValueDescriptor";
import ValueDescripton, { ValueDescriptorProps } from "../Components/ValueDescriptor/ValueDescriptor";

export default {
    title: 'Example/ValueDescripton',
    component: ValueDescripton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as ComponentMeta <typeof ValueDescripton>;

  const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor{...args}/>

  export const Default = Template.bind({})
  Default.args = {
    description: 'Ganhos no mês',
    value: 560322.02
  }

  export const DefaultCurrent = Template.bind({})
  DefaultCurrent.args = {
    description: 'Ganhos no mês',
    value: 560322.02,
    isCurrency: true,
    color: 'default'
  }

  export const Primary = Template.bind({})
  Primary.args = {
    description: 'Ganhos no mês',
    value: 560322.02,
    isCurrency: false,
    color: 'primary'
  }

  export const PrimaryCurrent = Template.bind({})
  PrimaryCurrent.args = {
    description: 'Ganhos no mês',
    value: 560322.02,
    isCurrency: true,
    color: 'primary'
  }