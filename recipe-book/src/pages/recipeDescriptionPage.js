import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import BasicSelect from '../components/dropDown';
import apiURL from '../apiConstants';
import { useParams } from 'react-router-dom';
import ButtonAppBar from '../components/buttonAppBar';

/*
I will have to implement the dropdown multiplication of ingredients at another time.
Currently it is breaking the listing of ingredients, as it needs to parse a 
string and increase the batch numbers accordingly.

Unfortunately, I do not have the time to implement this for the assessment, I also am fairly certain 
it will break when fractions are involved. i.e. 1/4 cup, so for now it is not being used.
*/

const RecipeDescription = () => {
    const { cardId } = useParams()
    const [dropdownValue, setDropdownValue] = useState(1);
    // const [multipliedValue, setMultipliedValue] = useState(1);
    const [data, setData] = useState({}); 
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(apiURL + `recipe/${cardId}?dropdown=${dropdownValue}`);
            setData(response.data);
            // calculateMultipliedValues(response.data.ingredients);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        // const calculateMultipliedValues = (ingredients) => {
        //     const regex = /(\d+)/g;
        //     const matches = ingredients.match(regex);
    
        //     if (matches) {
        //         const multiplied = {};
        //         matches.forEach((match) => {
        //         multiplied[match] = parseInt(match, 10) * dropdownValue; // Multiply each matched number by dropdown value
        //     });
        //     setMultipliedValue(multiplied);
        //     }
        // };
        // if(data.ingredients){
        //     calculateMultipliedValues(data.ingredients);
        // }
        fetchData();
    }, [dropdownValue, data.ingredients, cardId]);

    const handleDropdownChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setDropdownValue(value);
    };

    return (
        <div>
            <ButtonAppBar cardId={cardId} edbutton={'Edit'}/>
            <Grid container spacing={3} paddingTop={'1em'}>

                <Grid item xs={12} sm={6}>
                    <img src={data.image} alt="recipeimage" style={{ maxWidth: '25em', maxHeight: '25em', minHeight: '25em', minWidth: '25em' }} />
                </Grid>

                <Grid item xs={12} sm={6} alignContent={'center'}>
                    <Grid container spacing={2} paddingRight={'1em'} >
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                {data.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <BasicSelect label="Batch" onChange={handleDropdownChange} />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Summary: {data.summary}                         
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {data.ingredients && (
            <Typography variant="body1">
            Ingredients:
                {/* {Object.keys(multipliedValue).map((key) => (
                    <span key={key}>
                    {data.ingredients.replace(new RegExp(key,'g'), multipliedValue[key])}
                    </span>
                ))}    */}
                {data.ingredients}
            </Typography> )}
            <Typography variant="body1">
                Steps: {data.description}
            </Typography>
        </div>
    );
    };

export default RecipeDescription;
