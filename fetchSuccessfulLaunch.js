
import {fetchState,fetchAllSpaceLaunch} from './actions'

export  function fetchSuccessfulLaunch(launchValue){
    let launchSuccessful = [];
    return dispatch => {
        dispatch(fetchState());
        return  fetch(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${launchValue}`)
        .then(res => res.json())
        .then(launchSuccess => {
            launchSuccess.map(launched=>launched.launch_success=== launchValue && launchSuccessful.push(launched))
            dispatch(fetchAllSpaceLaunch(launchSuccessful));
        return launchSuccess;
    })
    };
}