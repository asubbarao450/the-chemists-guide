import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

function AddCompoundPage() {
  
  //access store which will store the 
  //const compounds = useSelector((compounds) => store.compounds);

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
    <div>
     {
      <form onSubmit = {handleSubmit}>
      
      
      <label>Name: </label>
      <input
      type='text'
      name='name'
      value={name}
      onChange = {(event) => setName(event.target.value)}
      />

      
    <label>Description: </label>
      <input
      type='text'
      name='description'
      value={description}
      onChange = {(event) => setDescription(event.target.value)}
      />


      <label>Quantity(amount): </label>
      <input
      type='text'
      name='quantity'
      value={quantity}
      onChange = {(event) => setQuantity(event.target.value)}
      />
      
      <button id='submitCompounds'>Create Compound Entry</button>
      </form>

     }
      
    </div>

  );
}

export default AddCompoundPage;
