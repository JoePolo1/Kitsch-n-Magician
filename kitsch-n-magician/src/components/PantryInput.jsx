import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function PantryInput(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="#154c79"
        sx={{ mr: 4, my: 8 }}
        fontSize="28"
        opacity={0.9}
      />
      <form onSubmit={props.onSubmit}>
        <TextField
          id="input-with-sx"
          label="Add Items to your Pantry"
          variant="standard"
          onChange={props.onChange}
          value={props.value}
          sx={{ width: 206 }}
        />
      </form>
    </Box>
  );
}
