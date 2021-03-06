import React, { useState } from "react";

//import any components needed
import { OPERATORS } from '../../../data'
import OperatorButton from './OperatorButton'


//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state

  const [operators] = useState(OPERATORS)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operators.map(operator =>  (<OperatorButton operator={operator} addDisplay={props.addDisplay} />))
       }
    </div>
  );
};
export default Operators