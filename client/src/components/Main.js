import React, { useEffect, useMemo, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import SignUp from './signup'
import SignIn from './signin';
import Footer from './Footer';
import Actor from './Actor';
import Navbar from "./Navbar";
import Header from "./Header";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./Home";
import { HOME } from "../shared/home";
import Profile from "./ProfileComponent";
import { UserContext } from "./UserContext";
import Movie from './Movie';
function Main() {

    const [User, setUser] = useState(null);
    const value = useMemo(() => ({User,setUser}),[User,setUser]);


    useEffect(() => {
        document.title = "CSNetwork";

     }, []);
    // useEffect(() =>{
    //     checkLoginStatus();
    // },[]);

    // const [err, seterr] = useState(false);
    // const checkLoginStatus = () => {
    //     let data = sessionStorage.getItem('MySessionStorageData');
    //     data = JSON.parse(data);
    //     if(data){
            
    //     console.log("login data_",data); 
    //         seterr(true);
    //         setUser(data);
    //     }
    // }

    const func = (props) => {
        setUser(props);
    };

    return (
        <Router>
            <div className="App">
                <UserContext.Provider value={value}>
                    <Header handleUser={func} user={User} />
                    <Routes>
                        {/* <Route
                            exact
                            path="/"
                            render={() => {
                                return (
                                this.state.isUserAuthenticated ?
                                <Navigate to="/home" /> :
                                <Navigate to="/signin" /> 
                                )
                            }}
                        /> */}
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
