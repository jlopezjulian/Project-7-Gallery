/**
 * Treehouse FSJS Degree 2022
 * React Image Gallery
 */



/**
 * Import required dependencies and app components
 * import Photo component in the gallery component
 */

import React, { Component } from 'react';
import './App.css'; //styling
import Gallery from './Components/Gallery'
import Nav from './Components/Nav';
import Search from './Components/SearchForm';
import config from './config.js'; //added to gitignore file
import
{
  BrowserRouter, //stores the current location in the browser's address  using clean URLs
  Route, //
  Switch, //renders a route exclusively, used in line 128
  Redirect //navigates to a new direction
} from 'react-router-dom'; //template from react



const apiKey = config; //pulling from config.js file


class App extends Component {

  state = {
    results: [],
    forest: [],
    watercolor: [],
    books: []
  }

/**
  * componentDidMount is created to manage state
  * called four constructors to show four different items: dogs at default stage, forest, watercolor, and books
 */

  componentDidMount () {
    this.performSearch();
    this.forestNavItemSearch();
    this.watercolorNavItemSearch();
    this.booksNavItemSearch();
  }

/**
 * Four fetch methods are created for the four items
 * In each method, I defined a URL to fetch data from the Flickr API, returned in json form
 * https://www.flickr.com/services/api/explore/flickr.photos.search <-- can customize criteria if needed
 * Secret API key is written in config.js file which is hidden from public via gitignore
 * Links used to find photos based on given tags
 *
 */

  performSearch = (tags = "dogs") => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json()) //callback to return in json format
      .then(responseData => {
        this.setState({ //callback to update the state to responseData
            results: responseData.photos.photo, //pulling from json array
        })
      })
      .catch(error => { //error function that takes the parameter error
        console.log('Error Fetching and parsing data', error) //Fetching Data with the Fetch API @6:59
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
        console.log('Error Fetching', error)
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
        console.log('Error Fetching and Parsing Data', error)
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
        console.log('Error Fetching and Parsing Data', error)
      })
  }

/**
 * every component here will have this format JSX
 * routed or created pathways for the header links in the <Switch> tag
*/

  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Search
            onSearch = {this.performSearch}
        />
        <Nav />


      <Switch>
        <Route exact path="/" render={() => <Gallery data={this.state.results}/>}/>
        <Route path="/forest" render={() => <Gallery data={this.state.forest}/>}/>
        <Route path="/search" render={() => <Redirect to="/"/>}/>
        <Route path="/watercolor" render={() => <Gallery data={this.state.watercolor}/>}/>
        <Route path="/books" render={() => <Gallery data={this.state.books}/>}/>
        <Route path="/:searchQuery" render={({match}) => <Gallery data={this.state.results}/>}/>
      </Switch>
      </div>
     </BrowserRouter>
    )
  }
}

export default App;


/**
 * Sources:
 * googled sample of static flicker photo: https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg
 * Fetch v Axios functions: https://teamtreehouse.com/library/fetching-data-with-the-fetch-api#transcript
 */