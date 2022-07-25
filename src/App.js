// //data fetching in https://teamtreehouse.com/library/fetching-data-with-the-fetch-api

import React, { Component } from 'react';
import apiKey from './config';
// import Nav from './Components/Nav';
import Photo from './Components/Photo';
// import PhotoContainer from './Components/PhotoContainer';
// import SearchForm from './Components/SearchForm';





class App extends Component {
  constructor(){
    super(); //lets us use the keyword this inside the constructor within the app class
    this.state = {
      yorkies: [],
    };

//https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg googled sample of static fliker photo

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Photo url = "https://www.allthingsdogs.com/wp-content/uploads/2019/04/Teacup-Yorkie-What-To-Know-Before-Buying-Cover-678x381.jpg"> </Photo>
          <Photo url = "https://live.staticflickr.com/65535/52234153999_b1fb0a84c5.jpg"> </Photo>
          <Photo> </Photo>
          <Photo> </Photo>
          <Photo> </Photo>


        </header>
      </div>
    );
  }
}


export default App

