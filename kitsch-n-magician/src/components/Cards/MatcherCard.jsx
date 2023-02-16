import * as React from "react";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Box, Divider, Paper } from "@mui/material";
import VegetarianIcon from "../Icons/Vegetarian";
import VeganIcon from "../Icons/Vegan";
import GlutenFreeIcon from "../Icons/GlutenFree";
import NotGlutenFreeIcon from "../Icons/NotGlutenFree";
import DairyFreeIcon from "../Icons/DairyFree";
import NotDairyFreeIcon from "../Icons/NotDairyFree";
import Slide from "@mui/material/Slide";
import useToken from "../../hooks/useToken";
import axios from "axios";
import "./MatcherCard.scss";

// You'll need to replace some of the fake code here and replace the vegetarian code with other card's code

export default function MatcherCard(props) {
  // State to hide the card on clicking Yes or No
  const [checked, setChecked] = useState(true);
  const getToken = useToken().getToken();
  const [gameOver, setGameOver] = useState(false);

  const removeGame = () => {
    axios
      .post("/removeGame", {
        userId: getToken,
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const voteYes = () => {
    setChecked((prev) => !prev);
    if (props.gameCount !== props.gameRecipesCount && props.useExisting) {
      props.setGameCount((prev) => prev + 1);
      console.log(
        "Clicked yes, gamerecipes is",
        props.gameRecipesCount,
        "gamecount",
        props.gameCount
      );
    } else if (
      props.gameCount === props.gameRecipesCount &&
      props.useExisting
    ) {
      setGameOver(true);
    }

    axios
      .post("/voteYes", {
        userId: getToken,
        recipeId: props.recipeId,
      })
      .then((response) => {
        if (props.useExisting && response.data !== "game deleted") {
          props
            .setMeal((prev) => {
              return [...prev, response.data[0]];
            })
            .then(() => {
              if (gameOver) {
                removeGame();
              }
            });
        }
      });
  };

  const voteNo = () => {
    setChecked((prev) => !prev);

    if (props.gameCount !== props.gameRecipesCount * 2) {
      props.setGameCount((prev) => prev + 1);

      console.log("Clicked yes, gamecount is", props.gameCount);
    } else if (
      props.gameCount === props.gameRecipesCount &&
      props.useExisting
    ) {
      setGameOver(true);
    }
    console.log("You just clicked No on props.recipeId: ", props);

    axios
      .post("/voteNo", {
        userId: getToken,
        recipeId: props.recipeId,
      })
      .then(() => {
        if (gameOver) {
          removeGame();
        }
      });
  };

  return (
    <Slide direction="up" timeout={500} in={checked} mountOnEnter unmountOnExit>
      <Box sx={{ pb: 150 }}>
        <Paper
          elevation={12}
          sx={{ maxWidth: 1000, marginBottom: "1.13em", borderRadius: "25px", border: '4px solid #fc5148',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              pt: ".5em",
              bgcolor: "#fc5148",
              borderRadius: "20px 20px 0 0",
              color: 'white'
            }}
          >
            <IconButton aria-label="title">
              <div class='titles'>
              <Box sx={{ pl: ".6em", color: 'white', fontSize: '1.2em', pb: '.2em' }}>{props.title}</Box>
              </div>
            </IconButton>
            <IconButton aria-label="title">
            <div class='titles'>
            <Box sx={{pr: ".6em", color: 'white', fontSize: '1.2em', pb: '.2em' }}>Ready in {props.ready_in_minutes} minutes!</Box>
            </div>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'space-between'
              }}
            >
              <CardMedia
                component="img"
                image={props.image}
                alt={props.title}
                sx={{
                  maxWidth: 900,
                  maxHeight: 300,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  pt: "16px",
                  pl: "16px",
                  pb: "16px"
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "small",
                  justifyContent: "space-evenly",
                  pl: "16px",
                  pb: "7px",
                  fontSize: '1.1em',
                  bgcolor: "#fc5148",
                  pt: '0.5em',
                  pr: '0.25em',
                  borderRadius: "0 25px 0 0"
                }}
              >
                {props.vegan ? (
                  <VeganIcon />
                ) : props.vegetarian ? (
                  <VegetarianIcon />
                ) : null}
                <Box
                  sx={{
                    pr: "5px",
                  }}
                ></Box>
                {props.gluten_free ? <GlutenFreeIcon /> : <NotGlutenFreeIcon />}
                <Box
                  sx={{
                    pr: "5px",
                  }}
                ></Box>
                {props.dairy_free ? <DairyFreeIcon /> : <NotDairyFreeIcon />}
              </Box>
            </Box>
            <CardContent sx={{ maxWidth: 500 }}>
              <div dangerouslySetInnerHTML={{ __html: props.summary }} />
            </CardContent>
          </Box>
        </Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 1000,
          }}
        >
          {/* <Button
            variant="contained"
            size='large'
            sx={{ color: "white", fontWeight: 900, bgcolor: "red" }}
            onClick={voteNo}
            checked={checked}
          >
            NOPE
          </Button> */}
          <button class="nope"
            onClick={voteNo}
            checked={checked}>
            Nope
          </button>
          <button class="yes"
            onClick={voteYes}
            checked={checked}>
            Let's Eat!
          </button>
          {/* <Button
            variant="contained"
            sx={{ 
              color: "white", 
              fontWeight: 900, 
              bgcolor: "#138808" }}
            onClick={voteYes}
            checked={checked}
          >
            YES!
          </Button> */}
        </Box>
      </Box>
    </Slide>
  );
}
