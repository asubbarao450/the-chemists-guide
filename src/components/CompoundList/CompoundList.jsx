import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

//useLocation allows data to be used with a history.push method
import { useLocation, useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import './CompoundList.css'

import Table from '@mui/material/Table';




function CompoundList() {

  //this statement accesses the compounds and directs to the specific reducer inside
  const compounds = useSelector(store => store.compounds.compoundsReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  

  //dispatch contacts the root saga in compounds
  useEffect(() => {
    dispatch({ type: 'FETCH_COMPOUNDS' })
  }, [])



  const deletefunc = (id) => {

    dispatch({

      type: 'DELETE_COMPOUND',
      payload: id

    })

  }


  const editfunc = (id) => {


    //communicates with the sagafunction which dispatches to the 
    //the compound reducer
    //the reducer will contain the compound which needs to be edited
    dispatch({ type: 'FETCH_COMPOUND', payload: id })

    //history.push will push to edit page along with 
    //the id of the element that was clicked
    history.push({pathname: '/editpage',  state: id })
   
    

  }


  return (
    <div className="container">
    

      
      <Table className = 'compoundList'>
      <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Date</th>
    <th>Quantity(mg)</th>
    <th>Delete</th>
    <th>Edit</th>
  </tr>
      {compounds.length > 0 && compounds.map((compound) => <tr key={compound.id}><td>{compound.name}</td> <td>{compound.description}</td> <td> {new Date(compound.date).toLocaleTimeString('en-US')} </td><td align = "center" > {compound.quantity}</td> <td><Button variant="contained" style={{backgroundColor: "#FF0000"}} onClick={() => deletefunc(compound.id)}>Delete</Button></td><td><Button variant="contained" onClick={() => editfunc(compound.id)}>Edit</Button></td></tr>)}

</Table>


    </div>
  );

}

export default CompoundList;
