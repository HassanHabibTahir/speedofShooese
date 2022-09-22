import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Frame from "../Imgaes/Frame.png";
const Circle = () => {
  return (
    <Box py={8}>
      <Container sx={{ display: { md: "block", xs: "none" } }}>
        <Grid container spacing={5} px={2}>
          <Grid item md={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "120px" },
                    height: { md: "150px", xs: "120px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                  }}
                  className="cirle"
                >
                  Walk
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "120px" },
                    height: { md: "150px", xs: "120px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                  }}
                  className="cirle"
                >
                  Run
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "200px", xs: "130px" },
                    height: { md: "200px", xs: "130px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1.5rem" },
                  }}
                  className="cirle"
                >
                  Burn <br></br>Calories
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: { md: "-5rem", xs: "0rem" },
              }}
              className="frameimg"
            >
              <img src={Frame} alt="" width="100%" />
            </Box>
          </Grid>
          <Grid item md={4} xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "200px", xs: "130px" },
                    height: { md: "200px", xs: "130px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1.5rem" },
                  }}
                  className="cirle"
                >
                  Socialize
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "120px" },
                    height: { md: "150px", xs: "120px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                  }}
                  className="cirle"
                >
                  Earn
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "220px", xs: "140px" },
                    height: { md: "220px", xs: "140px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1rem" },
                  }}
                  className="cirle"
                >
                  Improve <br />
                  Your <br />
                  Health
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ---------------------------------------------------------------------------- */}
      <Container sx={{ display: { md: "none", xs: "block" } }}>
        <Grid container spacing={5} px={2}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                marginBottom: "-2rem",
                justifyContent: "center",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "70px" },
                    height: { md: "150px", xs: "70px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                  className="cirle"
                >
                  Run
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={6} sx={{ marginTop: "-2rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "80px" },
                    height: { md: "150px", xs: "80px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                  }}
                  className="cirle"
                >
                  Walk
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={6} sx={{ marginTop: "-2rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "200px", xs: "80px" },
                    height: { md: "200px", xs: "80px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1.2rem" },
                  }}
                  className="cirle"
                >
                  Socialize
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { md: "-5rem", xs: "-5rem" },
              }}
              className="frameimg"
            >
              <img src={Frame} alt="" width="70%" />
            </Box>
          </Grid>

          <Grid item md={4} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "-3rem",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "200px", xs: "90px" },
                    height: { md: "200px", xs: "90px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1.2rem" },
                  }}
                  className="cirle"
                >
                  Burn
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: "-3rem",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "150px", xs: "80px" },
                    height: { md: "150px", xs: "80px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    fontSize: "1.2rem",
                    // marginTop: "-3rem",
                  }}
                  className="cirle"
                >
                  Earn
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-4rem",
              }}
            >
              <Box className="circle1">
                <Box
                  sx={{
                    width: { md: "220px", xs: "105px" },
                    height: { md: "220px", xs: "105px" },
                    borderRadius: "50%",
                    background:
                      "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
                    textAlign: "center",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: { md: "2rem", xs: "1rem" },
                  }}
                  className="cirle"
                >
                  Improve <br />
                  Your <br />
                  Health
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Circle;
