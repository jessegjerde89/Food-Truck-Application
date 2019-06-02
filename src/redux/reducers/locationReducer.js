const locationsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_LOCATION':
        if ( action.payload ) {
            return action.payload
        } else {
            return state
        }
        default: 
            return state; 
    }
}

export default locationsReducer; 