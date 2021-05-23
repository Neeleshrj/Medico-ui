export default (state = null, action) => {
    switch (action.type) {
        case 'select_disease':
            return action.payload;
        default:
            return state; 
    }  
}