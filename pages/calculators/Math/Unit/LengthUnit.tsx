import { 
  Box,
  Button,
  Card, 
  CardContent, 
  MenuItem, 
  TextField, 
  Typography 
} from "@mui/material";
import { useState } from "react";


export default function LengthUnit(){

  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [result, setResult] = useState("");

  const lengthUnits: Record<string, number> = {
    kilometer: 1000,
    hectometer: 100,
    decameter: 10,
    meter: 1,
    decimeter: 0.1,
    centimeter: 0.01,
    millimeter: 0.001,
  };

  const handleClear = () => {
    setInputValue("");
    setSourceUnit("");
    setTargetUnit("");
    setResult("");
  }

  const handleSubmit = () => {
    if(inputValue.trim() === "" || sourceUnit.trim() === "" || targetUnit === ""){
      return false
    }else{
      const convertedValue = (Number(inputValue) * lengthUnits[sourceUnit]) / lengthUnits[targetUnit];
      setResult(convertedValue.toFixed(2))
    }
  }

  return (
    <>
      <Card sx={{margin: "auto", mt: 4, width: "48%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontWeight: "bold"}}>
            Length Unit Converter
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
                onChange={(e) => setInputValue(e.target.value)}
              />
              <TextField
                select
                label="From"
                fullWidth
                value={sourceUnit}
                sx={{ flex: 1 }}
                onChange={(e) => setSourceUnit(e.target.value)}
              >
                <MenuItem value="millimeter">Milimeter</MenuItem>
                <MenuItem value="centimeter">Centimeter</MenuItem>
                <MenuItem value="decimeter">Decimeter</MenuItem>
                <MenuItem value="meter">Meter</MenuItem>
                <MenuItem value="decameter">Decemeter</MenuItem>
                <MenuItem value="hectometer">Hectometer</MenuItem>
                <MenuItem value="kilometer">Kilometer</MenuItem>
              </TextField>
              <TextField
                select
                label="To"
                fullWidth
                value={targetUnit}  
                sx={{ flex: 1 }}
                onChange={(e) => setTargetUnit(e.target.value)}
              >
                <MenuItem value="millimeter">Milimeter</MenuItem>
                <MenuItem value="centimeter">Centimeter</MenuItem>
                <MenuItem value="decimeter">Decimeter</MenuItem>
                <MenuItem value="meter">Meter</MenuItem>
                <MenuItem value="decameter">Decemeter</MenuItem>
                <MenuItem value="hectometer">Hectometer</MenuItem>
                <MenuItem value="kilometer">Kilometer</MenuItem>
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
  )
}