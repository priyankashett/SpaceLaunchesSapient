import {fetchAllSpaceLaunch} from './actions';
import {fetchState} from './actions'

export  function fetchByYear(successLaunch,successLand,yearLaunched){
    let yearsSpaceLaunched =[];
    return dispatch => {
        dispatch(fetchState());
        return  fetch(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=${successLaunch}&amp;land_success=${successLand}&amp;launch_year=${yearLaunched}`)
        .then(res => res.json())
        .then(years => {
            years.map(year=>year.launch_year===yearLaunched.toString() && year.launch_success===true && yearsSpaceLaunched.push(year))
            dispatch(fetchAllSpaceLaunch(yearsSpaceLaunched));
        return years;
    })
    };
}