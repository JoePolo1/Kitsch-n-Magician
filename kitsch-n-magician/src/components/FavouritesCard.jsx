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


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function FavouritesCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Box>
    <Paper elevation='12' sx={{ maxWidth: 1000, marginBottom: '1.13em' }}>
    
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        pt: '.5em'
      }}>

      <IconButton aria-label="title">
        {props.title}
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

        <CardContent sx={{maxWidth:1000}}>
          
          <div dangerouslySetInnerHTML={{ __html: props.summary }} />
          <div>Vegeterian: {props.vegeterian}</div>
          <div>Vegan: {props.vegan}</div>
          <div>Gluten Free: {props.gluten_free}</div>
          <div>Dairy Free: {props.dairy_free}</div>
            
          </CardContent>

      

        
        </Box>


    </Paper>
      
    <Button variant="contained" href={props.spoonacularSourceUrl} target="_blank" >
    View Recipe
    </Button>
    </Box>
    </>
  );
}