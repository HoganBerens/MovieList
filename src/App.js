import React from "react";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import ViewMovie from "./components/viewMovie";

function App() {
  return (
    <Routes>
      <Route path={"/viewMovie"} exact={true} element={<ViewMovie />} />
      <Route path={""} exact={true} element={<Home />} />
    </Routes>
  );
}

export default App;
