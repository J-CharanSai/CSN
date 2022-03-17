import React, { useEffect, useMemo, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import SignUp from './signup'
import SignIn from './signin';
import Footer from './Footer';
import Actor from './Actor';
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import { HOME } from "../shared/home";
import Profile from "./ProfileComponent";
import { UserContext } from "./UserContext";
import Movie from './Movie';
function Main() {

    const [User, setUser] = useState(null);
    const value = useMemo(() => ({User,setUser}),[User,setUser]);


    return (
        <Router>
            <div className="App">
                <UserContext.Provider value={value}>
                    <Header />
                    <Routes>
                        <Route path="/home/Movie/:id" element={<Movie />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/addmovie" element={<AddMovie />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path ='/' element={ <Navigate to="/signin"/> } />
                    </Routes>
                    <Footer />
                </UserContext.Provider>
            </div>
        </Router>
    );
}

export default Main;
