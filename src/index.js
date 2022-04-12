import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List_animal from './animal/List_animal';
import Login from './animal/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path='/list_animal' element={ <List_animal/> } />
          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
