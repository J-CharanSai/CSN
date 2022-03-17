import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Footer from './Footer';
import Header from './Header';

/*<ul>
	{this.state.posts.map((movie, index) => (
		<div className='image-container d-flex justify-content-start m-3'>
			<img src={movie.source} alt='movie'></img>
		</div>
	))}
</ul>*/
function Actor() {
	const setCat = useState([{ "err": 0, "data": [{ "movie_id": 1, "movie_tittle": "The Godfather", "release_date": 1972, "language": "English ", "genre": "Crime", "country": "USA", "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.", "source": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" }, { "movie_id": 2, "movie_tittle": "The Dark Knight", "release_date": 2008, "language": "English", "genre": "Action", "country": "USA", "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "source": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" }, { "movie_id": 3, "movie_tittle": "The Shawshank Redemption", "release_date": 1994, "language": "English", "genre": "Drama", "country": "Ohio", "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", "source": "https://www.filmsite.org/posters/shawshankredemption.jpg" }, { "movie_id": 4, "movie_tittle": "12 Angry Men", "release_date": 1957, "language": "English", "genre": "Crime", "country": "USA", "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict", "source": "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg" }, { "movie_id": 5, "movie_tittle": "Forest Gump", "release_date": 1994, "language": "English", "genre": "Drama", "country": "Georgia", "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75", "source": "https://static.wikia.nocookie.net/total-movies/images/2/2f/Forrest_Gump_poster.png/revision/latest?cb=20131121203323" }] }]);

	/*useEffect(() => {
		const getcat = async() => {
			const res = await fetch('http://localhost/3001/actor');
			const getdata = await res.json();
			setCat(getdata);
			console.log(getdata);
		}
		getcat();
	},[]);*/
	return (
		<div>
			<h1>YES</h1>
			<div>{setCat}</div>
			<Footer />
		</div> 
		);
};

export default Actor;
