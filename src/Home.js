import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Detail from "./Detail";
import { loadCardFB } from "./redux/modules/card";

import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";

function Home(props) {

    let history = useHistory();
    const dispatch = useDispatch();
    

    React.useEffect( () => {
        dispatch(loadCardFB());
      }, []);

    return (
        <div>
            <h1>MY DICTIONARY</h1>
            <hr/>
            <Card/>
            <button
                onClick={() => {
                    history.push("/detail");
                }}>추가</button>
        </div>
    );
};

export default Home;