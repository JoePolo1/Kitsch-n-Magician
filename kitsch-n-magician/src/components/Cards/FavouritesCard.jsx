import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Box, Paper } from "@mui/material";
import VegetarianIcon from "../Icons/Vegetarian";
import VeganIcon from "../Icons/Vegan";
import GlutenFreeIcon from "../Icons/GlutenFree";
import NotGlutenFreeIcon from "../Icons/NotGlutenFree";
import DairyFreeIcon from "../Icons/DairyFree";
import NotDairyFreeIcon from "../Icons/NotDairyFree";
import Avatar from "@mui/material/Avatar";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FavouritesCard(props) {

  return (
    <>
      <Box>
        <Paper
          elevation={12}
          sx={{
            maxWidth: 1000,
            marginBottom: "1.13em",
            borderRadius: "32px",
            borderStyle: "solid",
            borderWidth: "5px",
            borderColor: "#fc5148",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              pt: ".5em",
              borderBottom: 4,
              borderColor: "#fc5148",
              backgroundColor: "#fc5149",
              borderRadius: "25px 25px 0 0",
            }}
          >
            <IconButton
              aria-label="title"
              sx={{ pl: ".6em", color: "white", styled: "bold" }}
            >
              {/* FIX ME BEFORE DEMO!!!! */}
              <Box class='titles' 
              sx={{ 
                display: "flex", 
                flexDirection: 'row',
                // alignContent: "center", 
                alignItems: "center", 
                fontFamily: "lobster"
                }}>
            <Avatar 
            sx={{ 
              bgcolor: "#0F4953", 
              mr: ".5em" 
              }} 
              aria-label="recipe">
              <FontAwesomeIcon icon={faUtensils} color="lightgrey" beat />
            </Avatar>
              {props.title}
              </Box>
            </IconButton>
            <IconButton
              aria-label="title"
              sx={{ 
                pl: ".6em", 
                color: "white", 
                styled: "bold" 
              }}
            >
              <div class='titles'>
              Ready in {props.ready_in_minutes} minutes!
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
                justifyContent: 'space-between',
                backgroundColor:'#caf4da',
                borderRadius: "25px"
              }}
            
            >
              <CardMedia
                component="img"
                image={props.image}
                alt={props.title}
                sx={{
                  maxWidth: 900,
                  maxHeight: 300,
                  backgroundColor:'white',
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  pt: "16px",
                  pl: "16px",
                  pb: "16px",
                  
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "small",
                  justifyContent: "space-evenly",
                  pt: "7px",
                  borderTop: 4,
                  borderRight: 4,
                  borderRadius: "0px 25px 0px 25px",
                  // borderColor: "#fc5149",
                  borderStyle:"solid",
                  borderBottom: 0,
                  borderLeft: 0,
                  borderColor: '#fc5148',
                  backgroundColor: "#fc5149",
                  pl: "16px",
                  pb: "7px",
                  fontSize: '0.9em',
                  color: "white",
                  fontFamily: 'orienta', 
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
            <CardContent 
            sx={{ 
              maxWidth: 650,  
              backgroundColor:'white', 
              borderRadius: '0px 0px 25px 0px',
              fontFamily: 'orienta',
              pb: 0,}}>
              <div dangerouslySetInnerHTML={{ __html: props.summary }} />
            </CardContent>
          </Box>
        </Paper>
        <Button
          variant="contained"
          href={props.spoonacularSourceUrl}
          target="_blank"

          sx={{ bgcolor: "#154c79",
          fontSize: '1.1em',
          fontFamily: 'orienta', 
        }}
        >
          View Recipe
        </Button>
      </Box>
    </>
  );
}
