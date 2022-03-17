import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.handleMovieChange = this.handleMovieChange.bind(this);
    }

    handleMovieChange = () => {
        this.props.onSelectMovie(this.props.item.movie_id);            
    }

    render(){

        return(
            <a style={{ cursor: 'pointer' }} onClick={this.handleMovieChange}>
                <Card
                    body
                    inverse
                    style={{
                        backgroundColor: '#333',
                        borderColor: '#333', height: "410px"
                    }}
                >
                    <CardImg style={{maxHeight: 320, maxWidth: 240
                    }} src={this.props.item.source} alt={this.props.item.name} />
                    <CardBody>
                        <CardTitle>{this.props.item.movie_title}</CardTitle>
                    </CardBody>
                </Card>
            </a>
        );
    }
}

export default MovieCard;