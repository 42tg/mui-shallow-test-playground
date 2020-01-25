import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Button from "./components/Buttons";
import defaultTheme from "./defaultTheme";

export const theme = createMuiTheme(defaultTheme);

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Hallo Welt</Button>
  </ThemeProvider>
);

export default App;
