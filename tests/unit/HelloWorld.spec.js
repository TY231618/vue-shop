import { shallow } from '@vue/test-utils';
import Hello from '../../src/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Your Store Name Goes here!?';
    
    const wrapper = shallow(Hello);

    expect(wrapper.text()).toMatch(msg);
  });
});
