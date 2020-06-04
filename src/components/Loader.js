import React from "react";

//styled components
import { LoadingAnimation, Animation } from "../styles/loader";

import { Rocket } from "../assests/svg/social.icons";

const Loader = () => {
  return (
    <LoadingAnimation>
      <Animation>
        <Rocket />
      </Animation>
    </LoadingAnimation>
  );
};

export default Loader;
