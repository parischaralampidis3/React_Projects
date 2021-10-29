import React from 'react';
import "../Styles.css";
function Search(){
    function submitHandler (e){
        e.preventDefault();
        console.log('submit button is works properly');

    }
    return(
        <div>
            <div>
                <h3>What do you want to search today?</h3>
            </div>
            <form onSubmit={submitHandler}>
                <label id="news"></label>
                <input type="text" id="news" placeholder="add your keyword here.." /> 
                <input type="submit" value="search" />
            </form>
           
        </div>
    )
}

export default Search;