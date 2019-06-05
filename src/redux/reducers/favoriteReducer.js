const favoriteItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FAVS' :
        console.log(action.payload)
        return action.payload;
    default:
        return state;
    }
}

export default favoriteItem; 