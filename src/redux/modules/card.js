// bucket.js

import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";

import {db} from "../../firebase";

// Actions
// Action 타입을 정해주는 부분
const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';


// 초기값 지정
const initialState = {
    list: [],
};

// Action Creators
export function loadCard(word_list) {
    console.log("액션을 생성할거야!");
    return {type: LOAD, word_list}
};

export function createCard(card_data) {
    console.log(card_data);
    return { type: CREATE, card_data};
};

// 미들 웨어
export const loadCardFB = () => {
    return async function (dispatch) {
        // 데이터를 가져와요!
        const word_data = await getDocs(collection(db, 'words'));
        console.log(word_data)

        let word_list = [];

        // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
        word_data.forEach((b) => {
            // 콘솔로 확인해요!
            // console.log({id : b.id, ...b.data()});
            word_list.push({id : b.id, ...b.data()});
        });

        // 잘 만들어졌는 지 리스트도 확인해봐요! :)
        console.log(word_list);
        dispatch(loadCard(word_list));

    }
};

export const createCardFB = (word, expl, exam) => {
    return async function (dispatch) {
        // wordInput.current.value, explInput.current.value,examInput.current.value
        console.log(dispatch);
        const docRef = await addDoc(collection(db, 'words'), { word, expl, exam });
        console.log((await getDoc(docRef)).data());
        const _cards = (await getDoc(docRef)).data();

        const card_data = { id: docRef.id, ..._cards};
        console.log(card_data);

        dispatch(createCard(card_data));
    }
};

// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "card/LOAD": {
        return {list: action.word_list}
      }

    case "card/CREATE" : {
        console.log(...state.list);
        //{…}, {…}
        console.log(action);
        // console.log(action.word)
        const new_card_list = [...state.list, action.card_data]; 
        console.log(new_card_list)
        // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        return {list: new_card_list};
    }
// do reducer stuff
default: return state;
}
}