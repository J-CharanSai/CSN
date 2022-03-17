import React, { Component, useContext,useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import Axios from 'axios'
import "./styles.css";

import { Link , Navigate} from 'react-router-dom';
import { UserContext } from "./UserContext";
import { Nav } from "reactstrap";
export default function SignIn() {
    const {User, setUser} = useContext(UserContext);
    const[status, setstatus] = useState("");
    const[password, setpassword] = useState("");
    const[emailid, setemailid] = useState("");
    const[errr, seterrr] = useState(false );

    // useEffect(() =>{
    //     checkLoginStatus();
    // },[]);
    // const navigate = useNavigate();
    // let data = null;
    // const checkLoginStatus = () => {
    //     data = sessionStorage.getItem('MySessionStorageData');
    //     data = JSON.parse(data);
    //     if(data)
    //     {
    //         setUser(data);
    //         console.log("login data",data,User);  
    //         return(
    //             navigate('/home'));
    //     }
    // }
    


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
                seterrr(true);
                setUser(response.data.result);
            }
            // localStorage.setItem('myData',JSON.stringify(response.data.result));
            // sessionStorage.setItem('MySessionStorageData',JSON.stringify(response.data.result));
            // console.log("loged data",response.data.result);
        });

    }

    function validateForm() {
        return emailid.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    // if(User){
    //     console.log("laknovina",User);
    // }

    

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
                    {/* {if(errr) ? ()} */}
                    <Link to={'/home'} style={{color:"white",textDecoration: 'none'}}>Sign In</Link>
                </Button>

                <p className="forgot-password text-right">
                    Not registered <Link to={'/signup'}>sign up?</Link>
                </p>
            </Form>
        </div>
    );
}

