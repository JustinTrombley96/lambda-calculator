import React from "react";

      /* Display a button element rendering the data being passed down from the parent container on props */    
        const SpecialButton = props => {
          return (
            <button onClick={() => props.special === "C" ? props.clearDisplay() : null}>{props.special}</button>

          )
        }
        export default SpecialButton