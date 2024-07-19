import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Taken from https://mui.com/material-ui/react-app-bar/ and edited.

const ButtonAppBar = ({cardId, edbutton, editmode, onSave}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    if(editmode === true){
      onSave();
    }
    else {
      navigate(`/recipe/${cardId}/edit`)
    }
  };

  const handleBackToSearch = () => {
    if(editmode === true){
      navigate(`/recipe/${cardId}`)
    } else {
      navigate(`/`)
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      sx={{bgcolor:'white'}}
      position="static"
      >
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            fontFamily="inter"
            fontWeight="bold"
            color="#D74632"
            sx={{ flexGrow: 0.25,
                paddingRight:"5em",
                display: { xs: 'none', sm: 'block' } }}
          >
            Recipe Book
          </Typography>
          <Box sx={{ display: 'flex', gap: '1em' }}>
            <Button 
            variant="contained" 
            onClick={handleBackToSearch}
            >
              Back
            </Button>
            <Button 
            variant="contained" 
            onClick={handleEdit}
            >
            {edbutton}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;