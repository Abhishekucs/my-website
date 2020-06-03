import React from "react";
import { GlobalProvider } from "../context/globalContext";
import Home from "./Home";

const IndexPage = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
};

export default IndexPage;
