
import { combineReducers } from "redux";
import starships from './starships';

let rootReducer = combineReducers({

    starships: starships
    
});

export default rootReducer;