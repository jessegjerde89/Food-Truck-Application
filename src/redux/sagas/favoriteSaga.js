import axios from 'axios'
import { put, takeLatest, takeEvery} from 'redux-saga/effects'


function* addfav(action) {

    try {
        console.log('fav payload', action.payload)
        yield axios.post('/api/vendor', action.payload)
        yield put({type:'FETCH_FAVORITE'})
    }
    catch(error) {
        console.log(error)
    }
}

function* fetchfav() {

    try{ 
        let favoriteResponse = yield axios.get('/api/vendor');
        yield put({ type:'SET_FAVS', payload:favoriteResponse.data})
        console.log('fetch_fav res', favoriteResponse.data)
    } 
    catch (error) {
        console.log(error)}
     
}

function* removefav(action) {

    try{
        yield axios.delete(`/api/favorite/${action.payload.id}`)
        yield put({type: 'FETCH_FAVORITE'})
    }
    catch(error) {
        console.log(error)
    }
}



function* favoriteSaga(){
    yield takeLatest('ADD_FAVORITE', addfav)
    yield takeLatest('REMOVE_FAVORITE', removefav)
    yield takeEvery('FETCH_FAVORITE', fetchfav)
}

export default favoriteSaga; 