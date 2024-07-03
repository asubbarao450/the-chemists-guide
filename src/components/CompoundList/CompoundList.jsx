import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

function CompoundList() {

  //this statement accesses the compounds and directs to the specific reducer inside
  const compounds = useSelector(store => store.compounds.compoundsReducer);

  const dispatch = useDispatch();

  //dispatch contacts the root saga in compounds
  useEffect(() => {
    dispatch({ type: 'FETCH_COMPOUNDS' })
  }, [])



  function deletefunc(id) {

    
    dispatch({

      type: 'DELETE',
      payload: id

    })

  }


  function editfunc(id){


    dispatch({

      type: 'PUT',
      payload: id

    })

  }


    return (
      <div className="container">
        <p>Hello</p>

        <div>
          {compounds.length > 0 && compounds.map((compound) => <li>{compound.name} {compound.description} {compound.date} {compound.quantity}<button onClick={deletefunc(compound.id)}>Delete</button><button onClick={editfunc(compound.id)}>Edit</button></li>)}

         
        </div>

      </div>
    );

  }

  export default CompoundList;
