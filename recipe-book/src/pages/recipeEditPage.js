import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import BasicSelect from '../components/dropDown';
import apiURL from '../apiConstants';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonAppBar from '../components/buttonAppBar';
import MultilineTextFields from '../components/descriptionBox';

/*
I will have to implement the dropdown multiplication of ingredients at another time.
Currently it is breaking the listing of ingredients, as it needs to parse a 
string and increase the batch numbers accordingly.

Unfortunately, I do not have the time to implement this for the assessment, I also am fairly certain 
it will break when fractions are involved. i.e. 1/4 cup, so for now it is not being used.
*/

const RecipeEdit = () => {
    const navigate = useNavigate();
    const { cardId } = useParams()
    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
        summary: '',
        ingredients: '',
    }); 
    console.log(data)
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(apiURL + `recipe/${cardId}`);
            setData(response.data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [data.ingredients, cardId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name + ': ' + value)
        console.log(data)
        setData(prevRecipe => ({
            ...prevRecipe,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            await axios.put(apiURL + `recipe/${cardId}/update/`, data);
            console.log('Recipe updated successfully!');
            navigate(`/recipe/${cardId}`)
        } catch (error) {
            console.log(data)
            console.error('Error updating recipe:', error);
        }
    };

    return (
        <div>
            <ButtonAppBar cardId={cardId} edbutton={'Save'} editmode={true} onSave={handleSave}/>
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
                            <BasicSelect 
                            variant='disabled' 
                            label="Batch" 
                            disabled={true}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1">
                                Summary:                         
                            </Typography>
                            <MultilineTextFields 
                            name="summary" 
                            label={'summary'}
                            value={data.summary}
                            placeholder={'summary'} 
                            onChange={handleInputChange}>
                                {data.summary}
                            </MultilineTextFields>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="body1">
                Ingredients:
            </Typography>
            {data.ingredients && (
            <MultilineTextFields 
            name="ingredients"
            value={data.ingredients}
            label={'ingredients'} 
            placeholder={'ingredients'}
            onChange={handleInputChange}>
            </MultilineTextFields> )}
            <Typography variant="body1">
                Steps:
            </Typography>
            <MultilineTextFields 
            name="description"
            label={'steps'} 
            placeholder={'steps'}
            value={data.description}
            onChange={handleInputChange}>
            </MultilineTextFields>
        </div>
    );
    };

export default RecipeEdit;
