import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from '../page/Contact';

describe('Contact component', () => {
   test('renders the correct content', () => {
      const { getByLabelText, getByText } = render(<Contact />);
      const nameLabel = getByLabelText('Name:');
      const emailLabel = getByLabelText('Email:');
      const messageLabel = getByLabelText('Message:');
      const submitButton = getByText('Submit');
      expect(nameLabel).toBeInTheDocument();
      expect(emailLabel).toBeInTheDocument();
      expect(messageLabel).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
   });

   test('submits the form correctly', () => {
      const { getByLabelText, getByText } = render(<Contact />);
      const nameInput = getByLabelText('Name:');
      const emailInput = getByLabelText('Email:');
      const messageInput = getByLabelText('Message:');
      const submitButton = getByText('Submit');
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
      fireEvent.click(submitButton);
   });
});