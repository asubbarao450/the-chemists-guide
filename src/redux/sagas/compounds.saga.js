import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCompounds(action) {

    try {
        const compounds = yield axios.get(`/api/compounds`)

        console.log(compounds)

        yield put({ type: 'FETCH_COMPOUNDS', payload: compounds.data })
    }

    catch (error) {

        console.log("error with fetchCompounds")
    }


}


function* addCompounds(action) {

    try {
        yield axios.post('/api/compounds', action.payload)

        //put will always communicate with store
        yield put({type: 'FETCH_COMPOUNDS'})
    }

    catch (error) {
        console.log("error with addCompounds")
    }

}

function* compoundsSaga() {

    //these two statements dispatch the specific fetchCompounds
    
    yield takeLatest('FETCH_COMPOUNDS', fetchCompounds);
    yield takeLatest('ADD_COMPOUNDS', addCompounds);
    
}


export default compoundsSaga;