import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* fetchCompounds(action) {

    try {
        const compounds = yield axios.get(`/api/compounds`)

        yield put({ type: 'SET_COMPOUNDS', payload: action.payload })
    }

    catch (error) {

        console.log("error with fetchCompounds")
    }


}


function* addCompounds(action) {

    try {

        const addCompound = yield axios.post(`/api/compounds`)
    }

    catch (error) {


    }

}

function* compoundsSaga() {
    yield takeLatest('FETCH_COMPOUNDS', fetchCompounds);
    yield takeLatest('ADD_COMPOUNDS', addCompounds);
}


export default compoundsSaga;