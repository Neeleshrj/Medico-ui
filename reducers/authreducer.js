export default (state = [], action) =>{
    switch (action.type) {
        case 'add_token':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
} 