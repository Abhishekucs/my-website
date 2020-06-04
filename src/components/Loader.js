import React from "react";

//styled components
import { LoadingAnimation, Animation } from "../styles/loader";

const Loader = () => {
  return (
    <LoadingAnimation>
      <Animation>Loading...</Animation>
    </LoadingAnimation>
  );
};

export default Loader;
