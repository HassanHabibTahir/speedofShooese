import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Shoe from "../Imgaes/shoe.png";
const Exercise = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  paddingLeft: { md: "6rem", xs: "0rem" },
                  paddingTop: "4rem ",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      color: "#148AF6",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      marginBottom: "2rem",
                    }}
                  >
                    Exercise
                  </Box>
                  <Box
                    mx={3}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      marginTop: "1rem",
                      backgroundColor: "#00336A",
                    }}
                  />

                  <Box
                    sx={{
                      color: "#148AF6",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Earn
                  </Box>
                  <Box
                    mx={3}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      marginTop: "1rem",
                      backgroundColor: "#00336A",
                    }}
                  />
                  <Box
                    sx={{
                      color: "#148AF6",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Exercise
                  </Box>
                </Box>
                <Typography
                  variant="p"
                  py={4}
                  sx={{
                    textAlign: "justify",
                    fontSize: { md: "1.7rem", xs: "1.2rem" },
                    lineHeight: "2.5rem",
                  }}
                >
                  Healthn is a WEB3 lifestyle app with <br></br> Social-Fi and
                  Game-Fi elements players
                  <br /> can earn rewards by walking, jogging, or
                  <br /> running outdoor.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box sx={{ textAlign: { md: "left", xs: "center" } }}>
              <img src={Shoe} width="100%"></img>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Exercise;
