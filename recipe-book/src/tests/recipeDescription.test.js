import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RecipeDescription from '../pages/recipeDescriptionPage';

jest.mock('axios');

describe('recipeDescription', () => {
  it('renders description page based on mocked API response', async () => {
    const mockCardId = '1'; 
    const mockMatch = { params: { cardId: mockCardId } };
    const mockResponse = {
            image: 'https://example.com/image1.jpg',
            description: 'Description for Mock 1',
            summary: 'Summary for Mock 1',
            ingredients: 'Secondary description for Mock: 5',
    };
    axios.get.mockResolvedValueOnce({ data: mockResponse });

    // Render Description Page
    render(
        <MemoryRouter initialEntries={[`/recipe/${mockCardId}`]}>
            <Routes>
                <Route path="/recipe/:cardId" element={<RecipeDescription match={mockMatch} />}/>
            </Routes>
        </MemoryRouter>
    );

    await waitFor(() => {  
        expect(screen.getByText('Steps: Description for Mock 1')).toBeInTheDocument();
      });

  });
});
