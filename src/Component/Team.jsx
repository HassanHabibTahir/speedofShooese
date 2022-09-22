import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import team1 from "../Imgaes/team1.png";
import team2 from "../Imgaes/team2.png";
import team3 from "../Imgaes/team3.png";
import team4 from "../Imgaes/team4.png";
import team5 from "../Imgaes/team5.png";

const Team = () => {
  const teamData = [
    {
      id: "1",
      name: "Leo",
      category: "Bussiness Mgr",
      imgurl: team1,
    },
    {
      id: "2",
      name: "Clair",
      category: "Designer",
      imgurl: team2,
    },
    {
      id: "3",
      name: "Lian",
      category: "Cto",
      imgurl: team3,
    },
    {
      id: "4",
      name: "Thao",
      category: "Cmo",
      imgurl: team4,
    },
    {
      id: "5",
      name: "Leo",
      category: "Advisor",
      imgurl: team5,
    },
  ];

  return (
    <Box py={5}>
      <Container>
        <Typography variant="h3" sx={{ color: "#00336A", textAlign: "center" }}>
          Meet Our Team
        </Typography>
        <Box py={4} sx={{ display: { md: "block", xs: "none" } }}>
          <Container maxWidth="md">
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {teamData.map((item, i) => {
                return (
                  <Grid item md={4} xs={12} key={i}>
                    <Box className="main ">
                      <Box className="containers" sx={{ textAlign: "center" }}>
                        <img
                          src={item.imgurl}
                          alt="Avatar"
                          className="image App"
                        />
                        <Box className="overlay">
                          <Box className="text" sx={{ fontSize: "0.8rem" }}>
                            {item.name}
                            <br />
                            {item.category}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        {/*-----------------------------------------mscreen  */}

        <Box
          py={4}
          sx={{ display: { md: "none", xs: "flex", overflowX: "scroll" } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {teamData.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    width: "220px",
                    height: "300px",
                    backgroundColor: "#F1F1F1",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    marginRight: "2rem",
                    padding: "4rem 2rem",
                    borderRadius: "1rem",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <img
                        src={item.imgurl}
                        alt="Avatar"
                        style={{ width: "250px" }}
                      />
                      <Box>
                        <Typography variant="h4" sx={{ color: "#5DBBE2" }}>
                          {item.name}
                          <br></br>
                          <span
                            style={{ color: "#A8A8A8", fontSize: "1.5rem" }}
                          >
                            {item.category}
                          </span>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
