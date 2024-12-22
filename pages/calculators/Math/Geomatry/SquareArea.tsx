import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box 
} from "@mui/material";

export default function SquareArea() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");

  const handleCalculate = () => {
    if (side) {
      const s = parseFloat(side);
      setArea((s * s).toFixed(10));
      setPerimeter((4 * s).toFixed(10));
    }
  };

  const handleClear = () => {
    setSide("");
    setArea("");
    setPerimeter("");
  };

  return (
    <Card className="card-content">
      <CardContent>
        <Typography className="header-title" variant="h5">
          Square Calculator
        </Typography>
        <form>
          <Box className="box-content">
            <TextField
              label="Side Length"
              type="number"
              variant="outlined"
              value={side}
              onChange={(e) => setSide(e.target.value)}
              fullWidth
            />
            <Box className="flex-button">
              <Button variant="contained" color="primary" onClick={handleCalculate}>Calculate</Button>
              <Button variant="outlined" color="primary" onClick={handleClear}>Clear</Button>
            </Box>
          </Box>
        </form>
        {area && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Side Length: {side} units</Typography>
            <Typography variant="body1">Area: {area} square units</Typography>
            <Typography variant="body1">Perimeter: {perimeter} units</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}




