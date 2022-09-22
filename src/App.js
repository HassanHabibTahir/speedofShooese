import "./App.css";
import Header from "./Component/Header";
import Speed from "./Component/Speed";
import { Box } from "@mui/material";
import Exercise from "./Component/Exercise";
import MobileSection from "./Component/MobileSection";
import Team from "./Component/Team";
import Markeeting from "./Component/Markeeting";
import Circle from "./Component/Circle";
import RoadMap from "./Component/RoadMap";
// import Drawer from "./Component/Drawer";
import DrawerMui from "./Component/DrawerMui";
function App() {
  return (
    <Box>
      <Header />
      <Speed />
      <Exercise />
      <MobileSection />
      <Circle />
      <RoadMap />
      <Team />

      <Markeeting />
    </Box>
  );
}

export default App;
