import { Box, Container } from "@mui/material";
import React from "react";

function Fasilitas() {
  return (
    <Box p={1}>
      <Container
        sx={{
          backgroundColor: "#c8a97e",
          marginTop: "40px",
          border: "solid 1px #c8a97e",
          padding: "10px",
          borderRadius: "15px",
          position: "relative",
          maxWidth: {
            xs: "100%",
            md: "50%",
          },
        }}
      >
        <Box color="#fff" p={1} align="center">
          FASILITAS
          <br />
        </Box>
        <Box align="center">
          Aqua Gym,
          BBQ Pavilion,
          Taman bermain
        </Box>
      </Container>
    </Box>
  );
}

export default Fasilitas;
