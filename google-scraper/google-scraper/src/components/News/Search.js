
import React,{Component} from 'react';
import "../Styles.css";

class Search extends Component{
    state = {
        text:''
    }    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.inputSearch(this.state.text);
        this.setState({text:""});

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


export default Search;