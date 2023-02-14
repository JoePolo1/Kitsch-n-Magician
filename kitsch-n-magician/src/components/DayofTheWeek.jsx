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
        bgcolor: "#CBF5EF",
      }}
    >
      <Box
        sx={{
          flexGrow: 0,
          width: 239,
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          flexDirection: "column",
          pl: "1em",
          bgcolor: "#88E3D3",
          height: "3em",
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
            bgcolor: "#CAF4DA",
          }}
        >
          <a href={props.spoon_url} target="_blank">
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
            flexDirection: "column",
          }}
        >
          <p>Keep playing to match!</p>
        </Box>
      )}
    </Box>
  );
}
