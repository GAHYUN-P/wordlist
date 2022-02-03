import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import { loadCardFB } from "./redux/modules/card";

import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";


function Card(props) {
    
    const my_words = useSelector((state) => state.card);
    console.log(my_words.list)
    // [{…}, {…}, {…}]
    // console.log(my_words[0].word)

    return (
        <CardWrap>
            {
                my_words.list.map((x)=> {
                    return (
                        <Cards>
                            <Word>{x.word}</Word>
                            <Expl>{x.expl}</Expl>
                            <Exam>{x.exam}</Exam>
                        </Cards>
                    )
                })
            }
        </CardWrap>
    );
};

const CardWrap = styled.div `
display: flex;
width : 100%;
gap: 1vh;
flex-wrap: wrap;
`;

const Cards = styled.div `
background-color: aliceblue;
width: 25vw;
`;

const Word = styled.div `
text-align: center;
`;

const Expl = styled.div `
text-align: center;
`;

const Exam = styled.div `
color: slateblue;
text-align: center;
`;

export default Card;