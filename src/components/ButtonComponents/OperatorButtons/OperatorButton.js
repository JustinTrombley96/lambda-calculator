import React from "react";

      /* Display a button element rendering the data being passed down from the parent container on props */      
        const OperatorButton = props => {
        
        return (
          <button>{props.operator.char}</button>
        )
      }

    export default OperatorButton