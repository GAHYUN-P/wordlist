import React, {useEffect} from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCardFB } from "./redux/modules/card";

import Home from "./Home";
import Card from "./Card";
import Detail from "./Detail";
import NotFound from "./NotFound";

function App() {

  const dispatch = useDispatch();

    React.useEffect( () => {
        dispatch(loadCardFB());
      }, []);

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
