import React, { useState, useRef } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCard } from "./redux/modules/card";

function Detail() {
    let history = useHistory();
    const wordInput = useRef();
    const explInput = useRef();
    const examInput = useRef();
    const dispatch = useDispatch();

    const addCard = () => {
        dispatch(createCard(wordInput.current.value, explInput.current.value,examInput.current.value));
        alert('저장되었습니다!');
        history.goBack();
    };


    return (<div>
        <h1>단어 추가하기</h1>
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
        <button onClick={addCard}>추가하기</button>
        <button onClick={() => {
                history.goBack();
            }}>돌아가기</button>
    </div>
    );
};

export default Detail;