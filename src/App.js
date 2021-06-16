import React from 'react';
import PageRouter from "./pages/pageRouter";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./pages/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PageRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
