import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.418))",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
