const menuItem = (state = [], action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            console.log(action.payload)
            return action.payload; 
        default: 
            return state; 

    }
}

export default menuItem; 