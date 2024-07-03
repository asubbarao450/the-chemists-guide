import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useHistory } from 'react-router-dom';

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
  let editid = location.state;

  console.log(editid)

  const compounds = useSelector(store => store.compounds.compoundsReducer);

  //dispatch contacts the root saga in compounds
  useEffect(() => {
    dispatch({ type: 'FETCH_COMPOUND', payload: editid })
  }, [])


  //function which handles the edit and 
  const submitedit = (editid) => {

    let edittosend = {
      name: name,
      description: description,
      quantity: quantity
    }

    dispatch({
      type: 'EDIT_COMPOUND',
      payload: [editid, edittosend]
    })

    setName1('')
    setDescription1('')
    setQuantity1(0)

  }


  //I just want the edited compound to be displayed on the dom
  return (

    <div>
      <div>
        {compounds.length > 0 && compounds.map((compound) => <li key={compound.id}>{compound.name} {compound.description} {compound.date} {compound.quantity}</li>)}
      </div>





      <br></br>
      <br></br>

      <div>
        {
          <form onSubmit={submitedit}>

            <h2>Edit Compound Page. Please note that blank forms will be cleared</h2>

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

            <button id='submitCompounds'>Submit Edited Entry</button>
          </form>

        }

      </div>
    </div>
  );

}

export default EditPage;
