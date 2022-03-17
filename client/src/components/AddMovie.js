import React, {useState,useContext, useEffect} from 'react';
import Axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate } from 'react-router-dom';
import { UserContext } from "./UserContext";
import './styles.css';



function AddMovie() {
    const {User, setUser} = useContext(UserContext);

    // const [films, setfilms] = useState([]);
    const [MovieTitle, setMovieTitle] = useState("");
    const [RYear, setRYear] = useState("");
    const [Language, setLanguage] = useState("");
    const [Genre, setGenre] = useState("");
    const [Country, setCountry] = useState("");
    const [Des, setDes] = useState("");
    const [Source,setSource] = useState("");

    const adding = () => {
        Axios.post("http://localhost:3001/addmovie", {
            MovieTitle: MovieTitle,
            RYear: RYear,
            Language: Language,
            Genre: Genre,
            Country: Country,
            Des: Des,
            Source: Source,
        }).then((response) => {
            console.log(response);
        });
    }

    // if(!User){
    //     return <Navigate to = '/signin' />
    // }

    // if(!User.user_type)
    // {
    //     return (
    //         <div class = "error"> 
    //             Error : You are not an admin to add a movie
    //         </div>
    //     );
    // }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="addmovie">
            <Form onSubmit={handleSubmit}>
                <Form.Group  size="sm" >
                    <Form.Label>Movie Title</Form.Label>
                    <Form.Control className='addmve'
                        autoFocus
                        type="MovieTitle"
                        value={MovieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Release Year</Form.Label>
                    <Form.Control className='addmve'
                        autoFocus
                        type="RYear"
                        value={RYear}
                        onChange={(e) => setRYear(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Language</Form.Label>
                    <Form.Control className='addmve'
                        type="Language"
                        value={Language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control className='addmve'
                        type="Genre"
                        value={Genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Country</Form.Label>
                    <Form.Control className='addmve'
                        type="Country"
                        value={Country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} className='addmve'
                        type="Des"
                        value={Des}
                        onChange={(e) => setDes(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" >
                    <Form.Label>Source</Form.Label>
                    <Form.Control className='addmve'
                        type="Source"
                        value={Source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={adding} class="btn btn-primary btn-block" block size="lg" type="submit" >
                    Add Movie
                </Button>
            </Form>
        </div>
        );
}
export default AddMovie;

