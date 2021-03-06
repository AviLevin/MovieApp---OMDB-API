import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	console.log("isMovie1111", props.movies)

	return (
		<React.Fragment>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default MovieList;
