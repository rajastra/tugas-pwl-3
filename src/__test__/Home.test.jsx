import React from 'react';
import { render } from '@testing-library/react';
import Home from '../page/Home';

describe('Home component', () => {
   test('renders the correct content', () => {
      const { getByText, getAllByRole } = render(<Home />);
      const headingElement1 = getByText(/You can call me/i);
      const headingElement2 = getByText(/Raja/i);
      const paragraphElement = getByText(/I am a web developer with a focus on the front end/i);
      const iconElements = getAllByRole('link');
      expect(headingElement1).toBeInTheDocument();
      expect(headingElement2).toBeInTheDocument();
      expect(paragraphElement).toBeInTheDocument();
      expect(iconElements.length).toEqual(4);
   });
});