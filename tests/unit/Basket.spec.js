import { mount, shallow } from '@vue/test-utils';
import Basket from '../../src/components/Basket';

describe('Basket', () => {

  const basket = [{name: 'dog shirt'}, {name: 'cat shirt'}];

  const component = shallow(Basket, {
    propsData: {
      basket: basket
    }
  });

  it('should render successfully', () => {

    expect(component.exists()).toEqual(true);
  })

  it('should match snapshot', () => {
    // component.setProps({basket:[{name: 'dog shirt'}]})
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.basket-size').text()).toEqual('number of Items: 2')
  })
})