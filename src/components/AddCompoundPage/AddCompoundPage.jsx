import React, {useState} from 'react';

import {useSelector} from 'react-redux';

function AddCompoundPage() {
  
  //access store which will store the 
  //const compounds = useSelector((compounds) => store.compounds);

  //react hooks to store the state of the name, description and mass variables 
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [mass, setMass] = useState(0);


   let handleSubmit = () => {
    event.preventDefault
    //communicates with the reducer listening for 'ADD_COMPOUND' 
    //with the payload newItem object 
    dispatch({type: 'ADD_COMPOUND', payload: newItem})


    const newItem = {
        name: name,
        description: description,
        mass: mass

    }

    setName('')
    setDescription('')
    setMass(0)
  }

  

  //make statement 
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


      <label>Mass: </label>
      <input
      type='text'
      name='mass'
      value={mass}
      onChange = {(event) => setMass(event.target.value)}
      />
      
      <button id='submitCompounds' onClick={handleSubmit}>Create Compound Entry</button>
      </form>

     }
      
    </div>

  );
}

export default AddCompoundPage;
