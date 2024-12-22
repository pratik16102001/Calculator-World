import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function TriangleArea() {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [sideC, setSideC] = useState("");
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
      const s = (a + b + c) / 2;
      const calculatedArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
      setArea(JSON.stringify(calculatedArea));
      setPerimeter(JSON.stringify((a + b + c)));
      setError("");
    } else {
      setError("Invalid triangle dimensions. Please ensure sides are positive and satisfy the triangle inequality.");
      setArea("");
      setPerimeter("");
    }
  };

  const handleClear = () => {
    setSideA("");
    setSideB("");
    setSideC("");
    setArea("");
    setPerimeter("");
    setError("");
  };

  return (
    <Card className="card-content">
      <CardContent>
        <Typography variant="h5" className="header-title">
          Triangle Calculator
        </Typography>
        <form>
          <Box className="box-content">
            <TextField
              label="Side A"
              type="number"
              variant="outlined"
              value={sideA}
              onChange={(e) => setSideA(e.target.value)}
              fullWidth
            />
            <TextField
              label="Side B"
              type="number"
              variant="outlined"
              value={sideB}
              onChange={(e) => setSideB(e.target.value)}
              fullWidth
            />
            <TextField
              label="Side C"
              type="number"
              variant="outlined"
              value={sideC}
              onChange={(e) => setSideC(e.target.value)}
              fullWidth
            />
            <Box className="flex-button">
              <Button variant="contained" color="primary" onClick={handleCalculate}>Calculate</Button>
              <Button variant="outlined" color="primary" onClick={handleClear}>Clear</Button>
            </Box>
          </Box>
        </form>
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: "center" }}>
            {error}
          </Typography>
        )}
        {area && perimeter && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">Area: {area} square units</Typography>
            <Typography variant="body1">Perimeter: {perimeter} units</Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}


