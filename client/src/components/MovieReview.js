import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function MovieReview() {
    const { id = "None Selected" } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }

  export default MovieReview;