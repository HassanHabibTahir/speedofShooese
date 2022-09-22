import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import speed from "../Imgaes/speed.png";
import men from "../Imgaes/men.png";
const Speed = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
        marginTop: "1rem",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box py={10} className="App">
              <img src={men} alt="men" width="90%"></img>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            {/* <Box sx={{ paddingTop: "5rem" }}>
              <Typography variant="h1" sx={{ color: "white" }}>
                Speed
                <span>
                  <sub style={{ color: "black", fontSize: "2rem" }}>
                    of light
                  </sub>
                </span>
              </Typography>
              <Typography
                variant="h1"
                sx={{ color: "white", paddingLeft: "5rem" }}
              >
                <sup style={{ color: "black", fontSize: "2rem" }}>in your</sup>
                Shoes
              </Typography>
            </Box> */}
            <Box
              sx={{
                textAlign: { md: "left", xs: "center" },
                paddingTop: { md: "10rem", xs: "1rem" },
                paddingBottom: { md: "0", xs: "4rem" },
              }}
            >
              <img src={speed} alt="" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Speed;
