import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Create } from './Components/Create';
import FetchComponent from './Components/Fetch';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/">
    <FetchComponent/>
    </Route>
     <Route path="/create" component={Create} />
    </div>
    </BrowserRouter>
  );
}

export default App;
