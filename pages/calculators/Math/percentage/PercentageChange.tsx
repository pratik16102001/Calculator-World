import React, { useState } from "react";
import { 
  Box,
  Button,
  Card,
  CardContent, 
  FormControl, 
  InputAdornment, 
  InputLabel, 
  MenuItem, 
  Select, 
  TextField, 
  Typography 
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Percent } from "@mui/icons-material";
import { SelectChangeEvent } from '@mui/material/Select';


export default function PercentageChange(){

  const [formValues, setFormValues] = useState({
    baseNumber: "",
    percentage: "",
    output: "0"
  });
  const [selectValue, setSelectValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectHandleChange = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value as string);
  }

  const handleClear = () => {
    setFormValues({
      baseNumber: "",
      percentage: "",
      output: "0"
    });
    setSelectValue("");
  };

  const handleSubmit = () => {
    if(formValues.baseNumber.trim() === "" || formValues.percentage.trim() === ""){  
      return false;
    }else{
      //Calculator Logic
      const baseNumber = parseInt(formValues.baseNumber);
      const percentage = parseInt(formValues.percentage);
      const answer = baseNumber * (selectValue === "increase" ? (1 + percentage / 100) : (1 - percentage / 100));
      setFormValues({ ...formValues, output: JSON.stringify(answer) })
    }
  }

  return (
    <>
      <Card style={{ marginTop:"20px" }}>
        <CardContent>
          <form>
            <Typography variant="h5" sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              Percentage Change Calculator
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:3}}>
                  <TextField
                    fullWidth
                    label="Base Number"
                    name="baseNumber"
                    variant="outlined"
                    value={formValues.baseNumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid size={{xs:12,sm:3}}>
                  <FormControl fullWidth>
                    <InputLabel>Change Type</InputLabel>
                    <Select label="Change Type" name="changeType" value={selectValue} onChange={selectHandleChange}>
                      <MenuItem value="increase">Increase</MenuItem>
                      <MenuItem value="decrease">Decrease</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs:12,sm:3}}>
                  <TextField
                    fullWidth
                    label="Percentage (%)"
                    name="percentage"
                    variant="outlined"
                    value={formValues.percentage}
                    onChange={handleChange}
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
                <Grid size={{xs:12,sm:3}}>
                  <TextField
                    fullWidth
                    label="Result"
                    name="output"
                    variant="outlined"
                    value={formValues.output}
                    onChange={handleChange}
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                  />
                </Grid>
                <Grid size={12} container justifyContent="center" sx={{ marginTop: "16px" }} spacing={2}>
                  <Grid>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Calculate</Button>
                  </Grid>
                  <Grid>
                    <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  )
}