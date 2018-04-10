import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      title: null
    }
  }

  search(){
    console.log('this.state', this.state);
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?"
    const FETCH_URL = `${BASE_URL}q=${this.state.query}+inauthor`;
    console.log('FETCH_URL: ', FETCH_URL);
    fetch(FETCH_URL,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json =>{
      const tile = json.items[0].volumeInfo.title;
      console.log('json',json);
      console.log('title: ',json.items[0].volumeInfo.title);
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
        <div>Artist Picture</div>
        <div>Artist Name</div>
      </div>
      <div className="Gallery">
        Gallery
      </div>
      </div>
    )
  }
}

export default App;
