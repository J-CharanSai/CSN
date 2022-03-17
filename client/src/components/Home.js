// import React, {Component, useState, useEffect} from 'react';
// import Axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

import MovieCard from './MovieCard';
import { Navigate, useNavigate } from "react-router-dom";


import React, {useState,useContext, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import {UserContext} from "./UserContext";


function Home() {

    const {User, setUser} = useContext(UserContext);

    const [temp1, setfilms] = useState([]);
    const [err, seterr] = useState(false);

    useEffect(() => {
        Axios
            .get("http://localhost:3001/home")
            .then(response => {
                setfilms(response.data);
                seterr(true);
                console.log(response.data);
            });
    }, []);

    
    

    console.log("HI",temp1);
    let navigate = useNavigate();
        const routeChange = (id) => {
            let path = `movie/${id}`;
            navigate(path);
        }

        function selectMovie(movie) {
            console.log(movie);
            routeChange(movie);
        }
    if(err){
        if(!User){
            console.log("ONOI");
            return <Navigate to = '/signin' />
        }
        const films_in = temp1.data.map(
            (movie) => {
                return (
                    <div className="col-12 col-md-3 m-2">
                        <MovieCard item={movie} onSelectMovie={selectMovie} />
                    </div>
                );
            }
        );

        return (

                    <div className="container">
                        <div className="row align-items-start">
                            {films_in}
                        </div>
                    </div>
                );
    }
    else{
        return(
            <h1>Loading.......</h1>
        );
    }
         
}

const RenderCard = ({ item, siteSelectedCallback }) => (
        <a style={{ cursor: 'pointer' }} onClick={siteSelectedCallback}>
        <Card 
            body
            inverse
            style={{
                backgroundColor: '#333',
                borderColor: '#333'
            }} 
            className="box"
        >
                <CardImg src={item.source} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.movie_title}</CardTitle>
                </CardBody>
            </Card>
            <div>card</div>
        </a>
        
);

export default Home;



