// bucket.js

// Actions
// Action 타입을 정해주는 부분
const CREATE = 'card/CREATE';

// 초기값 지정
const initialState = [
    {word : "hello", expl : "안녕", exam : "hello, everyone."},
    {word : "apple", expl : "사과", exam : "apple is red."},
    {word : "banana", expl : "바나나", exam : "banana is yellow."}
];

// Action Creators
export function createCard(word, expl, exam) {
    console.log(word)
    return { type: CREATE, word, expl, exam};
};


// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
    case "card/CREATE" : {
        console.log(...state)
        console.log(action.word)
        const a = {word: action.word, expl: action.expl, exam: action.exam};
        const new_card_list = [...state, a]; 
        console.log(new_card_list)
        return new_card_list;
    }
// do reducer stuff
default: return state;
}
}