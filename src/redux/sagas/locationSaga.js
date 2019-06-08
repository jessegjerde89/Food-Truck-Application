import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';


function* addlocation(action) {

    try { 
        yield axios.post('api/location', action.payload)
        yield put({type: "FETCH_LOCATION" })
    }catch(error) {
        console.log("error in post location saga", error)
    }
}

function* fetchlocation() {

    try {
        let locationResponse = yield axios.get('api/location')
        console.log('here', locationResponse)
        yield put({type: "SET_LOCATION", payload: locationResponse.data})

    }catch (error) {
        console.log("error in get location saga", error)
    }
}


function* currentlocation(action) {

    try {
        
        yield put({type: "GET_CURRENT", payload: action.payload })
        console.log(action.payload)
    }   
    catch(error) {
        console.log("error in current saga", error)
    }
}


function* locationSaga() {
    yield takeLatest('ADD_LOCATION', addlocation)
    yield takeEvery('FETCH_LOCATION', fetchlocation)
    yield takeLatest('CURRENT_MARKER', currentlocation)
}

export default locationSaga