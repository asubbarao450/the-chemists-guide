import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

//useLocation allows data to be used with a history.push method
import { useLocation, useHistory } from 'react-router-dom';


function CompoundList() {

  //this statement accesses the compounds and directs to the specific reducer inside
  const compounds = useSelector(store => store.compounds.compoundsReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  //dispatch contacts the root saga in compounds
  useEffect(() => {
    dispatch({ type: 'FETCH_COMPOUNDS' })
  }, [])



  const deletefunc = (id) => {

    dispatch({

      type: 'DELETE_COMPOUND',
      payload: id

    })

  }


  const editfunc = (id) => {


    //pushes to editpage along with state which captures components id
    history.push({pathname: '/editpage',  state: id })
    // dispatch({   , 

    //   type: 'PUT',
    //   payload: id

    // })

  }


  return (
    <div className="container">
      <p>Hello</p>

      <div>
        {compounds.length > 0 && compounds.map((compound) => <li key={compound.id}>{compound.name} {compound.description} {compound.date} {compound.quantity}<button onClick={() => deletefunc(compound.id)}>Delete</button><button onClick={() => editfunc(compound.id)}>Edit</button></li>)}


      </div>


    </div>
  );

}

export default CompoundList;
