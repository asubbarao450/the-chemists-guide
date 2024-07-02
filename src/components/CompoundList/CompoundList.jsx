import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

function CompoundList() {
  
  //this statement accesses the compoundsReducer and directs to the specific reducer inside
  const compounds = useSelector(store => store.compoundsReducer.compoundsReducer);

  const dispatch = useDispatch();

  //dispatch contacts the root saga in compounds
  useEffect(() => {
    dispatch({type: 'FETCH_COMPOUNDS'})
  }, [])

 
  return (
    <div className="container">
      <p>Hello</p>

      {compounds.length > 0 &&
      (<p>{compounds[3].name}</p> )
     
      }
    </div>
  );

}

export default CompoundList;
