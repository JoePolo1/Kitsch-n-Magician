import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Divider, Paper } from '@mui/material';
import VegetarianIcon from './Icons/Vegetarian';
import NotVegetarianIcon from './Icons/NotVegetarian';
import VeganIcon from './Icons/Vegan';
import GlutenFreeIcon from './Icons/GlutenFree';
import NotGlutenFreeIcon from './Icons/NotGlutenFree';
import DairyFreeIcon from './Icons/DairyFree';
import NotDairyFreeIcon from './Icons/NotDairyFree';
import NotVegan from './Icons/NotVegan';
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from '@mui/material/Slide';
import Switch from "@mui/material/Switch";

// You'll need to replace some of the fake code here and replace the vegetarian code with other card's code

export default function MatcherCard(props) {

  // State to hide the card on clicking Yes or No
  const [checked, setChecked] = useState(true)

  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  return(
<Slide direction="up" timeout={500} in={checked} mountOnEnter unmountOnExit>
    <Box>
      
      <Paper elevation={12} sx={{ maxWidth: 1000, marginBottom: '1.13em' }}>
      
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        pt: '.5em'
      }}>

      <IconButton aria-label="title">
      <Box>
          {props.title}
          </Box>
          
      </IconButton>
        

      <IconButton aria-label="title">
        Ready in {props.ready_in_minutes} minutes!
      </IconButton>
          
      </Box>
        

        <Box sx={{
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.title}
          sx={{maxWidth:900,
            maxHeight: 300,
            display:"flex",
            flexDirection: "row",
            alignItems: 'center',
            alignContent: 'center',
            pt: "16px",
            pl: "16px"
          }}
        />
        <Divider sx={{pt:'0.5em', mb: '0.5em'}}></Divider>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            fontSize: 'small',
            pl: "16px",
            pb:"7px"
          }}>
            
            {props.vegan 
            ? <VeganIcon /> 
            : props.vegetarian
            ? <VegetarianIcon />
            : null
            }
            <Box sx={{
            pr: "5px"
          }}></Box>
            {props.gluten_free ? <GlutenFreeIcon /> : <NotGlutenFreeIcon />}
            <Box sx={{
            pr: "5px"
          }}></Box>
            {props.dairy_free ? <DairyFreeIcon /> : <NotDairyFreeIcon />}
          </Box>
        </Box>
        <CardContent sx={{maxWidth:500}}>
          
          <div dangerouslySetInnerHTML={{ __html: props.summary }} />
          
        </CardContent>

      

        
        </Box>
        
      
    </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1000}}  >
    <Button variant="contained" sx={{color:"#EB5A47", fontWeight:900, bgcolor: "#154c79"}} onClick={handleChange} checked={checked} >
    NOPE
    </Button>
    <Button variant="contained" sx={{color:"#96EB78", fontWeight:900, bgcolor: "#154c79"}} onClick={handleChange} checked={checked} >
    YES!
    </Button>
    
    </Box>
    
    </Box>
    </Slide>
  )
}