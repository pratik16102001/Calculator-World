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
import CircleArea from "./CircleArea";
import SquareArea from "./SquareArea";
import TriangleArea from "./TriangleArea";
import RectangleArea from "./RectangleArea";


export default function Geomatry(){
  return (
    <>
      <Head>
        <title>Geomatry Calculators</title>
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
            <Typography sx={{ color: 'text.primary' }}>Geomatry</Typography>
          </Breadcrumbs>
          <Box sx={{display:"flex", flexDirection:"row", marginTop:5}}>
            <CircleArea/>
            <SquareArea/>
          </Box>
          <Box sx={{display:"flex", flexDirection:"row", marginTop:5}}>
            <TriangleArea/>
            <RectangleArea/>
          </Box>
        </Container>
        <Box className="footer">
          <Typography variant="body2">© 2024 Calculator World. All rights reserved.</Typography>
        </Box>
      </Box>
    </>
  )
}