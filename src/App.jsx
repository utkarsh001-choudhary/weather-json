import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './JApp'
// const App = () => {
     class App extends Component{
   
        state={
            news:[]
        }
   

 async componentDidMount(){
    // await  fetch('https://jsonplaceholder.typicode.com/posts')
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9a997ced5aa44d08acdc928c12709fbb')
          .then(res => res.json())
          .then((data)=>{
              console.log(data);
              const {articles}=data;
              console.log( "artickelll" + articles);
              this.setState({news:articles})
            
          }).catch((error) => {
            console.log(error);
          });
      }
      render()
    {
        return (
            <div className="outer-div">
             
              <Weather/>
              <h1>Newsify</h1>
                <div className="News">
                    {this.state.news.map((item,index) => (
                       
                        <div className="inner-div">
                             
                            <h2 className="title">{item.title} </h2>
                            <p className="author"> {item.title}</p>
                            {/* <div className="img-div">
                                <img src={item.urlToImage} className="img"></img>
                            </div> */}
                            {/* <h2 className="description">{item.body?item.body.slice(0,70):'.'}...... </h2> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}
export default App;