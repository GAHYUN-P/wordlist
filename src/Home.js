import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Detail from "./Detail";
import {useHistory} from "react-router-dom";

function Home(props) {

    let history = useHistory();

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