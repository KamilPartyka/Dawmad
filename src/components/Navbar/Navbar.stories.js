import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

function Template(args) {
  return <Navbar {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {};
