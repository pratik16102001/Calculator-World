import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function TimeUnit() {
  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [result, setResult] = useState("");

  const [error, setErrors] = useState(false);
  const [helperText, setHelperText] = useState("");

  const timeConversionRates: Record<string, number> = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
  };

  const handleClear = () => {
    setInputValue("");
    setSourceUnit("");
    setTargetUnit("");
    setErrors(false);
    setHelperText("");
    setResult("");
  }

  const handleSubmit = () => {
    if(inputValue.trim() === "" || sourceUnit.trim() === "" || targetUnit === ""){
      setErrors(true);
      setHelperText("Incorrect");
    }else{
      setErrors(false);
      setHelperText("");

      const valueInSeconds = Number(inputValue) * timeConversionRates[sourceUnit];
      const convertedValue = valueInSeconds / timeConversionRates[targetUnit];
      setResult(convertedValue.toFixed(2));
    }
  }

  return (
    <>
      <Card sx={{margin: "auto", mt: 4, width:"48%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontWeight: "bold"}}>
            Time Unit Converter
          </Typography>
          <form>
            <Box sx={{display: "flex", flexDirection: "row", gap: 2, justifyContent: "space-between", alignItems: "center"}}>
              <TextField
                label="Enter Value"
                type="number"
                variant="outlined"
                fullWidth
                value={inputValue}
                sx={{ flex: 1 }}
                error={error}
                helperText={helperText}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <TextField
                select
                label="From"
                fullWidth
                value={sourceUnit}
                sx={{ flex: 1 }}
                onChange={(e) => setSourceUnit(e.target.value)}
                error={error}
                helperText={helperText}
              >
                <MenuItem value="seconds">Seconds</MenuItem>
                <MenuItem value="minutes">Minutes</MenuItem>
                <MenuItem value="hours">Hours</MenuItem>
                <MenuItem value="days">Days</MenuItem>
              </TextField>
              <TextField
                select
                label="To"
                fullWidth
                value={targetUnit}  
                sx={{ flex: 1 }}
                onChange={(e) => setTargetUnit(e.target.value)}
                error={error}
                helperText={helperText}
              >
                <MenuItem value="seconds">Seconds</MenuItem>
                <MenuItem value="minutes">Minutes</MenuItem>
                <MenuItem value="hours">Hours</MenuItem>
                <MenuItem value="days">Days</MenuItem>
              </TextField>
              <Box sx={{display:"flex", flexDirection:"column", gap:"inherit"}}>
                <Button variant="contained" color="primary" sx={{ flex: 1 }} onClick={handleSubmit}>Convert</Button>
                <Button variant="outlined" color="primary" sx={{ flex: 1 }} onClick={handleClear}>Clear</Button>
              </Box>
            </Box>
          </form>
            {result !== null && result !== "" && (
              <Typography variant="h6" sx={{ marginTop:"10px", display:"flex", justifyContent:"center" }}>
                Result: {result} {targetUnit}
              </Typography>
            )}
        </CardContent>
      </Card>
    </>
  );
}
