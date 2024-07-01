import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCompounds() {

    try {
        //retrieves the compounds from the compounds table
        const compounds = yield axios.get('/api/compounds')

        console.log(compounds)
        console.log(compounds.data)
        //sends over to the reducer to store the data 
        yield put({ type: 'FETCH_COMPOUNDS', payload: compounds.data})
    }

    catch (error) {

        console.log("error with fetchCompounds")
    }


}

//this addCompounds function will be called by the compoundsSaga function below
//when dispatch with the type ADD_COMPOUNDS is called
function* addCompounds(action) {

    try {
        yield axios.post('/api/compounds', action.payload)

        //after compounds are added a call to fetch_compounds is made to update 
        //the list of compounds
        yield put({type: 'FETCH_COMPOUNDS'})
    }

    catch (error) {
        console.log("error with addCompounds")
    }

}

function* compoundsSaga() {

    
    
    yield takeLatest('FETCH_COMPOUNDS', fetchCompounds);

    //this statement will couple ADD_COMPOUNDS with the addCompounds function
    yield takeLatest('ADD_COMPOUND', addCompounds);
    
}


export default compoundsSaga;