import { bindActionCreators } from "redux";
import {FETCH_YEAR_SUCCESS ,FETCH_JSON,FETCH_SPACE_LAUNCH, FETCH_LAUNCH_SUCCESS} from './actions.js';

const initialState = {
    launchYear :[],
    launchSpace :[],
    launchSuccess :[]
}

export default function spaceReducer(state = initialState,action){
    switch(action.type) {
        case FETCH_JSON:
            return{
                ...state
            };
        case FETCH_YEAR_SUCCESS:
            return{
                ...state,
                launchYear:[...action.payload.years]
            };
            default:
                return state;

        case FETCH_SPACE_LAUNCH:
            return{
                ...state,
                launchSpace:[...action.payload.spaces]
            };
        case FETCH_LAUNCH_SUCCESS:
            return{
                ...state,
                launchSuccess:[...action.payload.launchSuccess]
            }
    }

}