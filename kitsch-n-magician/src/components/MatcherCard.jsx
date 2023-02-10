import * as React from 'react';
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

// You'll need to replace some of the fake code here and replace the vegetarian code with other card's code

export default function MatcherCard() {

  return(

    <Box>
      <Paper elevation='12' sx={{ maxWidth: 1000, marginBottom: '1.13em' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        pt: '.5em'
      }}>

      <IconButton aria-label="title">
        Joe's Potato Chips
      </IconButton>
        

      <IconButton aria-label="title">
        Ready in 2 minutes!
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
          image="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTiUcnsoYYl0Ru6LMgUxDeiV1O4u0hgpDLyAl6hVlWQxSLfm79OEILX-DbNgEHsUkvf"
          alt="Joe's Chips"
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
            <Box sx={{
              display:'flex',
              flexDirection:'row',
              pr: "5px"
            }}>
              <VeganIcon /> 
            </Box>
            
            <NotGlutenFreeIcon />
            
          </Box>
        </Box>
        <CardContent sx={{maxWidth:500}}>
          
          <p> Joe's Chips are the best chips. Try them today!

          Bushwick aesthetic air plant, affogato celiac ethical taiyaki enamel pin swag cornhole typewriter. Whatever sartorial health goth lyft cred forage green juice mumblecore iPhone leggings. Pork belly DIY humblebrag, tonx ramps single-origin coffee taiyaki disrupt JOMO pinterest mlkshk mustache copper mug messenger bag live-edge. 
          </p>
          
          </CardContent>

      

        
        </Box>


    </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: 1000}}  >
    <Button variant="contained" href="www.google.ca"target="_blank" sx={{color:"#EB5A47", fontWeight:900, bgcolor: "#154c79"}} >
    NOPE
    </Button>
    <Button variant="contained" href="www.google.ca"target="_blank" sx={{color:"#96EB78", fontWeight:900, bgcolor: "#154c79"}} >
    YES!
    </Button>
    </Box>
    </Box>
  )
}