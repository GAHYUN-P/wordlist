import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import card from "./modules/card";

const middlewares = [thunk];
// 리듀서들 하나로 묶기
const rootReducer = combineReducers({card});
// 여러개면 {bucket, bucket2, bucket3.....}

const enhancer = applyMiddleware(...middlewares);

// 루트 리듀서로 스토어 만들어주기
const store = createStore(rootReducer, enhancer);

export default store;