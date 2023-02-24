import React from "react";
import "./App.css";

//components
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex flexDirection="row" className="App">
        <SideBar />
        <Box w="80%">
          <Home />
        </Box>
      </Flex>
    </>
  );
}

export default App;
