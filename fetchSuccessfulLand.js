
import {fetchState,fetchAllSpaceLaunch} from './actions'

export  function fetchSuccessfulLand(landValue){
    let landSuccessful = [];
    return dispatch => {
        dispatch(fetchState());
        return  fetch(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=${landValue}`)
        .then(res => res.json())
        .then(launchSuccess => {
            launchSuccess.map(land=> _.get(land,'rocket.first_stage.cores[0].land_success')=== landValue && landSuccessful.push(land))
            dispatch(fetchAllSpaceLaunch(landSuccessful));
        return launchSuccess;
    })
    };
}