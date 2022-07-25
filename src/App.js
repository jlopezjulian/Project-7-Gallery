// // //data fetching in https://teamtreehouse.com/library/fetching-data-with-the-fetch-api

// import React, { Component } from 'react';
// import apiKey from './config';
// // import Nav from './Components/Nav';
// import Photo from './Components/Photo';
// // import PhotoContainer from './Components/PhotoContainer';
// // import SearchForm from './Components/SearchForm';





// class App extends Component {
//   constructor(){
//     super(); //lets us use the keyword this inside the constructor within the app class
//     this.state = {
//       yorkies: [],
//     };

// //https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg googled sample of static fliker photo

//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Photo url = "https://www.allthingsdogs.com/wp-content/uploads/2019/04/Teacup-Yorkie-What-To-Know-Before-Buying-Cover-678x381.jpg"> </Photo>
//           <Photo url = "https://live.staticflickr.com/65535/52234153999_b1fb0a84c5.jpg"> </Photo>
//           <Photo> </Photo>
//           <Photo> </Photo>
//           <Photo> </Photo>


//         </header>
//       </div>
//     );
//   }
// }


// export default App

import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results'
import Nav from './Components/Nav';
import Search from './Components/SearchForm';
import config from './config.js';
import PageNotFound from './Components/PageNotFound';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



const apiKey = config;

class App extends Component {

  state = {
    results: [],
    forest: [],
    watercolor: [],
    books: []
  }

  componentDidMount () {
    this.performSearch();
    this.forestNavItemSearch();
    this.watercolorNavItemSearch();
    this.booksNavItemSearch();
  }

  performSearch = (tags = "dogs") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
            results: responseData.photos.photo,
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

 forestNavItemSearch = (tags = "forest") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          forest: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  watercolorNavItemSearch = (tags = "watercolor") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          watercolor: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  booksNavItemSearch = (tags = "books") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          books: responseData.photos.photo
        })
      })
      .catch(error => {
        console.log('Error Fetching & Parsing Data from Flickr', error)
      })
  }

  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Search
            onSearch = {this.performSearch}
        />
        <Nav />


      <Switch>
        <Route exact path="/" render={() => <Results data={this.state.results}/>}/>
        <Route path="/forest" render={() => <Results data={this.state.forest}/>}/>
        <Route path="/search" render={() => <Redirect to="/"/>}/>
        <Route path="/watercolor" render={() => <Results data={this.state.watercolor}/>}/>
        <Route path="/books" render={() => <Results data={this.state.books}/>}/>
        <Route path="/:searchQuery" render={({match}) => <Results data={this.state.results}/>}/>
        <Route component={PageNotFound}/>
      </Switch>
      </div>
     </BrowserRouter>
    )
  }
}

export default App;