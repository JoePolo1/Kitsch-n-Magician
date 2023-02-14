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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCarrot, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import VeganIcon from '../Icons/Vegan';
import VegetarianIcon from '../Icons/Vegetarian';
import GlutenFreeIcon from '../Icons/GlutenFree';
import NotGlutenFreeIcon from '../Icons/NotGlutenFree';
import DairyFreeIcon from '../Icons/DairyFree';
import NotDairyFreeIcon from '../Icons/NotDairyFree';

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



export default function RecipeCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card elevation={8} 
    sx={{ 
      maxWidth: 2000, 
      marginBottom: '1.13em', 
      borderRadius: '25px', 
      borderStyle: "solid", 
      borderWidth: '5px', 
      borderColor:'#fc5149' }}>
      <Box >

      <CardHeader 
      sx={{
        mb:'.5em',
        fontSize: 12.5,
        fontWeight: "Medium",
        bgcolor:"#fc5149",
        color: "white"
      }}          
          action={
            <Button variant="contained" href={props.spoon_url} target="_blank" sx={{bgcolor: "#0F4953"}} >
            View Recipe
            </Button>
          }
          title={props.title}
          
        />


        </Box>
        <Box sx={{
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.title}
          sx={{
            width: 400,
            pl: ".5em",
            pb: "0.5em"
          }}
        />
      
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            fontSize: 'small',
            pl: "16px",
            pb:"7px",
            pr: "1em",
            alignItems: 'end'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
            pr: "5px"
          }}>
          {props.vegan 
            ? <VeganIcon /> 
            : props.vegetarian
            ? <VegetarianIcon />
            : null
            }</Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
            pr: "5px"
          }}>
          {props.gluten_free ? <GlutenFreeIcon /> : <NotGlutenFreeIcon />}
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            pr: "5px"
          }}>
          {props.dairy_free ? <DairyFreeIcon /> : <NotDairyFreeIcon />}
          </Box>
            </Box>
        
        </Box>
        

      <Box sx={{
          fontSize:'20',
          bgcolor:"#fc5149",
          width: "100%",
          display:'flex',
          justifyContent:'space-between'
        }}>
      <IconButton aria-label="add to favorites" onClick={props.onClick} 
        sx={{
          fontSize:'20',
          color: "white"
        }}>
          <Avatar sx={{ bgcolor: "#0F4953"}} aria-label="recipe">
            <FontAwesomeIcon icon={faUtensils} color="lightgrey" beat />
          </Avatar>
          Add to favourites
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Avatar sx={{ bgcolor: "#0F4953"}} aria-label="recipe">
            <FontAwesomeIcon icon={faCarrot} color="#fc5149" beat rotate-by={90} />
          </Avatar>
        </ExpandMore>
        </Box>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        <div dangerouslySetInnerHTML={{ __html: props.summary }} />
          
  
        </CardContent>
      </Collapse>
      
    </Card>
  );
}