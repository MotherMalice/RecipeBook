import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


//Taken from https://mui.com/material-ui/react-card/ and edited for Axios interactions.

const ActionAreaCard = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipe/${props.cardId}`);
  };

  return (
    <Card id={props.cardId} sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="Recipe Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;