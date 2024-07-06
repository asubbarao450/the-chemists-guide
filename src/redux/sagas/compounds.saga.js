import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchCompounds() {

    try {
        //retrieves the compounds from the compounds table
        const compounds = yield axios.get('/api/compounds')

        
        //put communicates with the reducer after retrieving a server call
        yield put({ type: 'SET_COMPOUNDS', payload: compounds.data})
    }

    catch (error) {

        console.log("error with setCompounds")
    }


}

//retrieves a single compound based on id 
function* fetchCompound(action) {

    let getid = action.payload 

    try {
        //retrieves the compounds from the compounds table
        const compound = yield axios.get(`/api/compounds/${getid}`)

        //you use compound.data not action.payload here because the 
        //action.payload will only contain the id of the element we want to retrieve
        yield put({ type: 'SET_COMPOUND', payload: compound.data})
        
    }

    catch (error) {

        console.log("error with fetchCompound")
    }


}

//this addCompounds function will be called by the compoundsSaga function below
//when dispatch with the type ADD_COMPOUNDS is called
 function* addCompounds(action) {

    try {
        //syntax for add is 
         yield axios.post('/api/compounds', action.payload)

         //want to reupdate dom after a new element is added 
         yield put({type: 'FETCH_COMPOUNDS'})
     }

     catch (error) {
        console.log("error with addCompounds")
    }

 }

//calls the delete function after a 
 function* deleteCompound(action) {


    let deleteid = action.payload

    try {
         yield axios.delete(`/api/compounds/${deleteid}`)

         //want to reupdate dom after a new element is added 
         yield put({type: 'FETCH_COMPOUNDS'})
     }

     catch (error) {
        console.log("error with delete Compounds")
    }

 }


 function* editCompound(action) {

    let editid = action.payload
    console.log(editid)
    let newCompound = action.payload1

    try {
        console.log("action.payload is: ", action.payload);
         yield axios.put(`/api/compounds/${editid}`, newCompound)

         //want to reupdate dom after a new element is added 
         yield put({type: 'FETCH_COMPOUNDS'})
     }

     catch (error) {
        console.log("error with edit Compounds")
    }

 }

function* compoundsSaga() {

    
    //communicates with the dispatch in compopnent file
    yield takeLatest('FETCH_COMPOUNDS', fetchCompounds);

    //retrieve a single compound based on id
    yield takeLatest('FETCH_COMPOUND', fetchCompound);

    //this statement will couple ADD_COMPOUNDS with the addCompounds function
    yield takeLatest('ADD_COMPOUND', addCompounds);

    yield takeLatest('DELETE_COMPOUND', deleteCompound);

    yield takeLatest('EDIT_COMPOUND', editCompound);
    
}


export default compoundsSaga;