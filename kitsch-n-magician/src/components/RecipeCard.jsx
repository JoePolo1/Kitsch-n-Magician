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
    <Card elevation='8' sx={{ maxWidth: 2000, marginBottom: '1.13em' }}>
      
      <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#154c79" }} aria-label="recipe">
              <FontAwesomeIcon icon={faUtensils} color="lightgrey" beat />
            </Avatar>
          }
          action={
            <Button variant="contained" href={props.spoon_url} target="_blank" >
            View Recipe
            </Button>
          }
          title={props.title}
          sx={{
            fontSize: 20,
            fontWeight: "Medium"
          }}
        />
        <div sx={{
      display: 'flex', 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        <CardMedia
          component="img"
          height="110"
          image={props.image}
          alt={props.title}
          sx={{
            width: 400
          }}
        />
        
        </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" onClick={props.onClick}>
          <FavoriteIcon />Add to favourites
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >More info
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        <div dangerouslySetInnerHTML={{ __html: props.summary }} />
          
  
        </CardContent>
      </Collapse>
    </Card>
  );
}