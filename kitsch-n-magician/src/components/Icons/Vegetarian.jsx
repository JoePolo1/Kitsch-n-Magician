import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";

export default function VegetarianIcon() {
  return (
    <>
      <Box
        sx={{
          pr: "5px",
          alignItems: "center",
          display: "flex",
        }}
      >
        Vegetarian{" "}
      </Box>
      <Avatar sx={{ bgcolor: "#154c79" }}>
        <FontAwesomeIcon icon={faLeaf} color="#96EB78" />
      </Avatar>
    </>
  );
}
