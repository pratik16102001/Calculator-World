import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  CssBaseline, 
  Container,
  Breadcrumbs,
  Link
} from "@mui/material";
import Head from "next/head";
import TimeUnit from "./TimeUnit";
import LengthUnit from "./LengthUnit";
import WeightUnit from "./WeightUnit";
import TemperatureUnit from "./TemperatureUnit";


export default function Unit(){
  return (
    <>
      <Head>
        <title>Unit Calculators</title>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Box className="main-box">
        <CssBaseline />
        <AppBar position="fixed" style={{backgroundColor:"#0197f6"}}>
          <Toolbar>
            <Typography variant="h6" className="header-word">Calculator World</Typography>
          </Toolbar>
        </AppBar>
        <Container className="main-container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Typography sx={{ color: 'text.primary' }}>Units</Typography>
          </Breadcrumbs>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <TimeUnit/>
            <LengthUnit/> 
          </Box>
          <Box sx={{display:"flex", flexDirection:"row"}}>
            <WeightUnit/>
            <TemperatureUnit/>
          </Box>
        </Container>
        <Box className="footer">
          <Typography variant="body2">© 2024 Calculator World. All rights reserved.</Typography>
        </Box>
      </Box>
    </>
  )
}