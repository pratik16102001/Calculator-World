import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box 
} from "@mui/material";

export default function CircleArea() {

  const [radius, setRadius] = useState("");
  const [diameter, setDiameter] = useState("");
  const [circumference, setCircumference] = useState("");
  const [area, setArea] = useState("");

  const handleCalculate = () => {
    let r = 0;

    if (radius) {
      r = parseFloat(radius);
    } else if (diameter) {
      r = parseFloat(diameter) / 2;
    } else if (circumference) {
      r = parseFloat(circumference) / (2 * Math.PI);
    }

    if (r > 0) {
      setCircumference((2 * Math.PI * r).toFixed(10));
      setArea((Math.PI * r * r).toFixed(10));
    }
  };

  const handleClear = () => {
    setRadius("");
    setDiameter("");
    setCircumference("");
    setArea("");
  };

  return (
    <Card className="card-content">
      <CardContent>
        <Typography variant="h5" className="header-title">
          Circle Calculator
        </Typography>
        <form>
          <Box className="box-content"> 
            <TextField
              label="Radius (R)"
              type="number"
              variant="outlined"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              fullWidth
            />
            <TextField
              label="Diameter (D)"
              type="number"
              variant="outlined"
              value={diameter}
              onChange={(e) => setDiameter(e.target.value)}
              fullWidth
            />
            <TextField
              label="Circumference (C)"
              type="number"
              variant="outlined"
              value={circumference}
              onChange={(e) => setCircumference(e.target.value)}
              fullWidth
            />
            <Box className="flex-button">
              <Button variant="contained" color="primary" sx={{ flex: 1 }} onClick={handleCalculate}>Convert</Button>
              <Button variant="outlined" color="primary" sx={{ flex: 1 }} onClick={handleClear}>Clear</Button>
            </Box>
          </Box>
        </form>
        {area && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1"><b>Circumference</b>: {circumference} units</Typography>
            <Typography variant="body1"><b>Area</b>: {area} square units</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
