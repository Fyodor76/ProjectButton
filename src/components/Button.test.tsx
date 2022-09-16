import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Button from "./Button";


test('presence of', () => {
    render(<Button/>);
    const presence = screen.getByRole("button")
    expect(presence).toBeInTheDocument()
})