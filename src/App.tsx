import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box, Flex, Stack, VStack, HStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Pricing />
    </div>
  );
}

export default App;
