import React, {Component} from "react";
import { Media, Table,Modal, ModalBody, Label, ModalHeader,
    Form, FormGroup, Input, Button , Card, CardBody, CardImg, CardTitle, CardText,List, ListGroup,ListGroupItem, ListGroupItemHeading, ListGroupItemText} from "reactstrap";
import "./styles.css";
  
class Profiletemp extends Component{

    
    
    render(){
        var len = this.props.Info.watchlist.length;
        console.log("HI",this.props.Info);
        var watchlist = [];
        if(len > 0){
            watchlist = this.props.Info.watchlist.map(
                (movie) => {
                    return(
                        <div className="col-4">
                            <Card 
                                body
                                inverse
                                style={{
                                    backgroundColor: '#333',
                                    borderColor: '#333', height: 250, maxWidth: 160, marginTop: 20
                                }}
                            >
                                <CardImg src={movie.source} alt="Movie" style={{
                                    maxHeight: 140, maxWidth: 120
                                }} />
                                <CardBody>
                                    <CardTitle>{movie.movie_title}</CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        
                    );
                }
            );
        }
        let len1 = this.props.Info.data.length;
        var reviews = [];
        console.log(this.props.Info.data,"LOFI");
        console.log("reviews len",len1)
        if (len1 > 0) {
        reviews = this.props.Info.data.map(
            (item) => {
            return (
                <ListGroupItem style={{ background: "#7d8b91", border: "6px solid #354f57" }}>
                <ListGroupItemHeading>
                    {item.movie_title}
                </ListGroupItemHeading>
                <ListGroupItemText>
                    {item.review_text}
                </ListGroupItemText>
                </ListGroupItem>
            );
            }

        );
        }
        return(
            <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{backgroundColor: '#000', height: '200px'}}>
                      <div className="ms-4 mt-5 d-flex flex-column" style={{width: '150px'}}>
                        <img src="/assets/images/logo.png" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2" style={{width: '150px', zIndex: 1}} />
                        
                      </div>
                      <div className="ms-3" style={{marginTop: '130px'}}>
                        <h5>{this.props.User.user_id}</h5>
                      </div>
                    </div>
                    <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          <p className="mb-1 h5">{this.props.Info.reviews}</p>
                          <p className="small text-muted mb-0">Reviews</p>
                        </div>
                        <div className="px-3">
                          <p className="mb-1 h5">{len}</p>
                          <p className="small text-muted mb-0">Watchlist</p>
                        </div>
                       
                      </div>
                    </div>
                    <div className="card-body p-4 text-black">
                        <hr/>
                        <p className="lead fw-normal mb-1">Watchlist</p>
                        <div className="row "  >
                            {watchlist}
                        </div>
                          <hr/>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">Recent Reviews</p>
                      </div>
                      <div> 
                          {reviews}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
           
        );
    }


}
export default Profiletemp;