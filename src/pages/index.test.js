import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
