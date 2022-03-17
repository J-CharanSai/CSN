import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { useState, useEffect } from "react";
  import React, { Component } from "react";
  import Axios from 'axios';
  import { Media, Table,Modal, ModalBody, Label, ModalHeader,
    Form, FormGroup, Input, Button , Card, CardBody, CardImg, CardTitle, CardText,List, ListGroup,ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";

  
  function Movie(props) {
    const [temp1, setfilms] = useState([]);
    const [review, setreview] = useState([]);
    const [err, seterr] = useState(false);
    const {id} = useParams();
    const isModalOpen= false;
    const isLoggedin = false;
    const username=  "";
    const password = "";
    useEffect(() => {
      Axios
        .get("http://localhost:3001/movie", {
          params: {
            mv_id: id
          }
        })
        .then(response => {
          setfilms(response.data);
          seterr(true);
          console.log(response.data);
        });
    }, []);
    console.log("HI", temp1);
  
    
    
    if (err ) {
        let len = temp1.reviews.length;
    var reviews = [];
    console.log("reviews len",len)
    if (len > 0) {
      reviews = temp1.reviews.map(
        (item) => {
          return (
            <ListGroupItem style={{ background: "#7d8b91", border: "6px solid #354f57" }}>
              <ListGroupItemHeading>
                {item.R_user_emailid}
              </ListGroupItemHeading>
              <ListGroupItemText>
                {item.review_text}
              </ListGroupItemText>
            </ListGroupItem>
          );
        }

      );

    } else{
      reviews = () => {
        return(
          <ListGroupItem style={{ background: "#7d8b91", border: "6px solid #354f57" }}>
              <ListGroupItemHeading>
                No Reviews Yet :(
              </ListGroupItemHeading>
            </ListGroupItem>
        );
      }
    }

      var cast = [];
      if(temp1.err !== 2) {
        cast = (temp1.cast.map(
        (member) => {
            return (
                <div className="col-12 col-md-3 m-2">
                  <Card
                    body
                    inverse
                    style={{
                      backgroundColor: '#2b9bba',
                      borderColor: '#333', maxHeight: 370, maxWidth: 260
                    }}
                  >
                    <CardImg  src={member.src} alt="Actor" style={{
                      height: 250, width: 225
                    }} />
                    <CardBody>
                      <CardTitle style={{color:"#000000"}}>{member.actor_fname+ " " + member.actor_lname }</CardTitle>
                      <CardText style={{color:"#000000"}} >Role : {member.role}</CardText>
                    </CardBody>
                  </Card>
                </div>
            );
        }
    ));}

     
      
      function toggleModal() {
          let temp = this.state.isModalOpen;
          this.setState({ isModalOpen: !temp });
      }
      function toggleNav() {
          let temp = this.state.isNavOpen;
          this.setState({ isNavOpen: !temp });
      }
      function handleLogin(event) {
          this.toggleModal();
          let temp = this.state.isLoggedin;
          this.setState({ username: this.username.value });
          this.setState({ password: this.password.value });
          //code to handle login
          alert("username: " + this.username.value + "password: " + this.password.value +
              "Remember Me: " + this.remember.checked);
          event.preventDefault();
      }
      
      
  
      return (
  
        <div className="container">
          <div className="row" style={{border:"6px solid #5a9499"}}>
            
            <div className="col-12 col-md-4">
            <Media>
              <Media left href='#'>
                <Media
                  style={{
                    maxHeight: 360,
                    maxWidth: 240
                  }}
                  object
                  src={temp1.data[0].source}
                  alt='Generic placeholder image'
                />
              </Media>
              </Media>
            </div>
            <div className="col-12 col-md-8">
              <Media body>
                <Media heading>{temp1.data[0].movie_title}</Media>
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Release Date</th>
                      <td style={{ textAlign: 'left' }}>{temp1.data[0].release_date}</td>
                    </tr>
                    <tr>
                      <th scope="row" >Genre</th>
                      <td style={{ textAlign: 'left' }}>{temp1.data[0].genre}</td>
                    </tr>
                    <tr>
                      <th scope="row">Language</th>
                      <td style={{ textAlign: 'left' }}>{temp1.data[0].language}</td>
                    </tr>
                    <tr>
                      <th scope="row">Country</th>
                      <td style={{ textAlign: 'left' }}>{temp1.data[0].country}</td>
                    </tr>
                  </tbody>
                </Table>
                {temp1.data[0].description}
              </Media>
            </div>         
          </div>
          
          <div className="row align-items-start">
                  <hr/>
          <h1>Cast</h1>
              {cast}
          </div>
          <hr/>
        <h1>Reviews</h1>
          <ListGroup>
          {reviews}
        </ListGroup>
        <hr/>
        <form>
        <h1>Give a Review
        </h1>
            <input className="AddRevinput"
            type="text" rows={30}
            value={review}
            onChange={(e) => setreview(e.target.value)}
            />
        <span 
        class="input" 
        role="textbox" 
        contenteditable>
            99
        </span>
        </form>

        
          
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
  
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
        </div>
      );
    }
    else {
      return (
        <h1>Loading.......</h1>
      );
  
  
    }
  }

  export default Movie;