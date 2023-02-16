import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCarrot } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import VeganIcon from "../Icons/Vegan";
import VegetarianIcon from "../Icons/Vegetarian";
import GlutenFreeIcon from "../Icons/GlutenFree";
import NotGlutenFreeIcon from "../Icons/NotGlutenFree";
import DairyFreeIcon from "../Icons/DairyFree";
import NotDairyFreeIcon from "../Icons/NotDairyFree";
import TimetoCookIcon from "../Icons/TimetoCookIcon";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      elevation={8}
      sx={{
        maxWidth: 2000,
        marginBottom: "1.13em",
        borderRadius: "25px",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "#fc5149",
        opacity: "0.982"
      }}
    >
      <Box
      sx={{
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        background: "#fc5149"
      }}>
        <Typography 
        variant="headers"
        noWrap
        component="a"
        sx={{
          fontFamily: "lobster",
          fontSize: 30,
          m: "0.5em",
          color: "white"
        }}>
         {/* variant='headers'
          sx={{
            mb: ".5em",
            fontSize: 12.5,
            fontFamily: "lobster",
            fontWeight: "Medium",
            bgcolor: "#fc5149",
            color: "white",
          }} */}
          {/* action={ */}

          {props.title}
          {/* }> */}
          
          
        </Typography>

        <Button
              variant="contained"
              href={props.spoon_url}
              target="_blank"
              sx={{ bgcolor: "#0F4953", m: "1em", borderRadius: "20px"}}
            >
              View Recipe
            </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.title}
          sx={{
            width: 400,
            pl: ".5em",
            pb: "0.5em",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "1.3em",
            pl: "16px",
            pb: "7px",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pr: "0.5em",
              pb: ".25em",
            }}
          >
            <TimetoCookIcon ready_in_minutes={props.ready_in_minutes} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pr: "0.5em",
              pb: ".25em",
            }}
          >
            {props.vegan ? (
              <VeganIcon />
            ) : props.vegetarian ? (
              <VegetarianIcon />
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pr: "0.5em",
              pb: ".25em",
            }}
          >
            {props.gluten_free ? <GlutenFreeIcon /> : <NotGlutenFreeIcon />}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pr: "0.5em",
            }}
          >
            {props.dairy_free ? <DairyFreeIcon /> : <NotDairyFreeIcon />}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: "20",
          bgcolor: "#fc5149",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          aria-label="add to My Recipes"
          onClick={props.onClick}
          sx={{
            color: "white",
          }}
        >
          <Avatar sx={{ bgcolor: "#0F4953" }} aria-label="recipe">
            <FontAwesomeIcon icon={faUtensils} color="lightgrey" beat />
          </Avatar>
          Add to My Recipes
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Avatar sx={{ bgcolor: "#0F4953" }} aria-label="recipe">
            <FontAwesomeIcon
              icon={faCarrot}
              color="#fc5149"
              beat
              rotate-by={90}
            />
          </Avatar>
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{ bgcolor: "#FF7167", color: "white", fontSize: "1.2em" }}
        >
          {/* Renders a summary and keeps HTML styling in the card */}
          <div dangerouslySetInnerHTML={{ __html: props.summary }} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
