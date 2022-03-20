import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {};
