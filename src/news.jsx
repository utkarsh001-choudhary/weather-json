import React from 'react';
const News=(props)=>{
  return(
    <div className="inner-div">
    <h2 className="title">{props.title} </h2>
    <p className="author"> {props.author}</p>
    <div className="img-div">
    <img src={props.urlToImage} className="img"></img>
    </div>
    <h2 className="description">{props.description} </h2>
 </div>
  )
}
export default News;