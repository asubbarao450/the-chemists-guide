import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

import './EditPage.css'

import Input from '@mui/material/Input'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

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

  //function which handles the edit by creating a object which needs to be edited
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
    <th>Quantity(mg)</th>
   
  </tr>
  
      {compound.length > 0 && compound.map((comp) => <tr key={comp.id}><td>{comp.name}</td> <td>{comp.description}</td> <td> {new Date(comp.date).toLocaleTimeString('en-US')} </td><td> {comp.quantity}</td></tr>)}

</Table>

      <br></br>
      <br></br>

      <h2>Edit Compound Page. Please fill in edits for compounds</h2>
      <div>
        {
          <Box className = "actualform" component="form" onSubmit={submitedit}>

            <label>Name: </label>
            <Input
              type='text'
              name='name'
              value={name}
              onChange={(event) => setName1(event.target.value)}
            />


            <label>Description: </label>
            <Input
              type='text'
              name='description'
              value={description}
              onChange={(event) => setDescription1(event.target.value)}
            />


            <label>Quantity(mg): </label>
            <Input
              type='text'
              name='quantity'
              value={quantity}
              onChange={(event) => setQuantity1(event.target.value)}
            />

            <Button  type ="submit" id="submitCompounds">Submit Edited Entry</Button>
            </Box>

        }

      </div>
    </div>
  );

}

export default EditPage;
