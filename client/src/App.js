import React from "react";
import { Route, BrowserRouter as Router, Switch, Routes } from "react-router-dom";

import Cadastrar from "./Pages/Cadastrar/index";
import Home from "./Pages/Cadastrar/Home";

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Cadastrar />} path="/cadastrar" exact />
      </Routes>
    </Router>
  </>
  )
}

export default App;