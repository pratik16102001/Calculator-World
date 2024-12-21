import Head from "next/head";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  CssBaseline, 
  Container,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SimpleFraction from "./SimpleFraction";


export default function Fraction(){
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <title>Fraction Calculators</title>
      </Head>
      <Box className="main-box">
        <CssBaseline />
        <AppBar position="fixed" style={{backgroundColor:"#0197f6"}}>
          <Toolbar>
            <Typography variant="h6" className="header-word">Calculator World</Typography>
          </Toolbar>
        </AppBar>
        <Container className="main-container">
          <Breadcrumbs aria-label="breadcrumb" sx={{marginBottom:"5px"}}>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Typography sx={{ color: 'text.primary' }}>Fraction</Typography>
          </Breadcrumbs>
          <SimpleFraction/>
        </Container>
        <Box className="footer">
          <Typography variant="body2">© 2024 Calculator World. All rights reserved.</Typography>
        </Box>
      </Box>
    </>
  )
}