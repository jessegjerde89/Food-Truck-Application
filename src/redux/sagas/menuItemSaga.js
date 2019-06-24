import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


// grab the items and display them on the dom 
function* fetchitems() {

    try {
        let menuResponse = yield axios.get('/api/vendor'); 
        yield put({ type: 'SET_ITEMS', payload: menuResponse.data})
        console.log('the, response', menuResponse.data)
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
        console.log("line 47", action.payload)
        yield axios.put(`/api/vendor/`, action.payload)
        yield put({type:'FETCH_DASH'})
    }catch(error) {
        console.log(error)
    }    
}


function* getedit(action) {
    try {
        let editResponse = 
        yield axios.get(`/api/edit/${action.payload}`); 
        yield put({ type: 'GET_CURRENT', payload: editResponse.data})
        console.log('the response', editResponse.data)
    } catch(error) {

    }
}


function* menuItemSaga(){
yield takeLatest('FETCH_DASH', fetchitems)
yield takeEvery('ADD_ITEM', additems)
yield takeLatest('DELETE_ITEM', deleteitems)
yield takeLatest('EDIT_ITEM', edititems)
yield takeLatest('SEND_EDIT', getedit)
}

export default menuItemSaga