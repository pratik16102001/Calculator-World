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

export default function TemperatureUnit(){

  const celsius = "celsius";
  const farenhit = "feranhit";
  const kelvin = "kelvin";

  const [inputValue, setInputValue] = useState("");
  const [sourceUnit, setSourceUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");
  const [result, setResult] = useState("");

  const handleCalculation = (sourceUnit: string, targetUnit: string) => {

    if(sourceUnit == celsius && targetUnit == farenhit){
      return (Number(inputValue) * (9/5)) + 32
    }else if(sourceUnit == celsius && targetUnit == kelvin){
      return (Number(inputValue) + 273.15)
    }else if(sourceUnit == farenhit && targetUnit == celsius){
      return (Number(inputValue) - 32) * (5/9)
    }else if(sourceUnit == farenhit && targetUnit == kelvin){
      return (Number(inputValue) - 32) * (5/9) + 273.15
    }else if(sourceUnit == kelvin && targetUnit == celsius){
      return Number(inputValue) - 272.15
    }else if(sourceUnit == kelvin && targetUnit == farenhit){
      return (Number(inputValue) - 273.15) * (9/5) + 32
    }
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
      const finalConvertedValue = handleCalculation(sourceUnit, targetUnit);
      setResult(JSON.stringify(finalConvertedValue))
    }
  }

  return (
    <>
      <Card sx={{margin: "auto", mt: 4, width:"48%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", fontWeight: "bold"}}>
            Temperature Unit Converter
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
                <MenuItem value="feranhit">Farenhits</MenuItem>
                <MenuItem value="celsius">Celsius</MenuItem>
                <MenuItem value="kelvin">Kelvin</MenuItem>
              </TextField>
              <TextField
                select
                label="To"
                fullWidth
                value={targetUnit}  
                sx={{ flex: 1 }}
                onChange={(e) => setTargetUnit(e.target.value)}
              >
                <MenuItem value="feranhit">Farenhits</MenuItem>
                <MenuItem value="celsius">Celsius</MenuItem>
                <MenuItem value="kelvin">Kelvin</MenuItem>
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