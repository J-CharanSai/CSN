import React, { Component, useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Axios from 'axios'
import "./styles.css";

import { Link , Navigate} from 'react-router-dom';
import { UserContext } from "./UserContext";
export default function SignIn() {
    const {User, setUser} = useContext(UserContext);
    const[status, setstatus] = useState("");
    const[password, setpassword] = useState("");
    const[emailid, setemailid] = useState("");


    const signin = () => {
        console.log("login")
        Axios.post("http://localhost:3001/signin", {
            emailid: emailid,
            password: password,
        }).then((response) => {
            if(response.data.err){
                setstatus(response.data.result);
            }
            else{
                setUser(response.data.result);
            }
            console.log(response.data);
        });

    }

    function validateForm() {
        return emailid.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="sign">
            <p className="stats">{status}</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={emailid}
                        onChange={(e) => setemailid(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={signin} class="btn btn-primary btn-block" block size="lg" type="submit" >
                    
                    <Link to={'/home'} style={{color:"white",textDecoration: 'none'}}>Sign In</Link>
                </Button>

                <p className="forgot-password text-right">
                    Not registered <Link to={'/signup'}>sign up?</Link>
                </p>
            </Form>
        </div>
    );
}

