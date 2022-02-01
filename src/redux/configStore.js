import {createStore, combineReducers} from "redux";
import card from "./modules/card";

// 리듀서들 하나로 묶기
const rootReducer = combineReducers({card});
// 여러개면 {bucket, bucket2, bucket3.....}

// 루트 리듀서로 스토어 만들어주기
const store = createStore(rootReducer);

export default store;