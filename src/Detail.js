import React, { useState, useRef } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCard, createCardFB } from "./redux/modules/card";

function Detail() {
    let history = useHistory();
    const wordInput = useRef();
    const explInput = useRef();
    const examInput = useRef();
    const dispatch = useDispatch();

    const addCard = () => {
        dispatch(createCardFB(wordInput.current.value, explInput.current.value,examInput.current.value));
        alert('저장되었습니다!');
        history.push('/');
    };


    return (
    <DetailContainer>
        <DetailTitle>단어 추가하기</DetailTitle>
        <Line/>
        <div>
            <p>단어</p>
            <input type="text" ref={wordInput}/>
        </div>
        <div>
            <p>설명</p>
            <input type="text" ref={explInput}/>
        </div>
        <div>
            <p>예시</p>
            <input type="text" ref={examInput}/>
        </div>
        <BtnWrap>
        <BtnAdd onClick={addCard}>추가하기</BtnAdd>
        <BtnBack onClick={() => {
                history.push('/');
            }}>돌아가기</BtnBack>
        </BtnWrap>
    </DetailContainer>
    );
};

const DetailContainer = styled.div `
max-width: 60vw;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const DetailTitle = styled.h1 `
color: slateblue;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 1px dotted #ddd;
`;

const BtnWrap = styled.div `
margin-top: 5vh;
`;

const BtnAdd = styled.button `

`;

const BtnBack = styled.button `
margin-left: 1vw;
`;




export default Detail;