import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import mob1 from "../Imgaes/mob1.png";
import mob2 from "../Imgaes/mob2.png";
import mob3 from "../Imgaes/mob3.png";
import mob5 from "../Imgaes/mob5.png";

const MobileSection = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, #007AFF -11.43%, #4CB7DC 47.09%, #9DF8B6 127.28%)",
      }}
      py={8}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            overflowX: { md: "hidden", xs: "scroll" },
            width: "100%",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img src={mob1} alt="imgs" className="imgwidth" />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img src={mob2} alt="imgs" className="imgwidth" />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img src={mob3} alt="imgs" className="imgwidth" />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <img src={mob5} alt="imgs" className="imgwidth" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MobileSection;
