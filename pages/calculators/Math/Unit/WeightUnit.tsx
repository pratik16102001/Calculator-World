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


export default function WeightUnit(){

  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [result, setResult] = useState("");

  const weightUnits: Record<string, number> = {
    nanogram: 0.000000001,
    microgram: 0.000001,
    miligram: 0.001,
    gram: 1,
    kilogram: 1000,
    tonne: 1000000,
    megatonne: 1000000000000,
    gigatonne: 1000000000000000
  }

  const handleClear = () => {
    setInputValue("");
    setSourceUnit("");
    setTargetUnit("");
    setResult("");
  }

  const handleSubmit = () => {
    if(inputValue.trim() === "" || sourceUnit.trim() === "" || targetUnit === ""){
      return false;
    }else{
      const convertedValue = (Number(inputValue) * weightUnits[sourceUnit]) / weightUnits[targetUnit];
      setResult(JSON.stringify(convertedValue))
    }
  }

  return (
    <>
      <Card sx={{margin: "auto", mt: 4, width:"48%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontWeight: "bold"}}>
            Weight Unit Converter
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
                <MenuItem value="nanogram">NanoGram</MenuItem>
                <MenuItem value="microgram">MicroGram</MenuItem>
                <MenuItem value="miligram">MiliGram</MenuItem>
                <MenuItem value="gram">Gram</MenuItem>
                <MenuItem value="kilogram">KiloGram</MenuItem>
                <MenuItem value="tonne">Tonne</MenuItem>
                <MenuItem value="megatonne">MegaTonne</MenuItem>
                <MenuItem value="gigatonne">GigaTonne</MenuItem>
              </TextField>
              <TextField
                select
                label="To"
                fullWidth
                value={targetUnit}  
                sx={{ flex: 1 }}
                onChange={(e) => setTargetUnit(e.target.value)}
              >
                <MenuItem value="nanogram">NanoGram</MenuItem>
                <MenuItem value="microgram">MicroGram</MenuItem>
                <MenuItem value="miligram">MiliGram</MenuItem>
                <MenuItem value="gram">Gram</MenuItem>
                <MenuItem value="kilogram">KiloGram</MenuItem>
                <MenuItem value="tonne">Tonne</MenuItem>
                <MenuItem value="megatonne">MegaTonne</MenuItem>
                <MenuItem value="gigatonne">GigaTonne</MenuItem>
              </TextField>
              <Box className="flex-button">
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