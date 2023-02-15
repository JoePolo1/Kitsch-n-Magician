import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";

export default function GlutenFreeIcon() {
  return (
    <>
      <Box
        sx={{
          pr: "5px",
          alignItems: "center",
          display: "flex",
        }}
      >
        Gluten Free{" "}
      </Box>
      <Avatar sx={{ bgcolor: "#154c79" }}>
        <FontAwesomeIcon icon={faWheatAwn} color="#96EB78" />
      </Avatar>
    </>
  );
}
