import {fetchYearsSuccess} from './actions';
import {fetchState} from './actions'

export  function fetchAllLaunchYears(){
    return dispatch => {
        dispatch(fetchState());
        return  fetch("/LaunchYear/getYear")
        .then(res => res.json())
        .then(years => {
            dispatch(fetchYearsSuccess(years));
        return years;
    })
    };
}