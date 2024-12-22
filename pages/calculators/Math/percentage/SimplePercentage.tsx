import React, { useState } from "react";
import { 
  Typography, 
  Box, 
  TextField,
  CardContent,
  Button,
  InputAdornment,
  Card
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Percent } from "@mui/icons-material";


export default function SimplePercentage(){

  const [formValues, setFormValues] = useState({
    percentage: "",
    number: "",
    result: "0"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormValues({
      percentage: "",
      number: "",
      result: "0"
    });
  };

  const handleSubmit = () => {
    if(formValues.percentage.trim() === "" || formValues.number.trim() === ""){
      return false
    }else{
      // Logic For Calculator
      const number = parseFloat(formValues.number);
      const percentage = parseFloat(formValues.percentage);

      const result = (number * percentage) / 100
      setFormValues({ ...formValues, result: result.toFixed(2) });
    }
  }

  return (
    <Card>
       <CardContent>
        <form>
          <Typography variant="h5" sx={{display: "flex", alignItems:"center", justifyContent:"center", marginBottom:"6px"}}>
            Simple Percentage
          </Typography>
          <Box sx={{ display: "flex", alignItems:"center", justifyContent:"center" }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Percentage (%)"
                  name="percentage"
                  value={formValues.percentage}
                  onChange={handleChange}
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="end">
                          <Percent />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Number"
                  value={formValues.number}
                  onChange={handleChange}
                  name="number"
                  variant="outlined"
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Result"
                  name="result"
                  variant="outlined"
                  value={formValues.result}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
              </Grid>
              <Grid size={12} container justifyContent="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>Calculate</Button>
                <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}