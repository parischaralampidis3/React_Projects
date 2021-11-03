
import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

import "../Styles.css";

class Search extends Component{
    state = {
        text:''
    }    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.inputSearch(this.state.text);
        this.setState({text:""});

           this.props.history.push('/news'); // <--- The page you want to redirect your user to

    }
     onChange = (e) =>{
         this.setState({[e.target.name] : e.target.value})
    }   
  
    render(){ 

    return(
        <div>
         
            <form onSubmit={this.onSubmit}>
                <label id="news"></label>
                <input type="text" name ="text" id="news" value ={this.state.text} placeholder="add your keyword here.." onChange = {this.onChange}/> 
                <input type="submit" value="search" />
            </form>
           
        </div>
    ) 

    }

    }


export default withRouter(Search);