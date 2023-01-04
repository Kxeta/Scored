import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dropdown from './index';


const mockList = [
    {id: 1, label: 'champs', img: 'https://cdn.sportdataapi.com/images/soccer/teams/100/6214.png'}, 
    {id: 2, label: 'champs 2', img: 'https://cdn.sportdataapi.com/images/soccer/teams/100/6215.png'}
]


test('renders Placeholder', () => {
    render(<Dropdown placeholder={'Select'} list={mockList} />);
    const placeholderElement = screen.getByText(/Select/i);
    expect(placeholderElement).toBeInTheDocument();
});

test('opens dropdown on click', async () => {
    render(<Dropdown placeholder={'Select'} list={mockList} />);
    fireEvent.click(screen.getByTestId('dropdown'))
    await waitFor(() => expect(screen.getByText(mockList[0].label)))
});
