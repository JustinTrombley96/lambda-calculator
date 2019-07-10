import React from "react";

      /* Display a button element rendering the data being passed down from the parent container on props */
        const NumberButton = props => {
        
        return (
          <button>{props.number}</button>
        )
      }
      export default NumberButton
