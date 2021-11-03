import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import Navigation from './components/Navigation';
import NewsList from './components/News/NewsList';
import Search from './components/News/Search';
import './App.css';


class App extends Component {
  state = {
  titleNews: [],
  newsFeed: [],
    loading: false
  }

  inputSearch = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://serpapi.com/search.json?q=${text}&tbm=nws&location=Dallas&api_key=3d5b9b5e4cb640443b6d0cb37b4bb49efedcbe0b921436bed54ddf1b25327f69`);
    console.log(res.data);

    //you get object as api type, you need to convert object to array 
    //this converts object to array
    var result = Object.keys(res.data).map((key) => [res.data[key]])

    console.log(result)

    
    this.setState({ newsFeed: result[3][0] });
    this.setState({ titleNews: result[4][0] });
    this.setState({newsFeed: this.state.newsFeed.concat(this.state.titleNews)});    
   
    this.setState({ loading: false });
  }



  render() {
    return (
      <div>
        <Navigation />
        
        <div>
          <Search inputSearch={this.inputSearch} />
          <NewsList loading={this.state.loading} newsFeed={this.state.newsFeed} />
        </div>
      </div>
    )
  }
}


export default App;
