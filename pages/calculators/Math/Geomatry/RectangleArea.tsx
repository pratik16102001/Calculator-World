import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function RectangleArea() {

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("");
  const [perimeter, setPerimeter] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (l > 0 && w > 0) {
      setArea((l * w).toFixed(2));
      setPerimeter((2 * (l + w)).toFixed(2));
      setError("");
    } else {
      setError("Please enter positive values for length and width.");
      setArea("");
      setPerimeter("");
    }
  };

  const handleClear = () => {
    setLength("");
    setWidth("");
    setArea("");
    setPerimeter("");
    setError("");
  };

  return (
    <Card className="card-content">
      <CardContent>
        <Typography className="header-title" variant="h5">
          Rectangle Calculator
        </Typography>
        <form>
          <Box className="box-content">
            <TextField
              label="Length"
              type="number"
              variant="outlined"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              fullWidth
            />
            <TextField
              label="Width"
              type="number"
              variant="outlined"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              fullWidth
            />
            <Box className="flex-button">
              <Button variant="contained" color="primary" onClick={handleCalculate}>Calculate</Button>
              <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
            </Box>
          </Box>
        </form>
        {error && (
          <Typography
            variant="body2"
            color="error"
            sx={{ mt: 2, textAlign: "center" }}
          >
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
