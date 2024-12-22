import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";

export default function SimpleFraction() {

  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setNumerator1("");
    setDenominator1("");
    setNumerator2("");
    setDenominator2("");
    setResult("");
  };

  const handleSubmit = () => {
    if (numerator1 && denominator1 && numerator2 && denominator2) {

      const numeratorNumber1 = Number(numerator1);
      const numeratorNumber2 = Number(numerator2);
      const denominatorNumber1 = Number(denominator1);
      const denominatorNumber2 = Number(denominator2);

      let res;
      switch (operation){
        case "+":
          res = `${(numeratorNumber1/denominatorNumber1) + (numeratorNumber2/denominatorNumber2)}`;
          break;
        case "-":
          res = `${(numeratorNumber1/denominatorNumber1) - (numeratorNumber2/denominatorNumber2)}`;
          break;
        case "*":
          res = `${(numeratorNumber1/denominatorNumber1) * (numeratorNumber2/denominatorNumber2)}`;
          break;
        case "/":
          res = `${(numeratorNumber1/denominatorNumber1) / (numeratorNumber2/denominatorNumber2)}`;
          break;
        default:
          res = "";
      }
      setResult(res);

    }
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "100%", padding:2}}>
      <Typography variant="h4" gutterBottom>Fraction Calculator</Typography>
      <Box sx={{boxShadow: 3, padding: 3, borderRadius: 2, bgcolor: "white", display:"flex", justifyContent:"space-evenly", gap:2}}>
        <Grid container spacing={2} display="flex" flexDirection="column">
          <Grid>
            <TextField
              label="Numerator 1"
              value={numerator1}
              onChange={(e) => setNumerator1(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid>
            <TextField
              label="Denominator 1"
              value={denominator1}
              onChange={(e) => setDenominator1(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} display="flex" flexDirection="column" justifyContent="center">
          <Grid>
            <Select value={operation} onChange={(e) => setOperation(e.target.value)} fullWidth>
              <MenuItem value="+">+</MenuItem>
              <MenuItem value="-">-</MenuItem>
              <MenuItem value="*">x</MenuItem>
              <MenuItem value="/">/</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} display="flex" flexDirection="column">
          <Grid>
            <TextField
              label="Numerator 2"
              value={numerator2}
              onChange={(e) => setNumerator2(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
          <Grid>
            <TextField
              label="Denominator 2"
              value={denominator2}
              onChange={(e) => setDenominator2(e.target.value)}
              fullWidth
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} display="flex" flexDirection="column" justifyContent="center">
          <Grid textAlign="center">
            <Typography variant="h5">=</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} display="flex" flexDirection="column" justifyContent="center">
          <Grid textAlign="center">
            <Typography variant="h5">{result}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} display="flex" flexDirection="column" justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>Calculate</Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
        </Grid>
      </Box>
      <Box sx={{boxShadow: 3, padding: 3, borderRadius: 2, bgcolor: "white", marginTop:5, width:"100%"}}>
        <h3>Understanding Fractions</h3>
        <p>
          In mathematics, a fraction is a number that represents a part of a whole. It consists of a numerator and a denominator. The numerator represents the number of equal parts of a whole, while the denominator is the total number of parts that make up said whole. 
        </p>
        <p>
          For example, in the fraction 
            <span className="frac">
              <span className="fracnum">3</span>
              <span className="fracden">8</span>
            </span>, the numerator is 3, and the denominator is 8. A more illustrative example could involve a pie with 8 slices. 1 of those 8 slices would constitute the numerator of a fraction, while the total of 8 slices that comprises the whole pie would be the denominator. 
        </p>
        <p className="">
          If a person were to eat 3 slices, the remaining fraction of the pie would therefore be <span className="frac">
              <span className="fracnum">5</span>
              <span className="fracden">8</span>
            </span>. Note that the denominator of a fraction cannot be 0, as it would make the fraction undefined. Fractions can undergo many different operations, some of which are mentioned below.
        </p>
        <h3>Addition:</h3>
        <p>Unlike adding and subtracting integers such as 2 and 8, fractions require a common denominator to undergo these operations. One method for finding a common denominator involves multiplying the numerators and denominators of all of the fractions involved by the product of the denominators of each fraction. Multiplying all of the denominators ensures that the new denominator is certain to be a multiple of each individual denominator. The numerators also need to be multiplied by the appropriate factors to preserve the value of the fraction as a whole. This is arguably the simplest way to ensure that the fractions have a common denominator. However, in most cases, the solutions to these equations will not appear in simplified form (the provided calculator computes the simplification automatically). Below is an example using this method.</p>
        <div style={{textAlign:"center"}}>
          <span className="frac"><span className="fracnum">a</span><span className="fracden">b</span></span> +
          <span className="frac"><span className="fracnum">c</span><span className="fracden">d</span></span> =
          <span className="frac"><span className="fracnum">a×d</span><span className="fracden">b×d</span></span> +
          <span className="frac"><span className="fracnum">c×b</span><span className="fracden">d×b</span></span> =
          <span className="frac"><span className="fracnum">ad + bc</span><span className="fracden">bd</span></span>
        </div>
        <div style={{textAlign:"center"}}>EX:
          <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> +
          <span className="frac"><span className="fracnum">1</span><span className="fracden">6</span></span> =
          <span className="frac"><span className="fracnum">3×6</span><span className="fracden">4×6</span></span> +
          <span className="frac"><span className="fracnum">1×4</span><span className="fracden">6×4</span></span> =
          <span className="frac"><span className="fracnum">22</span><span className="fracden">24</span></span> =
          <span className="frac"><span className="fracnum">11</span><span className="fracden">12</span></span>
        </div>
        <Typography>
          This process can be used for any number of fractions. Just multiply the numerators and denominators of each fraction in the problem by the product of the denominators of all the other fractions (not including its own respective denominator) in the problem.
        </Typography>
        <div style={{textAlign:"center"}}>EX:
          <span className="frac"><span className="fracnum">1</span><span className="fracden">4</span></span> +
          <span className="frac"><span className="fracnum">1</span><span className="fracden">6</span></span> +
          <span className="frac"><span className="fracnum">1</span><span className="fracden">2</span></span> =
          <span className="frac"><span className="fracnum">1×6×2</span><span className="fracden">4×6×2</span></span> +
          <span className="frac"><span className="fracnum">1×4×2</span><span className="fracden">6×4×2</span></span> +
          <span className="frac"><span className="fracnum">1×4×6</span><span className="fracden">2×4×6</span></span> =
          <span className="frac"><span className="fracnum">12</span><span className="fracden">48</span></span> +
          <span className="frac"><span className="fracnum">8</span><span className="fracden">48</span></span> +
          <span className="frac"><span className="fracnum">24</span><span className="fracden">48</span></span> =
          <span className="frac"><span className="fracnum">44</span><span className="fracden">48</span></span> =
          <span className="frac"><span className="fracnum">11</span><span className="fracden">12</span></span>
        </div>
        <p>least common multiple (LCM) An alternative method for finding a common denominator is to determine the  for the denominators, then add or subtract the numerators as one would an integer. Using the least common multiple can be more efficient and is more likely to result in a fraction in simplified form. In the example above, the denominators were 4, 6, and 2. The least common multiple is the first shared multiple of these three numbers.</p>
        <table align="center">
          <tbody><tr><td>Multiples of 2: 2, 4, 6, 8 10, <b>12</b></td></tr>
          <tr><td>Multiples of 4: 4, 8, <b>12</b></td></tr>
          <tr><td>Multiples of 6: 6, <b>12</b></td></tr>
          </tbody>
        </table>
        <h3>Subtraction:</h3>
        <p>Fraction subtraction is essentially the same as fraction addition. A common denominator is required for the operation to occur. Refer to the addition section as well as the equations below for clarification.</p>
        <div style={{textAlign:"center"}}>
          <span className="frac"><span className="fracnum">a</span><span className="fracden">b</span></span> –
          <span className="frac"><span className="fracnum">c</span><span className="fracden">d</span></span> =
          <span className="frac"><span className="fracnum">a×d</span><span className="fracden">b×d</span></span> –
          <span className="frac"><span className="fracnum">c×b</span><span className="fracden">d×b</span></span> =
          <span className="frac"><span className="fracnum">ad – bc</span><span className="fracden">bd</span></span>
        </div>
        <div style={{textAlign:"center"}}>EX:
          <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> –
          <span className="frac"><span className="fracnum">1</span><span className="fracden">6</span></span> =
          <span className="frac"><span className="fracnum">3×6</span><span className="fracden">4×6</span></span> –
          <span className="frac"><span className="fracnum">1×4</span><span className="fracden">6×4</span></span> =
          <span className="frac"><span className="fracnum">14</span><span className="fracden">24</span></span> =
          <span className="frac"><span className="fracnum">7</span><span className="fracden">12</span></span>
        </div>
        <h3>Multiplication:</h3>
        <p>Multiplying fractions is fairly straightforward. Unlike adding and subtracting, it is not necessary to compute a common denominator in order to multiply fractions. Simply, the numerators and denominators of each fraction are multiplied, and the result forms a new numerator and denominator. If possible, the solution should be simplified. Refer to the equations below for clarification. </p>
        <div style={{textAlign:"center"}}>
          <span className="frac"><span className="fracnum">a</span><span className="fracden">b</span></span> ×
          <span className="frac"><span className="fracnum">c</span><span className="fracden">d</span></span> =
          <span className="frac"><span className="fracnum">ac</span><span className="fracden">bd</span></span>
        </div>
        <div style={{textAlign:"center"}}>EX:
          <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> ×
          <span className="frac"><span className="fracnum">1</span><span className="fracden">6</span></span> =
          <span className="frac"><span className="fracnum">3</span><span className="fracden">24</span></span> =
          <span className="frac"><span className="fracnum">1</span><span className="fracden">8</span></span>
        </div>
        <h3>Division:</h3>
        <p>The process for dividing fractions is similar to that for multiplying fractions. In order to divide fractions, the fraction in the numerator is multiplied by the reciprocal of the fraction in the denominator. The reciprocal of a number <b>a</b> is simply <span className="frac"><span className="fracnum">1</span><span className="fracden">a</span></span>. When a is a fraction, this essentially involves exchanging the position of the numerator and the denominator. The reciprocal of the fraction <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> would therefore be <span className="frac"><span className="fracnum">4</span><span className="fracden">3</span></span>. Refer to the equations below for clarification. </p>
        <div style={{textAlign:"center"}}>
          <span className="frac"><span className="fracnum">a</span><span className="fracden">b</span></span> /
          <span className="frac"><span className="fracnum">c</span><span className="fracden">d</span></span> =
          <span className="frac"><span className="fracnum">a</span><span className="fracden">b</span></span> ×
          <span className="frac"><span className="fracnum">d</span><span className="fracden">c</span></span> =
          <span className="frac"><span className="fracnum">ad</span><span className="fracden">bc</span></span>
        </div>
        <div style={{textAlign:"center"}}>EX:
          <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> /
          <span className="frac"><span className="fracnum">1</span><span className="fracden">6</span></span> =
          <span className="frac"><span className="fracnum">3</span><span className="fracden">4</span></span> ×
          <span className="frac"><span className="fracnum">6</span><span className="fracden">1</span></span> =
          <span className="frac"><span className="fracnum">18</span><span className="fracden">4</span></span> =
          <span className="frac"><span className="fracnum">9</span><span className="fracden">2</span></span>
        </div>
        <h3>Simplification:</h3>
        <p>It is often easier to work with simplified fractions. As such, fraction solutions are commonly expressed in their simplified forms. <span className="frac"><span className="fracnum">220</span><span className="fracden">440</span></span> for example, is more cumbersome than <span className="frac"><span className="fracnum">1</span><span className="fracden">2</span></span>. The calculator provided returns fraction inputs in both improper fraction form as well as mixed number form. In both cases, fractions are presented in their lowest forms by dividing both numerator and denominator by their greatest common factor.</p>
        <h3>Converting between fractions and decimals:</h3>
        <p>Converting from decimals to fractions is straightforward. It does, however, require the understanding that each decimal place to the right of the decimal point represents a power of 10; the first decimal place being 10<sup>1</sup>, the second 10<sup>2</sup>, the third 10<sup>3</sup>, and so on. Simply determine what power of 10 the decimal extends to, use that power of 10 as the denominator, enter each number to the right of the decimal point as the numerator, and simplify. For example, looking at the number 0.1234, the number 4 is in the fourth decimal place, which constitutes 10<sup>4</sup>, or 10,000. This would make the fraction <span className="frac"><span className="fracnum">1234</span><span className="fracden">10000</span></span>, which simplifies to <span className="frac"><span className="fracnum">617</span><span className="fracden">5000</span></span>, since the greatest common factor between the numerator and denominator is 2.</p>
        <p>Similarly, fractions with denominators that are powers of 10 (or can be converted to powers of 10) can be translated to decimal form using the same principles. Take the fraction <span className="frac"><span className="fracnum">1</span><span className="fracden">2</span></span> for example. To convert this fraction into a decimal, first convert it into the fraction of <span className="frac"><span className="fracnum">5</span><span className="fracden">10</span></span>. Knowing that the first decimal place represents 10<sup>-1</sup>, <span className="frac"><span className="fracnum">5</span><span className="fracden">10</span></span> can be converted to 0.5. If the fraction were instead <span className="frac"><span className="fracnum">5</span><span className="fracden">100</span></span>, the decimal would then be 0.05, and so on. Beyond this, converting fractions into decimals requires the operation of long division.</p>
      </Box>
    </Box>
  );
}
