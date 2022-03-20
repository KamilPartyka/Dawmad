import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  children: 'tertiary',
};
