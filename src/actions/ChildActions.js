export const REQUEST_CHILD = 'REQUEST_CHILD';
export const REQUEST_CHILD_SUCCESS = 'REQUEST_CHILD_SUCCESS';
export const REQUEST_CHILD_FAIL = 'REQUEST_CHILD_FAIL';
export const REQUEST_POSITION = 'REQUEST_POSITION';
export const REQUEST_POSITION_SUCCESS = 'REQUEST_POSITION_SUCCESS';
export const REQUEST_POSITION_FAIL = 'REQUEST_POSITION_FAIL';

export function getLocation(id) {
    return dispatch => {
        dispatch({
            type: REQUEST_POSITION,
            payload: id,
        });
        fetch('https://yamam.online/api/positions/6', {
            mode: 'cors',
        }).then(res => {
            if (!res.ok) {
                throw new Error("Bad request")
            }
            return res.json()
        }).then(data => {
            dispatch({
                type: REQUEST_POSITION_SUCCESS,
                payload: data,
            })
        }).catch(error => {
            dispatch({
                type: REQUEST_POSITION_FAIL,
                payload: error,
            })
        });
    }
}


export function getChildInfo(id) {
    return dispatch => {
        dispatch({
            type: REQUEST_CHILD,
            payload: id,
        });
        fetch('https://yamam.online/api/children/6', {
            mode: 'cors',
        }).then(res => {
            if (!res.ok) {
                throw new Error("Bad request")
            }
            return res.json()
        }).then(data => {
            dispatch({
                type: REQUEST_CHILD_SUCCESS,
                payload: data,
            })
        }).catch(error => {
            dispatch({
                type: REQUEST_CHILD_FAIL,
                payload: error,
            })
        });
    }
}
