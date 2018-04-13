import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      book1: null
      // imageurl: '',
      // publishedDate: ''
    }
  }

  search(){
    console.log('this.state', this.state);
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?"
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&intitle&maxResults=1`;
    console.log('FETCH_URL: ', FETCH_URL);
    fetch(FETCH_URL,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json =>{
      const book1 = json.items[0];
      // const publishedDate = json.items[0].volumeInfo.publishedDate;
      // const imageurl = json.items["0"].volumeInfo.imageLinks.thumbnail;
       console.log('book1 from response json in app.js ..............',book1);
      // console.log('publishedDate: ', json.items[0].volumeInfo.publishedDate);
      //console.log('image url///////////', imageurl);
      this.setState({book1});
      });
  }

  render(){
    return(
      <div className="App">
      <div className="App-title"> Google Books API</div>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="search for the artist"
            query={this.state.query}
            onChange={event=>this.setState({query: event.target.value})}
            onKeyPress={event=>{
              if(event.key === 'Enter'){
                this.search();
              }
            }}
          />
          <InputGroup.Addon onClick={()=>this.search()}>
            <Glyphicon glyph="search"></Glyphicon>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
      <div className="Profile">
        <Profile
          book1 = {this.state.book1}
        />
      </div>
      <div className="Gallery">
        Gallery
      </div>
      </div>
    )
  }
}

export default App;
