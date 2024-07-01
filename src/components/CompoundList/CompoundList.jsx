import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

function CompoundList() {
  
  
  const compounds = useSelector(store => store.compounds);

  const dispatch = useDispatch();

  //loads certain element on page startup
  useEffect(() => {
    dispatch({type: 'FETCH_COMPOUNDS'})
  }, [])

 
  return (
    <div className="container">
      <p>Hello</p>
      {compounds.map((compound) => <li>{compound}</li>)}
    </div>
  );

}

export default CompoundList;
