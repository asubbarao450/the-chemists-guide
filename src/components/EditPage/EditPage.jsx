import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

import './EditPage.css'

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';

function EditPage() {

  //will access the compoundReducer which contains the items  
  //the user clicked to edit on the previous page
  const compound = useSelector(store => store.compounds.compoundReducer);



  const dispatch = useDispatch();
  const history = useHistory();


  const location = useLocation();


  let [name, setName1] = useState('');
  let [description, setDescription1] = useState('');
  let [quantity, setQuantity1] = useState(0);



  //will access the data passed from the history.push()
  //on previous page
  const editid = Number(location.state);

  //function which handles the edit and 
  const submitedit = () => {

    let edittosend = {
      name: name,
      description: description,
      quantity: quantity
    }

    dispatch({
      type: 'EDIT_COMPOUND',
      payload: editid, 
      payload1: edittosend
    })

    setName1('')
    setDescription1('')
    setQuantity1(0)

    history.push('/compoundlist')

  }



  return (


    <div>
      <h2>The compound which will be edited is: </h2>
      <Table>
      <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Date</th>
    <th>Quantity</th>
   
  </tr>
  
      {compound.length > 0 && compound.map((comp) => <tr key={comp.id}><td>{comp.name}</td> <td>{comp.description}</td> <td> {comp.date} </td><td> {comp.quantity}</td></tr>)}

</Table>

      <br></br>
      <br></br>

      <div>
        {
          <form onSubmit={submitedit}>

            <h2>Edit Compound Page. Please fill in edits for compounds</h2>

            <label>Name: </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(event) => setName1(event.target.value)}
            />


            <label>Description: </label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={(event) => setDescription1(event.target.value)}
            />


            <label>Quantity(amount): </label>
            <input
              type='text'
              name='quantity'
              value={quantity}
              onChange={(event) => setQuantity1(event.target.value)}
            />

            <button variant="contained" style={{backgroundColor: "#228B22"}} id='submitCompounds'>Submit Edited Entry</button>
          </form>

        }

      </div>
    </div>
  );

}

export default EditPage;
