import React, { Component } from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom' ;
import Home from  './components/home' ;
import Artist from './components/artist'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
         <Route exact path="/" component={Home}  />
         <Route exact path="/artist/:artistId" component={Artist}  />
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
