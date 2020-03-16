import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Display atBat={{ball: 0, strike: 0}} />);
    getByText(/ball/i)
    getByText(/strike/i)
  });

  it('renders the correct ball and strike values', () => {
    const { getAllByText } = render (<Display atBat={{ balls: 1, strikes: 0 }} />);
    getAllByText(/1/i)
    getAllByText(/0/i)
  });
})