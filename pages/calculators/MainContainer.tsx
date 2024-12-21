import { Box } from "@mui/material";
import MathCalculators from "./Math/MathCalculators";
import FitnessCalculators from "./Fitness/FitnessCalculators";
import FiananceCalculators from "./Fianance/FiananceCalculators";

export default function MainContent(){
  return (
    <>
      <Box className="box">
        <MathCalculators/>
        {/* <FitnessCalculators/> */}
        {/* <FiananceCalculators/> */}
      </Box>
    </>
  )
}