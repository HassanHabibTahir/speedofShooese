import React from "react";
import Roadmap from "../Imgaes/roadmap.png";
import { Box, Container, Typography } from "@mui/material";
const RoadMap = () => {
  return (
    <Box py={8}>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#00336A",
          fontSize: "2.5rem",
          fontWeight: "bolder",
        }}
      >
        RoadMap
      </Typography>
      <Container sx={{ display: { md: "block", xs: "none" } }}>
        <Box className="mainimg">
          {/* <img src={Roadmap} alt="img" width="100%" /> */}
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
              }}
            >
              <li>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
              }}
            >
              <li>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
              }}
            >
              <li>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box
            sx={{
              background: "#F1F1F1",
              width: "200px",
              height: "180px",
              padding: "2.7rem",
              color: "#00336A",
            }}
          >
            <li>Website creation</li>
            <li>Design of the project</li>
            <li>Team Building</li>
          </Box>
          <Box
            sx={{
              background: "#F1F1F1",
              width: "200px",
              height: "180px",
              padding: "2.7rem",
              color: "#00336A",
            }}
          >
            <li>Website creation</li>
            <li>Design of the project</li>
            <li>Team Building</li>
          </Box>
        </Box>

        {/* mobile vieww */}
      </Container>

      <Container>
        <Box sx={{ display: { md: "none", xs: "flex", overflowX: "scroll" } }}>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
                borderRadius: "1.5rem",
              }}
            >
              <h2>Q4 2022</h2>
              <hr></hr>
              <li style={{ marginTop: "2rem" }}>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
                borderRadius: "1.5rem",
              }}
            >
              <h2>Q4 2022</h2>
              <hr></hr>
              <li style={{ marginTop: "2rem" }}>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
                borderRadius: "1.5rem",
              }}
            >
              <h2>Q4 2022</h2>
              <hr></hr>
              <li style={{ marginTop: "2rem" }}>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
                borderRadius: "1.5rem",
              }}
            >
              <h2>Q4 2022</h2>
              <hr></hr>
              <li style={{ marginTop: "2rem" }}>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
            <Box
              sx={{
                background: "#F1F1F1",
                width: "200px",
                height: "180px",
                padding: "2.7rem",
                color: "#00336A",
                borderRadius: "1.5rem",
              }}
            >
              <h2>Q4 2022</h2>
              <hr></hr>
              <li style={{ marginTop: "2rem" }}>Website creation</li>
              <li>Design of the project</li>
              <li>Team Building</li>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RoadMap;
