
import {fetchState,fetchLaunchSuccess} from './actions'

export  function fetchSuccessfulLaunch(){
    return dispatch => {
        dispatch(fetchState());
        return  fetch("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true")
        .then(res => res.json())
        .then(launchSuccess => {
            dispatch(fetchLaunchSuccess(launchSuccess));
        return launchSuccess;
    })
    };
}