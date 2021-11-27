import React from "react";
import { ThemeProvider } from "styled-components";


const theme = {
    colors: {
        primary: "rgb(16, 16, 16)",
        secondry: "rgb(255, 255, 255)",
    },
    fonts:{}
}


const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;
