import { Title } from './Title';

export default {
  title: 'Title',
  component: Title,
};

function Template(args) {
  return <Title {...args} />;
}

export const Drawmad = Template.bind({});
Drawmad.args = {
  children: 'Drawmad',
};
