import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Read } from './Components/Read';
import FetchComponent from './Components/Fetch';
import { Create } from './Components/Create';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/">
    <FetchComponent/>
    </Route>
     <Route path="/read" component={Read} />
     <Route path="/create" component={Create} />
    </div>
    </BrowserRouter>
  );
}

export default App;
