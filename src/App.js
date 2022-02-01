import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";

import Home from "./Home";
import Card from "./Card";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/detail" component = {Detail}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
