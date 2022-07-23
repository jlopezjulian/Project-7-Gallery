//data fetching in https://teamtreehouse.com/library/fetching-data-with-the-fetch-api

import React, { Component } from 'react';
import apiKey from './config'; //still working on this
import axios from 'axios';
import Nav from './Components/Nav';
import Photo from './Components/Photo';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      yorkies: [],
    };
  }}

componentDidMount();
    axios.get('https://api.flickr.com/services')
      .then(function(response){
      })
      .catch(function(error){
        console.log(error);
      });
                            //where do you get the URL like gify example
// }







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App
