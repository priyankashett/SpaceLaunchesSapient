export const FETCH_YEAR_SUCCESS = 'FETCH_YEAR';
export const FETCH_JSON = 'FETCH_JSON';
export const FETCH_SPACE_LAUNCH = 'FETCH_SPACE_LAUNCH';
export const FETCH_LAUNCH_SUCCESS='FETCH_LAUNCH_SUCCESS';

export const fetchYearsSuccess = (years) =>({
type:FETCH_YEAR_SUCCESS,
payload:{years}
});



export const fetchState =()=>{
    return{
        type: FETCH_JSON
    }
};

export const fetchAllSpaceLaunch =(spaces)=>{
    return{
        type: FETCH_SPACE_LAUNCH,
        payload:{spaces}
    }
};

export const fetchLaunchSuccess =(launchSuccess)=>{
    return{
        type: FETCH_LAUNCH_SUCCESS,
        payload:{launchSuccess}
    }
};