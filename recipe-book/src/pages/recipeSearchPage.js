import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActionAreaCard from '../components/card';
import apiURL from '../apiConstants';
import SearchAppBar from '../components/appBar';
import { Grid } from '@mui/material';

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cardsData, setCardsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL + 'search');
        setCardsData(response.data);  // Store all cards data
        filterData(searchQuery, response.data);  // Initial filter based on search query
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [searchQuery]);  // Run only once on component mount

  useEffect(() => {
    filterData(searchQuery, cardsData);  // Update filteredData whenever searchQuery or cardsData changes
  }, [searchQuery, cardsData]);

  const filterData = (query, data) => {
    if (query.trim() === '') {
      setFilteredData(data);  // Show all cards when searchQuery is empty
    } else {
      const filtered = data.filter(card =>
        card.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className='Parent'>
      <SearchAppBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Grid container spacing={2} paddingTop={'1em'}>
        {filteredData.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ActionAreaCard 
              cardId={item.id} 
              title={item.title} 
              description={item.summary} 
              image={item.image} 
          />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipeSearch;
