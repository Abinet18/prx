import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('just random test', () => {
  const sum = (a, b) => a + b;
  // const { getByText } = shallow(<App />);
  // const l = getByText('/post');
  expect(sum(5, 6)).toBe(11);
});
