import React, {Component,useState,useEffect,useContext} from "react";
import {UserContext} from './UserContext';
import Axios from 'axios';
import Profiletemp from "./profiletemp";
import {Navigate} from 'react-router-dom';


function Profile (){

    const {User, setUser} = useContext(UserContext);

    const [Info, setInfo] = useState([]);
    const [err, seterr] = useState(false);

    useEffect(() => {
        Axios
            .get("http://localhost:3001/profile", {
              params: {
                emailid: User.user_emailid
              }
            })
            .then(response => {
                setInfo(response.data);
                seterr(true);
                console.log(response.data);
            });
    }, []);

    if(!User){
      return <Navigate to = '/signin' />
    }



        if(err){
          
          const reviews_in = Info.data.map(
            (rev) => {
                return (
                    <div className="col-12 col-md m-1">
                        <div>
                          <h3> 
                            {JSON.stringify(rev.rating)}
                          </h3>
                          <h3> 
                            {JSON.stringify(rev.date_added.substring(0,10))}
                          </h3>
                          <h3> 
                            {JSON.stringify(rev.review_text)}
                          </h3>
                        </div> 
                    </div>
                );
            }
        );
          
          return(
            <div> 
              <Profiletemp User={User} Info={Info} reviews={reviews_in} />
            </div>
          )
      }
      else{
          return(
              <h1>Loading.......</h1>
          );
      }
      

}
export default Profile;