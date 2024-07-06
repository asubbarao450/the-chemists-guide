import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';



function EditPage() {

  //this statement accesses the compounds and directs to the specific reducer inside


  const dispatch = useDispatch();
  const history = useHistory();


  const location = useLocation();


  let [name, setName1] = useState('');
  let [description, setDescription1] = useState('');
  let [quantity, setQuantity1] = useState(0);



  //will access the data passed from the history.push()
  //on previous page
  const editid = Number(location.state);

  

  const compounds = useSelector(store => store.compounds.compoundsReducer);

  //dispatch contacts the root saga in compounds payload: editid
  useEffect(() => {
    dispatch({ type: 'FETCH_COMPOUND' })
  }, [])

  

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


  //I just want the edited compound to be displayed on the dom
  return (

    <div>
      <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Date</th>
    <th>Quantity</th>
    <th>Delete</th>
    <th>Edit</th>
  </tr>
      {compounds.length > 0 && compounds.map((compound) => <tr key={compound.id}><td>{compound.name}</td> <td>{compound.description}</td> <td> {compound.date} </td><td> {compound.quantity}</td> <td><button onClick={() => editfunc(compound.id)}>Edit</button></td></tr>)}


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
