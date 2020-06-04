import React, { useState, useEffect } from "react";
import { GlobalProvider } from "../context/globalContext";
import Home from "./Home";
import Loader from "./Loader";

const IndexPage = () => {
  const [visible, setVisible] = useState(true);

  const handleLoader = () => {
    setTimeout(() => {
      setVisible(!visible);
    }, 4500);
  };

  useEffect(handleLoader, []);
  return (
    <>
      {visible ? (
        <Loader />
      ) : (
        <GlobalProvider>
          <Home />
        </GlobalProvider>
      )}
    </>
  );
};

export default IndexPage;
