import React from "react"
import {makeStyles,useTheme} from "@material-ui/styles";
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Carousel from 'react-material-ui-carousel'
import Grid from "@material-ui/core/Grid"


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


// const tutorialSteps = [
  const gameRecipes = [
  {
    title: 'Joes Potato Chips',
    image:
    "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTiUcnsoYYl0Ru6LMgUxDeiV1O4u0hgpDLyAl6hVlWQxSLfm79OEILX-DbNgEHsUkvf",
    spoon_url:"http://www.google.com",
    ready_in_minutes: 2,
    vegetarian: true,
    vegan: false,
    dairy_free:false,
    gluten_free: false,
    summary: 'Joes Chips are the best chips. Try them today! Bushwick aesthetic air plant, affogato celiac ethical taiyaki enamel pin swag cornhole typewriter. Whatever sartorial health goth lyft cred forage green juice mumblecore iPhone leggings. Pork belly DIY humblebrag, tonx ramps single-origin coffee taiyaki disrupt JOMO pinterest mlkshk mustache copper mug messenger bag live-edge.'
  },
  {
    title: 'Kentucky Fried Popcorn',
    image:
    "https://cleananddelicious.com/wp-content/uploads/2022/04/stovetop-popcorn.jpg",
    spoon_url:"http://www.telus.com",
    ready_in_minutes: 8,
    vegetarian: true,
    vegan: false,
    dairy_free:false,
    gluten_free: true,
    summary: 'Kentucky fried popcorn. Powerpoint Bunny push back guerrilla marketing. We need to aspirationalise our offerings table the discussion . A loss a day will keep you focus new economy, nor circle back, nor tribal knowledge. Accountable talk bottleneck mice, yet innovation is hot right now, so can we take this offline, so low hanging fruit. Blue sky big data, so we should have a meeting to discuss the details of the next meeting, nor lets circle back tomorrow. Shotgun approach big data. Blue money. Land the plane copy and paste from stack overflow.'
  },
  {
    title: 'Really Old Sourdough Bread',
    image:
    "https://bsstatic.mrjack.es/wp-content/uploads/2020/05/pan-masa-vieja-cab-2.jpg",
    spoon_url:"http://www.telus.com",
    ready_in_minutes: 9999,
    vegetarian: false,
    vegan: false,
    dairy_free:false,
    gluten_free: false,
    summary: 'Can we jump on a zoom low hanging fruit, or we should leverage existing asserts that ladder up to the message. We need to leverage our synergies we need to future-proof this. Drill down up the flagpole bazooka that run it past the boss jump right in and banzai attack will they wont they its all greek to me unless they bother until the end of time maybe vis a vis too many cooks over the line. Can we jump on a zoom move the needle action item.'
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
      c:"132",
    desc:"this is a TV of 32 inch not for you"
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    c:"112",
    desc:"this is a TV of 32 inch not for you"
  },
];


const useStyles = makeStyles({
  root:{
    margin:"10px 10px",
    display:"flex",
    flexDirection:"column" 
  },
  header:{
    flexGrow:1,
  },
  media:{
    height:200
  },
  paper:{
    width:300
  },
  image:{
    width:"100%"
  },
  typo:{
    textAlign:"center"
  },
  mx:{
    margin:"6px 0px"
  },
  card:{
    width:300
  }
})

export default function MatcherCarousel() {
  const classes = useStyles()
  return(
      <Carousel classeName={classes.root}>
          {
              gameRecipes.map( (item, i) => <CardSwipeable key={i} item={item}/> )
            }
      </Carousel>
  )
}

function CardSwipeable(props) {
    const classes = useStyles()
    return (
      <div classes={classes.root}>
          <Card className={`${classes.root} ${classes.card}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.item.imgPath}
              title="Contemplative Reptile"
            />
              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                  ${props.item.c}
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
                  {props.item.label}
                </Typography>
                <Typography  className={classes.typo} color="textSecondary" component="p">
                  {props.item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
      </Card>
        <Card className={`${classes.root} ${classes.card}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.item.imgPath}
              title="Contemplative Reptile"
            />
              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                  ${props.item.c}
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
                  {props.item.label}
                </Typography>
                <Typography  className={classes.typo} color="textSecondary" component="p">
                  {props.item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
      </Card>
        <Card className={`${classes.root} ${classes.card}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.item.imgPath}
              title="Contemplative Reptile"
            />
              <CardContent>
                <Typography className={classes.typo} gutterBottom variant="h6" component="h6" color="secondary">
                  ${props.item.c}
                </Typography>
                <Typography className={`${classes.typo} ${classes.mx}`} variant="h5" color="inherit" component="h3">
                  {props.item.label}
                </Typography>
                <Typography  className={classes.typo} color="textSecondary" component="p">
                  {props.item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
      </Card>
      </div>
    )
}


function RecipeSwipable(props)  {

}