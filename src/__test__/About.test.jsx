import React from 'react';
import { render } from '@testing-library/react';
import About from '../page/About';

describe('About component', () => {
   test('renders the correct content', () => {
      const { getByText } = render(<About />);
      const headingElement = getByText(/Raja Saputera/i);
      const academicBackgroundElement = getByText(/Institut Teknologi Sumatera/i);
      expect(headingElement).toBeInTheDocument();
      expect(academicBackgroundElement).toBeInTheDocument();
   });
});