import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  CssBaseline, 
  Container 
} from "@mui/material";
import MainContent from "./calculators/MainContainer";

const PageLayout: React.FC = () => {
  return (
    <Box className="main-box">
      <CssBaseline />
      <AppBar position="fixed" style={{backgroundColor:"#0197f6"}}>
        <Toolbar>
          <Typography variant="h6" className="header-word">Calculator World</Typography>
        </Toolbar>
      </AppBar>
      <Container className="main-container">
        <MainContent/>
      </Container>
      <Box className="footer">
        <Typography variant="body2">© 2024 Calculator World. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default PageLayout;