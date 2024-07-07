import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Input from '@mui/material/Input'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

import './AddCompound.css'


function AddCompoundPage() {
  
  

  //react hooks to store the state of the name, description and mass variables 
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [quantity, setQuantity] = useState(0);

  //added decleration of dispatch
  const dispatch = useDispatch();

   let handleSubmit = () => {
    event.preventDefault
    //communicates with the reducer listening for 'ADD_COMPOUND' 
    //with the payload newItem object 
    
    const newItem = {
        name: name,
        description: description,
        quantity: quantity

    }

   //console.log("IMPORTANT", newItem.name)

    //this dispatch sends the user input over to saga 
    //function/store reducer
    dispatch({type: 'ADD_COMPOUND', payload: newItem})

    setName('')
    setDescription('')
    setQuantity(0)
  }

  

  
  return (
    
      
      <Box className = "actualform" component="form" onSubmit={handleSubmit}>
      <label>Name: </label>
      <Input className ="input"
      type='text'
      name='name'
      value={name}
      onChange = {(event) => setName(event.target.value)}
      />

<br></br>
    <label>Description: </label>
      <Input className ="input"
      type='text'
      name='description'
      value={description}
      onChange = {(event) => setDescription(event.target.value)}
      />

<br></br>
      <label>Quantity(amount): </label>
      <Input className ="input"
      type='text'
      name='quantity'
      value={quantity}
      onChange = {(event) => setQuantity(event.target.value)}
      />
      
    <br></br>
    <br></br>
      <Button type = "submit" id="submitCompounds">Create Compound Entry</Button>
      
      </Box>
     
      
    

  );
}

export default AddCompoundPage;
