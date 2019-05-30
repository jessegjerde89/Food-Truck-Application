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
        yield put({type: "SET_LOCATION", payload: locationResponse.data})

    }catch (error) {
        console.log("error in get location saga", error)
    }
}


function* locationSaga() {
    yield takeLatest('ADD_LOCATION', addlocation)
    yield takeLatest('FETCH_LOCATION', fetchlocation)
}

export default locationSaga