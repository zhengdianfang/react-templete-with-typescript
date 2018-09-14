import { shallow } from 'enzyme';
import * as React from 'react';
import PageNotFound from '../../../src/features/common/containers/PageNotFound';

describe('test PageNotFound Page', () => {
  test('renders children when pass in', () => {
    const renderedComponent = shallow(<PageNotFound />);
    expect(renderedComponent.contains(<div>Page Not Found</div>)).toEqual(true);
  });
});
