import { createTheme } from "@mui/material/styles";
import customPalette from "./palette"; // Import the custom palette you defined

const theme = createTheme({
  palette: {
    ...customPalette,
    // Optionally, customize other parts of the palette
    // For example:
    // error: {
    //   main: '#ff5722',
    //   contrastText: '#fff',
    // },
  },
});

export default theme;
