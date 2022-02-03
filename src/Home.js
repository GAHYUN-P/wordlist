import React from "react";
import styled from "styled-components";

import Card from "./Card";
import Detail from "./Detail";
import { loadCardFB } from "./redux/modules/card";

import {useHistory} from "react-router-dom";

function Home(props) {

    let history = useHistory();

    return (
        <div>
        <Container>
            <Title>MY DICTIONARY</Title>
            <Line/>
            <Card/>
        </Container>
        <AddCard
                onClick={() => {
                    history.push("/detail");
                }}>+</AddCard>
        </div>
    );
};


const Container = styled.div `
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1 `
color: slateblue;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 1px dotted #ddd;
`;

const AddCard = styled.button `
    width: 50px;
    height: 50px;
    font-size: 35px;
    font-weight: bold;
    background-color: slateblue;
    border-radius: 50px;
    color: white;
    position: fixed;
    bottom:5vh;
    left: 87vw;
    border: none;

    &:hover {
        color: slateblue;
        background-color: white;
        border-color: slateblue;
        border-style: solid;
    }
    
`;

export default Home;