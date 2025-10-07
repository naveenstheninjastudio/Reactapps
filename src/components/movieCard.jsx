import "./movieCard.css";
export function MovieCard(props) {
  return (
    <div className="movieCard">
      <div className="moviePoster">
        <img
          src={`https://image.tmdb.org/t/p/w400${props.poster_path}`}
          alt={props.title}
        />
      </div>
      <div className="movieDetails">
        <div className="movieTitle">{props.title}</div>
        <div className="movieReleaseDate">
          Release date {props.release_date}
        </div>
        <div className="movieVotes">Avg. Rating {props.vote_average}</div>
        <div className="movieOverview">{props.overview}</div>
      </div>
    </div>
  );
}
