import {fetchAllSpaceLaunch} from './actions';
import {fetchState} from './actions'

export  function fetchAllSpaceLaunches(){
    return dispatch => {
        dispatch(fetchState());
        return   fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then(res => res.json())
        .then(spaces => {
            dispatch(fetchAllSpaceLaunch(spaces));
        return spaces;
    })
    };
}