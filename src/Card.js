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
        <div>
            {
                my_words.list.map((x)=> {
                    return (
                        <div>
                            {x.word}
                            {x.expl}
                            {x.exam}
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Card;