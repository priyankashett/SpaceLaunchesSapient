import {fetchYearsSuccess} from './actions';
import {fetchState} from './actions'

export  function fetchAllLaunchYears(){
    return dispatch => {
        dispatch(fetchState());
        return  fetch("/getYear")
        .then(res => res.json())
        .then(years => {
            dispatch(fetchYearsSuccess(years));
        return years;
    })
    };
}
