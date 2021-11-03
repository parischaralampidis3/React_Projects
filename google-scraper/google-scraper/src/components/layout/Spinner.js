import React from "react";
import spinner from "../../assets/spinner.gif"

function Spinner (){

    return (
        <div>
            <img src={spinner} alt="spinner" style={{width:'200px',margin: 'auto', display:'block'}}/>
        </div>
    )
}

export default Spinner;