const locationsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_LOCATION':
        console.log('4', action)
            return action.payload; 
        default: 
            return state; 

    }
}

export default locationsReducer; 