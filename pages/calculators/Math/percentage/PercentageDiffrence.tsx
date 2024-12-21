import React, { useState } from "react";
import { 
  Box,
  Button,
  Card,
  CardContent, 
  TextField, 
  Typography 
} from "@mui/material";
import Grid from '@mui/material/Grid2'


export default function PercentageDiffrence(){

  const [formValues, setFormValues] = useState({
    number1: "",
    number2: "",
    answer: "--"
  });
  const [error, setErrors] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormValues({
      number1: "",
      number2: "",
      answer: "--"
    });
    setErrors(false);
    setHelperText("");
  };

  const handleSubmit = () => {
    if(formValues.number1.trim() === "" || formValues.number2.trim() === ""){
      setErrors(true);
      setHelperText("Incorrect");
    }else{
      setErrors(false);
      setHelperText("");

      // Calculator Logic
      const number1 = parseInt(formValues.number1);
      const number2 = parseInt(formValues.number2);

      const diffrence = number1 - number2;
      const secondDiffrence = (number1 + number2) / 2;

      const finalPercentageDiffrence = diffrence/secondDiffrence;
      setFormValues({ ...formValues, answer: JSON.stringify(finalPercentageDiffrence) })
    }
  }

  return (
    <Card style={{ marginTop:"20px" }}>
      <CardContent>
        <form>
          <Typography variant="h5" sx={{display: "flex", alignItems:"center", justifyContent:"center", marginBottom:"6px"}}>
            Percentage Diffrence
          </Typography>
          <Box sx={{ display: "flex", alignItems:"center", justifyContent:"center" }}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <TextField
                  fullWidth
                  error={error}
                  label="Number 1"
                  name="number1"
                  variant="outlined"
                  value={formValues.number1}
                  onChange={handleChange}
                  helperText={helperText}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  error={error}
                  label="Number 2"
                  name="number2"
                  variant="outlined"
                  value={formValues.number2}
                  onChange={handleChange}
                  helperText={helperText}
                />
              </Grid>
              <Grid size={4}>
                <TextField
                  fullWidth
                  label="Answer"
                  name="answer"
                  variant="outlined"
                  value={formValues.answer}
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