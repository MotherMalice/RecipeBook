import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import RecipeSearch from '../pages/recipeSearchPage';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock Axios instance
jest.mock('axios');

describe('recipeSearchPage', () => {
  it('renders three cards based on mocked API response', async () => {
    // Mock Axios response
    const mockResponse = [
      { cardId: 1, id: 1, title: 'Card 1', summary: 'Description for Card 1', image: 'https://example.com/card1.jpg' },
      { cardId: 2, id: 2, title: 'Card 2', summary: 'Description for Card 2', image: 'https://example.com/card2.jpg' },
      { cardId: 3, id: 3, title: 'Card 3', summary: 'Description for Card 3', image: 'https://example.com/card3.jpg' }
    ];
    axios.get.mockResolvedValueOnce({ data: mockResponse });

    // Render Search Page
    render(
    <Router>
        <RecipeSearch />
    </Router>
    );

    

    // Wait for cards to be rendered
    await waitFor(() => {
        // Assert that each card title is rendered
        expect(screen.getByText('Card 1')).toBeInTheDocument();
      });
  
      await waitFor(() => {
        expect(screen.getByText('Card 2')).toBeInTheDocument();
      });
  
      await waitFor(() => {
        expect(screen.getByText('Card 3')).toBeInTheDocument();
      });

  });
});
