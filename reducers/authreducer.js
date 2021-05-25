export default (state = [], action) =>{
    switch (action.type) {
        case 'add_token':
            return action.payload;
        default:
            return state;
    }
} 