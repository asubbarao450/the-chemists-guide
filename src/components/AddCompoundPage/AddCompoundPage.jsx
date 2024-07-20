import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Input from '@mui/material/Input'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';

import './AddCompound.css'


function AddCompoundPage() {
  
  

  //react hooks to store the state of the name, description and mass variables 
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState(0);
  let [state, setState] = useState('');

  //added decleration of dispatch
  const dispatch = useDispatch();


     //communicates with the saga listening for 'ADD_COMPOUND' 
    //with the payload newItem object 
   let handleSubmit = () => {
    event.preventDefault
 
    
    const newItem = {
        name: name,
        description: description,
        quantity: quantity,
        state: state

    }

  

    //this dispatch sends the user input over to saga 
    //function/store reducer
    dispatch({type: 'ADD_COMPOUND', payload: newItem})

    setName('')
    setDescription('')
    setQuantity(0)
    setState('')
  }

  

  //there are 4 different inputs defined below along with labels and input type
  //the 4 different inputs are for name, description, state and quantity 
  return (
    
    
    <div>
       <h2>Welcome to the Add Compound Page!  </h2>
       <h3>Please enter compound details below: </h3>
      <Box className = "actualform" component="form" onSubmit={handleSubmit}>
       
      <InputLabel id="name1">Name: </InputLabel>
      <Input id="name2" className = "input"
      type='text'
      name='name'
      value={name}
      onChange = {(event) => setName(event.target.value)}
      />

<br></br>
    <InputLabel id="description1">Description: </InputLabel>
      <Input id="description2" className ="input"
      type='text'
      name='description'
      value={description}
      onChange = {(event) => setDescription(event.target.value)}
      />

<br></br>
      <InputLabel id="quantity1">Quantity(mg):</InputLabel>
      <Input id="quantity2" className ="input"
      type='text'
      name='quantity'
      value={quantity}
      onChange = {(event) => setQuantity(event.target.value)}
      />

      
      
    <br></br>


  
    <InputLabel id="state1">Select State</InputLabel>
  <Select
   
    id='state'
    value={state}
    label='State'
    onChange={(event) => setState(event.target.value)}
  >
    <MenuItem value={"Solid"}>Solid</MenuItem>
    <MenuItem value={"Liquid"}>Liquid</MenuItem>
    <MenuItem value={"Gas"}>Gas</MenuItem>
    <MenuItem value={"Plasma"}>Plasma</MenuItem>
    
  </Select>
    <br></br>
      <Button type = "submit" id="submitCompounds">Create Compound Entry</Button>
      
      </Box>
     
      
      </div>

  );
}

export default AddCompoundPage;
