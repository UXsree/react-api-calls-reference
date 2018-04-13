import React, { Component } from 'react';
import './app.css';

class Profile extends Component{
  render(){
    console.log('this.props from profile.js ...............',this.props);
    let title = {volumeInfo:{title: '',publishedDate: '',subtitle: '', publisher:''}};
    if(this.props.book1 !== null){
      title = this.props.book1;
      console.log("title....",title.volumeInfo.title);
    }
    return(
      <div>
        <div>Book title: {title.volumeInfo.title}</div>
        <div>Published date: {title.volumeInfo.publishedDate}</div>
        <div>Sub title: {title.volumeInfo.subtitle}</div>
        <div>Publisher: {title.volumeInfo.publisher}</div>
      </div>
    )
  }
}

export default Profile;
