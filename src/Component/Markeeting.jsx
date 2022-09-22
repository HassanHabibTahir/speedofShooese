import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import logos from "../Imgaes/logos.png";
import last from "../Imgaes/last.png";
const Markeeting = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h4"
          py={2}
          sx={{ textAlign: "center", color: "#0E0E0E", fontWeight: "bold" }}
        >
          Marketing Campaign
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              margin: "1.5rem 0",
              width: { md: "60%", xs: "100%" },
            }}
          >
            <img src={logos} alt="" width="100%" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box py={5} sx={{ textAlign: "center", width: { md: "60%" } }}>
            <img src={last} alt="" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Markeeting;
