import React, { Component } from 'react';
import './app.css';

class Profile extends Component{
  render(){
    console.log('this.props...............',this.props);
    return(
      <div>
        <div>title{this.props.title}</div>
        <div>published date {this.props.publishedDate}</div>
      </div>
    )
  }
}

export default Profile;
