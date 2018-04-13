import React, { Component } from 'react';
import './app.css';

class Profile extends Component{
  render(){
    console.log('this.props from profile.js ...............',this.props);
    let title = {volumeInfo:{title: '',publishedDate: '',subtitle: '', publisher:'', imageLinks:{smallThumbnail:''}}};
    // if(this.props.book1 !== null){
    //   title = this.props.book1;
    // }
    title = (this.props.book1 !== null) ? this.props.book1 : title;
    console.log(title.volumeInfo.imageLinks.smallThumbnail);
    return(
      <div>
        <div>Book title: {title.volumeInfo.title}</div>
        <div>Published date: {title.volumeInfo.publishedDate}</div>
        <div>Sub title: {title.volumeInfo.subtitle}</div>
        <div>Publisher: {title.volumeInfo.publisher}</div>
        <img
          alt="Cover page"
          className = "coverStyle"
          src={title.volumeInfo.imageLinks.smallThumbnail}
        />
      </div>
    )
  }
}

export default Profile;
