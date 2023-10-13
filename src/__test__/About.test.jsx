import React from 'react';
import { render } from '@testing-library/react';
import About from '../page/About';


describe('About component', () => {
   test('renders hello world', () => {
      const { getByText } = render(<About />);
      const helloWorldElement = getByText(/hello world/i);
      expect(helloWorldElement).toBeInTheDocument();
   });
});