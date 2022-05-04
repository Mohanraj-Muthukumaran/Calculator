import { render, screen } from '@testing-library/react';
import Display from './Display';

test('renders display without warning', () => {
    render(<Display result="" calc=""/>);
    const displayElement = screen.getByText(/0/g);
    expect(displayElement).toBeInTheDocument();
});

test('renders display with multiple dots warning if multiple dots clicked', () => {
    render(<Display multipleDots="true"/>);
    const displayElement = screen.getByText(/MULTIPLE DOTS WARNING/g);
    expect(displayElement).toBeInTheDocument();
});

test('renders display with invalid operator warning if invalid operations performed', () => {
    render(<Display invalidOperatorUsage="true"/>);
    const displayElement = screen.getByText(/INVALID OPERATOR USAGE/g);
    expect(displayElement).toBeInTheDocument();
});


// test('renders display with result and calc value for acceptable inputs', () => {
//     render(<Display result="1" calc="1"/>);
//     const displayElement = screen.getByText(/\(1\)1/g);
//     expect(displayElement).toBeInTheDocument();
// });



