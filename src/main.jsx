import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//chakra-ui
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(
  {
    colors: {
      bluecito: {
        50: "#ddfff6",
        100: "#b5f9e7",
        200: "#89f3d7",
        300: "#5defc8",
        400: "#34eab8",
        500: "#1ed09e",
        600: "#10a27b",
        700: "#057458",
        800: "#004634",
      },
      moradito: {
        400: "#ac31e8",
      },
      breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: ["bluecito", "moradito"],
    components: ["Tag", "Button"],
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
