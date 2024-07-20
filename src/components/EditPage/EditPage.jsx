import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

import './EditPage.css'

import Input from '@mui/material/Input'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import Table from '@mui/material/Table';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
  let [state, setState1] = useState('');


  //will access the data passed from the history.push()
  //on previous page
  const editid = Number(location.state);

  //function which handles the edit by creating a object which needs to be edited
  const submitedit = () => {

    let edittosend = {
      name: name,
      description: description,
      quantity: quantity,
      state: state
    }

    dispatch({
      type: 'EDIT_COMPOUND',
      payload: editid,
      payload1: edittosend
    })

    setName1('')
    setDescription1('')
    setQuantity1(0)
    setState1('')

    history.push('/compoundlist')

  }



  return (


    <div>
      <h2>The Compound which will be Edited is: </h2>
      <Table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Quantity(mg)</th>
          <th>State</th>
        </tr>

{/* Length and map are used to render a compound. An empty list must not cause an error and is checked it the > statement.
 The map function breaks down all parts of compound and is used for rendering purposes*/}
        {compound.length > 0 && compound.map((comp) => <tr key={comp.id}><td>{comp.name}</td> <td>{comp.description}</td> <td> {new Date(comp.date).toLocaleTimeString('en-US')} </td><td> {comp.quantity}</td><td> {comp.state}</td></tr>)}

      </Table>

      <br></br>
      <br></br>

      <h2>Edit Compound Page. Please fill in edits for compound</h2>
      <div>
        {
          <Box className="actualform" component="form" onSubmit={submitedit}>

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


{/* The Select and MenuItem below will create a dropdown menu which a user can pick a state from
the choose state is captured by onChange when the user hits the submit button*/}
            <InputLabel id="state1">Select State</InputLabel>
            <Select

              id='state'
              value={state}
              label='State'
              onChange={(event) => setState1(event.target.value)}
            >
              <MenuItem value={"Solid"}>Solid</MenuItem>
              <MenuItem value={"Liquid"}>Liquid</MenuItem>
              <MenuItem value={"Gas"}>Gas</MenuItem>
              <MenuItem value={"Plasma"}>Plasma</MenuItem>

            </Select>

            <Button type="submit" id="submitCompounds">Submit Edited Entry</Button>
          </Box>

        }

      </div>
    </div>
  );

}

export default EditPage;
