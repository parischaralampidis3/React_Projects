import React ,{useState, useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from './components/Navigation';
import News from './components/News';
import NewsList from './components/News/NewsList';

import Search from './components/News/Search';
import './App.css';

function App() {
  const [newsInput, setNewsInput] = useState([]);
  const keyAPi = "3d5b9b5e4cb640443b6d0cb37b4bb49efedcbe0b921436bed54ddf1b25327f69";
  const url = `https://serpapi.com/search.json?q=tbm=nws&api_key=${keyAPi}`;

  useEffect(()=>{
    getAllNews();
  }, []);

 

  const getAllNews = () =>{
    axios.get(`${url}`)
    .then((response) =>{
      const allNews = response.data.newsInput.allNews;
      setNewsInput(allNews);
    })
    .catch(error => console.log(`Error: ${error}`));
  }
  return (
    <Router>
    <div className="App"> 
      <Navigation />
      <Switch>
        <Route path="/news" >
          <News newsInput={newsInput} />
        </Route> 
        <Route path="/" >
          <Search />
          <NewsList />
       
        </Route>
    
    
       
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
