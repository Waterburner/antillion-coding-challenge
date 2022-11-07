import { ThemeProvider } from "@mui/material";
import { theme as DefaultTheme } from "./theme";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
