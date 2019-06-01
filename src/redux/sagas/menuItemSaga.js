import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


// grab the items and display them on the dom 
function* fetchitems() {

    try {
        let menuResponse = yield axios.get('/api/vendor'); 
        yield put({ type: 'SET_ITEMS', payload: menuResponse.data})
        console.log(menuResponse.data)
    } 
    catch(error) {
        console.log(error)
    }
}


// when a vendor adds a new item 
function* additems(action) {

    try {
        console.log('what i need', action.payload)
        yield axios.post('/api/vendor', action.payload)
        
        yield put({type : 'FETCH_DASH'})
    } 
    catch(error) {
        console.log(error)
    }
    
}

function* deleteitems(action) {

    try {
        yield axios.delete(`/api/vendor/${action.payload.id}`)
        yield put({type: 'FETCH_DASH'})
    }
    catch(error) {
        console.log(error)
    }
}

function* edititems(action) {
    try {
        yield axios.put(`/api/vendor/${action.payload}`)
        yield put({type:'FETCH_DASH'})
    }catch(error) {
        console.log(error)
    }    
}


function* menuItemSaga(){
yield takeLatest('FETCH_DASH', fetchitems)
yield takeLatest('ADD_ITEM', additems)
yield takeLatest('DELETE_ITEM', deleteitems)
yield takeLatest('EDIT_ITEM', edititems)
}

export default menuItemSaga