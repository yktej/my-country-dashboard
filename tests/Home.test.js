import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

test('renders home page', () => {
    render(<Home />);
    expect(screen.getByText(/search/)).toBeInTheDocument();
});
