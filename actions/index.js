export const selectDisease = (diseaseId) => {
    return {
        type: 'select_disease',
        payload: diseaseId
    };
};

export const addAuthToken = (authToken, user_id) => {
    return {
        type: 'add_token',
        payload: [authToken,user_id]
    };
};

export const getMedList = (authToken,user_id) => {
    return function(dispatch){
        console.log('fetch request activated');
        fetch('https://fathomless-bayou-65608.herokuapp.com/api/getmeds/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': authToken,
            },
            body: JSON.stringify({
                user: user_id,
            }),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: 'GET_LIST',
                payload: data,
            })
        })
        .catch(error => {
            console.log(error);
        });
    };
};