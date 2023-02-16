import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function DayofTheWeek(props) {
  // Defaults to "Keep playing to fill recipes" until a match is found
  const [matchFound, setmatchFound] = useState(true);

  return (
    <Box
      sx={{
        flexGrow: 0,
        width: 239,
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        flexDirection: "column",
        bgcolor: "#88e3d3",
      }}
    >
      <Box
        sx={{
          flexGrow: 0,
          width: 239,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          bgcolor: "#88E3D3",
          height: "1.5em",
        }}
      >
        <p>{props.day}:</p>
      </Box>
      {matchFound ? (
        <Box
          sx={{
            flexGrow: 0,
            width: 239,
            pt: "0.2em",
            pb: "0.2em",
            pl: "0.5em",
            display: "flex",
            alignItems: "center",
            minHeight: "3em",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: props.color,
            borderRadius: '25px',
            mt: "0.25em",
            ml: "0.25em",
            mr: "0.25em",
            boxShadow: 6,
            borderBottom: '2px solid #4E5755',
            borderRight: '2px solid #4E5755',
            fontFamily: 'orienta',
            pb: '1em',
          }}

        // {{ display: "flex", 
        // flexDirection: "column", 
        // width: "100%", maxWidth: 215, 
        // bgcolor: "#caf4da", 
        // borderRadius: '25px', 
        // mt: "0.25em", 
        // ml: "0.25em", 
        // mr: "0.25em", 
        // boxShadow: 6, 
        // borderBottom: '2px solid #4E5755', 
        // borderRight: '2px solid #4E5755'}}
        >
          <a href={props.spoon_url} target="_blank" style={{ color: props.textcolor, textDecoration: "none", fontWeight: props.textweight }}>
            {props.title}
          </a>
        </Box>
      ) : (
        <Box
          sx={{
            flexGrow: 0,
            width: 239,
            display: "flex",
            alignItems: "center",
            height: "3em",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <p>Keep playing to match!</p>
        </Box>
      )}
    </Box>
  );
}
