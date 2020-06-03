import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import IndexPage from "../components/IndexPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={IndexPage}></Route>
    </BrowserRouter>
  );
};

export default AppRouter;
