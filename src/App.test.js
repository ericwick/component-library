import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const componentLibrary = render(<App />);
  expect(componentLibrary).toBeTruthy();
});
