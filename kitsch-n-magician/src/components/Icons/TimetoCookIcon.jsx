import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";

export default function TimetoCookIcon(props) {
  return (
    <>
      <Box
        sx={{
          pr: "5px",
          alignItems: "center",
          display: "flex",
        }}
      >
        Time to Cook: {props.ready_in_minutes} minutes
      </Box>
      <Avatar sx={{ bgcolor: "#154c79" }}>
        <FontAwesomeIcon icon={faClock} color="#96EB78" />
      </Avatar>
    </>
  );
}
