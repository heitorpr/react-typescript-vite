import { act, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';
import routes from './routes/routes';

describe('App', () => {
  it('renders Navbar component', () => {
    render(<App />);

    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeDefined();
  });

  it('renders Footer component', () => {
    render(<App />);

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeDefined();
  });

  it('renders component correctly on route change', async () => {
    render(<App />);

    routes.forEach(async (route) => {
      // It is updating the state, so we need to wrap it in an act() call
      act(() => {
        // get the route link and click it
        screen.getByRole('link', { name: route.title }).click();
      });

      // Wait for the route to change and the new component to render
      await screen.findByTestId(route.key);
    });
  });
});
